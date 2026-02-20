import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "231777842609"; // Liberia country code + number
  const message = encodeURIComponent("Hello, I'm interested in KS Gari Cereal. I would like to learn more about ordering.");
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-transform hover:scale-110 md:h-16 md:w-16"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
    </a>
  );
}
