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
            src="https://firebasestorage.googleapis.com/v0/b/lp-karenfrazao.firebasestorage.app/o/ImageToStl.com_img_8808.avif?alt=media&token=4c4e00c1-c94a-4778-8462-0ec3c14e44a4"
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
            Há <strong>7 anos entregando Saúde&Beleza,</strong> devolvendo vitalidade, brilho e maciez aos mais diferentes tipos de cabelos, contribuindo para a Auto estima e Auto cuidado.
            Nossa expertise e produtos são embasados em graduações/pós graduações, e anos de experiência no Studio Karen Frazão.
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
