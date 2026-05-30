import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DEPOIMENTOS = [
  {
    nome: "M. A.",
    texto:
      "Antes de iniciar o processo terapêutico com a Ereni, eu vivia com choro constante, ansiedade e sem sentir prazer em nada. Parecia que a minha vida não tinha sentido — eu vivia presa no passado. Hoje me sinto muito bem. As mágoas foram embora, a ansiedade desapareceu. Estou ótima. Recomendo muito!",
  },
  {
    nome: "A.",
    texto:
      "Antes da terapia eu vivia angustiada, com muita ansiedade. Cheguei a ficar dois anos em casa, com medo de sair e de voltar a trabalhar. Após iniciar o processo, estou muito bem, voltei a trabalhar, saio de casa sem dificuldade e me sinto livre. Obrigada!",
  },
  {
    nome: "M.",
    texto:
      "Estava passando por momentos muito difíceis, muita ansiedade, medo e angústia. Após iniciar o processo com a Ereni, me sinto muito bem. Recomendo muito!",
  },
];

export function Depoimentos() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % DEPOIMENTOS.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused]);

  const go = (delta: number) =>
    setIndex((i) => (i + delta + DEPOIMENTOS.length) % DEPOIMENTOS.length);

  return (
    <section id="depoimentos" className="bg-bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <div className="text-center mb-12">
          <p
            className="text-gold mb-4 uppercase"
            style={{ fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.2em" }}
          >
            Depoimentos
          </p>
          <h2
            className="font-display text-brown-dark"
            style={{ fontSize: "clamp(1.9rem, 3.4vw, 2.6rem)", fontWeight: 700 }}
          >
            Resultados que falam por si
          </h2>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            onClick={() => go(-1)}
            aria-label="Depoimento anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-brown-dark shadow hover:text-gold transition-colors"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Próximo depoimento"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-brown-dark shadow hover:text-gold transition-colors"
          >
            <ChevronRight size={22} />
          </button>

          <div
            className="mx-auto bg-white relative overflow-hidden"
            style={{
              maxWidth: "680px",
              borderRadius: "12px",
              padding: "40px",
              boxShadow: "0 8px 30px rgba(92,51,23,0.08)",
            }}
          >
            <span
              aria-hidden
              className="font-display block"
              style={{
                color: "#2C4A6E",
                opacity: 0.4,
                fontSize: "4rem",
                lineHeight: 0.6,
                marginBottom: "12px",
              }}
            >
              “
            </span>
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDuration: "0.45s" }}
            >
              <p
                className="text-text-body italic mb-6"
                style={{ fontSize: "1.05rem", lineHeight: 1.8 }}
              >
                {DEPOIMENTOS[index].texto}
              </p>
              <p
                className="text-brown-dark uppercase"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  letterSpacing: "0.1em",
                }}
              >
                — {DEPOIMENTOS[index].nome}
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {DEPOIMENTOS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ir para depoimento ${i + 1}`}
                className="h-2.5 rounded-full transition-all"
                style={{
                  width: i === index ? "26px" : "10px",
                  backgroundColor: i === index ? "var(--gold)" : "rgba(196,154,44,0.35)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}