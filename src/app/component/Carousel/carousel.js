"use client"
import React, { useCallback } from 'react'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export default function EmblaCarousel() {
  const [emblaRef,emblaApi] = useEmblaCarousel({loop:true }, [Autoplay()])
  return (
    <div className='embla'>
      <div className="embla__viewport  max-w-2xl h-80 ml-36 mt-7" ref={emblaRef}>
        <div className="embla__container1">
          <div className="embla__slide1 bg-white justify-center items-center h-28"><img src="/images/carouselImages/fifa.jpg" className='h-30 w-2xl'></img></div>
          <div className="embla__slide1 bg-white justify-center items-center h-28"><img src="/images/carouselImages/Gta6.jpg" className='h-30 w-2xl'></img></div>
          <div className="embla__slide1 bg-white justify-center items-center h-28"><img src="/images/carouselImages/Wukong.jpg" className='h-30 w-2xl'></img></div>
       </div>
      </div>
    </div>
  )
}