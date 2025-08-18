import {
  ChatBubbleLeftRightIcon,
  ClockIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldCheckIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import { Helmet } from "react-helmet-async";

const Home = () => {
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
    { number: "24/7", label: "Hizmet" },
    { number: "5⭐", label: "Değerlendirme" },
  ];

  return (
    <>
      <Helmet>
        <title>Yükle Gel Taksi - Hızlı, Güvenli, Uygun Fiyat Yük Taşıma</title>
        <meta
          name="description"
          content="Yük taksi ihtiyaçlarınızı karşılıyoruz. Kargo ile ulaşması zaman alan yüklerinizi bize bir telefonla ulaşarak hafif yük nakliye ihtiyaçlarınızı karşılayabilirsiniz."
        />
        <meta
          name="keywords"
          content="yük taksi, nakliye, taşımacılık, istanbul, hızlı teslimat"
        />
        <meta
          property="og:title"
          content="Yükle Gel Taksi - Hızlı, Güvenli, Uygun Fiyat"
        />
        <meta
          property="og:description"
          content="Yük taksi ihtiyaçlarınızı karşılıyoruz. 7/24 hizmet, uygun fiyat."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 to-orange-100">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-orange-200 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary-300 rounded-full opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Yük taksi{" "}
                <span className="text-primary-600">ihtiyaçlarınızı</span>{" "}
                <span className="text-primary-600">karşılıyoruz.</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
                Kargo ile ulaşması zaman alan yüklerinizi bize bir telefonla
                ulaşarak hafif yük nakliye ihtiyaçlarınızı karşılayabilirsiniz.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="tel:05417363434"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  0541 736 34 34
                </a>

                <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-600 hover:text-white transition-colors duration-200">
                  <MapPinIcon className="h-5 w-5 mr-2" />
                  Fiyat Hesapla
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary-600">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Content */}
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="w-full h-64 bg-gradient-to-br from-primary-200 to-orange-200 rounded-lg flex items-center justify-center">
                  <TruckIcon className="h-24 w-24 text-primary-600" />
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

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-primary-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg z-20">
                Fiyat Hesapla
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
              Hizmetlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Yük taksi hizmetimizde kalite, hız ve güvenilirlik bir arada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-orange-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="bg-primary-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Hemen Yük Taksi Çağırın
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Bir telefon kadar yakınız. 7/24 hizmet ile acil nakliye
            ihtiyaçlarınızı karşılıyoruz.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:05417363434"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              0541 736 34 34 - Hemen Ara
            </a>

            <a
              href="https://wa.me/905417363434"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
