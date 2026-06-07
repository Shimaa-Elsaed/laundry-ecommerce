import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: localStorage.getItem("lang") || "ar",

  resources: {
    ar: {
      translation: {
        logo: "دايلي لاندري",
        services: "خدماتنا",
        loyalty: "برنامج الولاء",
        areas: "مناطق الخدمة",
        policy: "الشروط",
        privacy: "الخصوصية",
        download: "تحميل التطبيق",
        heroTitle: "نظافة تصل إلى باب منزلك",

        heroDescription:
          "استمتع بأقصى درجات العناية بغسيلك مع دايلي لاندري. من الملابس اليومية إلى السجاد الرقيق، نتعامل مع كل شيء بدقة واحترافية عالية.",

        startNow: "ابدأ الآن",

        showServices: "عرض الخدمات",
        professionalTitle: "خدماتنا الاحترافية",
        professionalDesc: "حلول مخصصة لجميع احتياجاتك من الأقمشة",

        washIron: "غسيل ومكواة",
        washIronDesc:
          "خدمة غسيل كاملة لملابسك اليومية. نظافة ونضارة وكي مثالي.",

        ironOnly: "مكواة فقط",
        ironOnlyDesc: "كي بالبخار لمظهر احترافي وأنيق مع عناية كاملة بالملابس.",

        carpets: "سجاد وستائر",
        carpetsDesc:
          "تنظيف عميق لأقمشة منزلك مع احتساب السعر تلقائياً لكل متر مربع.",

        bagsShoes: "شنط وأحذية",
        bagsShoesDesc:
          "تنظيف وإصلاح وتلميع باحترافية للحفاظ على إكسسواراتك القيمة.",

        tailor: "ترزي في المنزل",
        tailorDesc: "زيارات منزلية من ترزي محترف للتعديلات والقياسات المخصصة.",

        vip: "خدمة VIP",
        vipDesc: "أولوية كاملة في الخدمة مع توصيل سريع خلال 6 ساعات.",
        loyaltyTitle: "انضم إلى برنامج الولاء",

        loyaltyDesc:
          "كل طلب يقربك أكثر من مكافآت حصرية. اكسب نقاط مقابل كل جنيه مصري تنفقه واحصل على خصومات خاصة.",

        onePound: "EGP 1",

        onePoint: "تساوي نقطة واحدة",

        neverExpire: "بدون انتهاء",

        keepPoints: "احتفظ بنقاطك للأبد",

        pointsStages: "مراحل النقاط",

        pointsStagesDesc:
          "احصل تلقائياً على كوبونات خصم عند وصولك لمراحل معينة من النقاط ليتم تطبيقها مباشرة عند الدفع.",

        areasTitle: "مناطق الخدمة",

        areasDesc: "تحقق مما إذا كنا متاحين في منطقتك",

        comingSoon: "قريباً",

        footerDesc:
          "خدمات غسيل متميزة تجمع بين التكنولوجيا الحديثة والعناية التقليدية.",

        quickLinks: "روابط سريعة",

        contactUs: "اتصل بنا",

        privacyPolicy: "سياسة الخصوصية",

        termsConditions: "الشروط والأحكام",

        workingHours: "السبت - الخميس 9 ص - 6 م",

        copyright: "© 2026 Daily Laundry. جميع الحقوق محفوظة.",
        buyNow: "اشتري الآن",

        completeOrder: "إتمام الطلب",

        quantity: "الكمية",

        deliveryMethod: "طريقة التوصيل",

        fullName: "الاسم بالكامل",

        phone: "رقم الهاتف",

        email: "البريد الإلكتروني",

        address: "العنوان",

        notes: "ملاحظات",

        orderSummary: "ملخص الطلب",

        total: "المجموع",

        confirmOrder: "تأكيد وإتمام الطلب",

        washIronPage: "غسيل ومكوي",

        ironPage: "مكواه",

        lastUpdate: "آخر تحديث",
      },
    },

    en: {
      translation: {
        logo: "Daily Laundry",
        services: "Services",
        loyalty: "Loyalty Program",
        areas: "Service Areas",
        policy: "Terms",
        privacy: "Privacy",
        download: "Download App",
        heroTitle: "Cleanliness Delivered To Your Door",

        heroDescription:
          "Enjoy premium laundry care with Daily Laundry. From everyday clothing to delicate carpets, we handle everything with professional precision.",

        startNow: "Start Now",

        showServices: "View Services",

        professionalTitle: "Professional Services",
        professionalDesc: "Customized solutions for all your fabric care needs",

        washIron: "Wash & Iron",
        washIronDesc:
          "Complete laundry service for your daily clothes with perfect ironing.",

        ironOnly: "Iron Only",
        ironOnlyDesc:
          "Steam ironing for an elegant and professional appearance.",

        carpets: "Carpets & Curtains",
        carpetsDesc:
          "Deep cleaning for home fabrics with automatic pricing per square meter.",

        bagsShoes: "Bags & Shoes",
        bagsShoesDesc:
          "Cleaning, repair, and polishing by experienced specialists.",

        tailor: "Home Tailor",
        tailorDesc:
          "Professional tailor visits for alterations and custom measurements.",

        vip: "VIP Service",
        vipDesc: "Priority treatment with express delivery within 6 hours.",
        loyaltyTitle: "Join Our Loyalty Program",

        loyaltyDesc:
          "Every order brings you closer to exclusive rewards. Earn points for every Egyptian pound you spend and enjoy special discounts.",

        onePound: "EGP 1",

        onePoint: "Equals One Point",

        neverExpire: "Never Expires",

        keepPoints: "Keep Your Points Forever",

        pointsStages: "Reward Levels",

        pointsStagesDesc:
          "Automatically receive discount coupons when you reach specific point milestones. They will be applied directly at checkout.",

        areasTitle: "Service Areas",

        areasDesc: "Check whether we're available in your area",

        comingSoon: "Coming Soon",

        footerDesc:
          "Premium laundry services combining modern technology with traditional care.",

        quickLinks: "Quick Links",

        contactUs: "Contact Us",

        privacyPolicy: "Privacy Policy",

        termsConditions: "Terms & Conditions",

        workingHours: "Saturday - Thursday 9 AM - 6 PM",

        copyright: "© 2026 Daily Laundry. All Rights Reserved.",
        buyNow: "Buy Now",

        completeOrder: "Complete Order",

        quantity: "Quantity",

        deliveryMethod: "Delivery Method",

        fullName: "Full Name",

        phone: "Phone Number",

        email: "Email",

        address: "Address",

        notes: "Notes",

        orderSummary: "Order Summary",

        total: "Total",

        confirmOrder: "Confirm Order",

        washIronPage: "Wash & Iron",

        ironPage: "Iron Only",

        lastUpdate: "Last Update",
      },
    },
  },

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
