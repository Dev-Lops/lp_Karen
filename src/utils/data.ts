export interface Product {
  id: number;
  oldPrice: number;
  currentPrice: number;
  image: string;
  title: string;
  description: string;
  inStock: boolean;

  discount: number;
}
export const products: Product[] = [
  {
    id: 1,
    oldPrice: 64.0,
    discount: 10,
    currentPrice: 57.6,
    image:
      "https://firebasestorage.googleapis.com/v0/b/lp-karenfrazao.firebasestorage.app/o/img1.avif?alt=media&token=70bfdcd9-a0a5-4200-b3d0-dc108b0ebccd",
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
    image:
      "https://firebasestorage.googleapis.com/v0/b/lp-karenfrazao.firebasestorage.app/o/img3.avif?alt=media&token=175e621a-25c2-415f-9bd7-7faa4beb79c2",
    title: "Sérum Fabulos Premium",
    description:
      "O sérun fabulos premium é o aliado ideal na reestruturação do CMC capilar, são 12 óleos essenciais que simultaneamente reparam danos na fibra e reestabelecem  18MEA um composto de ácidos graxos indispensáveis para a saúde e integridade da fibra.",
    inStock: true,
  },
  {
    id: 3,
    oldPrice: 389.0,
    discount: 40,
    currentPrice: 233.4,
    image:
      "https://firebasestorage.googleapis.com/v0/b/lp-karenfrazao.firebasestorage.app/o/img6.avif?alt=media&token=d2e366d9-4408-464c-b6b2-34388535401f",

    title: "Kit Alisamento Natural",
    description:
      "Descubra o poder de uma fórmula inovadora que combina o melhor da ciência e da natureza para proporcionar resultados incríveis nos cabelos. Ideal para profissionais, o Kit Alisamento Natural oferece soluções completas para limpeza profunda e alinhamento dos fios de forma saudável e natural.",
    inStock: true,
  },
  {
    id: 4,
    oldPrice: 78.5,
    discount: 10,
    currentPrice: 70.65,
    image:
      "https://firebasestorage.googleapis.com/v0/b/lp-karenfrazao.firebasestorage.app/o/img8.avif?alt=media&token=5051dc5f-d3e3-40b8-b6f0-9dfc55eadee8",
    title: "Mascara THERAPY (Efeito teia)",
    description:
      "Efeito teia (resultado de salão), reposição hídrica, mineral, proteica e massa. Devolve aos fios força, maciez, promove resistência e vitalidade.",
    inStock: true,
  },
  {
    id: 5,
    oldPrice: 30,
    discount: 30,
    currentPrice: 21,
    image:
      "https://firebasestorage.googleapis.com/v0/b/lp-karenfrazao.firebasestorage.app/o/img5.avif?alt=media&token=e4d1f4c9-15fc-4f37-9dee-fcc40d582ce7",
    title: "Escova Fabulos Hair",
    description:
      "A escova Fabulos Hair ativa a circulação sanguínea do couro cabeludo promovendo o crescimento saudável dos seus fios, desembaraça sem rompimentos, auxilia no crescimento saudável, previne triconodose, pontas duplas, ralas e afinadas.",
    inStock: true,
  },
  {
    id: 6,
    oldPrice: 46.9,
    discount: 30,
    currentPrice: 32.8,
    image:
      "https://firebasestorage.googleapis.com/v0/b/lp-karenfrazao.firebasestorage.app/o/img4.avif?alt=media&token=b508f251-fb8b-44a5-8aff-3e5ecd54de16",
    title: "Perfume Antifrizz",
    description:
      "O Perfume Antifrizz foi desenvolvido para remover a evidência dos fios frizzados, arrepiados e eletrizados.",
    inStock: true,
  },
  {
    id: 7,
    oldPrice: 54.5,
    discount: 0,
    currentPrice: 0,
    image:
      "https://firebasestorage.googleapis.com/v0/b/lp-karenfrazao.firebasestorage.app/o/reest.jpg?alt=media&token=05ada730-0160-499f-a490-02c7bbf8a41d",
    title: "Reestruturador Bifásico THERAPY",
    description:
      "Protege a fibra contra agressões externas, equilibra o PH e mantém a estrutura do córtex com vitalidade.",
    inStock: true,
  },
  {
    id: 8,
    oldPrice: 114.0,
    discount: 10,
    currentPrice: 102.6,
    image:
      "https://firebasestorage.googleapis.com/v0/b/lp-karenfrazao.firebasestorage.app/o/img2.avif?alt=media&token=8b980e8e-65c9-4212-aaad-7dac787183b9",
    title: "Shampoo e Booster CMC",
    description:
      "O kit 18 Rosé atua restaurando o CMC capilar, devolvendo 18Metil eicosanoico à fibra.",
    inStock: true,
  },
  {
    id: 9,
    oldPrice: 49.0,
    discount: 10,
    currentPrice: 44.1,
    image:
      "https://firebasestorage.googleapis.com/v0/b/lp-karenfrazao.firebasestorage.app/o/img7.avif?alt=media&token=e4503332-963c-4210-a4c7-24e7dd8db394",
    title: "Shampoo THERAPY",
    description:
      "Age no couro cabeludo com ação antimicrobiana, antifúngica, antisséptica e cicatrizante. Combate radicais livres, fungos, oleosidade, caspa, promovendo oxigenação e crescimento.",
    inStock: true,
  },
];
