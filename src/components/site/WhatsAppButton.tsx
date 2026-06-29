import { SITE } from "@/lib/site";

export function WhatsAppButton() {
  const msg = encodeURIComponent(
    `Hello Sthololwazi Projects, I'd like to request a quote.`,
  );
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:scale-105 hover:bg-[#1ebe5d] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
    >
      <svg
        viewBox="0 0 32 32"
        width="22"
        height="22"
        aria-hidden="true"
        fill="currentColor"
      >
        <path d="M19.11 17.21c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM16.05 5.33c-5.86 0-10.62 4.76-10.62 10.62 0 1.87.49 3.69 1.42 5.3l-1.51 5.5 5.63-1.47a10.6 10.6 0 0 0 5.08 1.29c5.86 0 10.62-4.76 10.62-10.62S21.91 5.33 16.05 5.33zm0 19.41a8.78 8.78 0 0 1-4.47-1.22l-.32-.19-3.34.87.89-3.25-.21-.33a8.78 8.78 0 1 1 16.23-4.68 8.78 8.78 0 0 1-8.78 8.8z" />
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
