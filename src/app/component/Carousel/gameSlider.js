"use client"
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export const GameSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev1 = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext1 = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="carousel-wrapper">
      <div className="embla ">
      <div>
        <button className="embla__prev" onClick={scrollPrev1}>
          <img className='h-10 w-15 ' src='.\images\sliderImages\prev.png'></img>
        </button>
        <button className="embla__next" onClick={scrollNext1}> 
          <img className='h-10 w-15 ' src='.\images\sliderImages\next.png'></img>
        </button>
      </div>
      <div className="embla__viewport mt-10" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide bg-white">Slide 1</div>
          <div className="embla__slide bg-white">Slide 2</div>
          <div className="embla__slide bg-white">Slide 3</div>
          <div className="embla__slide bg-white">Slide 4</div>
          <div className="embla__slide bg-white">Slide 5</div>
          <div className="embla__slide bg-white">Slide 6</div>
       </div>
      </div>
      </div>
    </div>
  )
}