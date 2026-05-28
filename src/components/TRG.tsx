import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import trgIllustration from "@/assets/trg-illustration.png";

export function TRG() {
  const a = useScrollAnimation<HTMLDivElement>();
  return (
    <section id="trg" className="bg-bg-secondary py-20 md:py-28">
      <div
        ref={a.ref}
        className={`mx-auto max-w-[1000px] px-4 md:px-8 animate-fade-up ${a.isVisible ? "visible" : ""}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Text content */}
          <div className="text-center md:text-left order-1 md:order-1">
            <p
              className="text-gold mb-4 uppercase"
              style={{ fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.2em" }}
            >
              O que é
            </p>
            <h2
              className="font-display text-brown-dark mb-6"
              style={{ fontSize: "clamp(1.9rem, 3.4vw, 2.6rem)", fontWeight: 700 }}
            >
              A Terapia de Reprocessamento Generativo
            </h2>
            <div
              className="space-y-5 text-text-body text-left"
              style={{ fontSize: "1.05rem", lineHeight: 1.8 }}
            >
              <p>
                A TRG é uma abordagem terapêutica que vai além dos sintomas. Em vez de
                tratar apenas a ansiedade, o medo ou a depressão, ela busca a origem — o
                trauma original que criou esse padrão emocional.
              </p>
              <p>
                Com resultados rápidos e práticos, é possível sentir mudanças reais já
                nas primeiras sessões.
              </p>
            </div>

            <div
              className="mt-10 inline-block bg-gold text-white"
              style={{ borderRadius: "8px", padding: "24px 40px" }}
            >
              <p
                className="font-display"
                style={{ fontWeight: 600, fontSize: "1.3rem", lineHeight: 1.4 }}
              >
                Não tratamos os sintomas. Resolvemos a causa.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center md:justify-end order-2 md:order-2">
            <img
              src={trgIllustration}
              alt="Ilustração mente e coração nas mãos"
              className="w-full h-auto object-contain"
              style={{ maxWidth: "400px", borderRadius: "12px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}