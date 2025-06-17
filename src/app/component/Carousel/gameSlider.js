"use client"
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ResuableItem from '../itemComponents/reuaableItem'

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
       <div className='absolute right-40'>
        <button className="embla__prev " onClick={scrollPrev1}>
          <img className='h-10 w-15 ' src='.\images\sliderImages\prev.png'></img>
        </button>
        <button className="embla__next " onClick={scrollNext1}> 
          <img className='h-10 w-15 ' src='.\images\sliderImages\next.png'></img>
        </button>
      </div>
      <div className="embla mt">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container mt-14">
          <div className="embla__slide "><ResuableItem pimg="./images/sliderImages/fifa.jpg" pname="Fifa 24" pprice="2000.00"/></div>
          <div className="embla__slide "><ResuableItem pimg="./images/sliderImages/gow.jpg" pname="God Of War" pprice="5999.99"/></div>
          <div className="embla__slide "><ResuableItem pimg="./images/sliderImages/sakiro.jpeg" pname="Sakiro" pprice="1999.69"/></div>
          <div className="embla__slide "><ResuableItem pimg="./images/sliderImages/Minecraft.jpg" pname="Minecraft" pprice="599.99"/></div>
          <div className="embla__slide "><ResuableItem pimg="./images/sliderImages/Elden.jpg" pname="Elden Ring" pprice="2000.00"/></div>
          <div className="embla__slide "><ResuableItem pimg="./images/sliderImages/tekken.jpg" pname="Tekken 8" pprice="6999.69"/></div>
       </div>
      </div>
      </div>
    </div>    
  )
}