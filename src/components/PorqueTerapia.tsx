import {
  Laptop,
  MapPin,
  Clock,
  Home,
  Brain,
  Wind,
  TrendingUp,
  Heart,
  Shield,
  Star,
  type LucideIcon,
} from "lucide-react";

interface CardItem {
  icon: LucideIcon;
  title: string;
  text: string;
}

const ONLINE: CardItem[] = [
  {
    icon: Laptop,
    title: "Mesmos resultados que o presencial",
    text: "A terapia online é tão eficaz quanto a presencial. O que muda é o canal, não a qualidade do cuidado.",
  },
  {
    icon: MapPin,
    title: "Acesse de onde você estiver",
    text: "Não importa se você está em uma cidade pequena ou tem dificuldade de deslocamento. A terapia online elimina essas barreiras.",
  },
  {
    icon: Clock,
    title: "Encaixa na sua rotina",
    text: "Agende no horário do almoço, à noite ou no momento que funciona para você. Sem comprometer o seu dia.",
  },
  {
    icon: Home,
    title: "No conforto da sua casa",
    text: "Realize as sessões de onde você se sente mais segura, sem precisar sair ou enfrentar deslocamento.",
  },
];

const BENEFITS: CardItem[] = [
  {
    icon: Brain,
    title: "Autoconhecimento",
    text: "Entenda seus padrões emocionais, reações e comportamentos de forma mais profunda e honesta.",
  },
  {
    icon: Wind,
    title: "Alívio do estresse e da ansiedade",
    text: "Aprenda a lidar com as pressões do dia a dia sem que elas dominem a sua vida e roubem a sua paz.",
  },
  {
    icon: TrendingUp,
    title: "Crescimento pessoal",
    text: "Desenvolva habilidades emocionais que transformam a forma como você enfrenta os desafios.",
  },
  {
    icon: Heart,
    title: "Relacionamentos mais saudáveis",
    text: "Melhore a comunicação e os vínculos com as pessoas ao seu redor.",
  },
  {
    icon: Shield,
    title: "Suporte nos momentos críticos",
    text: "Tenha apoio especializado nas fases mais difíceis da vida, sem enfrentar tudo sozinha.",
  },
  {
    icon: Star,
    title: "Desenvolvimento contínuo",
    text: "Liberte o seu potencial e construa uma versão mais plena, livre e feliz de você.",
  },
];

function Card({ item }: { item: CardItem }) {
  const Icon = item.icon;
  return (
    <div
      className="bg-white p-6 shadow-[0_4px_18px_rgba(92,51,23,0.06)]"
      style={{ borderRadius: "8px", borderLeft: "4px solid var(--gold)" }}
    >
      <Icon size={28} className="text-gold mb-3" strokeWidth={1.75} />
      <h3
        className="text-brown-dark mb-2"
        style={{ fontFamily: "Lato, sans-serif", fontWeight: 700, fontSize: "1.05rem" }}
      >
        {item.title}
      </h3>
      <p className="text-text-muted" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
        {item.text}
      </p>
    </div>
  );
}

function BenefitCard({ item }: { item: CardItem }) {
  const Icon = item.icon;
  return (
    <div
      className="p-6 transition-all"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(196,154,44,0.25)",
        borderTop: "3px solid var(--gold)",
        borderRadius: "8px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(196,154,44,0.08)";
        e.currentTarget.style.boxShadow = "0 4px 24px rgba(196,154,44,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.04)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div
        className="mb-4 flex items-center justify-center"
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "999px",
          background: "rgba(196,154,44,0.15)",
        }}
      >
        <Icon size={22} style={{ color: "var(--gold)" }} strokeWidth={1.75} />
      </div>
      <h3
        className="mb-2"
        style={{
          fontFamily: "Lato, sans-serif",
          fontWeight: 700,
          fontSize: "1.05rem",
          color: "#FFFFFF",
        }}
      >
        {item.title}
      </h3>
      <p style={{ color: "rgba(255,255,255,0.68)", fontSize: "0.95rem", lineHeight: 1.6 }}>
        {item.text}
      </p>
    </div>
  );
}

export function PorqueTerapia() {
  return (
    <section id="terapia" className="bg-bg-primary pt-20 md:pt-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8 pb-20">
        <h2
          className="font-display text-brown-dark text-center mb-10"
          style={{ fontSize: "clamp(1.7rem, 3vw, 2.3rem)", fontWeight: 600 }}
        >
          Por que fazer terapia online?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ONLINE.map((it) => (
            <Card key={it.title} item={it} />
          ))}
        </div>
      </div>

      <div style={{ background: "var(--brown-dark)" }} className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <h2
            className="font-display text-center mb-10"
            style={{
              fontSize: "clamp(1.7rem, 3vw, 2.3rem)",
              fontWeight: 600,
              color: "#FFFFFF",
              fontFamily: "Playfair Display",
            }}
          >
            Quais são os benefícios de fazer terapia?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((it) => (
              <BenefitCard key={it.title} item={it} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}