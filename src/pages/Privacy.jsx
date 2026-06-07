import { ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

      <div className="bg-purple-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <ShieldCheck size={40} />

            <h1 className="text-4xl font-bold">{t("privacyPolicy")}</h1>
          </div>

          <p className="text-white">{t("lastUpdate")} : 1 May 2026</p>
        </div>
      </div>

      {/* Content */}

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              {t("privacySection1")}
            </h2>

            <ul className="list-disc pr-6 text-gray-600 space-y-2">
              <li>{t("privacyItem1")}</li>
              <li>{t("privacyItem2")}</li>
              <li>{t("privacyItem3")}</li>
              <li>{t("privacyItem4")}</li>
              <li>{t("privacyItem5")}</li>
              <li>{t("privacyItem6")}</li>
              <li>{t("privacyItem7")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              {t("privacySection2")}
            </h2>

            <ul className="list-disc pr-6 text-gray-600 space-y-2">
              <li>{t("privacyUse1")}</li>
              <li>{t("privacyUse2")}</li>
              <li>{t("privacyUse3")}</li>
              <li>{t("privacyUse4")}</li>
              <li>{t("privacyUse5")}</li>
              <li>{t("privacyUse6")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              {t("privacySection3")}
            </h2>

            <p className="text-gray-600 leading-8">{t("privacySharing")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              {t("privacySection4")}
            </h2>

            <ul className="list-disc pr-6 text-gray-600 space-y-2">
              <li>{t("privacyProtection1")}</li>
              <li>{t("privacyProtection2")}</li>
              <li>{t("privacyProtection3")}</li>
              <li>{t("privacyProtection4")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              {t("privacySection5")}
            </h2>

            <ul className="list-disc pr-6 text-gray-600 space-y-2">
              <li>{t("privacyRights1")}</li>
              <li>{t("privacyRights2")}</li>
              <li>{t("privacyRights3")}</li>
              <li>{t("privacyRights4")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              {t("privacySection6")}
            </h2>

            <p className="text-gray-600">{t("privacyNotifications")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              {t("privacySection7")}
            </h2>

            <p className="text-gray-600">{t("privacyPayments")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              {t("privacySection8")}
            </h2>

            <ul className="list-disc pr-6 text-gray-600 space-y-2">
              <li>{t("privacyRetention1")}</li>
              <li>{t("privacyRetention2")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              {t("privacySection9")}
            </h2>

            <p className="text-gray-600">{t("privacyChildren")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              {t("privacySection10")}
            </h2>

            <p className="text-gray-600">{t("privacyUpdates")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              {t("privacySection11")}
            </h2>

            <div className="text-gray-600 space-y-2">
              <p>info@daily-laundry.com</p>
              <p>+20 1105 71 00 88</p>
              <p>+20 1105 70 77 99</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
