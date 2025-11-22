# 📋 Melhorias Recomendadas - LP Karen Frazão

Este documento lista as melhorias sugeridas para otimizar o projeto.

## 🚨 PRIORIDADE ALTA

### 1. Otimizar Vídeo Grande (53MB)

**Problema**: O arquivo `public/karen_frazão (1080p).mp4.mov` tem 53MB e impacta muito o carregamento.

**Soluções**:

- [ ] Comprimir o vídeo usando FFmpeg:
  ```bash
  ffmpeg -i "karen_frazão (1080p).mp4.mov" -vcodec libx264 -crf 28 -preset fast karen_frazao_otimizado.mp4
  ```
- [ ] Converter para WebM (melhor compressão):
  ```bash
  ffmpeg -i "karen_frazão (1080p).mp4.mov" -c:v libvpx-vp9 -crf 30 -b:v 0 karen_frazao.webm
  ```
- [ ] **Melhor opção**: Hospedar em CDN (YouTube, Vimeo, Cloudflare Stream)
- [ ] Usar thumbnail e carregar vídeo sob demanda

---

### 2. Remover Dependências Duplicadas

#### Bibliotecas de Carrossel (Escolher UMA)

```bash
# Manter apenas Embla Carousel (já está sendo usado)
pnpm remove flickity react-flickity-component react-slick slick-carousel swiper keen-slider @splidejs/splide @splidejs/react-splide
```

#### Frameworks CSS Redundantes

```bash
# Se usa Tailwind, remover Bootstrap e Chakra
pnpm remove bootstrap react-bootstrap @chakra-ui/react
```

#### Ícones Duplicados

```bash
# Manter apenas lucide-react (mais leve e moderno)
pnpm remove feather-icons
```

**Impacto**: Redução de ~40-50% no bundle size

---

### 3. Criar Arquivo .env Local

```bash
# Copie o exemplo e adicione suas credenciais
cp .env.example .env
```

Depois edite `.env` com suas credenciais reais do Supabase.

---

## ⚠️ PRIORIDADE MÉDIA

### 4. Implementar Code Splitting

Adicionar lazy loading para componentes pesados:

```typescript
// src/Page.tsx
import { lazy, Suspense } from 'react'

const TestimonialSectionComponent = lazy(
  () => import('./Sessions/Testemonials')
)
const ProductList = lazy(() => import('./Sessions/ProductsList'))

export const LandingPage = () => {
  return (
    <Container>
      <About />
      <CTA />
      <Suspense fallback={<div>Carregando...</div>}>
        <ProductList />
        <Product />
        <TestimonialSectionComponent />
      </Suspense>
      {/* ... */}
    </Container>
  )
}
```

---

### 5. Adicionar Meta Tags SEO

```html
<!-- index.html -->
<head>
  <!-- SEO Básico -->
  <meta
    name="description"
    content="Produtos profissionais Fabulos Hair. Ampolas, sérums e kits para cabelos saudáveis. Compre agora com desconto!"
  />
  <meta
    name="keywords"
    content="fabulos hair, karen frazão, produtos capilares, ampola capilar, sérum capilar"
  />
  <meta name="author" content="Karen Frazão" />

  <!-- Open Graph (Facebook/WhatsApp) -->
  <meta property="og:title" content="Karen Frazão - Fabulos Hair" />
  <meta
    property="og:description"
    content="Produtos profissionais para cabelos saudáveis e lindos"
  />
  <meta property="og:image" content="https://seu-dominio.com/og-image.jpg" />
  <meta property="og:url" content="https://seu-dominio.com" />
  <meta property="og:type" content="website" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Karen Frazão - Fabulos Hair" />
  <meta
    name="twitter:description"
    content="Produtos profissionais para cabelos saudáveis"
  />
  <meta name="twitter:image" content="https://seu-dominio.com/og-image.jpg" />
</head>
```

---

### 6. Variabilizar Datas de Promoção

Mover datas hardcoded para arquivo de configuração:

```typescript
// src/config/promotions.ts
export const promotions = {
  current: {
    startDate: '2025-12-01T00:00:00-03:00',
    endDate: '2025-12-31T23:59:59-03:00',
    discounts: {
      category1: 0.1, // 10%
      category2: 0.2, // 20%
      category3: 0.4, // 40%
    },
  },
}
```

---

### 7. Adicionar Testes

Instalar e configurar Vitest:

```bash
pnpm add -D vitest @testing-library/react @testing-library/jest-dom
```

```typescript
// src/components/Button/__tests__/Button.test.tsx
import { render, screen } from '@testing-library/react'
import { Button } from '../index'

describe('Button', () => {
  it('deve renderizar corretamente', () => {
    render(<Button>Clique aqui</Button>)
    expect(screen.getByText('Clique aqui')).toBeInTheDocument()
  })
})
```

---

## 💡 PRIORIDADE BAIXA

### 8. Acessibilidade

- [ ] Adicionar `aria-label` em botões de ícone
- [ ] Melhorar contraste de cores (verificar com WCAG)
- [ ] Adicionar `alt` text descritivo em todas as imagens
- [ ] Testar navegação por teclado (Tab, Enter, Esc)

### 9. Performance

- [ ] Implementar Service Worker para cache
- [ ] Adicionar preload para fontes críticas
- [ ] Otimizar imagens com `srcset` para responsive images
- [ ] Adicionar `rel="preconnect"` para Google Fonts

### 10. Monitoramento de Erros

Adicionar Sentry para capturar erros em produção:

```bash
pnpm add @sentry/react
```

```typescript
// src/main.tsx
import * as Sentry from '@sentry/react'

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  environment: import.meta.env.MODE,
})
```

---

## 📊 Resultado Esperado Após Melhorias

| Métrica          | Antes   | Depois  | Melhoria |
| ---------------- | ------- | ------- | -------- |
| Bundle Size      | ~2-3 MB | ~800 KB | 60-70% ↓ |
| Lighthouse Score | 60-70   | 90-95   | 30-40% ↑ |
| First Load       | 3-5s    | 1-2s    | 60% ↓    |
| Dependências     | 60+     | 35-40   | 40% ↓    |

---

## 🔄 Ordem de Implementação Recomendada

1. ✅ Otimizar vídeo (impacto imediato)
2. ✅ Remover dependências não usadas
3. ✅ Criar arquivo .env
4. Implementar code splitting
5. Adicionar meta tags SEO
6. Variabilizar configurações
7. Adicionar testes
8. Melhorias de acessibilidade
9. Performance avançada
10. Monitoramento de erros

---

**Última atualização**: Novembro 2025
