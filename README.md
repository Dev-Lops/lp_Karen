# 💄 Landing Page - Karen Frazão (Fabulos Hair)

![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue)
![Vite](https://img.shields.io/badge/Vite-6.0.0-purple)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4.3-cyan)

Landing page e-commerce para produtos de beleza profissional da marca Fabulos Hair, desenvolvida por Karen Frazão.

## 🚀 Tecnologias

### Core

- **React 18.3.1** - Biblioteca UI
- **TypeScript 5.6.3** - Tipagem estática
- **Vite 6.0** - Build tool e dev server
- **Tailwind CSS 3.4.3** - Framework CSS utility-first

### Estilização

- **Styled Components 6.1.13** - CSS-in-JS
- **Framer Motion 11.18.2** - Animações
- **Animate.css** - Animações CSS
- **AOS** - Scroll animations

### UI Components

- **Radix UI** - Componentes acessíveis (Accordion, Dialog, Tooltip)
- **Lucide React** - Ícones
- **React Icons** - Biblioteca de ícones

### Funcionalidades

- **Embla Carousel** - Carrossel de produtos
- **React Slick** - Slider de depoimentos
- **Axios** - Requisições HTTP
- **Supabase** - Backend as a Service
- **Canvas Confetti** - Efeitos de confete

### Analytics

- **Vercel Analytics** - Métricas de acesso
- **Vercel Speed Insights** - Performance monitoring
- **Google Analytics** - Tracking de usuários

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ ou superior
- pnpm (recomendado) ou npm

### Passo a passo

1. **Clone o repositório**

```bash
git clone https://github.com/Dev-Lops/lp_Karen.git
cd lp_Karen
```

2. **Instale as dependências**

```bash
pnpm install
# ou
npm install
```

3. **Configure as variáveis de ambiente**

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas credenciais:

```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anonima-aqui
```

4. **Execute o projeto em modo de desenvolvimento**

```bash
pnpm dev
# ou
npm run dev
```

O site estará disponível em `http://localhost:5173`

## 🏗️ Build para Produção

```bash
pnpm build
# ou
npm run build
```

Para testar o build localmente:

```bash
pnpm preview
# ou
npm run preview
```

## 📁 Estrutura do Projeto

```
lp_Karen/
├── public/              # Assets estáticos (imagens, fontes, vídeos)
│   ├── fonts/          # Fontes customizadas
│   ├── icons/          # Ícones SVG
│   └── *.avif          # Imagens otimizadas
├── src/
│   ├── @types/         # Declarações de tipos TypeScript
│   ├── assets/         # Assets importados no código
│   ├── components/     # Componentes reutilizáveis
│   │   ├── ui/         # Componentes base (shadcn/ui)
│   │   ├── Button/
│   │   ├── CartSidebar/
│   │   ├── Countdown/
│   │   ├── FAQ'sComponets/
│   │   └── ...
│   ├── Sessions/       # Seções da landing page
│   │   ├── About/
│   │   ├── Benefits/
│   │   ├── CTA/
│   │   ├── Products/
│   │   ├── Testemonials/
│   │   └── ...
│   ├── lib/            # Utilitários e configs
│   │   ├── supabasse.ts  # Cliente Supabase
│   │   └── utils.ts
│   ├── styles/         # Estilos globais
│   │   ├── Global.css
│   │   ├── GlobalStyles.ts
│   │   └── theme.ts
│   ├── utils/          # Funções auxiliares
│   │   ├── data.ts     # Dados dos produtos
│   │   └── whatsapp.ts # Integração WhatsApp
│   ├── App.tsx
│   ├── main.tsx
│   └── Page.tsx        # Página principal
├── .env.example        # Exemplo de variáveis de ambiente
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Funcionalidades

### ✅ Implementadas

- ✨ Landing page responsiva
- 🛒 Carrinho de compras funcional
- 💬 Integração com WhatsApp para checkout
- ⏱️ Countdown para promoções
- 🎠 Carrossel de produtos
- 💝 Seção de depoimentos
- ❓ FAQ com accordion
- 🖼️ Lazy loading de imagens (formato AVIF)
- 📊 Analytics e métricas de performance
- 🎉 Animações e efeitos visuais

### 📝 Produtos

- Ampola de Reestruturação
- Sérum Fabulos Premium
- Kit Alisamento Natural
- Máscara THERAPY
- Escova Fabulos Hair
- Perfume Antifrizz
- Reestruturador Bifásico
- Shampoo e Booster CMC

## 🔧 Comandos Disponíveis

| Comando        | Descrição                          |
| -------------- | ---------------------------------- |
| `pnpm dev`     | Inicia servidor de desenvolvimento |
| `pnpm build`   | Gera build de produção             |
| `pnpm preview` | Preview do build de produção       |
| `pnpm lint`    | Executa linter ESLint              |

## 🌐 Deploy

O projeto está configurado para deploy na **Vercel** e **Firebase Hosting**.

### Vercel (Recomendado)

1. Conecte o repositório no [Vercel Dashboard](https://vercel.com)
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Firebase Hosting

```bash
firebase deploy
```

## 🔐 Variáveis de Ambiente

| Variável                 | Descrição               | Obrigatória |
| ------------------------ | ----------------------- | ----------- |
| `VITE_SUPABASE_URL`      | URL do projeto Supabase | ✅ Sim      |
| `VITE_SUPABASE_ANON_KEY` | Chave anônima Supabase  | ✅ Sim      |

## 📱 Contato WhatsApp

O checkout é realizado via WhatsApp. O número configurado é:

- **+55 92 99378-7566**

Para alterar, edite em `src/components/ProductsList/index.tsx`:

```typescript
const phoneNumber = '5592993787566' // Seu número aqui
```

## 🐛 Problemas Conhecidos

- ⚠️ Vídeo grande em `public/karen_frazão (1080p).mp4.mov` (~53MB) - considerar otimização ou hospedagem em CDN
- 📦 Múltiplas bibliotecas de carrossel - considerar consolidação

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch: `git checkout -b feature/nova-feature`
3. Commit suas mudanças: `git commit -m 'Adiciona nova feature'`
4. Push para a branch: `git push origin feature/nova-feature`
5. Abra um Pull Request

## 📄 Licença

Todos os direitos reservados © 2025 Studio Karen Frazão

## 👨‍💻 Autor

**Dev-Lops**

- GitHub: [@Dev-Lops](https://github.com/Dev-Lops)

## 🙏 Agradecimentos

- Design e conceito: Karen Frazão
- Imagens otimizadas em formato AVIF
- Integração com Supabase para backend

---

**Fabulos Hair** - Produtos profissionais para cabelos saudáveis e lindos! 💇‍♀️✨
