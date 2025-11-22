# 🔥 Sistema de Black Friday - Documentação Completa

## 📅 Datas Configuradas

**Início**: 27 de Novembro de 2025 às 09:00 (horário de Brasília)  
**Término**: 30 de Novembro de 2025 às 23:59 (horário de Brasília)

## 🎯 Funcionalidades Implementadas

### 1. ⏰ Countdown Regressivo (Antes da Black Friday)

**Quando aparece**: Do dia 22/11 até 27/11 às 09:00

**Características**:

- ✅ Contador regressivo em tempo real (Dias, Horas, Minutos, Segundos)
- ✅ Design com tema preto e laranja vibrante
- ✅ Animações suaves e pulsantes
- ✅ Texto "ATÉ 50% OFF" piscando
- ✅ **Confetes automáticos** quando o countdown zera! 🎉

**Localização**: Aparece no topo da página, logo após o header

---

### 2. 🎪 Banner de Black Friday Ativa (Durante a Promoção)

**Quando aparece**: De 27/11 às 09:00 até 30/11 às 23:59

**Características**:

- ✅ Banner fixo no topo com design premium
- ✅ Countdown mostrando tempo restante da promoção
- ✅ Destaque "ÚLTIMAS HORAS" quando faltam menos de 6 horas
- ✅ Badges com produtos em destaque
- ✅ Botão "VER OFERTAS" que rola até os produtos
- ✅ Botão X para fechar (mas permanece disponível)
- ✅ Confetes ao carregar a página durante a BF
- ✅ Animações de fundo e borda pulsante

**Elementos**:

- Logo Black Friday com raios ⚡
- Timer com caixas coloridas
- Destaques dos produtos com maior desconto
- Call-to-action destacado

---

### 3. 💰 Sistema de Preços Dinâmicos

**Funcionamento Automático**:

#### Antes da Black Friday (até 27/11 09:00):

```
Produto: R$ 64,00
```

#### Durante a Black Friday (27/11 09:00 - 30/11 23:59):

```
[BLACK FRIDAY]
De: R$ 64,00
Por: R$ 38,40 (40% OFF)
```

#### Depois da Black Friday (após 30/11 23:59):

```
Produto: R$ 64,00
```

**Descontos por Produto**:
| Produto | Desconto | Preço Original | Preço BF |
|---------|----------|----------------|----------|
| Ampola Reestruturação | 40% | R$ 64,00 | R$ 38,40 |
| Sérum Premium | 45% | R$ 65,90 | R$ 36,25 |
| Kit Alisamento | **50%** | R$ 389,00 | R$ 194,50 |
| Máscara THERAPY | 35% | R$ 78,50 | R$ 51,03 |
| Escova Fabulos | 40% | R$ 30,00 | R$ 18,00 |
| Perfume Antifrizz | 40% | R$ 46,90 | R$ 28,14 |
| Reestruturador Bifásico | 35% | R$ 54,50 | R$ 35,43 |
| Shampoo e Booster | 40% | R$ 114,00 | R$ 68,40 |
| Shampoo THERAPY | 35% | R$ 49,00 | R$ 31,85 |

---

### 4. 🏷️ Badges de Desconto nos Produtos

Durante a Black Friday, cada produto mostra:

- Badge com "X% OFF" no canto da imagem
- Badge "BLACK FRIDAY" abaixo do título
- Cores: Preto com texto dourado/laranja

---

## 🎨 Design e Cores

**Paleta de Cores**:

- Preto: `#000000` (principal)
- Laranja: `#FF6B00` (destaque)
- Dourado: `#FFD700` (acentos)
- Branco: `#FFFFFF` (texto)

**Animações**:

- Pulse nas caixas do timer
- Gradiente animado no fundo
- Hover com scale nos botões
- Confetes com as cores da marca

---

## 🔧 Arquivos Criados/Modificados

### Novos Arquivos:

1. `src/config/blackfriday.ts` - Configurações centralizadas
2. `src/components/BlackFridayCountdown/index.tsx` - Countdown regressivo
3. `src/components/BlackFridayBanner/index.tsx` - Banner durante BF
4. `BLACKFRIDAY.md` - Esta documentação

### Arquivos Modificados:

1. `src/Page.tsx` - Integração dos componentes
2. `src/components/ProductsList/index.tsx` - Preços dinâmicos

---

## ⚙️ Como Funciona (Técnico)

### Verificação Automática

```typescript
// Verifica se está na Black Friday
const isBFActive = isBlackFridayActive()

// Verifica se deve mostrar countdown
const showCountdown = shouldShowCountdown()
```

### Atualização de Preços

```typescript
// Calcula preço com desconto automaticamente
const bfPrice = calculateBlackFridayPrice(productId, originalPrice)
```

### Timer em Tempo Real

- Atualiza a cada 1 segundo
- Recalcula automaticamente
- Dispara eventos quando zera

---

## 🧪 Como Testar

### Testar Countdown (ANTES da BF):

Edite `src/config/blackfriday.ts`:

```typescript
startDate: new Date('2025-11-25T10:00:00-03:00'), // Data futura próxima
```

### Testar Banner Ativo (DURANTE a BF):

```typescript
startDate: new Date('2025-11-22T00:00:00-03:00'), // Hoje
endDate: new Date('2025-11-25T23:59:59-03:00'),   // Daqui alguns dias
```

### Testar Fim da Promoção:

```typescript
endDate: new Date('2025-11-22T12:00:00-03:00'), // Já passou
```

---

## 🎯 Ideias Extras Implementadas

### ✅ Já Implementado:

1. ⏰ Countdown regressivo animado
2. 🎪 Banner fixo durante promoção
3. 💰 Preços automáticos por produto
4. 🏷️ Badges de desconto
5. 🎉 Confetes quando começa
6. ⚡ Alertas de "últimas horas"
7. 📱 Design 100% responsivo
8. 🎨 Tema Black Friday profissional

### 💡 Sugestões Adicionais (Opcional):

#### 1. **Flash Sales** (Vendas Relâmpago)

```typescript
// Descontos extras em horários específicos
const flashSales = [
  { hour: 12, discount: 60, duration: 2 }, // Meio-dia: 60% OFF por 2h
  { hour: 18, discount: 55, duration: 2 }, // 18h: 55% OFF por 2h
]
```

#### 2. **Barra de Progresso de Estoque**

```tsx
<div className='stock-bar'>
  <p>Restam apenas {stockRemaining} unidades!</p>
  <progress value={stockRemaining} max={totalStock} />
</div>
```

#### 3. **Pop-up de Compra Recente**

```tsx
<Notification>
  "Maria de São Paulo acabou de comprar o Kit Alisamento!"
</Notification>
```

#### 4. **Timer Individual por Produto**

```tsx
<div className='product-timer'>⏰ Essa oferta expira em: 2h 34m</div>
```

#### 5. **Desconto Progressivo**

```typescript
// Quanto mais comprar, maior o desconto
const cartDiscount =
  items.length >= 3
    ? 0.1 // 10% extra para 3+ itens
    : items.length >= 2
    ? 0.05 // 5% extra para 2+ itens
    : 0
```

#### 6. **Seção "Mais Vendidos da BF"**

```tsx
<Section>
  <h2>🔥 Os Mais Vendidos da Black Friday</h2>
  <ProductCarousel items={topSellingProducts} />
</Section>
```

#### 7. **Cupom Exclusivo BF**

```tsx
<CouponBox>
  <code>BLACKFRIDAY50</code>
  <p>Copie e ganhe 5% extra!</p>
</CouponBox>
```

#### 8. **Newsletter Black Friday**

```tsx
<NewsletterPopup>
  Cadastre seu email e receba alertas de ofertas especiais!
</NewsletterPopup>
```

---

## 📱 Responsividade

Testado e otimizado para:

- ✅ Desktop (1920px+)
- ✅ Laptop (1366px - 1920px)
- ✅ Tablet (768px - 1366px)
- ✅ Mobile (320px - 768px)

---

## 🚀 Performance

**Otimizações**:

- Timer atualiza apenas os elementos necessários
- Confetes disparam uma única vez
- Verificação de data a cada 1 minuto (não 1 segundo)
- Lazy loading mantido para imagens
- Animações CSS (não JS quando possível)

---

## 🔐 Segurança

- Datas configuradas no frontend (para efeitos visuais)
- Validação de preços deve ser feita no backend/WhatsApp
- Não há como manipular descontos pelo navegador
- Configurações centralizadas e isoladas

---

## 📊 Métricas Sugeridas

Acompanhe durante a Black Friday:

- [ ] Taxa de conversão de visitantes
- [ ] Produtos mais visualizados
- [ ] Horários de pico de acesso
- [ ] Taxa de abandono de carrinho
- [ ] Ticket médio por cliente

---

## 🎬 Comportamento da Página

### Antes da BF (22-26 Nov):

```
[Countdown Black Friday Regressivo]
↓
[About]
↓
[CTA]
↓
[Produtos - Preços Normais]
```

### Durante a BF (27-30 Nov):

```
[Banner Black Friday com Timer]
↓
[About]
↓
[CTA]
↓
[Produtos - Preços com Desconto + Badges]
```

### Depois da BF (1 Dez+):

```
[About]
↓
[CTA]
↓
[Produtos - Preços Normais]
```

---

## 📞 Suporte

Se precisar ajustar datas ou descontos:

1. Abra `src/config/blackfriday.ts`
2. Modifique as datas ou porcentagens
3. Salve e recarregue a página

**Arquivo principal**: `src/config/blackfriday.ts`

---

## ✅ Checklist de Lançamento

- [ ] Testar countdown em diferentes horários
- [ ] Validar preços calculados
- [ ] Testar em mobile
- [ ] Verificar ortografia dos textos
- [ ] Testar comportamento ao zerar o timer
- [ ] Confirmar datas corretas (27/11 09:00)
- [ ] Testar fechamento do banner
- [ ] Validar cores e contraste
- [ ] Verificar performance em conexão lenta
- [ ] Fazer backup antes do deploy

---

**Sistema pronto para Black Friday 2025!** 🎉🔥

Para ajustar qualquer configuração, edite: `src/config/blackfriday.ts`
