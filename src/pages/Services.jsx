import {
  BuildingOfficeIcon,
  CheckCircleIcon,
  ClockIcon,
  HomeIcon,
  ShoppingBagIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const services = [
    {
      icon: HomeIcon,
      title: "Ev Taşıma",
      description:
        "Ev eşyalarınızı güvenli bir şekilde yeni adresinize taşıyoruz",
      features: [
        "Beyaz eşya taşıma",
        "Mobilya demontaj/montaj",
        "Ambalajlama hizmeti",
        "Sigortalı taşıma",
      ],
    },
    {
      icon: BuildingOfficeIcon,
      title: "Ofis Taşıma",
      description: "Ofis malzemelerinizi profesyonel ekibimizle taşıyoruz",
      features: [
        "Dosya taşıma",
        "Teknolojik cihaz taşıma",
        "Hızlı kurulum",
        "İş kaybı minimumu",
      ],
    },
    {
      icon: ShoppingBagIcon,
      title: "Alışveriş Teslimatı",
      description: "Market ve mağaza alışverişlerinizi kapınıza getiriyoruz",
      features: [
        "Soğuk zincir",
        "Aynı gün teslimat",
        "Kapıda ödeme",
        "Hijyenik taşıma",
      ],
    },
    {
      icon: TruckIcon,
      title: "Ticari Yük",
      description: "Ticari yüklerinizi güvenli ve hızlı şekilde taşıyoruz",
      features: [
        "Ağır yük taşıma",
        "Özel ambalajlama",
        "Takip sistemi",
        "Hızlı teslimat",
      ],
    },
  ];

  const advantages = [
    "7/24 hizmet veriyoruz",
    "Profesyonel ekip",
    "Sigortalı taşımacılık",
    "Uygun fiyat garantisi",
    "Modern araç filomuz",
    "Müşteri memnuniyeti odaklı",
  ];

  return (
    <>
      <Helmet>
        <title>Hizmetlerimiz - Yükle Gel Taksi</title>
        <meta
          name="description"
          content="Ev taşıma, ofis taşıma, alışveriş teslimatı ve ticari yük taşıma hizmetlerimiz. 7/24 profesyonel hizmet."
        />
        <meta
          name="keywords"
          content="ev taşıma, ofis taşıma, nakliye, yük taksi, teslimat"
        />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-orange-100 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Hizmetlerimiz
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ev taşımadan ofis taşımaya, alışveriş teslimatından ticari yük
                taşımaya kadar her türlü nakliye ihtiyacınızı karşılıyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-600 p-3 rounded-lg flex-shrink-0">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>

                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircleIcon className="h-5 w-5 text-green-500" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Neden Bizi Tercih Etmelisiniz?
              </h2>
              <p className="text-lg text-gray-600">
                Yük taksi hizmetinde farkımızı yaratan özelliklerimiz
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircleIcon className="h-6 w-6 text-primary-600" />
                    <span className="text-gray-900 font-medium">
                      {advantage}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Hizmet Almak İçin Hemen Arayın
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Profesyonel ekibimiz sizin için hazır
            </p>

            <a
              href="tel:05417363434"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              <ClockIcon className="h-5 w-5 mr-2" />
              0541 736 34 34 - 7/24 Hizmet
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
