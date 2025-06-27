"use client"
import React, { useCallback } from 'react'

import useEmblaCarousel2 from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'

export default function EmblaCarousel2() {
  const [emblaRef,emblaApi] = useEmblaCarousel2({loop:true }, [Autoplay()])
  return (
    <div className='embla'>
      <div className="embla__viewport  w-96 h-80  mt-7 ml-5 mr-28" ref={emblaRef}>
        <div className="embla__container1">
          <div className="embla__slide1">
            <img src="./images/carouselLogo/fifa_logo.jpg" className='h-32 w-96 rounded-3xl'></img>
            <p className='text-white mt-3 text-center'>What happens when two iconic football brands come together?
                A one-of-a-kind experience that takes football to places it’s never been before.
                  Experience WHAT THE FC now in EA SPORTS FC™ 24.</p>
            <div className='flex'>
            <Link href="/"><img src="./images/carouselLogo/Buynow.png" className='h-12 w-30 rounded-3xl mt-6 ml-2'></img></Link> 
            <img src="./images/carouselLogo/Wishlist.png" className='h-12 w-30 rounded-3xl mt-7 m-5 '></img>
            </div>
          </div>
          <div className="embla__slide1">
            <img src="./images/carouselLogo/Gta6_logo.jpg" className='h-32 w-96 rounded-3xl'></img>
            <p className='text-white mt-3 text-center'>What happens when two iconic football brands come together?
                A one-of-a-kind experience that takes football to places it’s never been before.
                  Experience WHAT THE FC now in EA SPORTS FC™ 24.</p>
            <div className='flex'>
            <img src="./images/carouselLogo/Buynow.png" className='h-12 w-30 rounded-3xl mt-6 ml-2'></img>
            <img src="./images/carouselLogo/Wishlist.png" className='h-12 w-30 rounded-3xl mt-7 m-5 '></img>
            </div>
          </div>
          <div className="embla__slide1">
            <img src="./images/carouselLogo/Wukong_logo.png" className='h-32 w-96 rounded-3xl'></img>
            <p className='text-white mt-3 text-center'>What happens when two iconic football brands come together?
                A one-of-a-kind experience that takes football to places it’s never been before.
                  Experience WHAT THE FC now in EA SPORTS FC™ 24.</p>
            <div className='flex'>
            <img src="./images/carouselLogo/Buynow.png" className='h-12 w-30 rounded-3xl mt-6 ml-2'></img>
            <img src="./images/carouselLogo/Wishlist.png" className='h-12 w-30 rounded-3xl mt-7 m-5 '></img>
            </div>
          </div>
       </div>
      </div>
    </div>
  )
}