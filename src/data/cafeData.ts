import lavenderMatchaImage from '../assets/images/lavender-matcha.jpg';
import mangoMatchaImage from '../assets/images/mango-matcha.jpg';
import roseMatchaImage from '../assets/images/rose-matcha.jpg';
import caramelMatchaImage from '../assets/images/caramel-matcha.jpg';
import blueberryMatchaImage from '../assets/images/blueberry-matcha.jpg';
import icedShakeImage from '../assets/images/iced-shake.jpg';
import tiramisuImage from '../assets/images/tiramisu.jpg';
import chemexImage from '../assets/images/chemex-pour.jpg';

export interface ProductOptionSize {
  name: string;
  nameAr: string;
  price: number;
}

export interface Product {
  id: string;
  nameAr: string;
  nameEn: string;
  category: 'matcha' | 'hot_coffee' | 'cold_drinks' | 'filtered_coffee' | 'hot_drinks' | 'bakery';
  price: number; // Base or default price in IQD (د.ع)
  sizes?: ProductOptionSize[];
  image: string;
  descriptionAr?: string;
  descriptionEn?: string;
  isPopular?: boolean;
  badge?: string;
}

export interface Category {
  id: string;
  nameAr: string;
  nameEn: string;
  iconName?: string;
}

export interface BusinessInfo {
  nameAr: string;
  nameEn: string;
  categoryAr: string;
  sloganAr: string;
  sloganEn: string;
  phone: string;
  whatsappNumber: string; // for wa.me links
  addressAr: string;
  addressEn: string;
  mapsUrl: string;
  workingHoursAr: string;
  workingHoursEn: string;
  instagramUrl: string;
  orderingMethod: string;
  externalDeliveryApps: {
    name: string;
    nameAr: string;
    url: string;
    icon: string;
    color: string;
  }[];
  developerCredit: {
    textAr: string;
    companyName: string;
    url?: string;
  };
}

export const businessInfo: BusinessInfo = {
  nameAr: "هوب كافيه",
  nameEn: "Hope Cafe & Bakery",
  categoryAr: "كافيه ومخبوزات مختصة",
  sloganAr: "خذ سعادتك من هوب كافيه",
  sloganEn: "A New Hope, With Every Cup",
  phone: "07770009120",
  whatsappNumber: "9647770009120",
  addressAr: "البصرة - الطويسة - مجاور الكحلة",
  addressEn: "Basra, Al-Toosa, Near Al-Kahlah",
  mapsUrl: "https://maps.app.goo.gl/4uZ2voNPjKeCx6F47?g_st=ic",
  workingHoursAr: "نستقبلكم يوميًا من 8:00 صباحاً إلى 1:00 بعد منتصف الليل",
  workingHoursEn: "Daily: 8:00 AM – 1:00 AM",
  instagramUrl: "https://www.instagram.com/hope_cafe.iq?stkn=NWgzeXFiNGE0NzRj",
  orderingMethod: "واتساب كفاتورة",
  externalDeliveryApps: [
    {
      name: "Talabaty",
      nameAr: "طلباتي",
      url: "https://apps.apple.com/app/id1125131115",
      icon: "shopping-bag",
      color: "#FF5E00"
    },
    {
      name: "Toters",
      nameAr: "توترز",
      url: "https://link.totersapp.com/NULk",
      icon: "truck",
      color: "#00BA77"
    }
  ],
  developerCredit: {
    textAr: "تم تطوير الموقع من قبل شركة كوديار تك",
    companyName: "CODIAR TECH",
    url: "https://www.instagram.com/codiar_tech"
  }
};

export const categories: Category[] = [
  { id: "all", nameAr: "الكل", nameEn: "All Menu" },
  { id: "matcha", nameAr: "ماتشا", nameEn: "Matcha" },
  { id: "hot_coffee", nameAr: "القهوة الساخنة", nameEn: "Hot Coffee" },
  { id: "cold_drinks", nameAr: "مشروبات باردة", nameEn: "Cold Drinks" },
  { id: "filtered_coffee", nameAr: "القهوة المفلترة", nameEn: "Filtered Coffee" },
  { id: "hot_drinks", nameAr: "مشروبات ساخنة", nameEn: "Hot Drinks" },
  { id: "bakery", nameAr: "الحلويات والمخبوزات", nameEn: "Bakery & Dessert" }
];

export const products: Product[] = [
  // --- MATCHA (ماتشا) ---
  {
    id: "matcha-lavender",
    nameAr: "ماتشا لافندر",
    nameEn: "Lavender Matcha",
    category: "matcha",
    price: 7500,
    sizes: [
      { name: "M", nameAr: "وسط", price: 7500 },
      { name: "L", nameAr: "كبير", price: 8500 }
    ],
    image: lavenderMatchaImage,
    descriptionAr: "ماتشا يابانية فاخرة مع حليب طازج وسيرب اللافندر الطبيعي الهادئ.",
    descriptionEn: "Premium Japanese matcha with fresh milk and delicate floral lavender essence.",
    isPopular: true,
    badge: "الأكثر طلباً"
  },
  {
    id: "matcha-mango",
    nameAr: "ماتشا منكا",
    nameEn: "Mango Matcha",
    category: "matcha",
    price: 7000,
    image: mangoMatchaImage,
    descriptionAr: "مزيج منعش من بيوريه المانجو الطبيعي مع رغوة الماتشا الخضراء المخملية.",
    descriptionEn: "Refreshing natural mango puree topped with velvety Japanese green matcha foam.",
    isPopular: true
  },
  {
    id: "matcha-rose",
    nameAr: "ماتشا ورد",
    nameEn: "Rose Matcha",
    category: "matcha",
    price: 7500,
    image: roseMatchaImage,
    descriptionAr: "نكهة الورد الطبيعي العطرية ممزوجة ببراعة مع طبقات الماتشا الكريمية والثلج.",
    descriptionEn: "Subtle aromatic rose nectar harmoniously blended with creamy matcha layers.",
    isPopular: true
  },
  {
    id: "matcha-caramel-coconut",
    nameAr: "ماتشا كرميل وجوز الهند",
    nameEn: "Caramel & Coconut Matcha",
    category: "matcha",
    price: 7000,
    image: caramelMatchaImage,
    descriptionAr: "حليب جوز الهند الغني مع لمسات الكراميل الفاخر والماتشا المركزة.",
    descriptionEn: "Creamy coconut milk layered with handcrafted caramel and ceremonial grade matcha."
  },
  {
    id: "matcha-blueberry",
    nameAr: "ماتشا بلو بيري",
    nameEn: "Blueberry Matcha",
    category: "matcha",
    price: 7500,
    image: blueberryMatchaImage,
    descriptionAr: "صوص التوت الأزرق الطبيعي مع الحليب البارد وطبقة الماتشا الخضراء الفاتنة.",
    descriptionEn: "Real blueberry reduction paired with cold milk and vibrant ceremonial matcha.",
    isPopular: true
  },

  // --- BAKERY & SIGNATURE SPECIALS ---
  {
    id: "hope-iced-shake",
    nameAr: "هوب آيسد شيك",
    nameEn: "Hope Iced Shake",
    category: "bakery",
    price: 7500,
    image: icedShakeImage,
    descriptionAr: "المشروب المميز: كراميل، حليب مكثف، دبل اسبريسو، وكريمة مخفوقة غنية.",
    descriptionEn: "Signature blend: Caramel, condensed milk, double espresso, and rich whipped cream.",
    isPopular: true,
    badge: "توقيع هوب"
  },
  {
    id: "hope-tiramisu",
    nameAr: "تيراميسو هوب كافيه",
    nameEn: "Hope Tiramisu",
    category: "bakery",
    price: 6500,
    image: tiramisuImage,
    descriptionAr: "قطعة تيراميسو إيطالية محضرة يومياً مع بسكويت مغموس بالاسبريسو وكريمة الماسكاربوني الفاخرة.",
    descriptionEn: "Authentic Italian tiramisu crafted daily with espresso-soaked savoiardi and rich mascarpone.",
    isPopular: true
  },

  // --- FILTERED COFFEE (القهوة المفلترة) ---
  {
    id: "chemex-iced",
    nameAr: "كيمكس بارد",
    nameEn: "Iced Chemex",
    category: "filtered_coffee",
    price: 7500,
    image: chemexImage,
    descriptionAr: "قهوة مقطرة نقية متوازنة تحضر بحبوب مختصة وتسحب على الثلج لانتعاش فائق.",
    descriptionEn: "Clean, aromatic specialty filter coffee brewed over ice for maximum clarity.",
    isPopular: true
  },
  {
    id: "chemex-hot",
    nameAr: "كيمكس ساخن",
    nameEn: "Hot Chemex",
    category: "filtered_coffee",
    price: 7000,
    image: chemexImage,
    descriptionAr: "استخلاص كلاسيكي يبرز الإيحاءات العطرية والنقاء العالي للقهوة المختصة.",
    descriptionEn: "Classic manual pour-over delivering bright floral and citrus notes."
  },
  {
    id: "v60-hot",
    nameAr: "V60 ساخن",
    nameEn: "Hot V60",
    category: "filtered_coffee",
    price: 6500,
    image: chemexImage,
    descriptionAr: "تقطير V60 يدوي دقيق يبرز حلاوة وحموضة الحبوب المختصة المتوازنة.",
    descriptionEn: "Precision V60 pour-over emphasizing balanced sweetness and acidity."
  },
  {
    id: "v60-iced",
    nameAr: "V60 بارد",
    nameEn: "Iced V60",
    category: "filtered_coffee",
    price: 7000,
    image: chemexImage,
    descriptionAr: "V60 بارد ومثلج بنكهة منعشة وقوام نقي.",
    descriptionEn: "Iced V60 manual brew, refreshing and crisp on ice."
  },
  {
    id: "pulsar-hot",
    nameAr: "بوليسار ساخن",
    nameEn: "Hot Pulsar",
    category: "filtered_coffee",
    price: 8000,
    image: chemexImage,
    descriptionAr: "تحضير بجهاز NextLevel Pulsar لتدفق متجانس واستخلاص غني لا مثيل له.",
    descriptionEn: "Pulsar brewer extraction offering unmatched uniformity and deep body."
  },
  {
    id: "pulsar-iced",
    nameAr: "بوليسار بارد",
    nameEn: "Iced Pulsar",
    category: "filtered_coffee",
    price: 8500,
    image: chemexImage,
    descriptionAr: "استخلاص بوليسار مثلج مكثف وموزون.",
    descriptionEn: "Iced Pulsar specialty extraction served cold."
  },
  {
    id: "cold-brew",
    nameAr: "كولد برو",
    nameEn: "Cold Brew",
    category: "filtered_coffee",
    price: 7500,
    image: chemexImage,
    descriptionAr: "قهوة مختصة منقوعة بالماء البارد لمدة تزيد عن 18 ساعة لقوام حريري ونعومة استثنائية.",
    descriptionEn: "Steeped cold for 18+ hours for a low-acid, velvety smooth flavor profile."
  },

  // --- HOT COFFEE (القهوة الساخنة) ---
  {
    id: "espresso-single",
    nameAr: "اسبريسو سنكل",
    nameEn: "Espresso Single",
    category: "hot_coffee",
    price: 4000,
    image: chemexImage,
    descriptionAr: "جرعة اسبريسو مركزة ومستخلصة بعناية من أجود حبوب القهوة المختصة.",
    descriptionEn: "Single shot of intense, rich specialty espresso with a golden crema."
  },
  {
    id: "espresso-double",
    nameAr: "اسبريسو دبل",
    nameEn: "Espresso Double",
    category: "hot_coffee",
    price: 5000,
    image: chemexImage,
    descriptionAr: "دبل شوت اسبريسو غني بقوام قوي وإيحاءات مميزة.",
    descriptionEn: "Double shot of rich espresso for extra boldness and energy."
  },
  {
    id: "espresso-macchiato",
    nameAr: "اسبريسو مكيانو",
    nameEn: "Espresso Macchiato",
    category: "hot_coffee",
    price: 5500,
    image: chemexImage,
    descriptionAr: "اسبريسو مركز يعلوه لمسة خفيفة من رغوة الحليب المبخر.",
    descriptionEn: "Espresso topped with a delicate dollop of steamed milk foam."
  },
  {
    id: "turkish-coffee",
    nameAr: "قهوة تركية",
    nameEn: "Turkish Coffee",
    category: "hot_coffee",
    price: 4000,
    image: chemexImage,
    descriptionAr: "قهوة تركية أصيلة مطحونة ناعماً ومجهزة على الطريقة التقليدية برغوة غنية.",
    descriptionEn: "Traditional finely ground Turkish coffee brewed with a thick authentic foam."
  },
  {
    id: "cortado",
    nameAr: "كورتادو",
    nameEn: "Cortado",
    category: "hot_coffee",
    price: 5000,
    image: chemexImage,
    descriptionAr: "توازن بنسبة متساوية 1:1 بين الاسبريسو المركز والحليب المبخر بقوام ناعم.",
    descriptionEn: "Equal parts bold espresso and smooth steamed milk in a Spanish classic."
  },
  {
    id: "flat-white",
    nameAr: "فلات وايت",
    nameEn: "Flat White",
    category: "hot_coffee",
    price: 5000,
    image: chemexImage,
    descriptionAr: "دبل ريستريتو مع حليب مبخر برغوة ميكروفوم حريرية ودقيقة.",
    descriptionEn: "Double ristretto poured over velvety microfoam steamed milk."
  },
  {
    id: "affogato",
    nameAr: "افوكاتو",
    nameEn: "Affogato",
    category: "hot_coffee",
    price: 6000,
    image: chemexImage,
    descriptionAr: "كرة آيس كريم فانيلا فاخرة يسكب عليها شوت اسبريسو ساخن وطازج.",
    descriptionEn: "A scoop of artisanal vanilla gelato drowned in a shot of hot fresh espresso."
  },
  {
    id: "cappuccino",
    nameAr: "كابتشينو",
    nameEn: "Cappuccino",
    category: "hot_coffee",
    price: 6000,
    image: chemexImage,
    descriptionAr: "اسبريسو متوازن مع طبقة وافرة من رغوة الحليب المبخر المخملية.",
    descriptionEn: "Balanced espresso cushioned by a thick layer of creamy milk froth."
  },
  {
    id: "latte",
    nameAr: "لاتيه",
    nameEn: "Latte",
    category: "hot_coffee",
    price: 6000,
    image: chemexImage,
    descriptionAr: "اسبريسو ناعم ممزوج مع حليب مبخر حريري يعلوه رسمة لاتيه آرت أنيقة.",
    descriptionEn: "Silky steamed milk poured over rich espresso with classic latte art."
  },
  {
    id: "americano",
    nameAr: "امريكانو",
    nameEn: "Americano",
    category: "hot_coffee",
    price: 5000,
    sizes: [
      { name: "M", nameAr: "وسط", price: 5000 },
      { name: "L", nameAr: "كبير", price: 6000 }
    ],
    image: chemexImage,
    descriptionAr: "شوت اسبريسو مخفف بالماء الساخن بنكهة عميقة وقوام صافٍ.",
    descriptionEn: "Rich espresso lengthened with hot filtered water."
  },
  {
    id: "spanish-latte",
    nameAr: "سبانش لاتيه",
    nameEn: "Spanish Latte",
    category: "hot_coffee",
    price: 5500,
    sizes: [
      { name: "M", nameAr: "وسط", price: 5500 },
      { name: "L", nameAr: "كبير", price: 6500 }
    ],
    image: chemexImage,
    descriptionAr: "لاتيه كلاسيكي محلى بالحليب المكثف بنكهة سكرية غنية ومحبوبة.",
    descriptionEn: "Espresso paired with sweetened condensed milk and steamed textured milk."
  },
  {
    id: "caramel-latte",
    nameAr: "كاراميل لاتيه",
    nameEn: "Caramel Latte",
    category: "hot_coffee",
    price: 5500,
    sizes: [
      { name: "M", nameAr: "وسط", price: 5500 },
      { name: "L", nameAr: "كبير", price: 6500 }
    ],
    image: chemexImage,
    descriptionAr: "اسبريسو مع حليب مبخر وصوص الكراميل الذهبي اللذيذ.",
    descriptionEn: "Smooth espresso blended with velvety milk and warm caramel sauce."
  },
  {
    id: "rose-latte",
    nameAr: "روز لاتيه",
    nameEn: "Rose Latte",
    category: "hot_coffee",
    price: 5500,
    sizes: [
      { name: "M", nameAr: "وسط", price: 5500 },
      { name: "L", nameAr: "كبير", price: 6500 }
    ],
    image: roseMatchaImage,
    descriptionAr: "لاتيه بنكهة ماء الورد الطبيعي العطرة ولمسة دافئة.",
    descriptionEn: "Delicate floral rose extract infused into warm textured latte milk."
  },
  {
    id: "pistachio-latte",
    nameAr: "لاتيه بستاشيو",
    nameEn: "Pistachio Latte",
    category: "hot_coffee",
    price: 6000,
    sizes: [
      { name: "M", nameAr: "وسط", price: 6000 },
      { name: "L", nameAr: "كبير", price: 7000 }
    ],
    image: chemexImage,
    descriptionAr: "كريمة الفستق الحلبي الطبيعي مع الاسبريسو والحليب المبخر.",
    descriptionEn: "Real Mediterranean pistachio paste blended with espresso and milk."
  },
  {
    id: "lavender-latte",
    nameAr: "لاتيه لافندر",
    nameEn: "Lavender Latte",
    category: "hot_coffee",
    price: 5500,
    sizes: [
      { name: "M", nameAr: "وسط", price: 5500 },
      { name: "L", nameAr: "كبير", price: 6500 }
    ],
    image: lavenderMatchaImage,
    descriptionAr: "نكهة اللافندر الفرنسية الهادئة مع حليب دافئ واسبريسو مختص.",
    descriptionEn: "Calming botanical lavender syrup fused with specialty espresso."
  },
  {
    id: "saffron-latte",
    nameAr: "لاتيه زعفران",
    nameEn: "Saffron Latte",
    category: "hot_coffee",
    price: 6000,
    sizes: [
      { name: "M", nameAr: "وسط", price: 6000 },
      { name: "L", nameAr: "كبير", price: 7000 }
    ],
    image: chemexImage,
    descriptionAr: "خيوط الزعفران الأصيلة الممزوجة برفق مع الحليب والقهوة المختصة.",
    descriptionEn: "Pure saffron threads infused in velvety milk with a double shot."
  },
  {
    id: "salted-caramel-latte",
    nameAr: "لاتيه كرميل مملح",
    nameEn: "Salted Caramel Latte",
    category: "hot_coffee",
    price: 5500,
    sizes: [
      { name: "M", nameAr: "وسط", price: 5500 },
      { name: "L", nameAr: "كبير", price: 6500 }
    ],
    image: chemexImage,
    descriptionAr: "مزيج حلاوة الكراميل مع ذرات الملح البحري والاسبريسو المتوازن.",
    descriptionEn: "Decadent caramel balanced with sea salt flakes and rich espresso."
  },

  // --- COLD DRINKS & JUICES (مشروبات باردة وعصائر) ---
  {
    id: "pina-colada",
    nameAr: "بينا كولادا",
    nameEn: "Pina Colada",
    category: "cold_drinks",
    price: 6000,
    sizes: [
      { name: "M", nameAr: "وسط", price: 6000 },
      { name: "L", nameAr: "كبير", price: 7000 }
    ],
    image: mangoMatchaImage,
    descriptionAr: "مشروب استوائي منعش يجمع الأناناس الطبيعي مع حليب جوز الهند والثلج المجروش.",
    descriptionEn: "Tropical blend of fresh pineapple, creamy coconut milk, and crushed ice."
  },
  {
    id: "orange-juice",
    nameAr: "برتقال طبيعي",
    nameEn: "Orange Juice",
    category: "cold_drinks",
    price: 5000,
    sizes: [
      { name: "M", nameAr: "وسط", price: 5000 },
      { name: "L", nameAr: "كبير", price: 6000 }
    ],
    image: mangoMatchaImage,
    descriptionAr: "عصير برتقال طبيعي 100% طازج ومعصور عند الطلب بدون إضافات.",
    descriptionEn: "Freshly squeezed 100% pure orange juice, pure and unadulterated."
  },
  {
    id: "fruit-cocktail",
    nameAr: "كوكتيل فواكه",
    nameEn: "Fruit Cocktail",
    category: "cold_drinks",
    price: 6000,
    sizes: [
      { name: "M", nameAr: "وسط", price: 6000 },
      { name: "L", nameAr: "كبير", price: 7000 }
    ],
    image: roseMatchaImage,
    descriptionAr: "تشكيلة من الفواكه الموسمية الطازجة المخفوقة بعناية.",
    descriptionEn: "Rich seasonal fruit blend packed with fresh vitamins."
  },
  {
    id: "orange-lemon",
    nameAr: "برتقال وليمون",
    nameEn: "Orange & Lemon",
    category: "cold_drinks",
    price: 5000,
    sizes: [
      { name: "M", nameAr: "وسط", price: 5000 },
      { name: "L", nameAr: "كبير", price: 6000 }
    ],
    image: mangoMatchaImage,
    descriptionAr: "عصير البرتقال الطازج مع لمسة حامضة ومنعشة من الليمون والنعناع.",
    descriptionEn: "Tangy combination of freshly squeezed orange with zesty lemon."
  },
  {
    id: "mexican-blue",
    nameAr: "بلو مكسيكي",
    nameEn: "Mexican Blue",
    category: "cold_drinks",
    price: 6000,
    sizes: [
      { name: "M", nameAr: "وسط", price: 6000 },
      { name: "L", nameAr: "كبير", price: 7000 }
    ],
    image: blueberryMatchaImage,
    descriptionAr: "موهيتو مكسيكي أزرق منعش بالبلو كوراساو والليمون والغازات المنعشة والثلج.",
    descriptionEn: "Electric blue Mexican-style soda with blue curacao citrus essence and ice."
  },
  {
    id: "mexican-pomegranate",
    nameAr: "بوم گرانت مكسيكي",
    nameEn: "Mexican Pomegranate",
    category: "cold_drinks",
    price: 6000,
    sizes: [
      { name: "M", nameAr: "وسط", price: 6000 },
      { name: "L", nameAr: "كبير", price: 7000 }
    ],
    image: roseMatchaImage,
    descriptionAr: "عصير الرمان المركز بلمسة مكسيكية فوارة ومثلجة تدغدغ الحواس.",
    descriptionEn: "Sparkling Mexican-style tart pomegranate infusion served ice cold."
  },
  {
    id: "tea-karak",
    nameAr: "شاي كرك",
    nameEn: "Karak Tea",
    category: "cold_drinks",
    price: 4000,
    image: chemexImage,
    descriptionAr: "شاي أسود مطبوخ على نار هادئة مع الحليب والهيل والزعفران والبهارات العطرية.",
    descriptionEn: "Slow-simmered black tea with evaporated milk, cardamom, and aromatic spices."
  },
  {
    id: "tea-lemon",
    nameAr: "شاي ليمون",
    nameEn: "Lemon Tea",
    category: "cold_drinks",
    price: 3000,
    image: chemexImage,
    descriptionAr: "شاي أسود نقي ممزوج بشرائح الليمون الطازجة لمذاق منعش.",
    descriptionEn: "Steeped black tea infused with fresh citrus lemon slices."
  },

  // --- HOT DRINKS (مشروبات ساخنة بدون قهوة) ---
  {
    id: "hot-chocolate",
    nameAr: "هوت شوكلت",
    nameEn: "Hot Chocolate",
    category: "hot_drinks",
    price: 5000,
    sizes: [
      { name: "M", nameAr: "وسط", price: 5000 },
      { name: "L", nameAr: "كبير", price: 6000 }
    ],
    image: icedShakeImage,
    descriptionAr: "شوكولاتة بلجيكية غنية ومذابة في حليب ساخن كريمي مع رغوة غنية.",
    descriptionEn: "Rich Belgian chocolate melted into silky hot steamed milk."
  },
  {
    id: "hot-pistachio",
    nameAr: "هوت بستاشيو",
    nameEn: "Hot Pistachio",
    category: "hot_drinks",
    price: 6000,
    sizes: [
      { name: "M", nameAr: "وسط", price: 6000 },
      { name: "L", nameAr: "كبير", price: 7000 }
    ],
    image: chemexImage,
    descriptionAr: "مشروب الفستق الحلبي الدافئ والقشدي المريح للأعصاب.",
    descriptionEn: "Warm, velvety pistachio cream beverage topped with crushed nuts."
  },
  {
    id: "hot-lotus",
    nameAr: "هوت لوتس",
    nameEn: "Hot Lotus",
    category: "hot_drinks",
    price: 5000,
    sizes: [
      { name: "M", nameAr: "وسط", price: 5000 },
      { name: "L", nameAr: "كبير", price: 6000 }
    ],
    image: icedShakeImage,
    descriptionAr: "زبدة بسكويت اللوتس المكرملة مذابة في حليب مبخر دافئ مع فتات اللوتس.",
    descriptionEn: "Caramelized Lotus Biscoff spread blended into warm steamed milk."
  }
];
