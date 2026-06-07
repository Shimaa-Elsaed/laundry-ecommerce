import { FileText } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Policy() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

      <div className="bg-purple-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <FileText size={40} />
            <h1 className="text-4xl font-bold">{t("termsConditions")}</h1>
          </div>

          <p className="text-blue-100">{t("lastUpdate")}: 2026</p>
        </div>
      </div>

      {/* Content */}

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              {t("policySection1")}
            </h2>

            <ul className="list-disc pr-6 space-y-2 text-gray-600">
              <li>{t("policySection1Item1")}</li>
              <li>{t("policySection1Item2")}</li>
              <li>{t("policySection1Item3")}</li>
              <li>{t("policySection1Item4")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              {t("policySection2")}
            </h2>

            <div className="space-y-4 text-gray-600">
              <p>
                <strong>{t("washIron")}:</strong> {t("policyService1")}
              </p>

              <p>
                <strong>{t("ironOnly")}:</strong> {t("policyService2")}
              </p>

              <p>
                <strong>{t("carpets")}:</strong> {t("policyService3")}
              </p>

              <p>
                <strong>{t("bagsShoes")}:</strong> {t("policyService4")}
              </p>

              <p>
                <strong>{t("tailor")}:</strong> {t("policyService5")}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              {t("policySection3")}
            </h2>

            <p className="text-gray-600 mb-4">{t("policyOrders")}</p>

            <ul className="list-disc pr-6 text-gray-600 space-y-2">
              <li>{t("policyCancel1")}</li>
              <li>{t("policyCancel2")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              {t("policySection4")}
            </h2>

            <div className="text-gray-600 space-y-3">
              <p>{t("policyPrice1")}</p>
              <p>{t("policyPrice2")}</p>
              <p>{t("policyPrice3")}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              {t("policySection5")}
            </h2>

            <ul className="list-disc pr-6 text-gray-600 space-y-2">
              <li>{t("policyDelivery1")}</li>
              <li>{t("policyDelivery2")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              {t("policySection6")}
            </h2>

            <p className="text-gray-600 leading-8">{t("policyQuality")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              {t("policySection7")}
            </h2>

            <p className="text-gray-600">info@daily-laundry.com</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              {t("policySection8")}
            </h2>

            <p className="text-gray-600 leading-8">{t("policyLaw")}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
