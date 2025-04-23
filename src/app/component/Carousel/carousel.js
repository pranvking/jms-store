"use client"
import React, { useCallback } from 'react'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export default function EmblaCarousel() {
  const [emblaRef,emblaApi] = useEmblaCarousel({loop:true }, [Autoplay()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className='embla'>
      <div className="embla__viewport  max-w-2xl h-80 ml-36 mt-7" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide bg-white justify-center items-center h-28"><img src="/images/carouselImages/fifa.jpg" className='h-30 w-2xl'></img></div>
          <div className="embla__slide bg-white justify-center items-center h-28"><img src="/images/carouselImages/Gta6.jpeg" className='h-30 w-2xl'></img></div>
          <div className="embla__slide bg-white justify-center items-center h-28"><img src="/images/carouselImages/Wukong.jpg" className='h-80 w-2xl'></img></div>
       </div>
      </div>
      <div>
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