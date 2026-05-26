import { MessageCircle } from "lucide-react";
import ereniHero from "@/assets/ereni-hero.jpg";

const WA_LINK = "https://wa.me/5511966308468";

export function Hero() {
  return (
    <section id="inicio" className="min-h-[85vh] bg-bg-primary pt-28 pb-16 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12 items-center">
          {/* Photo first on mobile, right on desktop */}
          <div className="md:col-span-2 md:order-2 flex justify-center">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-6 rounded-full border-2 border-dashed pointer-events-none"
                style={{ borderColor: "rgba(196, 154, 44, 0.3)" }}
              />
              <img
                src={ereniHero}
                alt="Ereni Rodrigues - Terapeuta"
                className="relative rounded-2xl object-cover"
                style={{
                  aspectRatio: "3 / 4",
                  width: "min(320px, 80vw)",
                  objectPosition: "top",
                }}
              />
            </div>
          </div>

          <div
            className="md:col-span-3 md:order-1 rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(60,32,14,0.92) 0%, rgba(92,51,23,0.88) 100%)",
              padding: "clamp(28px, 4vw, 48px)",
              boxShadow: "0 20px 60px rgba(60,32,14,0.25)",
            }}
          >
            <p
              className="text-[0.78rem] mb-3 uppercase"
              style={{
                color: "var(--gold)",
                opacity: 0.85,
                fontWeight: 600,
                letterSpacing: "0.18em",
              }}
            >
              Atendimento online · Todo o Brasil
            </p>
            <div
              aria-hidden
              className="mb-6"
              style={{
                width: "56px",
                height: "2px",
                backgroundColor: "var(--gold)",
                opacity: 0.9,
              }}
            />
            <h1
              className="font-display leading-[1.1] mb-6"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 700 }}
            >
              <span className="block" style={{ color: "rgba(255,255,255,0.9)" }}>
                Se livre das dores que
              </span>
              <span className="block text-gold">você não causou.</span>
            </h1>
            <p
              className="mb-8 max-w-xl"
              style={{
                color: "rgba(255,255,255,0.72)",
                fontSize: "1.15rem",
                lineHeight: 1.6,
              }}
            >
              Terapia online para quem quer resultados reais, em qualquer lugar do
              Brasil.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[4px] bg-gold px-7 py-3.5 text-white uppercase transition-colors hover:bg-[#b08824]"
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 700,
                letterSpacing: "0.05em",
                fontSize: "0.95rem",
              }}
            >
              <MessageCircle size={20} />
              Agende agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}