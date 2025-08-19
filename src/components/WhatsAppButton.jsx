const WhatsAppButton = () => {
  const phoneNumber = "905357454997"; // WhatsApp için Türkiye kodu ekli
  const message = "Merhaba, yük taksi hizmeti hakkında bilgi almak istiyorum.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 group"
      aria-label="WhatsApp ile iletişime geç"
    >
      <img
        src="public/images/whatsapp_logo.png"
        alt="WhatsApp Logo"
        className="h-16 w-16 rounded-full"
      />

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        WhatsApp ile yazın
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
      </div>
    </button>
  );
};

export default WhatsAppButton;
