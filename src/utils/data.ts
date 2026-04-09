export interface Product {
  id: number
  currentPrice: number
  promoPrice?: number
  image: string
  title: string
  description: string
  inStock: boolean
  discount?: number
}

export const products: Product[] = [
  {
    id: 1,
    currentPrice: 64.0,
    image: 'img1.avif',
    title: 'Ampola de Reestruturação do Córtex',
    description:
      'Ampola de alta performance, age reestruturando fibras instáveis, elásticas, quebradiças e opacas. Em apenas 5 minutos no conforto da sua casa.',
    inStock: true,
  },
  {
    id: 2,
    currentPrice: 65.9,
    image: 'img3.avif',
    title: 'Sérum Fabulos Premium',
    description:
      'O sérun fabulos premium é o aliado ideal na reestruturação do CMC capilar, são 12 óleos essenciais que simultaneamente reparam danos na fibra e reestabelecem 18MEA, um composto de ácidos graxos indispensáveis para a saúde e integridade da fibra.',
    inStock: true,
  },
  {
    id: 3,
    currentPrice: 389.0,
    image: 'img6.avif',
    title: 'Kit Alisamento Natural',
    description:
      'Descubra o poder de uma fórmula inovadora que combina o melhor da ciência e da natureza para proporcionar resultados incríveis nos cabelos. Ideal para profissionais, o Kit Alisamento Natural oferece soluções completas para limpeza profunda e alinhamento dos fios de forma saudável e natural.',
    inStock: true,
  },
  {
    id: 4,
    currentPrice: 78.5,
    image: 'img8.avif',
    title: 'Máscara Therapy (Efeito Teia)',
    description:
      'Efeito teia com resultado de salão, reposição hídrica, mineral, proteica e de massa. Devolve aos fios força, maciez, promove resistência e vitalidade.',
    inStock: true,
  },
  {
    id: 5,
    currentPrice: 30.0,
    image: 'img5.avif',
    title: 'Escova Fabulos Hair',
    description:
      'A escova Fabulos Hair ativa a circulação sanguínea do couro cabeludo promovendo o crescimento saudável dos fios, desembaraça sem rompimentos e auxilia na prevenção de pontas duplas e fios afinados.',
    inStock: true,
  },
  {
    id: 6,
    currentPrice: 46.9,
    image: '/img4.avif',
    title: 'Perfume Antifrizz',
    description:
      'O Perfume Antifrizz foi desenvolvido para remover a evidência dos fios frizzados, arrepiados e eletrizados.',
    inStock: true,
  },
  {
    id: 7,
    currentPrice: 54.5,
    image: 'reest.avif',
    title: 'Reestruturador Bifásico Therapy',
    description:
      'Protege a fibra contra agressões externas, equilibra o pH e mantém a estrutura do córtex com vitalidade.',
    inStock: true,
  },
  {
    id: 8,
    currentPrice: 57.0,
    image: 'img10.avi',
    title: 'Shampoo CMC',
    description:
      'O Shampoo Rosé atua restaurando o CMC capilar, devolvendo 18-metil eicosanoico à fibra.',
    inStock: false,
  },
  {
    id: 9,
    currentPrice: 57.0,
    image: 'img11.avif',
    title: 'Booster CMC',
    description:
      'Tratamento complementar para restaurar o CMC capilar e fortalecer a fibra.',
    inStock: true,
  },
  {
    id: 10,
    currentPrice: 49.0,
    image: 'img7.avif',
    title: 'Shampoo Therapy',
    description:
      'Age no couro cabeludo com ação antimicrobiana, antifúngica, antisséptica e cicatrizante. Combate radicais livres, oleosidade e caspa, promovendo oxigenação e crescimento.',
    inStock: true,
  },
  {
    id: 11,
    currentPrice: 74.0,
    image: 'masc.avif',
    title: 'Máscara CMC',
    description:
      'A Máscara 18 Rosé foi criada com tecnologia de alta performance para restaurar profundamente o CMC (Cimento da Membrana Celular).',
    inStock: true,
  },
  {
    id: 12,
    currentPrice: 46.9,
    image: 'balm.avif',
    title: 'Perfume e Balm',
    description:
      'Balm Restaurador do CMC Capilar. Tratamento inteligente que repara o CMC, camada responsável pela força, brilho e retenção de água dentro do fio.',
    inStock: true,
  },
]
