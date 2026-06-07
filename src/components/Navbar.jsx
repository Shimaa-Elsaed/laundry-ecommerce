import { useState } from "react";
import { daily } from "../assets/img";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const Navbar = ({ toggleLanguage, language }) => {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-5 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}

          <div className="flex items-center gap-2">
            <img src={daily[1]} alt="logo" className="w-14" />
            <Link to="/">
              <h1 className="font-bold text-xl text-primary">{t("logo")}</h1>
            </Link>
          </div>

          {/* Desktop Menu */}

          <div className="hidden lg:flex items-center gap-8 text-lg font-bold">
            <Link to="/services">{t("services")}</Link>

            <a href="/#loyalty">{t("loyalty")}</a>

            <a href="/#areas">{t("areas")}</a>

            <Link to="/policy">{t("policy")}</Link>

            <Link to="/privacy">{t("privacy")}</Link>
          </div>

          {/* Buttons */}

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" onClick={toggleLanguage}>
              {language === "ar" ? "English" : "العربية"}
            </Button>

            <Button>{t("download")}</Button>
          </div>

          {/* Mobile Button */}

          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}

        {open && (
          <div className="lg:hidden flex flex-col gap-4 mt-5 text-center bg-white py-4 rounded-xl shadow">
            <Link to="/services" onClick={() => setOpen(false)}>
              {t("services")}
            </Link>

            <a href="/#loyalty">{t("loyalty")}</a>

            <a href="/#areas">{t("areas")}</a>

            <Link to="/policy" onClick={() => setOpen(false)}>
              {t("policy")}
            </Link>

            <Link to="/privacy" onClick={() => setOpen(false)}>
              {t("privacy")}
            </Link>

            <Button
              variant="outline"
              onClick={toggleLanguage}
              className="bg-purple-600"
            >
              {language === "ar" ? "English" : "العربية"}
            </Button>

            <Button className="bg-purple-600">{t("download")}</Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
