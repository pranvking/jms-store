"use client"
import React, { useCallback } from 'react'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export default function EmblaCarousel() {
  const [emblaRef,emblaApi] = useEmblaCarousel({loop:true }, [Autoplay()])
  return (
    <div className='embla'>
      <div className="embla__viewport  'w-[665px] h-[370px] mt-7 ml-36" ref={emblaRef}>
        <div className="embla__container1">
          <div className="embla__slide1">
            <img src="./images/carouselImages/fifa.jpg" className='w-[665px] h-[370px] rounded-3xl'></img>
          </div>
          <div className="embla__slide1">
            <img src="./images/carouselImages/Gta6.jpg" className='w-[665px] h-[370px] rounded-3xl'></img>
          </div>
          <div className="embla__slide1">
            <img src="./images/carouselImages/Wukong.jpg" className='w-[665px] h-[370px] rounded-3xl'></img>
          </div>
       </div>
      </div>
    </div>
  )
}