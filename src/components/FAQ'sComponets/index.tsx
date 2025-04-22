import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqData } from "./data"
import { FAQSection, FAQTitle } from "./styles"

const FAQSectionComponent = () => {
  return (
    <FAQSection>
      <FAQTitle data-aos="fade-up">Perguntas Frequentes</FAQTitle>
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </FAQSection>
  )
}

export default FAQSectionComponent