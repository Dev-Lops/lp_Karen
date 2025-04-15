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
    image:
      'https://iwiehmapixifznuozuoa.supabase.co/storage/v1/object/sign/imgs/img1.avif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2ViZTQ2OTY1LTM4N2QtNDRjNS1hYWZiLWIxNjU4NTUxM2M0MiJ9.eyJ1cmwiOiJpbWdzL2ltZzEuYXZpZiIsImlhdCI6MTc0NDY3NzY1MSwiZXhwIjo0ODY2NzQxNjUxfQ.iq0TVgCWeLDG2Ww2Riz5yZk50FIdb0NTadwIyuEykUY',
    title: 'Ampola de Reestruturação do Córtex',
    description:
      'Ampola de alta performance, age reestruturando fibras instáveis, elásticas, quebradiças e opacas. Em apenas 5 minutos no conforto da sua casa.',
    inStock: true,
  },
  {
    id: 2,
    oldPrice: 65.9,
    discount: 20,
    currentPrice: 52.7,
    image:
      'https://iwiehmapixifznuozuoa.supabase.co/storage/v1/object/sign/imgs/img3.avif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2ViZTQ2OTY1LTM4N2QtNDRjNS1hYWZiLWIxNjU4NTUxM2M0MiJ9.eyJ1cmwiOiJpbWdzL2ltZzMuYXZpZiIsImlhdCI6MTc0NDY3NzcwNCwiZXhwIjo0ODY2NzQxNzA0fQ.KSZMnaV-s1SGGF0idr10iLPi7q9lTpACGibBBqbEC0o',
    title: 'Sérum Fabulos Premium',
    description:
      'O sérun fabulos premium é o aliado ideal na reestruturação do CMC capilar, são 12 óleos essenciais que simultaneamente reparam danos na fibra e reestabelecem  18MEA um composto de ácidos graxos indispensáveis para a saúde e integridade da fibra.',
    inStock: true,
  },
  {
    id: 3,
    oldPrice: 389.0,
    discount: 40,
    currentPrice: 233.4,
    image:
      'https://iwiehmapixifznuozuoa.supabase.co/storage/v1/object/sign/imgs/img6.avif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2ViZTQ2OTY1LTM4N2QtNDRjNS1hYWZiLWIxNjU4NTUxM2M0MiJ9.eyJ1cmwiOiJpbWdzL2ltZzYuYXZpZiIsImlhdCI6MTc0NDY3NzgyMSwiZXhwIjo0ODY2NzQxODIxfQ.xKMfTIjmwdANu-wCGpP6-tDDkJMz8eVgcvTv2yPIjL0',

    title: 'Kit Alisamento Natural',
    description:
      'Descubra o poder de uma fórmula inovadora que combina o melhor da ciência e da natureza para proporcionar resultados incríveis nos cabelos. Ideal para profissionais, o Kit Alisamento Natural oferece soluções completas para limpeza profunda e alinhamento dos fios de forma saudável e natural.',
    inStock: true,
  },
  {
    id: 4,
    oldPrice: 78.5,
    discount: 10,
    currentPrice: 70.65,
    image:
      'https://iwiehmapixifznuozuoa.supabase.co/storage/v1/object/sign/imgs/img8.avif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2ViZTQ2OTY1LTM4N2QtNDRjNS1hYWZiLWIxNjU4NTUxM2M0MiJ9.eyJ1cmwiOiJpbWdzL2ltZzguYXZpZiIsImlhdCI6MTc0NDY3Nzg5MywiZXhwIjo0ODY2NzQxODkzfQ.OXWIAAK8V4zTSa0hIjwChwmMEWq3OI5LGaIRxmoxW3U',
    title: 'Mascara THERAPY (Efeito teia)',
    description:
      'Efeito teia (resultado de salão), reposição hídrica, mineral, proteica e massa. Devolve aos fios força, maciez, promove resistência e vitalidade.',
    inStock: true,
  },
  {
    id: 5,
    oldPrice: 30,
    discount: 30,
    currentPrice: 21,
    image:
      'https://iwiehmapixifznuozuoa.supabase.co/storage/v1/object/sign/imgs/img5.avif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2ViZTQ2OTY1LTM4N2QtNDRjNS1hYWZiLWIxNjU4NTUxM2M0MiJ9.eyJ1cmwiOiJpbWdzL2ltZzUuYXZpZiIsImlhdCI6MTc0NDY3NzgwMywiZXhwIjo0ODY2NzQxODAzfQ.1voVeU25caNdGg2ORxH3MIdejMDYw0LwlyxkgNBp-do',
    title: 'Escova Fabulos Hair',
    description:
      'A escova Fabulos Hair ativa a circulação sanguínea do couro cabeludo promovendo o crescimento saudável dos seus fios, desembaraça sem rompimentos, auxilia no crescimento saudável, previne triconodose, pontas duplas, ralas e afinadas.',
    inStock: true,
  },
  {
    id: 6,
    oldPrice: 46.9,
    discount: 30,
    currentPrice: 32.8,
    image:
      'https://iwiehmapixifznuozuoa.supabase.co/storage/v1/object/sign/imgs/img4.avif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2ViZTQ2OTY1LTM4N2QtNDRjNS1hYWZiLWIxNjU4NTUxM2M0MiJ9.eyJ1cmwiOiJpbWdzL2ltZzQuYXZpZiIsImlhdCI6MTc0NDY3Nzc3NSwiZXhwIjo0ODY2NzQxNzc1fQ.BdyzB_2QebLdrEuk3j-IF2x35rvWWuIcOTT2VnLEIbg',
    title: 'Perfume Antifrizz',
    description:
      'O Perfume Antifrizz foi desenvolvido para remover a evidência dos fios frizzados, arrepiados e eletrizados.',
    inStock: true,
  },
  {
    id: 7,
    oldPrice: 54.5,
    discount: 10,
    currentPrice: 49.05,
    image:
      'https://iwiehmapixifznuozuoa.supabase.co/storage/v1/object/sign/imgs/reest.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2ViZTQ2OTY1LTM4N2QtNDRjNS1hYWZiLWIxNjU4NTUxM2M0MiJ9.eyJ1cmwiOiJpbWdzL3JlZXN0LmpwZWciLCJpYXQiOjE3NDQ2Nzc5MzYsImV4cCI6NDg2Njc0MTkzNn0.9gdA661x5hpMt3S4UY0DcN7PXd5V_To27rCR_jf1WKk',
    title: 'Reestruturador Bifásico THERAPY',
    description:
      'Protege a fibra contra agressões externas, equilibra o PH e mantém a estrutura do córtex com vitalidade.',
    inStock: true,
  },
  {
    id: 8,
    oldPrice: 114.0,
    discount: 10,
    currentPrice: 102.6,
    image:
      'https://iwiehmapixifznuozuoa.supabase.co/storage/v1/object/sign/imgs/img2.avif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2ViZTQ2OTY1LTM4N2QtNDRjNS1hYWZiLWIxNjU4NTUxM2M0MiJ9.eyJ1cmwiOiJpbWdzL2ltZzIuYXZpZiIsImlhdCI6MTc0NDY3Nzc0MCwiZXhwIjo0ODY2NzQxNzQwfQ.f7MVnav3PVrCkviFtjYjZy3oSh7pD_jGXhuY9Xs8NnI',
    title: 'Shampoo e Booster CMC',
    description:
      'O kit 18 Rosé atua restaurando o CMC capilar, devolvendo 18Metil eicosanoico à fibra.',
    inStock: true,
  },
  {
    id: 9,
    oldPrice: 49.0,
    discount: 10,
    currentPrice: 44.1,
    image:
      'https://iwiehmapixifznuozuoa.supabase.co/storage/v1/object/sign/imgs/img7.avif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2ViZTQ2OTY1LTM4N2QtNDRjNS1hYWZiLWIxNjU4NTUxM2M0MiJ9.eyJ1cmwiOiJpbWdzL2ltZzcuYXZpZiIsImlhdCI6MTc0NDY3Nzg0OCwiZXhwIjo0ODY2NzQxODQ4fQ.ORyup5ylE3zMKd0qOFJiuWd1ongBvnYagm0lDHl1vgw',
    title: 'Shampoo THERAPY',
    description:
      'Age no couro cabeludo com ação antimicrobiana, antifúngica, antisséptica e cicatrizante. Combate radicais livres, fungos, oleosidade, caspa, promovendo oxigenação e crescimento.',
    inStock: true,
  },
]
