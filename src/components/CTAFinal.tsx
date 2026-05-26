import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WA_LINK = "https://wa.me/5511966308468";

export function CTAFinal() {
  const a = useScrollAnimation<HTMLDivElement>();
  return (
    <section
      id="contato"
      className="py-24 md:py-32"
      style={{
        background:
          "linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)",
      }}
    >
      <div
        ref={a.ref}
        className={`mx-auto max-w-3xl px-4 md:px-8 text-center animate-fade-up ${a.isVisible ? "visible" : ""}`}
      >
        <h2
          className="font-display text-brown-dark mb-5"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}
        >
          Pronta para se libertar?
        </h2>
        <p
          className="text-text-muted mb-10"
          style={{ fontSize: "1.1rem", lineHeight: 1.6 }}
        >
          Agende sua sessão online agora e dê o primeiro passo.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-[4px] bg-gold text-white uppercase transition-colors hover:bg-[#b08824]"
          style={{
            fontFamily: "Lato, sans-serif",
            fontWeight: 700,
            letterSpacing: "0.05em",
            fontSize: "1.1rem",
            padding: "16px 48px",
          }}
        >
          Agende agora
        </a>
      </div>
    </section>
  );
}