const PHONE = '5511966308468';

const encode = (text: string) => encodeURIComponent(text);

export const WA = {
  // Navbar — lead ainda explorando o site
  navbar: `https://wa.me/${PHONE}?text=${encode(
    'Olá, Ereni! Acessei o seu site e quero saber mais sobre a terapia de reprocessamento generativo. Pode me ajudar?'
  )}`,

  // Hero — lead chegou agora, primeiro contato
  hero: `https://wa.me/${PHONE}?text=${encode(
    'Olá, Ereni! Vi o seu site e quero entender melhor como a terapia pode me ajudar. Tem disponibilidade para conversar?'
  )}`,

  // CTA Final — lead leu tudo, está pronto para agendar
  ctaFinal: `https://wa.me/${PHONE}?text=${encode(
    'Olá, Ereni! Terminei de conhecer o seu trabalho e quero agendar minha sessão. Qual é o próximo passo?'
  )}`,

  // Botão flutuante — pode ser acionado em qualquer seção
  float: `https://wa.me/${PHONE}?text=${encode(
    'Olá, Ereni! Vim pelo seu site e gostaria de conversar sobre como a terapia pode me ajudar.'
  )}`,

  // Footer — lead viu o site inteiro, busca contato direto
  footer: `https://wa.me/${PHONE}?text=${encode(
    'Olá, Ereni! Encontrei seu contato no site e quero saber mais sobre a terapia online.'
  )}`,
} as const;
