import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { servicesData } from "@/data/servicesData";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t, i18n } = useTranslation();

  const [services] = useState(servicesData);

  const [selectedService, setSelectedService] = useState(null);

  const [orderData, setOrderData] = useState({
    quantity: 1,
    deliveryMethod: "Normal (Standard)",
    fullName: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
  });

  const washAndIron = services.filter(
    (item) => item.CategoryName_en === "Wash and iron",
  );

  const iron = services.filter((item) => item.CategoryName_en === "Iron");

  const total =
    selectedService &&
    Number(selectedService.Price) * Number(orderData.quantity);

  return (
    <div className="container mx-auto px-5 py-16">
      {/* Wash & Iron */}

      <h2 className="text-center text-5xl font-bold mb-12">{t("washIron")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {washAndIron.slice(0, 5).map((item) => (
          <div
            key={item.ServiceID}
            className="bg-white rounded-3xl p-6 shadow-lg"
          >
            <img
              src={item.Icon}
              alt={item.Name_en}
              className="w-28 h-28 mx-auto object-contain"
            />

            <h3 className="text-center mt-4 text-xl font-bold">
              {i18n.language === "ar"
                ? item.Name_ar || item.Name_en
                : item.Name_en}{" "}
            </h3>

            <p className="text-center text-purple-600 font-bold text-2xl mt-2">
              {item.Price} EGP
            </p>

            <button
              onClick={() => setSelectedService(item)}
              className="w-full mt-5 bg-purple-600 text-white py-3 rounded-xl"
            >
              {t("buyNow")}{" "}
            </button>
          </div>
        ))}
      </div>

      {/* Iron */}

      <h2 className="text-center text-5xl font-bold mt-24 mb-12">
        {t("ironOnly")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {iron.map((item) => (
          <div
            key={item.ServiceID}
            className="bg-white rounded-3xl p-6 shadow-lg"
          >
            <img
              src={item.Icon}
              alt={item.Name_en}
              className="w-28 h-28 mx-auto object-contain"
            />

            <h3 className="text-center mt-4 text-xl font-bold">
              {item.Name_ar || item.Name_en}
            </h3>

            <p className="text-center text-purple-600 font-bold text-2xl mt-2">
              {item.Price} EGP
            </p>

            <button
              onClick={() => setSelectedService(item)}
              className="w-full mt-5 bg-purple-600 text-white py-3 rounded-xl"
            >
              {t("buyNow")}{" "}
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}

      {selectedService && (
        <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-4xl p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 left-4 text-4xl"
            >
              <IoClose />
            </button>

            <h2 className="text-center text-4xl font-bold mb-8">
              {t("completeOrder")}
            </h2>
            <div className="flex items-center gap-5 mb-8">
              <img
                src={selectedService.Icon}
                alt=""
                className="w-28 h-28 object-contain"
              />

              <div>
                <h3 className="text-2xl font-bold">
                  {i18n.language === "ar"
                    ? selectedService.Name_ar || selectedService.Name_en
                    : selectedService.Name_en}{" "}
                </h3>

                <p className="text-gray-500">
                  {i18n.language === "ar"
                    ? selectedService.CategoryName_ar
                    : selectedService.CategoryName_en}{" "}
                </p>

                <p className="font-bold text-purple-600 mt-2">
                  {selectedService.Price} EGP
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder={t("fullName")}
                className="border p-4 rounded-xl"
                value={orderData.fullName}
                onChange={(e) =>
                  setOrderData({
                    ...orderData,
                    fullName: e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder={t("phone")}
                className="border p-4 rounded-xl"
                value={orderData.phone}
                onChange={(e) =>
                  setOrderData({
                    ...orderData,
                    phone: e.target.value,
                  })
                }
              />

              <input
                type="email"
                placeholder={t("email")}
                className="border p-4 rounded-xl"
                value={orderData.email}
                onChange={(e) =>
                  setOrderData({
                    ...orderData,
                    email: e.target.value,
                  })
                }
              />

              <input
                type="number"
                min="1"
                className="border p-4 rounded-xl"
                value={orderData.quantity}
                onChange={(e) =>
                  setOrderData({
                    ...orderData,
                    quantity: e.target.value,
                  })
                }
              />
            </div>

            <textarea
              placeholder={t("address")}
              rows="3"
              className="border p-4 rounded-xl w-full mt-4"
              value={orderData.address}
              onChange={(e) =>
                setOrderData({
                  ...orderData,
                  address: e.target.value,
                })
              }
            />

            <textarea
              placeholder={t("notes")}
              rows="3"
              className="border p-4 rounded-xl w-full mt-4"
              value={orderData.notes}
              onChange={(e) =>
                setOrderData({
                  ...orderData,
                  notes: e.target.value,
                })
              }
            />

            <div className="mt-8 border-t pt-5">
              <div className="flex justify-between text-xl">
                <span>{t("total")}</span> <span>{total} EGP</span>
              </div>

              <button
                className="w-full mt-6 bg-purple-600 text-white py-4 rounded-xl text-lg font-bold"
                onClick={() => alert(t("orderSent"))}
              >
                <h2 className="text-center text-4xl font-bold mb-8">
                  {t("confirmOrder")}{" "}
                </h2>{" "}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
