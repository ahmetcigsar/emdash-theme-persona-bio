import type { PortableTextBlock } from "emdash";

type TextBlock = PortableTextBlock & {
	style?: string;
	listItem?: string;
	children: Array<{ _type: string; text?: string }>;
};

type ContentNode = TextBlock & {
	columns?: Array<{ content?: PortableTextBlock[] }>;
	html?: string;
};

const htmlEntities: Record<string, string> = {
	amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: '"',
	ldquo: "“", rdquo: "”", lsquo: "‘", rsquo: "’", hellip: "…",
};

function normalize(text: string): string {
	return text.replace(/\s+/g, " ").trim();
}

function htmlParagraph(html: string): string {
	for (const match of html.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)) {
		const text = normalize(match[1]
			.replace(/<script\b[^>]*>[\s\S]*?<\/script>|<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
			.replace(/<[^>]*>/g, " ")
			.replace(/&(#(?:x[\da-f]+|\d+)|[a-z]+);/gi, (entity, code: string) => {
				if (code.startsWith("#")) {
					const number = code[1]?.toLowerCase() === "x"
						? Number.parseInt(code.slice(2), 16)
						: Number.parseInt(code.slice(1), 10);
					return number > 0 && number <= 0x10ffff ? String.fromCodePoint(number) : entity;
				}
				return htmlEntities[code.toLowerCase()] ?? entity;
			}));
		if (text) return text;
	}
	return "";
}

function firstParagraph(blocks: PortableTextBlock[] | undefined): string {
	if (!Array.isArray(blocks)) return "";

	for (const block of blocks) {
		const node = block as ContentNode;
		if (node._type === "block" && Array.isArray(node.children)) {
			if ((node.style && node.style !== "normal") || node.listItem) continue;
			const text = normalize(node.children
				.filter((child) => child._type === "span" && typeof child.text === "string")
				.map((child) => child.text)
				.join(""));
			if (text) return text;
		}
		if (node._type === "htmlBlock" && typeof node.html === "string") {
			const text = htmlParagraph(node.html);
			if (text) return text;
		}
		if (node._type === "columns" && Array.isArray(node.columns)) {
			for (const column of node.columns) {
				const text = firstParagraph(column.content);
				if (text) return text;
			}
		}
	}
	return "";
}

/** A plain-text preview of the first prose paragraph, limited to 160 characters. */
export function firstParagraphPreview(
	blocks: PortableTextBlock[] | undefined,
	maxCharacters = 160,
): string {
	if (maxCharacters < 1) return "";
	const paragraph = firstParagraph(blocks);
	const characters = Array.from(paragraph);
	if (characters.length <= maxCharacters) return paragraph;
	return `${characters.slice(0, maxCharacters - 1).join("").trimEnd()}…`;
}
