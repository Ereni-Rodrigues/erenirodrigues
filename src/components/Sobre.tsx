import ereniSobre from "@/assets/ereni-sobre.jpg";

export function Sobre() {
  return (
    <section id="sobre" className="bg-bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-14 items-center">
          <div className="md:col-span-2 flex justify-center">
            <div className="relative w-full">
              <img
                src={ereniSobre}
                alt="Ereni Rodrigues"
                className="w-full h-auto object-cover rounded-2xl"
                style={{ maxHeight: "520px", objectPosition: "center top" }}
              />
            </div>
          </div>

          <div className="md:col-span-3">
            <p
              className="text-gold mb-4 uppercase"
              style={{ fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.2em" }}
            >
              Sobre mim
            </p>
            <h2
              className="font-display text-brown-dark mb-6"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 600 }}
            >
              Como me tornei terapeuta?
            </h2>
            <div
              className="space-y-5 text-text-body"
              style={{ fontSize: "1.05rem", lineHeight: 1.8 }}
            >
              <p>
                Antes de me tornar terapeuta, trabalhei anos em algumas outras áreas,
                como manicure, depiladora e designer de sobrancelhas. Durante esse
                tempo, enfrentei a depressão. Passei por psicólogos, psiquiatras e
                antidepressivos. Melhorava por um tempo, mas bastava um gatilho e
                tudo voltava.
              </p>
              <p>
                Cansada desse ciclo, busquei uma alternativa. Foi quando encontrei a
                Terapia de Reprocessamento Generativo. Fiz o curso, me tratei com uma
                colega terapeuta e me curei. Me livrei do trauma que me prendia.
              </p>
              <p>
                Hoje ajudo mulheres e homens a fazerem o mesmo: se libertarem de seus
                traumas e viverem com mais leveza, assertividade e propósito.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}