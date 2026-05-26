import { Instagram, MessageCircle, Mail } from "lucide-react";
import logoEreni from "@/assets/logo-ereni.png";

const WA_LINK = "https://wa.me/5511966308468";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--brown-dark)" }} className="text-white">
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img
              src={logoEreni}
              alt="Ereni Rodrigues - Terapeuta"
              className="h-10 w-auto object-contain mb-4"
              style={{ filter: "brightness(0) invert(1)", opacity: 0.9 }}
            />
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.95rem",
                lineHeight: 1.6,
              }}
            >
              Terapia de Reprocessamento Generativo online para todo o Brasil.
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

          <div>
            <p
              className="text-gold-light uppercase mb-4"
              style={{ fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.2em" }}
            >
              Instagram
            </p>
            {/* TODO: substituir pelo embed do feed via Behold ou EmbedSocial */}
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square flex items-center justify-center"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "6px",
                  }}
                >
                  <Instagram
                    size={20}
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-12 pt-6 text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.4)",
              fontWeight: 300,
              fontSize: "0.85rem",
            }}
          >
            © 2026 Ereni Rodrigues · Desenvolvido por Next Assessoria
          </p>
        </div>
      </div>
    </footer>
  );
}