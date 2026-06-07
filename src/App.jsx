import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Services from "./pages/Services";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Policy from "./pages/Policy";

const App = () => {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState(
    localStorage.getItem("lang") || "ar",
  );

  useEffect(() => {
    i18n.changeLanguage(language);

    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    document.documentElement.lang = language;

    localStorage.setItem("lang", language);
  }, [language, i18n]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"));
  };

  return (
    <>
      <Navbar toggleLanguage={toggleLanguage} language={language} />

      <main className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/privacy" element={<Privacy />} />

          <Route path="/policy" element={<Policy />} />

          <Route path="/services" element={<Services />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
