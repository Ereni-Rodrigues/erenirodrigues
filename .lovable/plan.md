
# Site one-page — Ereni Rodrigues (Terapeuta TRG)

Implementação fiel à especificação fornecida, em React + TypeScript + Tailwind CSS dentro da estrutura TanStack Start já existente. Tudo será renderizado a partir de `src/routes/index.tsx`, sem novas rotas.

## Tokens e tipografia

Atualizar `src/styles.css`:
- Substituir os tokens atuais por variáveis em `:root` com os hex exatos do brief (`--bg-primary`, `--bg-secondary`, `--gold`, `--gold-light`, `--brown-dark`, `--brown-mid`, `--text-body`, `--text-muted`, `--white`).
- Mapear no `@theme inline` para utilitários Tailwind (`bg-bg-primary`, `text-brown-dark`, `bg-gold`, etc.).
- Definir `--font-display: 'Playfair Display'` e `--font-sans: 'Lato'` e registrar como `--font-*` no theme.
- `body` com `background: var(--bg-primary)` e `font-family: Lato`.
- Border radius padrão: 8px cards / 4px botões.
- Keyframe `fade-in-up` (opacity 0→1, translateY 20→0, 0.5s) — única animação além do pulso do botão flutuante.
- Sem dark mode.

Em `src/routes/__root.tsx` adicionar no `head().links` os `<link>` do Google Fonts (preconnect + Playfair Display 400/600/700 + Lato 300/400/700) e atualizar `meta` (title/description/og em pt-BR) — sem alterar a estrutura do shell.

## Componentes novos

Todos sob `src/components/`:

1. `Navbar.tsx` — fixa, fundo branco com `backdrop-blur` e sombra ao rolar (listener de scroll). Logo à esquerda (48px desktop / 36px mobile), links âncora apenas em `md+` (Início, Sobre, Terapia, Métodos, Depoimentos, Contato), botão "Agende agora" dourado à direita. Sem hamburger.
2. `Hero.tsx` — seção `#inicio`, grid 60/40 desktop, empilhado mobile, com eyebrow, headline em duas cores, subtítulo, CTA WhatsApp com ícone `MessageCircle`, e placeholder de foto 3:4 com círculo pontilhado decorativo atrás.
3. `Sobre.tsx` — seção `#sobre`, layout 40/60 com placeholder + texto biográfico do brief.
4. `PorqueTerapia.tsx` — seção `#terapia`, dois blocos (4 cards 2×2 e 6 cards 3×2) com borda esquerda dourada e ícones lucide (`Laptop`, `MapPin`, `Clock`, `Home`, `Brain`, `Wind`, `TrendingUp`, `Heart`, `Shield`, `Star`).
5. `TRG.tsx` — seção `#trg`, conteúdo centralizado (max-w 800px) + card destaque dourado.
6. `Metodos.tsx` — seção `#metodos`, 5 cards verticais com numeral dourado à esquerda.
7. `Diferenciais.tsx` — seção `#diferenciais`, fundo `--brown-dark`, 3 cards com ícones `Target`, `Zap`, `Globe`.
8. `Depoimentos.tsx` — seção `#depoimentos`, carrossel próprio com `useState` + `setInterval` (5000ms), dots dourados, setas laterais, aspas decorativas, 3 depoimentos do brief.
9. `CTAFinal.tsx` — seção `#contato`, gradiente bg-primary → bg-secondary, título + subtítulo + botão grande.
10. `Footer.tsx` — fundo `--brown-dark`, 3 colunas (logo com `filter: brightness(0) invert(1)` + descrição; contato com WhatsApp/email/Instagram e Facebook como comentário TODO; grid 2×3 placeholder Instagram com TODO comment), copyright centralizado.
11. `WhatsAppFloat.tsx` — botão fixo 56px verde `#25D366`, SVG WhatsApp branco, tooltip esquerda no hover (desktop), animação `pulse` a cada 3s, hover scale 1.1.
12. `FadeIn.tsx` — wrapper utilitário com `IntersectionObserver` que aplica a classe `animate-fade-in-up` quando a seção entra na viewport (usado em cada seção).

`src/routes/index.tsx` é reescrito para renderizar, em ordem: `<Navbar />`, `<main>` com as 8 seções envoltas em `<FadeIn>`, `<Footer />`, `<WhatsAppFloat />`.

## Assets

- Logo: importar de `src/assets/Logo_Oficial_-_Ereni_Rodrigues_-_Sem_fundo.png` no Navbar e Footer. **O arquivo PNG do logo ainda não está no projeto** — vou criar os componentes referenciando esse caminho e, se o build falhar por arquivo ausente, troco temporariamente por um placeholder textual "Ereni Rodrigues" em Playfair até você enviar o PNG. Por favor, anexe o logo no próximo turno se quiser que ele apareça já na primeira build.
- Fotos da Ereni: ficam como placeholders (retângulo `--bg-secondary` 3:4, ícone `Camera` + texto "Foto da Ereni") nas seções Hero e Sobre, conforme spec.

## Links e dados fixos

- Todos os CTAs WhatsApp → `https://wa.me/5511966308468` com `target="_blank" rel="noopener noreferrer"`.
- Email: `mailto:erenirodrigues6@gmail.com`.
- Instagram: `https://instagram.com/erenirodrigueisterapeuta`.
- Facebook: placeholder comentado.

## Detalhes técnicos

- Sem novas dependências: `lucide-react` já está no projeto; carrossel é state nativo + `setInterval` com cleanup no `useEffect`.
- Smooth scroll via `html { scroll-behavior: smooth }` em `styles.css` e `scroll-margin-top` nas seções para compensar a navbar fixa.
- Responsividade mobile-first: classes Tailwind `md:`/`lg:` para os breakpoints; testado mentalmente em 375 / 768 / 1280.
- Sem alterações em arquivos fora deste escopo (router, server, configs).

## Checklist de aceitação (verificado ao final)

Renderização 375/768/1280, navbar fixa com scroll suave, botão flutuante visível, carrossel auto + manual, contraste OK no fundo escuro, logo no navbar e footer, links WhatsApp corretos, Google Fonts carregando, animações restritas a fade-in + pulse, placeholders de foto marcados, build TypeScript limpa.
