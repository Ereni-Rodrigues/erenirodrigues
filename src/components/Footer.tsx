import { Instagram, MessageCircle, Mail } from "lucide-react";
import logoEreni from "@/assets/logo-ereni.png";

const WA_LINK = "https://wa.me/5511966308468";

export function Footer() {
  return (
    <footer style={{ background: "#E8DDD0" }} className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* COLUNA 1 — Identidade */}
        <div className="flex flex-col gap-5">
          <img
            src={logoEreni}
            alt="Ereni Rodrigues - Terapeuta"
            className="h-10 w-auto object-contain self-start"
            style={{ opacity: 0.9 }}
          />
          <p
            style={{
              color: "rgba(62,32,7,0.65)",
              fontFamily: "Lato, sans-serif",
              fontWeight: 300,
              fontSize: "0.9rem",
              lineHeight: 1.7,
            }}
          >
            Terapeuta de Reprocessamento Generativo
          </p>
          <p
            style={{
              color: "rgba(62,32,7,0.5)",
              fontFamily: "Lato, sans-serif",
              fontWeight: 300,
              fontSize: "0.8rem",
            }}
          >
            Atendimento online · Todo o Brasil
          </p>
        </div>

        {/* COLUNA 2 — Contato */}
        <div>
          <p
            className="uppercase mb-5"
            style={{
              color: "#B8962E",
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "0.18em",
            }}
          >
            Contato
          </p>
          <div className="flex flex-col gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
              style={{ textDecoration: "none" }}
            >
              <MessageCircle
                size={15}
                style={{ color: "#B8962E", flexShrink: 0, opacity: 0.8 }}
              />
              <span
                style={{
                  color: "rgba(62,32,7,0.75)",
                  fontFamily: "Lato",
                  fontSize: "0.88rem",
                  fontWeight: 300,
                  transition: "color 0.25s ease",
                }}
                className="group-hover:text-[#3E2007]"
              >
                (11) 96630-8468
              </span>
            </a>
            <a
              href="mailto:erenirodrigues6@gmail.com"
              className="flex items-center gap-3 group"
              style={{ textDecoration: "none" }}
            >
              <Mail
                size={15}
                style={{ color: "#B8962E", flexShrink: 0, opacity: 0.8 }}
              />
              <span
                style={{
                  color: "rgba(62,32,7,0.75)",
                  fontFamily: "Lato",
                  fontSize: "0.88rem",
                  fontWeight: 300,
                  transition: "color 0.25s ease",
                }}
                className="group-hover:text-[#3E2007]"
              >
                erenirodrigues6@gmail.com
              </span>
            </a>
            <a
              href="https://www.instagram.com/erenirodriguesterapeuta/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
              style={{ textDecoration: "none" }}
            >
              <Instagram
                size={15}
                style={{ color: "#B8962E", flexShrink: 0, opacity: 0.8 }}
              />
              <span
                style={{
                  color: "rgba(62,32,7,0.75)",
                  fontFamily: "Lato",
                  fontSize: "0.88rem",
                  fontWeight: 300,
                  transition: "color 0.25s ease",
                }}
                className="group-hover:text-[#3E2007]"
              >
                @erenirodriguesterapeuta
              </span>
            </a>
          </div>
        </div>

        {/* COLUNA 3 — Navegação */}
        <div>
          <p
            className="uppercase mb-5"
            style={{
              color: "#B8962E",
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "0.18em",
            }}
          >
            Navegação
          </p>
          <div className="flex flex-col gap-2.5">
            {[
              { label: "Início", href: "#inicio" },
              { label: "Sobre mim", href: "#sobre" },
              { label: "Por que fazer terapia", href: "#terapia" },
              { label: "O que é a TRG", href: "#trg" },
              { label: "Os 5 Métodos", href: "#metodos" },
              { label: "Depoimentos", href: "#depoimentos" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  color: "rgba(62,32,7,0.6)",
                  fontFamily: "Lato",
                  fontSize: "0.88rem",
                  fontWeight: 300,
                  textDecoration: "none",
                  transition: "color 0.25s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#3E2007")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(62,32,7,0.6)")
                }
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Linha divisória */}
      <div
        style={{ borderTop: "1px solid rgba(62,32,7,0.12)" }}
        className="max-w-6xl mx-auto"
      />

      {/* Barra inferior */}
      <div style={{ background: "#D9CDBF" }}>
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            style={{
              color: "rgba(62,32,7,0.5)",
              fontFamily: "Lato",
              fontWeight: 300,
              fontSize: "0.78rem",
            }}
          >
            &copy; 2026 Ereni Rodrigues. Todos os direitos reservados.
          </p>
          <a
            href="https://nextassessoria.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(62,32,7,0.5)",
              fontFamily: "Lato",
              fontWeight: 300,
              fontSize: "0.78rem",
              textDecoration: "none",
              transition: "color 0.25s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#3E2007")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(62,32,7,0.5)")
            }
          >
            Desenvolvido por Next Assessoria
          </a>
        </div>
      </div>
    </footer>
  );
}
