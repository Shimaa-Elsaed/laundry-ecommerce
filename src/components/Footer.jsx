import {
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 lg:px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-3xl font-bold text-purple-700 mb-4">
              Daily Laundry
            </h3>

            <p className="text-gray-600 mb-6">{t("footerDesc")}</p>

            <div className="flex gap-4 text-xl">
              <FaWhatsapp />
              <FaInstagram />
              <FaFacebookF />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">{t("quickLinks")}</h4>

            <ul className="space-y-3 text-gray-600">
              <li>{t("services")}</li>
              <li>{t("loyalty")}</li>
              <li>{t("areas")}</li>
              <li>{t("privacyPolicy")}</li>
              <li>{t("termsConditions")}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">{t("contactUs")}</h4>

            <div className="space-y-4 text-gray-600">
              <div className="flex items-center gap-2">
                <FaEnvelope />
                <span>info@daily-laundry.com</span>
              </div>

              <div className="flex items-center gap-2">
                <FaPhone />
                <span>+20 1105 710 088</span>
              </div>

              <div className="flex items-center gap-2">
                <FaPhone />
                <span>+20 1105 707 799</span>
              </div>

              <div className="flex items-center gap-2">
                <FaClock />
                <span>{t("workingHours")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-10 pt-6 text-center text-gray-500">
          {t("copyright")}
        </div>
      </div>
    </footer>
  );
}
