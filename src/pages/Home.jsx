import {
  ChatBubbleLeftRightIcon,
  ClockIcon,
  CurrencyDollarIcon,
  PhoneIcon,
  ShieldCheckIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const services = [
    {
      icon: TruckIcon,
      title: "Yük Taşıma",
      description: "Ev eşyası, ofis malzemesi ve her türlü yük taşıma hizmeti",
    },
    {
      icon: ClockIcon,
      title: "7/24 Hizmet",
      description: "Hafta içi ve hafta sonu 24 saat hizmet veriyoruz",
    },
    {
      icon: ShieldCheckIcon,
      title: "Güvenli Taşıma",
      description: "Profesyonel ekip ile güvenli ve hasarsız taşımacılık",
    },
    {
      icon: CurrencyDollarIcon,
      title: "Uygun Fiyat",
      description: "Kaliteli hizmet, uygun fiyat garantisi",
    },
  ];

  const stats = [
    { number: "1000+", label: "Mutlu Müşteri" },
    { number: "50+", label: "Şehir" },
    { number: "7/24", label: "Hizmet" },
    { number: "5⭐", label: "Değerlendirme" },
  ];

  const galleryImages = [
    "WhatsApp Image 2025-08-18 at 18.29.05.jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.06 (1).jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.06.jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.07 (1).jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.07.jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.08.jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.09 (1).jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.09.jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.10 (1).jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.10.jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.11.jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.12 (1).jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.12.jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.13 (1).jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.13.jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.14 (1).jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.14 (2).jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.14.jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.15 (1).jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.15.jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.16 (1).jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.16.jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.17 (1).jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.17.jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.18 (1).jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.18.jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.19 (1).jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.19.jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.20.jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.21 (1).jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.21.jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.22.jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.23 (1).jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.23.jpeg",
    "WhatsApp Image 2025-08-18 at 18.29.24.jpeg",
    "WhatsApp Image 2025-08-18 at 18.30.06.jpeg",
  ];

  return (
    <>
      <Helmet>
        <title>
          Gel-götür Hafif Yük Taşıma Hizmeti - Yeni Nesil Taşıma Uygulamanız
        </title>
        <meta
          name="description"
          content="Gel-götür hafif yük taşıma hizmeti, Yeni Nesil taşıma hizmeti. App uygulamalarında kaybolmayın. Arayın birebir çözüm üretelim. Adresten adrese 2 saatte teslimat."
        />
        <meta
          name="keywords"
          content="gel-götür, hafif yük taşıma, yeni nesil taşıma, hızlı teslimat, yük taksi, nakliye, eşya taşıma, 2 saatte teslimat, istanbul nakliye, uygun fiyat nakliye, yük taşıma, güvenli taşıma, uygun ücrette taşıma, acil taşıma, Adalar yük taşıma, Arnavutköy yük taşıma, Ataşehir yük taşıma, Avcılar yük taşıma, Bağcılar yük taşıma, Bahçelievler yük taşıma, Bakırköy yük taşıma, Başakşehir yük taşıma, Bayrampaşa yük taşıma, Beşiktaş yük taşıma, Beykoz yük taşıma, Beylikdüzü yük taşıma, Beyoğlu yük taşıma, Büyükçekmece yük taşıma, Çatalca yük taşıma, Çekmeköy yük taşıma, Esenler yük taşıma, Esenyurt yük taşıma, Eyüpsultan yük taşıma, Fatih yük taşıma, Gaziosmanpaşa yük taşıma, Güngören yük taşıma, Kadıköy yük taşıma, Kağıthane yük taşıma, Kartal yük taşıma, Küçükçekmece yük taşıma, Maltepe yük taşıma, Pendik yük taşıma, Sancaktepe yük taşıma, Sarıyer yük taşıma, Silivri yük taşıma, Sultanbeyli yük taşıma, Sultangazi yük taşıma, Şile yük taşıma, Şişli yük taşıma, Tuzla yük taşıma, Ümraniye yük taşıma, Üsküdar yük taşıma, Zeytinburnu yük taşıma"
        />
        <meta
          property="og:title"
          content="Gel-götür Hafif Yük Taşıma Hizmeti - Yeni Nesil Taksi Uygulamanız"
        />
        <meta
          property="og:description"
          content="App uygulamalarında kaybolmayın. Arayın birebir çözüm üretelim. Adresten adrese 2 saatte teslimat ile güvenilir Gel-götür hafif yük taşıma hizmeti."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-400 to-dark-600">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-primary-200 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary-300 rounded-full opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-500 leading-tight">
                Gel-götür <span className="text-white">hafif yük</span>{" "}
                <span className="text-white">taşıma hizmeti</span>
              </h1>

              <p className="text-lg sm:text-xl text-white max-w-2xl">
                Yeni Nesil taşıma hizmeti. App uygulamalarında kaybolmayın.
                Arayın birebir çözüm üretelim.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="tel:+905357454997"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-dark-500 font-semibold rounded-lg hover:bg-primary-600 transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer z-20 relative pointer-events-auto"
                  role="button"
                  aria-label="Telefon numarasını ara"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  0535 745 49 97
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary-500">
                      {stat.number}
                    </div>
                    <div className="text-sm text-white">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Content */}
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="w-full h-64 bg-gradient-to-br from-primary-200 to-primary-200 rounded-lg flex items-center justify-center">
                  <img
                    src="/YukleGel/images/WhatsApp Image 2025-08-18 at 18.30.06.jpeg"
                    alt="Gel-götür hafif yük taşıma hizmeti"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Profesyonel Hizmet
                  </h3>
                  <p className="text-gray-600">
                    Modern araç filomuz ve deneyimli şoförlerimizle güvenli
                    taşımacılık.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Gel-götür hafif yük taşıma hizmeti
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Adresten adrese 2 saatte teslimat ile yeni nesil taşıma hizmeti
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-primary-50 to-primary-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="bg-primary-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Galerimizden Kareler
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hizmetlerimizden anlık görüntüler ve araç filomuzdan kareler.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
            {galleryImages.map((imageName, i) => (
              <div
                key={i}
                className="rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer flex items-center justify-center"
                onClick={() => openModal(`/YukleGel/images/${imageName}`)}
              >
                <img
                  src={`/YukleGel/images/${imageName}`}
                  alt={`Galeri Görseli ${i + 1}`}
                  className="w-full h-96 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-dark-600 to-dark-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Hemen Yük Taksi Çağırın
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            App uygulamalarında kaybolmayın. Arayın birebir çözüm üretelim.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+905357454997"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-dark-500 font-semibold rounded-lg hover:bg-primary-600 transition-colors duration-200 shadow-lg cursor-pointer"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              0535 745 49 97 - Hemen Ara
            </a>

            <a
              href="https://wa.me/905357454997"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-500 text-primary-500 font-semibold rounded-lg hover:bg-primary-500 hover:text-dark-500 transition-colors duration-200"
            >
              <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[100] p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl max-h-full w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white text-4xl z-10"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Full Screen Image"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
