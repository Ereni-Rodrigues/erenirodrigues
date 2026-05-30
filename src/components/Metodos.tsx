const METODOS = [
  {
    n: "01",
    title: "Cronológico",
    text: "Limpa problemas emocionais desde a infância até o momento presente.",
  },
  {
    n: "02",
    title: "Somático",
    text: "Reprocessamento guiado pelas reações físicas do próprio corpo.",
  },
  {
    n: "03",
    title: "Temático",
    text: "Trabalha temas específicos como bullying, pânico ou fobias.",
  },
  {
    n: "04",
    title: "Futuro",
    text: "Prepara você para enfrentar desafios futuros com mais confiança.",
  },
  {
    n: "05",
    title: "Potencialização",
    text: "Fortalece seus sonhos, objetivos e a sua melhor versão.",
  },
];

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Metodos() {
  const head = useScrollAnimation<HTMLDivElement>();
  const list = useScrollAnimation<HTMLDivElement>();
  return (
    <section id="metodos" className="bg-bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-[700px] px-4 md:px-8">
        <div
          ref={head.ref}
          className={`text-center mb-12 animate-fade-up ${head.isVisible ? "visible" : ""}`}
        >
          <p
            className="text-gold mb-4 uppercase"
            style={{ fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.2em" }}
          >
            Como funciona
          </p>
          <h2
            className="font-display text-brown-dark"
            style={{ fontSize: "clamp(1.9rem, 3.4vw, 2.6rem)", fontWeight: 700 }}
          >
            Os 5 Métodos
          </h2>
        </div>

        <div ref={list.ref} className="space-y-4">
          {METODOS.map((m, i) => (
            <div
              key={m.n}
              className={`animate-fade-up delay-${i + 1} ${list.isVisible ? "visible" : ""}`}
            >
            <div
              className="bg-white flex items-center gap-4 p-5 shadow-[0_4px_18px_rgba(92,51,23,0.06)]"
              style={{ borderRadius: "8px", borderLeft: "3px solid #2C4A6E" }}
            >
              <div
                className="font-display text-center shrink-0"
                style={{ width: "60px", fontWeight: 700, fontSize: "2.5rem", lineHeight: 1, color: "#2C4A6E" }}
              >
                {m.n}
              </div>
              <div>
                <h3
                  className="text-brown-dark mb-1"
                  style={{ fontFamily: "Lato, sans-serif", fontWeight: 700, fontSize: "1.1rem" }}
                >
                  {m.title}
                </h3>
                <p className="text-text-muted" style={{ fontSize: "0.95rem", lineHeight: 1.55 }}>
                  {m.text}
                </p>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}