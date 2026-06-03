import { useEffect, useState } from "react";
import logoEreni from "@/assets/logo-ereni.png";
import { WA } from "@/utils/whatsapp";

const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#terapia", label: "Terapia" },
  { href: "#metodos", label: "Métodos" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-[0_2px_12px_rgba(92,51,23,0.08)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#inicio" className="flex items-center gap-2" aria-label="Ereni Rodrigues">
          <img
            src={logoEreni}
            alt="Ereni Rodrigues - Terapeuta"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.92rem] text-text-body hover:text-[#2C4A6E] transition-colors"
                style={{ fontWeight: 400 }}
              >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-[4px] bg-gold px-4 py-2 text-white text-[0.85rem] md:text-[0.9rem] font-bold uppercase transition-colors hover:bg-[#b08824]"
          style={{ letterSpacing: "0.05em", fontFamily: "Lato, sans-serif" }}
        >
          Agende agora
        </a>
      </div>
    </header>
  );
}