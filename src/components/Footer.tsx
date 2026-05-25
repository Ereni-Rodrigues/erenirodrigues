import { Instagram } from "lucide-react";

const WA_LINK = "https://wa.me/5511966308468";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--brown-dark)" }} className="text-white">
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p
              className="font-display text-white mb-4"
              style={{ fontSize: "1.4rem", fontWeight: 700 }}
            >
              Ereni Rodrigues
            </p>
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
            <ul className="space-y-2.5" style={{ fontSize: "0.95rem" }}>
              <li>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-light transition-colors"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  WhatsApp: (11) 96630-8468
                </a>
              </li>
              <li>
                <a
                  href="mailto:erenirodrigues6@gmail.com"
                  className="hover:text-gold-light transition-colors break-all"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  erenirodrigues6@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/erenirodrigueisterapeuta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-light transition-colors"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  @erenirodrigueisterapeuta
                </a>
              </li>
              {/* TODO: Facebook — aguardando link
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              */}
            </ul>
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