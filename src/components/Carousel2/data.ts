export interface Product {
  id: number
  oldPrice: number
  currentPrice: number
  image: string
  title: string
  description: string
  inStock: boolean
}
export const products: Product[] = [
  {
    id: 1,
    oldPrice: 1,
    currentPrice: 1,
    image: "https://dtsel6fm8qr8n.cloudfront.net/IMG_8098.avif",
    title: "Ampola de Reestruturação do Cortex",
    description:
      "Ampola de alta performance, age reestruturando fibras instáveis, elásticas, quebradiças e opacas. Em apenas 5 minutos no conforto da sua casa.",
    inStock: true,
  },
  {
    id: 2,
    oldPrice: 1,
    currentPrice: 1,
    image: "https://dtsel6fm8qr8n.cloudfront.net/serun.avif",
    title: "Serum Revitalizante",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    inStock: true,
  },
  {
    id: 3,
    oldPrice: 1,
    currentPrice: 1,
    image:
      "https://dtsel6fm8qr8n.cloudfront.net/gloss_natual_e_clean_detox.avif",
    title: "Kit Alisamento Natural",
    description: "Conheça o Poder do Alisamento natural!",
    inStock: true,
  },
  {
    id: 4,
    oldPrice: 1,
    currentPrice: 1,
    image: "https://dtsel6fm8qr8n.cloudfront.net/mascara.avif",
    title: "Mascara Equilíbrio THERAPY",
    description:
      "Efeito teia (resultado de salão), reposição hídrica, mineral, proteica e massa. Devolve aos fios força, maciez, promove resistência e vitalidade.",
    inStock: true,
  },
  {
    id: 5,
    oldPrice: 1,
    currentPrice: 1,
    image: "https://dtsel6fm8qr8n.cloudfront.net/escova.webp",
    title: "Serum Revitalizante",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    inStock: true,
  },
  {
    id: 6,
    oldPrice: 1,
    currentPrice: 1,
    image: "https://dtsel6fm8qr8n.cloudfront.net/perfume capilar.avif",
    title: "Perfume Capilar",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    inStock: true,
  },
  {
    id: 7,
    oldPrice: 1,
    currentPrice: 1,
    image: "https://dtsel6fm8qr8n.cloudfront.net/reestruturador_bifasico.avif",
    title: "Reestruturador bifásico Equilíbrio THERAPY",
    description:
      "Protege a fibra contra agressões externas, equilibra o PH e mantém a estrutura do córtex com vitalidade.",
    inStock: false,
  },
  {
    id: 8,
    oldPrice: 1,
    currentPrice: 1,
    image: "https://dtsel6fm8qr8n.cloudfront.net/restaurador cmc.avif",
    title: "Restaurador do CMC Capilar",
    description:
      "O kit 18 Rosé atua restaurando o CMC capilar, devolvendo 18Metil eicosanoico à fibra.",
    inStock: true,
  },
  {
    id: 9,
    oldPrice: 1,
    currentPrice: 1,
    image: "https://dtsel6fm8qr8n.cloudfront.net/shampoo.avif",
    title: "Shampoo Equilíbrio THERAPY",
    description:
      "Age no couro cabeludo com ação antimicrobiana, antifúngica, antisséptica e cicatrizante. Combate radicais livres, fungos, oleosidade, caspa, promovendo oxigenação e crescimento.",
    inStock: true,
  },
]
