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
  $isOpen?: boolean
}

const FAQSectionComponent = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index) // Fecha o acordeão se já estiver aberto
  }

  return (
    <FAQSection>
      <FAQTitle data-aos='fade-up' >
        Perguntas Frequentes
      </FAQTitle>
      <Accordion>
        {faqData.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionHeader
              data-aos='fade-up'
              data-aos-anchor-placement='center-bottom'
              onClick={() => toggleAccordion(index)}
              aria-expanded={openIndex === index}
              aria-controls={`accordion-content-${index}`}
              role='button'
            >
              {item.question}
            </AccordionHeader>
            <AccordionContent
              id={`accordion-content-${index}`}
              $isOpen={openIndex === index} // Transient prop
            >
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </FAQSection>
  )
}

export default FAQSectionComponent
