import {
  ChatBubbleLeftRightIcon,
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const contactInfo = [
    {
      icon: PhoneIcon,
      title: "Telefon",
      content: "0541 736 34 34",
      description: "7/24 hizmet hattımız",
      action: "tel:05417363434",
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "WhatsApp",
      content: "0541 736 34 34",
      description: "Hızlı iletişim için",
      action: "https://wa.me/905417363434",
    },
    {
      icon: EnvelopeIcon,
      title: "E-posta",
      content: "info@yuklegeltaksi.com",
      description: "İş teklifleri için",
      action: "mailto:info@yuklegeltaksi.com",
    },
    {
      icon: MapPinIcon,
      title: "Adres",
      content: "İstanbul, Türkiye",
      description: "Merkez ofisimiz",
      action: null,
    },
  ];

  const serviceHours = [
    { day: "Pazartesi - Pazar", hours: "24 Saat" },
    { day: "Bayram Günleri", hours: "24 Saat" },
    { day: "Acil Durum", hours: "Her Zaman" },
  ];

  return (
    <>
      <Helmet>
        <title>İletişim - Yükle Gel Taksi</title>
        <meta
          name="description"
          content="Yükle Gel Taksi ile iletişime geçin. 7/24 hizmet hattımız: 0541 736 34 34. WhatsApp, telefon ve e-posta ile ulaşabilirsiniz."
        />
        <meta
          name="keywords"
          content="iletişim, telefon, whatsapp, adres, yük taksi iletişim"
        />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-orange-100 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                İletişim
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Yük taksi hizmetimiz hakkında bilgi almak veya hemen sipariş
                vermek için bizimle iletişime geçin. 7/24 hizmetinizdeyiz.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary-50 to-orange-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
                >
                  <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                    <info.icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {info.title}
                  </h3>

                  {info.action ? (
                    <a
                      href={info.action}
                      className="text-primary-600 font-semibold text-lg hover:text-primary-700 transition-colors duration-200"
                      target={
                        info.action.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.action.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-900 font-semibold text-lg">
                      {info.content}
                    </p>
                  )}

                  <p className="text-gray-600 text-sm mt-1">
                    {info.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Contact */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Hızlı İletişim
                </h2>
                <p className="text-lg text-gray-600">
                  Acil yük taksi ihtiyacınız için hemen arayın veya WhatsApp'tan
                  yazın
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Phone CTA */}
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                  <PhoneIcon className="h-16 w-16 text-primary-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Hemen Arayın
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Acil yük taksi ihtiyaçlarınız için 7/24 hizmet hattımızı
                    arayabilirsiniz.
                  </p>
                  <a
                    href="tel:05417363434"
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 shadow-lg w-full"
                  >
                    <PhoneIcon className="h-5 w-5 mr-2" />
                    0541 736 34 34
                  </a>
                </div>

                {/* WhatsApp CTA */}
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                  <ChatBubbleLeftRightIcon className="h-16 w-16 text-green-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    WhatsApp
                  </h3>
                  <p className="text-gray-600 mb-6">
                    WhatsApp üzerinden mesaj göndererek hızlıca iletişime
                    geçebilirsiniz.
                  </p>
                  <a
                    href="https://wa.me/905417363434"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-lg w-full"
                  >
                    <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" />
                    WhatsApp'ta Yaz
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Hours */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Hizmet Saatlerimiz
                </h2>
                <p className="text-lg text-gray-600">
                  Size daha iyi hizmet verebilmek için 7/24 hizmetinizdeyiz
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-orange-50 rounded-2xl p-8">
                <div className="flex items-center justify-center mb-8">
                  <ClockIcon className="h-12 w-12 text-primary-600" />
                </div>

                <div className="space-y-4">
                  {serviceHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-primary-100 last:border-b-0"
                    >
                      <span className="text-gray-900 font-medium">
                        {schedule.day}
                      </span>
                      <span className="text-primary-600 font-bold">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <p className="text-gray-600 text-sm">
                    * Acil durumlar için her zaman ulaşabilirsiniz
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Sık Sorulan Sorular
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Hizmet alanınız nereler?
                  </h3>
                  <p className="text-gray-600">
                    İstanbul başta olmak üzere Türkiye'nin birçok ilinde hizmet
                    veriyoruz. Detaylı bilgi için lütfen bizimle iletişime
                    geçin.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Fiyatlar nasıl belirleniyor?
                  </h3>
                  <p className="text-gray-600">
                    Fiyatlarımız mesafe, yük miktarı ve hizmet türüne göre
                    belirlenir. Ücretsiz fiyat teklifi için arayabilirsiniz.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Ne kadar sürede gelirsiniz?
                  </h3>
                  <p className="text-gray-600">
                    Şehir içi siparişlerde ortalama 30-60 dakika içinde sizin
                    yanınızdayız. Acil durumlar için daha hızlı hizmet
                    sunuyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
