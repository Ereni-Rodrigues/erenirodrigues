import { Instagram, MessageCircle, Mail } from "lucide-react";
import logoEreni from "@/assets/logo-ereni.png";

const WA_LINK = "https://wa.me/5511966308468";

export function Footer() {
  return (
    <footer style={{ background: "var(--brown-dark)" }} className="w-full text-white">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-5">
          <img
            src={logoEreni}
            alt="Ereni Rodrigues - Terapeuta"
            className="h-10 w-auto object-contain self-start"
            style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
          />
          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontFamily: "Lato, sans-serif",
              fontWeight: 300,
              fontSize: "0.9rem",
              lineHeight: 1.7,
              maxWidth: "320px",
            }}
          >
            Terapia de Reprocessamento Generativo online para todo o Brasil.
            Resultados reais, desde a raiz.
          </p>
        </div>

        <div>
            <p
              className="text-gold-light uppercase mb-4"
              style={{ fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.2em" }}
            >
              Contato
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-opacity hover:opacity-80"
                style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem" }}
              >
                <MessageCircle size={18} style={{ color: "var(--gold)", flexShrink: 0 }} />
                <span>(11) 96630-8468</span>
              </a>
              <a
                href="mailto:erenirodrigues6@gmail.com"
                className="flex items-center gap-3 transition-opacity hover:opacity-80 break-all"
                style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem" }}
              >
                <Mail size={18} style={{ color: "var(--gold)", flexShrink: 0 }} />
                <span>erenirodrigues6@gmail.com</span>
              </a>
              <a
                href="https://www.instagram.com/erenirodriguesterapeuta/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-opacity hover:opacity-80"
                style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem" }}
              >
                <Instagram size={18} style={{ color: "var(--gold)", flexShrink: 0 }} />
                <span>@erenirodriguesterapeuta</span>
              </a>
            </div>
        </div>
      </div>

      <div
        style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        className="py-5 px-6 text-center"
      >
        <p
          style={{
            color: "rgba(255,255,255,0.3)",
            fontFamily: "Lato, sans-serif",
            fontWeight: 300,
            fontSize: "0.8rem",
          }}
        >
          © 2026 Ereni Rodrigues · Desenvolvido por{" "}
          <a
            href="https://nextassessoria.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(196,154,44,0.6)" }}
          >
            Next Assessoria
          </a>
        </p>
      </div>
    </footer>
  );
}