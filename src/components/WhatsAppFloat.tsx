const WA_LINK = "https://wa.me/5511966308468";

export function WhatsAppFloat() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agende sua sessão pelo WhatsApp"
      className="group fixed flex items-center justify-center transition-transform hover:scale-110 animate-wa-pulse"
      style={{
        bottom: "24px",
        right: "24px",
        zIndex: 100,
        width: "56px",
        height: "56px",
        borderRadius: "9999px",
        backgroundColor: "#25D366",
        boxShadow: "0 6px 18px rgba(37,211,102,0.45)",
      }}
    >
      <span
        className="pointer-events-none hidden md:block absolute right-[68px] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-white px-3 py-1.5 text-sm text-brown-dark opacity-0 shadow-md transition-opacity group-hover:opacity-100"
        style={{ fontFamily: "Lato, sans-serif" }}
      >
        Agende sua sessão
      </span>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="white"
        aria-hidden="true"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.5-1.318.215-.487.215-.9.143-.99-.072-.144-.286-.215-.6-.387z" />
        <path d="M16.063 0H16C7.18 0 0 7.18 0 16c0 3.5 1.13 6.74 3.05 9.4L1.05 31.36l6.16-1.97A15.94 15.94 0 0 0 16 32c8.82 0 16-7.18 16-16S24.882 0 16.063 0zm0 28.84c-2.71 0-5.23-.83-7.32-2.25l-5.12 1.64 1.66-4.94a12.84 12.84 0 0 1-2.42-7.55C2.86 8.61 8.74 2.74 16.06 2.74S29.26 8.61 29.26 15.94c0 7.32-5.88 13.2-13.2 13.2z" />
      </svg>
    </a>
  );
}