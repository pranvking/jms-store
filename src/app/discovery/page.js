import React from 'react'
import Link from "next/link"
import { GameSlider } from '../component/Carousel/gameSlider'
import Slider from '../component/Carousel/giftCardSlider'

const discovery= () => {
  return (
    <div>
        <div className="flex text-white gap-10 pl-[138px] py-2 ml-6 mt-7 mb-7">
            <Link href="/discovery">Discovery</Link>
            <Link href="/browser">Browser</Link>
            <Link href="/news">News</Link>
        </div>
        <h1 className="mt-10 text-3xl ml-40 mr-6 text-white">Gift Cards</h1>
        <Slider/>
        <h1 className="mt-14 text-3xl ml-40 mr-6 text-white">Games</h1>
        <GameSlider/>
    </div>
  )
}
export default discovery