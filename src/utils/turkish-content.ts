const translations: Record<string, string> = {
	Home: "Ana sayfa",
	About: "Hakkımda",
	Posts: "Yazılar",
	"My Blog": "Kişisel Biyografi",
	"Persona Bio": "Kişisel Biyografi",
	"Semper feugiat nibh sed pulvinar etiam gravida et lectus morbi.":
		"Web, yazılım ve tasarım üzerine üretiyor; öğrendiklerimi ve deneyimlerimi burada paylaşıyorum.",
	Development: "Geliştirme",
	Design: "Tasarım",
	Notes: "Notlar",
	"Web Development": "Web Geliştirme",
	Opinion: "Görüş",
	Tools: "Araçlar",
	Creativity: "Yaratıcılık",
	"EmDash Editorial": "EmDash Editör Ekibi",
	"Guest Contributor": "Konuk Yazar",
	"Guest essay": "Konuk yazısı",
	"Code on a monitor in a dark room": "Karanlık bir odada monitörde görünen kod",
	"Laptop and coffee on a wooden table": "Ahşap masa üzerinde dizüstü bilgisayar ve kahve",
	"Notebook and pen on a desk": "Masa üzerinde defter ve kalem",
	"Wrenches and hand tools hanging on a workshop wall": "Atölye duvarında asılı anahtarlar ve el aletleri",
	"Pencils and design tools on a desk": "Masa üzerinde kalemler ve tasarım araçları",
	"Code on a screen with a dark theme": "Koyu temalı bir ekranda görünen kod",
	"Geometric pattern carved into white paper": "Beyaz kâğıda oyulmuş geometrik desen",

	"A place for writing about software, design, and the occasional stray thought. No posting schedule, no newsletter funnel. Just things I wanted to write down.":
		"Yazılım, tasarım ve akla düşen düşünceler üzerine yazdığım bir alan. Yayın takvimi ya da bülten hunisi yok; yalnızca not almak istediğim şeyler var.",
	"Built with Astro and EmDash. The source is open if you want to see how it works.":
		"Astro ve EmDash ile oluşturuldu. Nasıl çalıştığını görmek istersen kaynak kodu açık.",

	"Building for the Long Term": "Uzun Vadeli Ürünler Geliştirmek",
	"The frameworks will change. The databases will change. What survives is the clarity of your thinking.":
		"Framework'ler değişir, veritabanları değişir. Kalıcı olan, düşüncelerinizin netliğidir.",
	"Every few years the industry collectively decides that everything we've been doing is wrong and there's a better way. New frameworks, new paradigms, new build tools. The churn is relentless, and if you're not careful, you spend more time migrating than building.":
		"Sektör birkaç yılda bir, o güne kadar yaptığımız her şeyin yanlış olduğuna ve daha iyi bir yol bulunduğuna topluca karar verir. Yeni framework'ler, yeni paradigmalar, yeni derleme araçları ortaya çıkar. Bu değişim hiç durmaz; dikkat etmezseniz üretmekten çok geçiş yapmakla vakit geçirirsiniz.",
	"I've been writing software long enough to have seen several of these cycles. jQuery to Backbone to Angular to React to whatever comes next. Each transition felt urgent at the time. Looking back, the things that actually mattered were rarely about the framework.":
		"Bu döngülerin birkaçını görecek kadar uzun süredir yazılım geliştiriyorum: jQuery'den Backbone'a, Angular'dan React'e ve sırada ne varsa ona. Her geçiş o anda acil görünüyordu. Geriye baktığımda, gerçekten önemli olan şeylerin framework ile nadiren ilgili olduğunu görüyorum.",
	"What survives": "Kalıcı olan ne?",
	"Clean data models survive. Clear boundaries between systems survive. Good naming survives. The decision to keep things simple when you could have made them clever - that definitely survives.":
		"Temiz veri modelleri kalır. Sistemler arasındaki açık sınırlar kalır. İyi adlandırmalar kalır. Daha kurnaz bir çözüm kurabilecekken sade kalmayı seçmek ise kesinlikle kalıcıdır.",
	"What doesn't survive is code that was written to impress, abstractions built for problems that never materialized, and architectures designed around a framework's opinions rather than the domain's reality.":
		"Etkilemek için yazılmış kodlar, hiç ortaya çıkmayan sorunlar için kurulmuş soyutlamalar ve alanın gerçekliği yerine bir framework'ün kabullerine göre tasarlanmış mimariler kalıcı olmaz.",
	"The best code I've written is boring. It reads like prose, does one thing well, and doesn't require a PhD in category theory to understand. The worst code I've written was technically impressive at the time.":
		"Yazdığım en iyi kodlar sıkıcıdır. Düzyazı gibi okunur, tek bir işi iyi yapar ve anlaşılması için kategori teorisi doktorası gerektirmez. Yazdığım en kötü kodlar ise o gün için teknik açıdan etkileyici görünenlerdi.",

	"The Case for Static": "Statik Siteler İçin Bir Savunma",
	"Static sites aren't a step backwards. They're what you get when you take performance and simplicity seriously.":
		"Statik siteler geriye atılmış bir adım değildir. Performansı ve sadeliği ciddiye aldığınızda ulaştığınız sonuçtur.",
	"There's a certain irony in the fact that the web started static, went dynamic, and is now swinging back toward static again. But the static sites of today aren't the hand-coded HTML pages of 1998. They're generated, optimized, and deployed to edge networks that serve them in milliseconds.":
		"Web'in statik başlayıp dinamik hale gelmesinde ve şimdi yeniden statiğe yönelmesinde belirgin bir ironi var. Ancak bugünün statik siteleri, 1998'in elle yazılmış HTML sayfaları değil. Üretiliyor, optimize ediliyor ve milisaniyeler içinde yanıt veren uç ağlara dağıtılıyorlar.",
	"The pitch for server-rendered everything was compelling: dynamic content, personalization, real-time data. But most sites don't need most of that most of the time. A blog post doesn't need to be rendered on every request. A product page doesn't change every second.":
		"Her şeyi sunucuda oluşturma fikri ikna ediciydi: dinamik içerik, kişiselleştirme ve gerçek zamanlı veri. Fakat çoğu site bunların büyük bölümüne çoğu zaman ihtiyaç duymaz. Bir blog yazısının her istekte yeniden oluşturulması gerekmez. Bir ürün sayfası her saniye değişmez.",
	"The performance argument": "Performans gerekçesi",
	"A static file served from a CDN is as fast as the web gets. No cold starts, no database queries, no server-side rendering overhead. The Time to First Byte is essentially the network latency to your nearest edge node. You can't beat physics.":
		"CDN üzerinden sunulan statik bir dosya, web'in ulaşabileceği en yüksek hıza yakındır. Soğuk başlangıç, veritabanı sorgusu veya sunucu tarafı oluşturma yükü yoktur. İlk bayta ulaşma süresi, esas olarak en yakın uç noktayla aranızdaki ağ gecikmesidir. Fiziği yenemezsiniz.",
	"And when you do need dynamic behavior, you can add it surgically. An island of interactivity in a sea of static HTML. The best of both worlds, without paying the cost of either at all times.":
		"Dinamik davranış gerektiğinde onu yalnızca ihtiyaç duyulan yere ekleyebilirsiniz. Statik HTML denizinde küçük bir etkileşim adası. Böylece iki dünyanın da avantajını alır, maliyetlerini sürekli taşımamış olursunuz.",

	"Learning in Public": "Herkesin Önünde Öğrenmek",
	"Writing about what you're learning is the fastest way to find out what you don't actually understand.":
		"Öğrendikleriniz hakkında yazmak, aslında neyi anlamadığınızı fark etmenin en hızlı yoludur.",
	"I started writing about things I was learning not because I had anything original to say, but because I kept forgetting what I'd figured out. The blog posts were notes to my future self, published publicly more out of laziness than courage.":
		"Öğrendiklerim hakkında yazmaya özgün bir şey söyleyecek olmamdan değil, çözdüğüm şeyleri sürekli unutmamdan dolayı başladım. Blog yazıları, cesaretten çok tembellik yüzünden herkese açık yayımlanmış gelecekteki kendime notlardı.",
	"What I didn't expect was how much the writing itself would accelerate the learning. There's a particular kind of clarity that comes from trying to explain something to someone else. The gaps in your understanding, which you can happily ignore when the knowledge lives only in your head, become painfully obvious when you try to put it into sentences.":
		"Beklemediğim şey, yazmanın öğrenmeyi ne kadar hızlandıracağıydı. Bir konuyu başkasına anlatmaya çalışmak özel bir netlik sağlar. Bilgi yalnızca zihninizdeyken kolayca görmezden geldiğiniz boşluklar, onu cümlelere dökmeye çalıştığınızda açıkça görünür hale gelir.",
	"The fear of being wrong": "Yanlış yapma korkusu",
	"The biggest barrier isn't time or writing skill. It's the fear of publishing something that turns out to be wrong. But here's the thing: being wrong publicly is one of the most efficient ways to learn. Someone will correct you, often kindly, and you'll remember that correction forever.":
		"En büyük engel zaman ya da yazma becerisi değildir. Yanlış olduğu ortaya çıkabilecek bir şeyi yayımlama korkusudur. Oysa herkesin önünde yanılmak, öğrenmenin en verimli yollarından biridir. Biri sizi çoğu zaman nazikçe düzeltir ve o düzeltmeyi bir daha unutmazsınız.",
	"The posts that helped me most weren't written by experts. They were written by people one step ahead of me on the same path, in language that hadn't yet been polished into abstraction. There's a place for that kind of writing, and it's more valuable than most people realize.":
		"Bana en çok yardımcı olan yazıları uzmanlar yazmadı. Aynı yolda benden bir adım önde olan insanlar, henüz soyutlamalarla cilalanmamış bir dille yazdı. Bu tür yazılara ihtiyaç var ve çoğu kişinin düşündüğünden daha değerliler.",

	"Small Tools, Big Impact": "Küçük Araçlar, Büyük Etki",
	"The best developer tools do one thing well and get out of your way. A love letter to focused software.":
		"En iyi geliştirici araçları tek bir işi iyi yapar ve önünüzden çekilir. Odaklı yazılıma bir sevgi mektubu.",
	"There's a class of software that doesn't get enough appreciation. Not the frameworks or the platforms or the IDEs, but the small, sharp tools that solve one problem so well you stop thinking about them. They become invisible, which is the highest compliment you can pay a tool.":
		"Yeterince takdir edilmeyen bir yazılım türü var. Framework'ler, platformlar ya da IDE'ler değil; tek bir sorunu o kadar iyi çözen küçük ve keskin araçlar ki bir süre sonra onları düşünmeyi bırakırsınız. Görünmez hale gelirler ve bu, bir araca edilebilecek en büyük iltifattır.",
	"I'm talking about things like ripgrep, which searches code so fast it changed how I think about searching. Or jq, which makes JSON feel like a first-class data format in the terminal. Or curl, which has been quietly powering the internet's plumbing for decades.":
		"Kod içinde o kadar hızlı arama yapan ripgrep'den söz ediyorum; arama hakkındaki düşünme biçimimi değiştirdi. Terminalde JSON'u birinci sınıf bir veri biçimi gibi hissettiren jq'dan ya da onlarca yıldır internetin altyapısını sessizce çalıştıran curl'den söz ediyorum.",
	"The Unix philosophy, revisited": "Unix felsefesine yeniden bakış",
	"Do one thing well. The advice is old enough to be a cliche, but the best modern tools still follow it. They don't try to be platforms. They don't have plugin ecosystems or configuration languages or startup wizards. They do their job and they compose with other tools that do theirs.":
		"Tek bir işi iyi yap. Bu öğüt klişe olacak kadar eski, ancak en iyi modern araçlar hâlâ onu izliyor. Platform olmaya çalışmıyor, eklenti ekosistemleri, yapılandırma dilleri ya da başlangıç sihirbazları sunmuyorlar. İşlerini yapıyor ve kendi işini yapan diğer araçlarla birlikte çalışıyorlar.",
	"The temptation is always to add more. One more feature, one more option, one more integration. But every addition is a decision someone has to make, a path through the code that has to be maintained, a thing that can break. The best tools resist this. They stay small, and in staying small, they stay reliable.":
		"Daha fazlasını ekleme isteği hep vardır: bir özellik, bir seçenek, bir entegrasyon daha. Ancak her ekleme, birinin vermesi gereken yeni bir karar, bakım isteyen yeni bir kod yolu ve bozulabilecek yeni bir şey demektir. En iyi araçlar buna direnir. Küçük kalır ve böylece güvenilirliklerini korurlar.",

	"Designing with Constraints": "Kısıtlarla Tasarlamak",
	"Limitations aren't obstacles to creativity. They're the structure that makes creativity possible.":
		"Sınırlamalar yaratıcılığın önündeki engeller değil, onu mümkün kılan yapıdır.",
	"Give a designer a blank canvas and unlimited time, and they'll often produce something mediocre. Give them a tight brief, a small screen, and a deadline, and they'll surprise you. This isn't a paradox - it's how creativity actually works.":
		"Bir tasarımcıya boş bir tuval ve sınırsız zaman verdiğinizde çoğu kez sıradan bir sonuç çıkar. Net bir kapsam, küçük bir ekran ve son teslim tarihi verdiğinizde ise sizi şaşırtır. Bu bir çelişki değil; yaratıcılık böyle çalışır.",
	"Constraints force decisions. When you can't use more than two typefaces, you have to choose carefully. When the page has to load in under a second, every element earns its place. When the interface has to work on a 320px screen, you discover what's truly essential.":
		"Kısıtlar karar vermeye zorlar. İkiden fazla yazı tipi kullanamadığınızda dikkatli seçim yaparsınız. Sayfa bir saniyenin altında yüklenmek zorundaysa her öğe yerini hak eder. Arayüz 320 piksellik bir ekranda çalışmak zorundaysa neyin gerçekten gerekli olduğunu keşfedersiniz.",
	"Embracing the box": "Kutuyu kabullenmek",
	"The web itself is a constraint. HTML flows in one direction. CSS has a box model. Browsers have viewport sizes and font rendering quirks. You can fight these constraints or you can work with them, and the results are dramatically different.":
		"Web'in kendisi bir kısıttır. HTML tek yönde akar. CSS'in bir kutu modeli vardır. Tarayıcıların ekran ölçüleri ve yazı işleme farklılıkları bulunur. Bu kısıtlarla savaşabilir ya da onlarla birlikte çalışabilirsiniz; sonuçlar belirgin biçimde farklı olur.",
	"The designs I admire most don't look like they were forced through a framework. They look like they grew naturally from the medium, respecting its grain rather than working against it. That only happens when you treat constraints as creative partners rather than enemies.":
		"En çok beğendiğim tasarımlar bir framework'e zorla uydurulmuş gibi görünmez. Ortamın doğasına karşı çıkmak yerine ona saygı duyarak doğal biçimde gelişmiş görünürler. Bu, ancak kısıtları düşman değil yaratıcı ortak olarak gördüğünüzde gerçekleşir.",

	"A Weekend with a Side Project": "Bir Yan Projeyle Geçen Hafta Sonu",
	"No stakeholders, no deadlines, no Jira tickets. Just you and a dumb idea that might turn into something.":
		"Paydaş yok, son tarih yok, Jira kaydı yok. Yalnızca siz ve belki bir şeye dönüşecek basit bir fikir.",
	"Saturday morning. Coffee's made, the house is quiet, and I've got an idea that's been nagging at me all week. Not a good idea, necessarily - just a persistent one. A small tool that does a thing I keep doing manually. How hard could it be?":
		"Cumartesi sabahı. Kahve hazır, ev sessiz ve bütün hafta aklımı kurcalayan bir fikir var. İyi bir fikir olması şart değil; yalnızca peşimi bırakmıyor. Sürekli elle yaptığım bir işi üstlenecek küçük bir araç. Ne kadar zor olabilir ki?",
	"This is the best kind of programming. No requirements document, no sprint planning, no pull request reviews. Just a text editor and a problem. The freedom to make terrible architectural decisions, rewrite everything twice, and follow tangents that turn out to be dead ends.":
		"Bu, programlamanın en güzel hali. Gereksinim belgesi, sprint planı ya da pull request incelemesi yok. Yalnızca bir metin düzenleyici ve çözülmesi gereken bir sorun var. Kötü mimari kararlar alma, her şeyi iki kez yeniden yazma ve çıkmaz olduğu anlaşılan yan yollara sapma özgürlüğü.",
	"Why side projects matter": "Yan projeler neden önemli?",
	"Side projects are where you learn things your day job would never teach you. Not because the problems are harder, but because you're free to take risks. Try a language you've never used. Build something without a framework. Deploy to a platform you've only read about. The stakes are zero, which makes the learning maximum.":
		"Yan projelerde, günlük işinizin size asla öğretemeyeceği şeyler öğrenirsiniz. Sorunlar daha zor olduğu için değil, risk almakta özgür olduğunuz için. Hiç kullanmadığınız bir dili deneyin. Framework kullanmadan bir şey geliştirin. Yalnızca adını okuduğunuz bir platforma dağıtım yapın. Kaybedecek bir şey olmayınca öğrenme en üst düzeye çıkar.",
	"By Sunday evening, the thing sort of works. It's rough, the error handling is nonexistent, and the README is a single sentence. But it solves the problem I set out to solve, and I learned three things I didn't know on Friday. Not a bad weekend.":
		"Pazar akşamına geldiğinizde ortaya çıkan şey bir şekilde çalışır. Hamdır, hata yönetimi yoktur ve README tek cümleden oluşur. Yine de çözmek için yola çıktığım sorunu çözer ve cuma günü bilmediğim üç şeyi öğrenmiş olurum. Hiç fena bir hafta sonu değil.",

	"Notes on Simplicity": "Sadelik Üzerine Notlar",
	"Simplicity isn't the absence of complexity. It's the result of understanding a problem well enough to solve it cleanly.":
		"Sadelik, karmaşıklığın yokluğu değildir. Bir sorunu temiz biçimde çözecek kadar iyi anlamanın sonucudur.",
	"Every piece of software starts simple. A few files, a clear purpose, a small surface area. Then features get added, edge cases get handled, and before long you're looking at something that requires a diagram to understand. This isn't inevitable, but it takes discipline to prevent.":
		"Her yazılım sade başlar: birkaç dosya, açık bir amaç ve küçük bir yüzey alanı. Sonra özellikler eklenir, uç durumlar ele alınır ve çok geçmeden anlamak için şema gerektiren bir yapıya bakarsınız. Bu kaçınılmaz değildir, fakat önlemek disiplin ister.",
	"The hard part of simplicity isn't the initial design. It's the ongoing resistance to complication. Every feature request, every bug fix, every refactor is an opportunity to add complexity. Saying no is the most important design skill, and the least celebrated.":
		"Sadeliğin zor kısmı ilk tasarım değildir; karmaşıklaştırmaya sürekli direnebilmektir. Her özellik isteği, hata düzeltmesi ve yeniden düzenleme yeni karmaşıklık eklemek için bir fırsattır. Hayır diyebilmek en önemli ve en az takdir edilen tasarım becerisidir.",
	"Removing as a feature": "Bir özellik olarak çıkarmak",
	"The best version of a product often has fewer features than the previous one. Not because features were missing, but because someone had the courage to remove things that weren't earning their keep. Every feature has a cost - in maintenance, in cognitive load, in the weight of the interface.":
		"Bir ürünün en iyi sürümü çoğu zaman bir öncekinden daha az özelliğe sahiptir. Özellikler eksik olduğu için değil, biri değer üretmeyen şeyleri kaldırma cesareti gösterdiği için. Her özelliğin bakımda, zihinsel yükte ve arayüzün ağırlığında bir maliyeti vardır.",
	"Simplicity is a practice, not a destination. You never arrive at simple. You just keep asking: is this necessary? Could this be clearer? Is there a way to solve this problem by removing something instead of adding something? The answer is yes more often than you'd expect.":
		"Sadelik bir varış noktası değil, bir pratiktir. Sade olana hiçbir zaman tamamen ulaşmazsınız. Yalnızca sormayı sürdürürsünüz: Bu gerekli mi? Daha açık olabilir mi? Bu sorunu yeni bir şey eklemek yerine bir şeyi kaldırarak çözebilir miyim? Yanıt, beklediğinizden daha sık evettir.",
};

function translateValue(value: unknown): unknown {
	if (typeof value === "string") return translations[value] ?? value;
	if (Array.isArray(value)) return value.map(translateValue);
	if (value instanceof Date || !value || typeof value !== "object") return value;
	return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, translateValue(item)]));
}

export function localizeTurkish<T>(value: T): T {
	return translateValue(value) as T;
}
