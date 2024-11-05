import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Carousel, StacksContainer } from "./style"

const animation = { duration: 30000, easing: (t: number) => t }

export function Faixa() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "precision",
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })
  return (
    <StacksContainer
      data-aos='fade-up'
      data-aos-anchor-placement='bottom-bottom'
    >
      <Carousel ref={sliderRef} className='keen-slider'>
        <div className='keen-slider__slide number-slide1 desktop-only'>
          <p>Black</p>
          <img src='src\assets\star.svg' alt='star' />
          <p>Friday</p>
          <img src='src\assets\star.svg' alt='star' />
          <p>Black</p>
          <img src='src\assets\star.svg' alt='star' />
          <p>Friday</p>
          <img src='src\assets\star.svg' alt='star' />
        </div>
        <div className='keen-slider__slide number-slide1 desktop-only'>
          <p>Black</p>
          <img src='src\assets\star.svg' alt='star' />
          <p>Friday</p>
          <img src='src\assets\star.svg' alt='star' />
          <p>Black</p>
          <img src='src\assets\star.svg' alt='star' />
          <p>Friday</p>
          <img src='src\assets\star.svg' alt='star' />
        </div>
      </Carousel>
    </StacksContainer>
  )
}
