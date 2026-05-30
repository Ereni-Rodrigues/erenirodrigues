import { Target, Zap, Globe, type LucideIcon } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ITEMS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Target,
    title: "Atua na raiz",
    text: "Não apenas nos sintomas superficiais — vamos à origem do trauma.",
  },
  {
    icon: Zap,
    title: "Resultados rápidos",
    text: "Mudanças reais e perceptíveis já nas primeiras sessões.",
  },
  {
    icon: Globe,
    title: "100% online",
    text: "Atende em qualquer lugar do Brasil, no conforto da sua casa.",
  },
];

export function Diferenciais() {
  const head = useScrollAnimation<HTMLDivElement>();
  const grid = useScrollAnimation<HTMLDivElement>();
  return (
    <section
      id="diferenciais"
      className="py-20 md:py-28"
      style={{ backgroundColor: "#F5EFE6" }}
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div
          ref={head.ref}
          className={`text-center mb-12 animate-fade-up ${head.isVisible ? "visible" : ""}`}
        >
          <p
            className="mb-4 uppercase"
            style={{
              color: "var(--gold-light)",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.2em",
            }}
          >
            Por que a Ereni
          </p>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(1.9rem, 3.4vw, 2.6rem)", fontWeight: 600 }}
          >
            A escolha certa para a sua transformação
          </h2>
        </div>

        <div ref={grid.ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ITEMS.map((it, i) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                className={`animate-fade-up delay-${i + 1} ${grid.isVisible ? "visible" : ""}`}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(196,154,44,0.35)",
                  borderRadius: "8px",
                  padding: "32px",
                }}
              >
                <Icon size={32} className="mb-4" style={{ color: "var(--gold)" }} strokeWidth={1.75} />
                <h3
                  className="mb-2"
                  style={{ fontFamily: "Lato, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#3E2007" }}
                >
                  {it.title}
                </h3>
                <p style={{ color: "rgba(62,32,7,0.7)", fontSize: "0.98rem", lineHeight: 1.6 }}>
                  {it.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}