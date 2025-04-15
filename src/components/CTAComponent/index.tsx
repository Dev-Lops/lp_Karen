// CTASection.tsx
import { Button } from "../Button/index.tsx";
import LazyImage from "../LazyImg/index.tsx";
import {
  CTAButtons,
  CTAContainer,
  CTAContent,
  CTADescription,
  CTATitle,
  ImageContainer,
} from "./styles.ts";

export function CTASection() {
  return (
    <CTAContainer>
      <CTATitle data-aos="fade-up" data-aos-duration="3000">
        Sobre nós
      </CTATitle>
      <CTAContent>
        <ImageContainer>
          <LazyImage
            src="https://iwiehmapixifznuozuoa.supabase.co/storage/v1/object/sign/imgs/ImageToStl.com_img_8808.avif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2ViZTQ2OTY1LTM4N2QtNDRjNS1hYWZiLWIxNjU4NTUxM2M0MiJ9.eyJ1cmwiOiJpbWdzL0ltYWdlVG9TdGwuY29tX2ltZ184ODA4LmF2aWYiLCJpYXQiOjE3NDQ2NzY3ODAsImV4cCI6NDg2Njc0MDc4MH0.6PEyOvcwotejovnLfCCnR1ufTgWFC2iTRKzAnJP83RM"
            alt="Espaço Acolhedor do Studio Karen Frazão"
            loading="lazy"
            aria-placeholder="Espaço acolhedor do Studio Karen Frazão"
          />
        </ImageContainer>

        <CTADescription>
          <p
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
          >
            Há <strong>7 anos entregando Saúde&Beleza,</strong> devolvendo vitalidade, brilho e maciez aos mais diferentes tipos de cabelos, contribuindo para a Auto estima e Auto cuidado.<br /> <br />
            Nossa expertise e produtos são embasados em graduações/pós graduações, e anos de experiência no Studio Karen Frazão.
            <br /> <br />
            Produtos de alta performance com ativos extraídos da nossa Rica Amazônia que atuam na resolutiva da problemática em diferentes formas capilares, estes são criteriosamente desenvolvidos por nossa marca Fabulos Hair, com testes de eficácia, selo de qualidade e liberação da Anvisa.🇧🇷

          </p>

          <p>
            <strong
              data-aos-anchor-placement="center-bottom"
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
            >
              Nossas Especialidades:
            </strong>
          </p>
          <ul>
            <li
              data-aos-anchor-placement="center-bottom"
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
            >
              Alisamento Natural
            </li>
            <li
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-anchor-placement="center-bottom"
              data-aos-easing="ease-in-sine"
            >
              Tricologia e Terapia Integrativa
            </li>
            <li
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-anchor-placement="center-bottom"
              data-aos-easing="ease-in-sine"
            >
              Tratamento para Caspa, Calvície e outras Afecções Capilares
            </li>
          </ul>

          <p
            data-aos-anchor-placement="center-bottom"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
          >
            Trabalhamos com técnicas e produtos de alta qualidade que respeitam
            sua saúde capilar, proporcionando resultados incríveis e duradouros.
          </p>
        </CTADescription>

        <CTAButtons>
          <Button

            href={`https://wa.me/5592993787566?text=${encodeURIComponent(
              "Olá, gostaria de saber mais sobre o horário de agendamento."
            )}`}
            aria-label="Saiba mais sobre horário de agendamento"
          >
            Quero agendar um horário
          </Button>
        </CTAButtons>
      </CTAContent>
    </CTAContainer>
  );
}
