export interface Product {
  id: number
  oldPrice: number
  currentPrice: number
  image: string
  title: string
  description: string
  inStock: boolean

  discount: number
}
export const products: Product[] = [
  {
    id: 1,
    oldPrice: 64.0,
    discount: 10,
    currentPrice: 57.6,
    image: "https://dtsel6fm8qr8n.cloudfront.net/img1.avif",
    title: "Ampola de Reestruturação do Córtex",
    description:
      "Ampola de alta performance, age reestruturando fibras instáveis, elásticas, quebradiças e opacas. Em apenas 5 minutos no conforto da sua casa.",
    inStock: true,
  },
  {
    id: 2,
    oldPrice: 65.9,
    discount: 20,
    currentPrice: 52.7,
    image: "https://dtsel6fm8qr8n.cloudfront.net/img3.avif",
    title: "Serum Fabulos Premium",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    inStock: true,
  },
  {
    id: 3,
    oldPrice: 389.0,
    discount: 40,
    currentPrice: 233.4,
    image: "https://dtsel6fm8qr8n.cloudfront.net/img6.avif",

    title: "Kit Alisamento Natural",
    description: "Conheça o Poder do Alisamento natural!",
    inStock: true,
  },
  {
    id: 4,
    oldPrice: 78.5,
    discount: 10,
    currentPrice: 70.65,
    image: "https://dtsel6fm8qr8n.cloudfront.net/img8.avif",
    title: "Mascara THERAPY (Efeito teia)",
    description:
      "Efeito teia (resultado de salão), reposição hídrica, mineral, proteica e massa. Devolve aos fios força, maciez, promove resistência e vitalidade.",
    inStock: true,
  },
  {
    id: 5,
    oldPrice: 1,
    discount: 20,
    currentPrice: 1,
    image: "https://dtsel6fm8qr8n.cloudfront.net/img5.avif",
    title: "Escova Terapêutica",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    inStock: true,
  },
  {
    id: 6,
    oldPrice: 46.9,
    discount: 30,
    currentPrice: 32.8,
    image: "https://dtsel6fm8qr8n.cloudfront.net/img4.avif",
    title: "Perfume Antifrizz",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    inStock: true,
  },
  {
    id: 7,
    oldPrice: 0,
    discount: 0,
    currentPrice: 0,
    image: "https://dtsel6fm8qr8n.cloudfront.net/reestruturador_bifasico.avif",
    title: "Reestruturador bifásico Equilíbrio THERAPY",
    description:
      "Protege a fibra contra agressões externas, equilibra o PH e mantém a estrutura do córtex com vitalidade.",
    inStock: false,
  },
  {
    id: 8,
    oldPrice: 114.0,
    discount: 10,
    currentPrice: 102.6,
    image: "https://dtsel6fm8qr8n.cloudfront.net/img2.avif",
    title: "Shampoo e booster CMC",
    description:
      "O kit 18 Rosé atua restaurando o CMC capilar, devolvendo 18Metil eicosanoico à fibra.",
    inStock: true,
  },
  {
    id: 9,
    oldPrice: 49.0,
    discount: 10,
    currentPrice: 44.1,
    image: "https://dtsel6fm8qr8n.cloudfront.net/img7.avif",
    title: "Shampoo THERAPY",
    description:
      "Age no couro cabeludo com ação antimicrobiana, antifúngica, antisséptica e cicatrizante. Combate radicais livres, fungos, oleosidade, caspa, promovendo oxigenação e crescimento.",
    inStock: true,
  },
]
