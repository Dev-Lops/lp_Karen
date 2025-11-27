export interface Product {
  id: number
  currentPrice: number // Preço oficial/normal da loja
  promoPrice: number // Preço promocional da Black Friday
  image: string
  title: string
  description: string
  inStock: boolean
  discount: number
}

export const products: Product[] = [
  {
    id: 1,
    currentPrice: 64.0,
    promoPrice: 57.6,
    discount: 10,
    image: 'img1.avif',
    title: 'Ampola de Reestruturação do Córtex',
    description:
      'Ampola de alta performance, age reestruturando fibras instáveis, elásticas, quebradiças e opacas. Em apenas 5 minutos no conforto da sua casa.',
    inStock: true,
  },
  {
    id: 2,
    currentPrice: 65.9,
    promoPrice: 52.72,
    discount: 20,
    image: 'img3.avif',
    title: 'Sérum Fabulos Premium',
    description:
      'O sérun fabulos premium é o aliado ideal na reestruturação do CMC capilar, são 12 óleos essenciais que simultaneamente reparam danos na fibra e reestabelecem  18MEA um composto de ácidos graxos indispensáveis para a saúde e integridade da fibra.',
    inStock: true,
  },
  {
    id: 3,
    currentPrice: 389.0,
    promoPrice: 233.4,
    discount: 40,
    image: 'img6.avif',
    title: 'Kit Alisamento Natural',
    description:
      'Descubra o poder de uma fórmula inovadora que combina o melhor da ciência e da natureza para proporcionar resultados incríveis nos cabelos. Ideal para profissionais, o Kit Alisamento Natural oferece soluções completas para limpeza profunda e alinhamento dos fios de forma saudável e natural.',
    inStock: true,
  },
  {
    id: 4,
    currentPrice: 78.5,
    promoPrice: 70.65,
    discount: 10,
    image: 'img8.avif',
    title: 'Mascara THERAPY (Efeito teia)',
    description:
      'Efeito teia (resultado de salão), reposição hídrica, mineral, proteica e massa. Devolve aos fios força, maciez, promove resistência e vitalidade.',
    inStock: true,
  },
  {
    id: 5,
    currentPrice: 30,
    promoPrice: 21,
    discount: 30,
    image: 'img5.avif',
    title: 'Escova Fabulos Hair',
    description:
      'A escova Fabulos Hair ativa a circulação sanguínea do couro cabeludo promovendo o crescimento saudável dos seus fios, desembaraça sem rompimentos, auxilia no crescimento saudável, previne triconodose, pontas duplas, ralas e afinadas.',
    inStock: true,
  },
  {
    id: 6,
    currentPrice: 46.9,
    promoPrice: 32.8,
    discount: 30,
    image: '/img4.avif',
    title: 'Perfume Antifrizz',
    description:
      'O Perfume Antifrizz foi desenvolvido para remover a evidência dos fios frizzados, arrepiados e eletrizados.',
    inStock: true,
  },
  {
    id: 7,
    currentPrice: 54.5,
    promoPrice: 27.25,
    discount: 50,
    image: 'reest.avif',
    title: 'Reestruturador Bifásico THERAPY',
    description:
      'Protege a fibra contra agressões externas, equilibra o PH e mantém a estrutura do córtex com vitalidade.',
    inStock: true,
  },
  {
    id: 8,
    currentPrice: 57,
    promoPrice: 51.3,
    discount: 10,
    image: 'img10.avif',
    title: 'Shampoo CMC',
    description:
      'O Shampoo Rosé atua restaurando o CMC capilar, devolvendo 18Metil eicosanoico à fibra.',
    inStock: true,
  },
  {
    id: 9,
    currentPrice: 57.0,
    promoPrice: 51.3,
    discount: 10,
    image: 'img11.avif',
    title: 'Booster CMC',
    description:
      'O Shampoo Rosé atua restaurando o CMC capilar, devolvendo 18Metil eicosanoico à fibra.',
    inStock: true,
  },
  {
    id: 10,
    currentPrice: 49.0,
    promoPrice: 44.1,
    discount: 10,
    image: 'img7.avif',
    title: 'Shampoo Therapy',
    description:
      ' Age no couro cabeludo com ação antimicrobiana, antifúngica, antisséptica e cicatrizante. Combate radicais livres, fungos, oleosidade, caspa, promovendo oxigenação e crescimento.',
    inStock: true,
  },
  {
    id: 11,
    currentPrice: 74.0,
    promoPrice: 59.2,
    discount: 20,
    image: 'masc.avif',
    title: 'Mascara CMC',
    description:
      'A Máscara 18Rosé -  foi criada com tecnologia de alta performance para restaurar profundamente o CMC (Cimento da Membrana Celular)',
    inStock: true,
  },
  {
    id: 12,
    currentPrice: 46.9,
    promoPrice: 35.18,
    discount: 25,
    image: 'balm.avif',
    title: 'Perfume e Balm',
    description:
      'Balm Restaurador do CMC Capilar Tratamento inteligente que repara o CMC — a camada responsável pela força, brilho e retenção de água dentro do fio. ',
    inStock: true,
  },
]
