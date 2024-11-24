interface Product {
  id: number
  image: string
  name: string
  link: string
  isOutOfStock?: boolean
}

export const products: Product[] = [
  {
    id: 1,
    image: "https://dtsel6fm8qr8n.cloudfront.net/img1.avif",
    name: "Ampola de Reestruturação do Córtex",
    link: "https://wa.me/5592993787566?text=Olá,%20gostaria%20de%20comprar%20o%20produto%20Ampola%20de%20Reestruturação%20do%20Cortex",
    isOutOfStock: false,
  },
  {
    id: 2,
    image: "https://dtsel6fm8qr8n.cloudfront.net/img3.avif",
    name: "Serum Fabulous",
    link: "https://wa.me/5592993787566?text=Olá,%20gostaria%20de%20comprar%20o%20produto%20Serum%20Fabulous",
    isOutOfStock: false,
  },
  {
    id: 3,
    image: "https://dtsel6fm8qr8n.cloudfront.net/img6.avif",
    name: "Kit Alisamento Natural",
    link: "https://wa.me/5592993787566?text=Olá,%20gostaria%20de%20comprar%20o%20Kit%20Alisamento%20Natural",
    isOutOfStock: false,
  },
  {
    id: 4,
    image: "https://dtsel6fm8qr8n.cloudfront.net/img8.avif",
    name: "Mascara THERAPY(Efeito teia)",
    link: "https://wa.me/5592993787566?text=Olá,%20gostaria%20de%20comprar%20o%20produto%20Mascara%20Equilíbrio%20THERAPY",
    isOutOfStock: false,
  },
  {
    id: 5,
    image: "https://dtsel6fm8qr8n.cloudfront.net/img5.avif",
    name: "Escova Terapêutica",
    link: "https://wa.me/5592993787566?text=Olá,%20gostaria%20de%20comprar%20o%20produto%20Escova%20de%20Terapeutica",
    isOutOfStock: false,
  },
  {
    id: 6,
    image: "https://dtsel6fm8qr8n.cloudfront.net/img4.avif",
    name: "Perfume Antifrizz",
    link: "https://wa.me/5592993787566?text=Olá,%20gostaria%20de%20comprar%20o%20produto%20Perfume%20Antifrizz",
    isOutOfStock: false,
  },
  {
    id: 7,
    image: "https://dtsel6fm8qr8n.cloudfront.net/reestruturador_bifasico.avif",
    name: "Reestruturador bifásico THERAPY",
    link: "https://wa.me/5592993787566?text=Olá,%20gostaria%20de%20comprar%20o%20produto%20Reestruturador%20bifásico%20%20THERAPY",
    isOutOfStock: true,
  },
  {
    id: 8,
    image: "https://dtsel6fm8qr8n.cloudfront.net/img2.avif",
    name: "Shampoo e Booster CMC",
    link: "https://wa.me/5592993787566?text=Olá,%20gostaria%20de%20comprar%20o%20Kit%20Shampoo%20e%20Booster%20CMC%20",
    isOutOfStock: false,
  },
  {
    id: 9,
    image: "https://dtsel6fm8qr8n.cloudfront.net/img7.avif",
    name: "Shampoo THERAPY",
    link: "https://wa.me/5592993787566?text=Olá,%20gostaria%20de%20comprar%20o%20produto%20Shampoo%20THERAPY",
    isOutOfStock: false,
  },
]
