import ereniHero from "@/assets/ereni-hero.jpg";

const WA_LINK = "https://wa.me/5511966308468";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-[85vh] flex flex-col justify-center pt-28 pb-12 md:pt-32"
      style={{
        background: "linear-gradient(135deg, #5C3317 0%, #6B3E1F 50%, #5C3317 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl w-full px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12 items-center">
          {/* Photo */}
          <div className="order-2 md:col-span-2 md:order-2 flex justify-center">
            <div
              className="relative w-full"
              style={{ maxWidth: "340px", aspectRatio: "3 / 4" }}
            >
              <img
                src={ereniHero}
                alt="Ereni Rodrigues, Terapeuta"
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 md:col-span-3 md:order-1 flex flex-col justify-center px-2 md:px-4 py-2">
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
            <div className="flex flex-wrap items-center gap-3 self-start">
              <a
                href="#terapia"
                className="btn-hero-gold"
              >
                <span>+ Por que fazer terapia?</span>
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-outline"
              >
                <span>Agende agora</span>
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Frase central — abaixo das colunas */}
        <div
          className="w-full flex flex-col items-center gap-4 pt-10 pb-2 px-4"
          style={{
            borderTop: "1px solid rgba(196,154,44,0.2)",
            marginTop: "2.5rem",
          }}
        >
          <svg width="24" height="16" viewBox="0 0 24 16" fill="none" aria-hidden>
            <path
              d="M0 16C0 10.667 2.667 5.333 8 0L10.667 2C7.111 6.222 5.333 10.222 5.333 14H10.667V16H0ZM13.333 16C13.333 10.667 16 5.333 21.333 0L24 2C20.444 6.222 18.667 10.222 18.667 14H24V16H13.333Z"
              fill="rgba(196,154,44,0.4)"
            />
          </svg>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(1rem, 2.2vw, 1.3rem)",
              color: "rgba(255,255,255,0.82)",
              textAlign: "center",
              maxWidth: "780px",
              lineHeight: 1.75,
              letterSpacing: "0.01em",
            }}
          >
            Você pode conseguir qualquer coisa que queira na vida, se você ajudar
            outras pessoas a conseguirem o que elas querem.
          </p>
        </div>
      </div>
    </section>
  );
}