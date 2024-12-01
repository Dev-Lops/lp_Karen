import { useState, useEffect } from "react"
import { CountdownSection, CountdownTitle, Description, Input } from "./styles"
import { Button } from "../Button"
import axios from "axios"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import styled from "styled-components"

// Tooltip Styled
const TooltipContainer = styled.div<{ isVisible: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: black;
  color: white;
  padding: 10px;
  border-radius: 5px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.5s ease;
  z-index: 999;
`

const TooltipText = styled.div`
  font-size: 14px;
  text-align: center;
`

// Validação do formulário com Yup
const validationSchema = Yup.object({
  name: Yup.string().required("O nome é obrigatório"),
  email: Yup.string()
    .email("Formato de e-mail inválido")
    .required("O e-mail é obrigatório"),
})

export const CountdownTimer = () => {
  const [message, setMessage] = useState("")
  const [success, setSuccess] = useState(false)
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  const handleSubmit = async (
    values: { name: string; email: string },
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      // Envia os dados ao servidor
      const response = await axios.post(
        "https://backend-karen.onrender.com/emails",
        {
          name: values.name,
          email: values.email,
        }
      )

      if (response.status === 201) {
        // Mensagem com o ID gerado (caso o backend retorne o ID)
        setMessage(`Cadastro realizado com sucesso!`)
        setSuccess(true)
        resetForm()
      }
    } catch (error: unknown) {
      console.error("Erro ao enviar os dados:", error)

      // Verifica se o erro é uma instância de erro de Axios
      if (axios.isAxiosError(error)) {
        console.log("Erro da API:", error.response)
        const errorMessage =
          error.response?.data?.message || "Erro ao cadastrar os dados."
        setMessage(errorMessage)
      } else {
        // Caso o erro não seja de Axios, exibe uma mensagem genérica
        setMessage("Erro desconhecido ao cadastrar os dados.")
      }
      setSuccess(false)
    }
  }

  // Controle do Tooltip para aparecer e desaparecer após 1 segundo
  useEffect(() => {
    if (success) {
      setIsTooltipVisible(true)
      const timer = setTimeout(() => {
        setIsTooltipVisible(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [success])

  return (
    <CountdownSection>
      <CountdownTitle data-aos='fade-up' data-aos-duration='3000'>
        Receba nossas promoções no e-mail
      </CountdownTitle>
      <Description data-aos='fade-left'>
        Seja a primeira a receber nossas promoções, cadastre seu nome e e-mail.
      </Description>

      <Formik
        initialValues={{ name: "", email: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              type='text'
              name='name'
              placeholder='Digite seu nome'
              as={Input}
            />
            <ErrorMessage name='name'>
              {(msg) => (
                <div style={{ color: "red", fontSize: "12px" }}>{msg}</div>
              )}
            </ErrorMessage>

            <Field
              type='email'
              name='email'
              placeholder='Digite seu e-mail'
              as={Input}
            />
            <ErrorMessage name='email'>
              {(msg) => (
                <div style={{ color: "red", fontSize: "12px" }}>{msg}</div>
              )}
            </ErrorMessage>

            <Button backgroundColor='' type='submit' disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Cadastrar"}
            </Button>
          </Form>
        )}
      </Formik>

      {isTooltipVisible && (
        <TooltipContainer isVisible={isTooltipVisible}>
          <TooltipText>{message}</TooltipText>
        </TooltipContainer>
      )}
    </CountdownSection>
  )
}
