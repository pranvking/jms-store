"use client"
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export const Slider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="carousel-wrapper">
    <div className="embla ">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide bg-white">Slide 1</div>
          <div className="embla__slide bg-white">Slide 2</div>
          <div className="embla__slide bg-white">Slide 3</div>
          <div className="embla__slide bg-white">Slide 3</div>
          <div className="embla__slide bg-white">Slide 3</div>
          <div className="embla__slide bg-white">Slide 3</div>
          <div className="embla__slide bg-white">Slide 3</div>
          <div className="embla__slide bg-white">Slide 3</div>
          <div className="embla__slide bg-white">Slide 3</div>
       
        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button>
    </div>
    </div>
  )
}
export default Slider;