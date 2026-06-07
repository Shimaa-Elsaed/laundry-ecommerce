import { useTranslation } from "react-i18next";

export default function Areas() {
  const { t, i18n } = useTranslation();

  const areas =
    i18n.language === "ar"
      ? [
          "مدينتي",
          "مدينة نصر",
          "المعادي",
          "التجمع الخامس",
          "الرحاب",
          "الشروق",
          "6 أكتوبر",
          "الشيخ زايد",
          "الدقي",
          "المهندسين",
        ]
      : [
          "Madinaty",
          "Nasr City",
          "Maadi",
          "New Cairo",
          "Rehab",
          "El Shorouk",
          "6th October",
          "Sheikh Zayed",
          "Dokki",
          "Mohandessin",
        ];

  return (
    <section className="bg-[#0F1B5B] py-24 text-center" id="areas">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <h2 className="text-4xl font-bold text-white mb-4">
          {t("areasTitle")}
        </h2>

        <p className="text-gray-300 mb-10">{t("areasDesc")}</p>

        <div className="flex flex-wrap justify-center gap-4">
          {areas.map((area, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full border border-gray-500 text-white transition ${
                index === 0
                  ? "bg-purple-600 border-purple-600"
                  : "hover:bg-purple-600"
              }`}
            >
              {area} ({t("comingSoon")})
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
