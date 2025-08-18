import {
  BuildingStorefrontIcon,
  EyeIcon,
  GlobeAltIcon,
  HeartIcon,
  TrophyIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Helmet } from "react-helmet-async";

const Corporate = () => {
  const stats = [
    { number: "2018", label: "Kuruluş Yılı" },
    { number: "1000+", label: "Mutlu Müşteri" },
    { number: "50+", label: "Hizmet Verdiğimiz Şehir" },
    { number: "24/7", label: "Kesintisiz Hizmet" },
  ];

  const values = [
    {
      icon: HeartIcon,
      title: "Müşteri Odaklılık",
      description:
        "Müşterilerimizin memnuniyeti bizim için en önemli değerdir. Her zaman müşteri ihtiyaçlarını ön planda tutuyoruz.",
    },
    {
      icon: TrophyIcon,
      title: "Kalite",
      description:
        "Sunduğumuz hizmetlerde en yüksek kalite standartlarını koruyarak, güvenilir çözümler üretiyoruz.",
    },
    {
      icon: UsersIcon,
      title: "Güvenilirlik",
      description:
        "Sözümüzü tutmak ve zamanında hizmet vermek konusunda kararlıyız. Güvenilirlik bizim markamızdır.",
    },
    {
      icon: GlobeAltIcon,
      title: "İnovasyon",
      description:
        "Teknolojik gelişmeleri takip ederek, hizmet kalitemizi sürekli geliştiriyoruz.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Kurumsal - Yükle Gel Taksi Hakkında</title>
        <meta
          name="description"
          content="Yükle Gel Taksi olarak 2018'den beri yük taksi hizmetinde kalite ve güvenilirlik sağlıyoruz. Misyon, vizyon ve değerlerimizi keşfedin."
        />
        <meta
          name="keywords"
          content="hakkımızda, kurumsal, misyon, vizyon, yük taksi şirketi"
        />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-orange-100 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Hakkımızda
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                2018 yılından bu yana yük taksi hizmetinde güvenilir çözümler
                sunuyoruz. Kalite, hız ve güvenilirlik ilkelerimizle hizmet
                veriyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary-50 to-orange-50 p-6 rounded-lg"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Yükle Gel Taksi Kimdir?
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Yükle Gel Taksi olarak 2018 yılından bu yana yük
                    taşımacılığı sektöründe faaliyet gösteriyoruz.
                    Müşterilerimizin yük taksi ihtiyaçlarını en hızlı, güvenli
                    ve uygun fiyatla karşılamak amacıyla kurulduk.
                  </p>
                  <p>
                    Modern araç filomuz ve deneyimli şoför kadromuzla ev
                    taşımadan ofis taşımaya, alışveriş teslimatından ticari yük
                    taşımaya kadar geniş bir hizmet yelpazesi sunuyoruz.
                  </p>
                  <p>
                    Teknolojik altyapımız sayesinde 7/24 hizmet verebiliyor,
                    müşterilerimizin acil nakliye ihtiyaçlarını anında
                    karşılayabiliyoruz.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <BuildingStorefrontIcon className="h-16 w-16 text-primary-600 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Modern Altyapı
                  </h3>
                  <p className="text-gray-600">
                    Son teknoloji araçlarımız ve dijital sistemlerimizle hızlı
                    ve güvenilir hizmet sunuyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-primary-50 to-orange-50 p-8 rounded-2xl">
                <EyeIcon className="h-12 w-12 text-primary-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Misyonumuz
                </h3>
                <p className="text-gray-600">
                  Türkiye'nin her yerinde, yük taşımacılığı alanında en
                  güvenilir, hızlı ve kaliteli hizmeti sunarak müşterilerimizin
                  hayatını kolaylaştırmak ve sektörde öncü olmak.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-primary-50 p-8 rounded-2xl">
                <GlobeAltIcon className="h-12 w-12 text-primary-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Vizyonumuz
                </h3>
                <p className="text-gray-600">
                  Teknoloji ve kaliteyi bir araya getirerek, yük taksi
                  hizmetinde Türkiye'nin lider markası olmak ve sürdürülebilir
                  büyümeyle sektörde benchmark olmak.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Değerlerimiz
              </h2>
              <p className="text-lg text-gray-600">
                İş yapış şeklimizi belirleyen temel değerlerimiz
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <value.icon className="h-12 w-12 text-primary-600 mb-6" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-primary-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Deneyimli Ekibimiz
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Profesyonel şoförlerimiz ve müşteri hizmetleri ekibimiz sizin için
              7/24 hazır. Her biri alanında uzman kadromuzla en iyi hizmeti
              sunuyoruz.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">15+</span>
                </div>
                <h4 className="text-lg font-semibold text-white">
                  Deneyimli Şoför
                </h4>
              </div>

              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">5+</span>
                </div>
                <h4 className="text-lg font-semibold text-white">
                  Müşteri Temsilcisi
                </h4>
              </div>

              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">20+</span>
                </div>
                <h4 className="text-lg font-semibold text-white">
                  Modern Araç
                </h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Corporate;
