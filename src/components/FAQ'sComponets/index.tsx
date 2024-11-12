import { useState } from "react"
import {
  FAQSection,
  FAQTitle,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from "./styles"
import { faqData } from "./data"

export interface AccordionContentProps {
  isOpen: boolean
}

const FAQSectionComponent = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index) // Fecha o acordeão se já estiver aberto
  }

  return (
    <FAQSection>
      <FAQTitle>Perguntas Frequentes</FAQTitle>
      <Accordion>
        {faqData.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionHeader onClick={() => toggleAccordion(index)}>
              {item.question}
            </AccordionHeader>
            {/* Garantindo que isOpen seja passado corretamente */}
            <AccordionContent isOpen={openIndex === index}>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </FAQSection>
  )
}

export default FAQSectionComponent
