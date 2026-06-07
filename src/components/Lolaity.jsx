import { useTranslation } from "react-i18next";

export default function Lolaity() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-20" id="loyalty">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#0F1B5B] mb-5">
              {t("loyaltyTitle")}
            </h2>

            <p className="text-gray-600 mb-8">{t("loyaltyDesc")}</p>

            <div className="grid grid-cols-2 gap-4">
              <div className="border rounded-3xl p-8 text-center shadow-sm">
                <h3 className="text-3xl font-bold text-purple-600">
                  {t("onePound")}
                </h3>

                <p className="text-gray-500 mt-2">{t("onePoint")}</p>
              </div>

              <div className="border rounded-3xl p-8 text-center shadow-sm">
                <h3 className="text-3xl font-bold text-purple-600">
                  {t("neverExpire")}
                </h3>

                <p className="text-gray-500 mt-2">{t("keepPoints")}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-700 to-blue-600 rounded-[30px] p-10 text-white min-h-[250px] flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4">{t("pointsStages")}</h3>

            <p>{t("pointsStagesDesc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
