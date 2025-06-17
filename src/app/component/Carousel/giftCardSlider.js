"use client"
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ResuableItem from '../itemComponents/reuaableItem'

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
          <div className='absolute right-40'>
        <button className="embla__prev " onClick={scrollPrev}>
          <img className='h-10 w-15 ' src='.\images\sliderImages\prev.png'></img>
        </button>
        <button className="embla__next " onClick={scrollNext}> 
          <img className='h-10 w-15 ' src='.\images\sliderImages\next.png'></img>
        </button>
      </div>
      <div className="embla ">
      <div className="embla__viewport " ref={emblaRef}>
        <div className="embla__container mt-14">
          <div className="embla__slide "><ResuableItem pimg="./images/sliderImages/lol.png" pname="League Of Legends" pprice="12100.00"/></div>
          <div className="embla__slide "><ResuableItem pimg="./images/sliderImages/cod.jpg" pname="Call of Duty Warzone" pprice="1500.00"/></div>
          <div className="embla__slide "><ResuableItem pimg="./images/sliderImages/fortnite.jpg" pname="Fortnite" pprice="1500.00"/></div>
          <div className="embla__slide "><ResuableItem pimg="./images/sliderImages/valorant.png" pname="Valorant" pprice="2500.00"/></div>
          <div className="embla__slide "><ResuableItem pimg="./images/sliderImages/roblox.jpeg" pname="Roblox" pprice="2000.00"/></div>
          <div className="embla__slide "><ResuableItem pimg="./images/sliderImages/dota2.jpg" pname="Dota 2" pprice="2000.00"/></div>
       </div>
      </div>
      </div>
    </div>
  )
}
export default Slider;