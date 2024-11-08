import { CarrouselContainer } from "./styles"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import StyledButton from "../Button"

export function Carousel() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 3000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )
  return (
    <CarrouselContainer>
      <div ref={sliderRef} className='keen-slider'>
        <div className='keen-slider__slide number-slide1'>
          <div className='photo'>
            <img src='src\assets\IMG_8098.jpg' alt='' />
          </div>
          <div className='text'>
            <h1>Clean Detox</h1>
            <img src='src\assets\5stars.svg' alt='' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi qui
              modi iste porro nesciunt magnam eius, quibusdam libero ea labore
              mollitia, perferendis consequatur voluptatum ipsam, aliquid iure
              in voluptas hic?
            </p>
            <StyledButton href='#'>Saiba mais</StyledButton>
          </div>
        </div>
        <div className='keen-slider__slide number-slide1'>
          <div className='photo'>
            <img src='src\assets\IMG_8098.jpg' alt='' />
          </div>
          <div className='text'>
            <h1>Clean Detox</h1>
            <img src='src\assets\5stars.svg' alt='' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi qui
              modi iste porro nesciunt magnam eius, quibusdam libero ea labore
              mollitia, perferendis consequatur voluptatum ipsam, aliquid iure
              in voluptas hic?
            </p>
            <StyledButton href='#'>Saiba mais</StyledButton>
          </div>
        </div>
        <div className='keen-slider__slide number-slide1'>
          <div className='photo'>
            <img src='src\assets\IMG_8098.jpg' alt='' />
          </div>
          <div className='text'>
            <h1>Clean Detox</h1>
            <img src='src\assets\5stars.svg' alt='' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi qui
              modi iste porro nesciunt magnam eius, quibusdam libero ea labore
              mollitia, perferendis consequatur voluptatum ipsam, aliquid iure
              in voluptas hic?
            </p>
            <StyledButton href='#'>Saiba mais</StyledButton>
          </div>
        </div>
        <div className='keen-slider__slide number-slide1'>
          <div className='photo'>
            <img src='src\assets\IMG_8098.jpg' alt='' />
          </div>
          <div className='text'>
            <h1>Clean Detox</h1>
            <img src='src\assets\5stars.svg' alt='' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi qui
              modi iste porro nesciunt magnam eius, quibusdam libero ea labore
              mollitia, perferendis consequatur voluptatum ipsam, aliquid iure
              in voluptas hic?
            </p>
            <StyledButton href='#'>Saiba mais</StyledButton>
          </div>
        </div>
        <div className='keen-slider__slide number-slide1'>
          <div className='photo'>
            <img src='src\assets\IMG_8098.jpg' alt='' />
          </div>
          <div className='text'>
            <h1>Clean Detox</h1>
            <img src='src\assets\5stars.svg' alt='' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi qui
              modi iste porro nesciunt magnam eius, quibusdam libero ea labore
              mollitia, perferendis consequatur voluptatum ipsam, aliquid iure
              in voluptas hic?
            </p>
            <StyledButton href='#'>Saiba mais</StyledButton>
          </div>
        </div>
        <div className='keen-slider__slide number-slide1'>
          <div className='photo'>
            <img src='src\assets\IMG_8098.jpg' alt='' />
          </div>
          <div className='text'>
            <h1>Clean Detox</h1>
            <img src='src\assets\5stars.svg' alt='' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi qui
              modi iste porro nesciunt magnam eius, quibusdam libero ea labore
              mollitia, perferendis consequatur voluptatum ipsam, aliquid iure
              in voluptas hic?
            </p>
            <StyledButton href='#'>Saiba mais</StyledButton>
          </div>
        </div>
        <div className='keen-slider__slide number-slide1'>
          <div className='photo'>
            <img src='src\assets\IMG_8098.jpg' alt='' />
          </div>
          <div className='text'>
            <h1>Clean Detox</h1>
            <img src='src\assets\5stars.svg' alt='' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi qui
              modi iste porro nesciunt magnam eius, quibusdam libero ea labore
              mollitia, perferendis consequatur voluptatum ipsam, aliquid iure
              in voluptas hic?
            </p>
            <StyledButton href='#'>Saiba mais</StyledButton>
          </div>
        </div>
      </div>
    </CarrouselContainer>
  )
}
