import { FaWhatsapp } from "react-icons/fa";
import { profile } from "../../data";

const whatsappNumber = profile.phone.replace(/\D/g, "");
const defaultMessage = encodeURIComponent(
  "Hello Jules, I found your portfolio and I'd like to connect."
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

export default function WhatsAppHelp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Jules on WhatsApp"
      title="WhatsApp me"
      className="whatsapp-help fixed bottom-6 right-6 z-50 group"
    >
      <span className="whatsapp-help-tooltip">WhatsApp me</span>
      <span className="glass-nav whatsapp-help-btn flex items-center justify-center">
        <FaWhatsapp className="text-2xl text-[#25D366]" />
      </span>
    </a>
  );
}
