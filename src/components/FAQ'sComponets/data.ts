export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: 'Como posso comprar o produto?',
    answer: 'Você pode comprar o produto diretamente em nosso whatsapp.',
  },
  {
    question: 'Qual é o prazo de entrega?',
    answer: 'O prazo de entrega varia de acordo com a sua localização, mas normalmente leva de  1 a 2 dias úteis após a aprovação bancária.',
  },
  {
    question: 'O produto possui garantia?',
    answer: 'Sim, todos os nossos produtos possuem garantia de 1 ano contra defeitos de fabricação.',
  },
  {
    question: 'Posso devolver o produto?',
    answer: 'Sim, você pode devolver o produto em até 30 dias após a compra, desde que ele esteja em perfeitas condições.',
  },
  {
    question: 'Como posso entrar em contato com o suporte?',
    answer: 'Você pode entrar em contato com nosso suporte através do e-mail suporte@exemplo.com ou pelo chat em nosso site.',
  },
];
