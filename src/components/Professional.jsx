import { FaTshirt } from "react-icons/fa";
import { IoShirtSharp } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import { IoBag } from "react-icons/io5";
import { RiVipCrown2Fill } from "react-icons/ri";
import { FaShoppingBasket } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Professional = () => {
  const { t } = useTranslation();

  const prof = [
    {
      icon: <FaTshirt />,
      name: t("washIron"),
      desc: t("washIronDesc"),
    },
    {
      icon: <IoShirtSharp />,
      name: t("ironOnly"),
      desc: t("ironOnlyDesc"),
    },
    {
      icon: <CiCreditCard1 />,
      name: t("carpets"),
      desc: t("carpetsDesc"),
    },
    {
      icon: <IoBag />,
      name: t("bagsShoes"),
      desc: t("bagsShoesDesc"),
    },
    {
      icon: <RiVipCrown2Fill />,
      name: t("tailor"),
      desc: t("tailorDesc"),
    },
    {
      icon: <FaShoppingBasket />,
      name: t("vip"),
      desc: t("vipDesc"),
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {t("professionalTitle")}
          </h1>

          <p className="text-gray-500 text-lg">{t("professionalDesc")}</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {prof.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                p-8
                shadow-md
                hover:shadow-2xl
                transition-all
                duration-300
                hover:-translate-y-2
                text-center
                group
              "
            >
              <div
                className="
                  w-16 h-16
                  mx-auto mb-5
                  flex items-center justify-center
                  rounded-full
                  bg-blue-100
                  text-blue-600
                  text-3xl
                  group-hover:scale-110
                  transition
                "
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">{item.name}</h3>

              <p className="text-gray-500 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Professional;
