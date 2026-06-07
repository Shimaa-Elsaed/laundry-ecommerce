import { daily } from "@/assets/img";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className=" max-w-7xl mx-auto px-5 lg:px-1 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}

        <div className="order-2 lg:order-1 space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {t("heroTitle")}
          </h1>

          <p className="text-gray-600 text-lg md:text-2xl leading-relaxed max-w-xl">
            {t("heroDescription")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-purple-700 hover:bg-purple-700 text-white px-8 py-6"
            >
              {t("startNow")}
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-purple-700 text-purple-700 hover:bg-blue-50 px-8 py-6"
            >
              <Link to="/services">{t("showServices")}</Link>
            </Button>
          </div>
        </div>

        {/* Image */}

        <div className="order-1 lg:order-2 flex justify-center">
          <img
            src={daily[0]}
            alt="Laundry"
            className="w-full max-w-lg object-contain rounded-4xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
