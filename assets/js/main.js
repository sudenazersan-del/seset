// Seset — dil değiştirme, mobil menü ve video alanı

const translations = {
  tr: {
    "meta.title": "Seset | Geleneksel Lezzet",
    "top.location": "Konum",
    "nav.home": "Ana Sayfa",
    "nav.story": "Hikâyemiz",
    "nav.mission": "Misyon & Vizyon",
    "nav.values": "Değerlerimiz",
    "nav.contact": "İletişim",
    "nav.products": "Ürünlerimiz",
    "products.eyebrow": "Ürünlerimiz",
    "products.title": "Ustalıkla hazırlanan lezzetler",
    "products.text": "Dededen öğrendiğimiz tariflerle, her biri aynı özenle hazırlanan ürünlerimiz.",
    "products.pastirma.name": "Pastırma",
    "products.pastirma.text": "Geleneksel yöntemle sabırla kurutulmuş, çemeniyle bütünleşen klasik lezzet.",
    "products.sucuk.name": "Sucuk",
    "products.sucuk.text": "Dengeli baharatıyla kahvaltıların ve ızgaraların vazgeçilmezi.",
    "products.sosis.name": "Sosis",
    "products.sosis.text": "Izgarada, tavada ya da sandviçte; her sofraya uyan pratik lezzet.",
    "products.kofte.name": "Köfte",
    "products.kofte.text": "Ustalıkla harmanlanmış, ızgaranın ve sofranın yıldızı.",
    "products.salam.name": "Salam",
    "products.salam.text": "İnce dilimleriyle sandviçlere ve kahvaltı tabaklarına lezzet katar.",
    "products.cta.text": "Ürünlerimiz ve sipariş hakkında bilgi almak için bize yazın.",
    "products.cta.button": "Bilgi Alın",
    "products.note": "Görseller temsilidir.",

    "hero.eyebrow": "1930'lardan bugüne",
    "hero.title": "Dededen Gelen Ustalık,<br>Bugünün Sofrasında",
    "hero.text": "Seset; kuşaklar boyu süren kasaplık geleneğini, güvenilir ve kaliteli et ürünleriyle geleceğe taşıyor.",
    "hero.cta": "Hikâyemizi Keşfedin",
    "hero.cta2": "Ürünlerimiz",
    "video.soon": "Tanıtım filmimiz çok yakında",

    "story.eyebrow": "Marka Hikâyemiz",
    "story.title": "Bir tezgâhta başlayan<br>güven hikâyesi",
    "story.p1": "Hikâyemiz 1930'lu yıllarda, dedemizin kasap tezgâhında başladı. O yıllarda et, mahallede güvenle verilen bir sözdü. Doğru kesim, sabırla dinlendirilmiş et ve dürüst bir terazi. Dedemizden öğrendiğimiz ilk şey, bu işin ancak güvenle yapıldığında değer taşıdığıydı.",
    "story.p2": "Bu zanaat elden ele, kuşaktan kuşağa geçti. Her nesil aynı özeni bir sonrakine emanet etti. Şubat 2024'te bu mirası bugünün üretim imkânlarıyla buluşturmak için Seset'i kurduk.",
    "story.p3": "Kısa, akılda kalan ve söylendiği gibi yazılan bir isim seçtik. Çünkü yaptığımız işin de öyle olmasını istedik: açık, sade ve dürüst. Amacımız hiç değişmedi: gelecek nesillere doğru, güvenilir ve kaliteli ürünler bırakmak, mesleğimizi bir sonraki kuşağa yaşatmak.",
    "story.quote": "“Dedemizin tezgâhındaki özen, bugün markamızın adıdır.”",

    "tl.1.year": "1930'lar",
    "tl.1.title": "İlk tezgâh",
    "tl.1.text": "Dedemiz kasaplık mesleğine başlar; ustalığın ve güvenin temeli atılır.",
    "tl.2.year": "Kuşaklar boyu",
    "tl.2.title": "Elden ele zanaat",
    "tl.2.text": "Meslek ailede bir sonraki kuşağa aktarılır; her nesil aynı özeni sürdürür.",
    "tl.3.year": "Şubat 2024",
    "tl.3.title": "Seset doğuyor",
    "tl.3.text": "Aile mirası, modern üretim anlayışıyla Seset markası altında buluşur.",

    "mv.eyebrow": "Misyon & Vizyon",
    "mv.title": "Neden varız, nereye gidiyoruz?",
    "mv.mission.title": "Misyonumuz",
    "mv.mission.text": "Dededen gelen ustalığı modern üretim anlayışı ve hijyen standartlarıyla birleştirerek; doğru kesilmiş, özenle işlenmiş ve gönül rahatlığıyla sofraya konabilecek et ürünleri üretmek. Her üründe müşterimize, tedarikçimize ve mesleğimize karşı dürüst olmak.",
    "mv.vision.title": "Vizyonumuz",
    "mv.vision.text": "Geleneksel lezzeti koruyarak Türkiye'nin en güvenilir et markalarından biri olmak; adı kaliteyle anılan, bu kadim mesleği gelecek nesillere taşıyan bir aile markası olarak sınırlarımızın ötesine ulaşmak.",

    "values.eyebrow": "Değerlerimiz",
    "values.title": "Her üründe aynı üç söz",
    "values.1.title": "Güven",
    "values.1.text": "Sofranıza gelen her ürünün arkasında, kuşaklardır korunan bir isim ve verilmiş bir söz var.",
    "values.2.title": "Ustalık",
    "values.2.text": "Doğru kesim, doğru dinlendirme, doğru işçilik. Dededen öğrendiğimiz bilgiyi her gün yeniden uyguluyoruz.",
    "values.3.title": "Kalite",
    "values.3.text": "Seçilmiş hammadde, titiz üretim ve hijyen. Gelenekten taviz vermeden bugünün standartlarında.",

    "contact.eyebrow": "İletişim",
    "contact.title": "Bize ulaşın",
    "contact.text": "Sipariş, bayilik ve tüm sorularınız için bize telefonla ya da WhatsApp üzerinden ulaşabilirsiniz.",
    "contact.address": "Adres",
    "contact.phone": "Telefon / WhatsApp",
    "contact.email": "E-posta",
    "contact.email.soon": "Yakında eklenecek",
    "contact.whatsapp": "WhatsApp'tan Yazın",
    "contact.directions": "Yol Tarifi Al",

    "footer.tagline": "Geleneksel Lezzet",
    "footer.rights": "Tüm hakları saklıdır.",
    "wa.message": "Merhaba, Seset ürünleri hakkında bilgi almak istiyorum."
  },

  en: {
    "meta.title": "Seset | Traditional Taste",
    "top.location": "Location",
    "nav.home": "Home",
    "nav.story": "Our Story",
    "nav.mission": "Mission & Vision",
    "nav.values": "Our Values",
    "nav.contact": "Contact",
    "nav.products": "Products",
    "products.eyebrow": "Our Products",
    "products.title": "Crafted with mastery",
    "products.text": "Made with recipes passed down from our grandfather, each one prepared with the same care.",
    "products.pastirma.name": "Pastırma",
    "products.pastirma.text": "Traditionally cured and patiently air-dried, coated in çemen spice paste.",
    "products.sucuk.name": "Sucuk",
    "products.sucuk.text": "Turkish spiced sausage, an essential of breakfasts and barbecues.",
    "products.sosis.name": "Sausage",
    "products.sosis.text": "On the grill, in the pan or in a sandwich: a practical taste for every table.",
    "products.kofte.name": "Köfte",
    "products.kofte.text": "Turkish meatballs, expertly blended, the star of the grill and the table.",
    "products.salam.name": "Salami",
    "products.salam.text": "Thinly sliced, adding flavour to sandwiches and breakfast plates.",
    "products.cta.text": "Write to us for information about our products and orders.",
    "products.cta.button": "Get Info",
    "products.note": "Images are for illustration purposes.",

    "hero.eyebrow": "Since the 1930s",
    "hero.title": "A Grandfather's Craft,<br>On Today's Table",
    "hero.text": "Seset carries a butchery tradition passed down through generations into the future with trusted, high-quality meat products.",
    "hero.cta": "Discover Our Story",
    "hero.cta2": "Our Products",
    "video.soon": "Our brand film is coming soon",

    "story.eyebrow": "Our Brand Story",
    "story.title": "A story of trust<br>that began at a counter",
    "story.p1": "Our story began in the 1930s, at our grandfather's butcher counter. Back then, meat was a promise kept within the neighbourhood: the right cut, patiently aged meat and an honest scale. The first thing our grandfather taught us was that this work only has value when it is done with trust.",
    "story.p2": "The craft was handed down from one generation to the next, each entrusting the same care to the one after. In February 2024, we founded Seset to bring this heritage together with today's production capabilities.",
    "story.p3": "We chose a short, memorable name that is written just as it is spoken, because we wanted our work to be the same: clear, simple and honest. Our goal has never changed: to leave future generations products that are right, reliable and of high quality, and to keep our craft alive for the next generation.",
    "story.quote": "“The care at our grandfather's counter is our brand's name today.”",

    "tl.1.year": "1930s",
    "tl.1.title": "The first counter",
    "tl.1.text": "Our grandfather becomes a butcher, laying the foundation of craftsmanship and trust.",
    "tl.2.year": "Generations",
    "tl.2.title": "A craft handed down",
    "tl.2.text": "The trade passes to the next generation of the family, and each keeps the same care.",
    "tl.3.year": "February 2024",
    "tl.3.title": "Seset is born",
    "tl.3.text": "The family heritage meets modern production under the Seset brand.",

    "mv.eyebrow": "Mission & Vision",
    "mv.title": "Why we exist, where we are going",
    "mv.mission.title": "Our Mission",
    "mv.mission.text": "To combine the craftsmanship inherited from our grandfather with modern production and hygiene standards, producing meat that is properly cut, carefully processed and can be served with peace of mind. To be honest with our customers, our suppliers and our craft in every product.",
    "mv.vision.title": "Our Vision",
    "mv.vision.text": "To become one of Türkiye's most trusted meat brands while preserving traditional taste, and to reach beyond our borders as a family brand known for quality that carries this age-old craft to future generations.",

    "values.eyebrow": "Our Values",
    "values.title": "The same three promises in every product",
    "values.1.title": "Trust",
    "values.1.text": "Behind every product on your table is a name protected for generations, and a promise kept.",
    "values.2.title": "Craftsmanship",
    "values.2.text": "The right cut, the right ageing, the right workmanship. We apply what our grandfather taught us every single day.",
    "values.3.title": "Quality",
    "values.3.text": "Selected raw materials, meticulous production and hygiene, meeting today's standards without compromising tradition.",

    "contact.eyebrow": "Contact",
    "contact.title": "Get in touch",
    "contact.text": "For orders, dealership and any questions, reach us by phone or WhatsApp.",
    "contact.address": "Address",
    "contact.phone": "Phone / WhatsApp",
    "contact.email": "E-mail",
    "contact.email.soon": "Coming soon",
    "contact.whatsapp": "Message on WhatsApp",
    "contact.directions": "Get Directions",

    "footer.tagline": "Traditional Taste",
    "footer.rights": "All rights reserved.",
    "wa.message": "Hello, I would like to get information about Seset products."
  }
};

const WA_NUMBER = "905333951854";
const LANG_KEY = "seset-lang";

function setLanguage(lang) {
  const dict = translations[lang] || translations.tr;
  document.documentElement.lang = lang;
  document.title = dict["meta.title"];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = dict[el.dataset.i18n];
    if (value !== undefined) el.innerHTML = value;
  });

  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(dict["wa.message"])}`;
  document.querySelectorAll("[data-wa]").forEach((el) => (el.href = waLink));

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active);
  });

  try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
}

function initialLanguage() {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved && translations[saved]) return saved;
  } catch (e) {}
  return "tr";
}

document.querySelectorAll(".lang-switch button").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

// Mobil menü
const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click", () => {
  const open = header.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", open);
});
document.querySelectorAll(".mobile-nav a").forEach((a) =>
  a.addEventListener("click", () => {
    header.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", false);
  })
);

// Kaydırınca başlığı küçült
const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Video: assets/video/seset-tanitim.mp4 eklenince otomatik görünür
const video = document.querySelector(".hero-video video");
if (video) {
  video.addEventListener("loadeddata", () => video.closest(".hero-video").classList.add("has-video"));
}

// Bölümler görünür olunca hafif animasyon
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("in-view"), io.unobserve(e.target))),
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();
setLanguage(initialLanguage());
