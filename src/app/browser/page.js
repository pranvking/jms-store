import React from 'react'
import Link from "next/link"
import ResuableItem from '../component/itemComponents/reuaableItem'
const browser = () => {
  return (
    <div>
        <div className="flex text-white gap-10 pl-[138px] py-2 mt-7 mb-7 ml-2">
            <Link href="/discovery">Discovery</Link>
            <Link href="/browser">Browser</Link>
            <Link href="/news">News</Link>
        </div>
        <div className='grid grid-cols-4 gap-10 justify-center justify-item-center ml-36 mr-36 mt-5 mb-5'>
            <div><ResuableItem pimg="./images/sliderImages/fifa.jpg" pname="Fifa 24" pprice="2000.00"/></div>
            <div><ResuableItem pimg="./images/sliderImages/gow.jpg" pname="God Of War" pprice="5999.99"/></div>
            <div><ResuableItem pimg="./images/sliderImages/sakiro.jpeg" pname="Sakiro" pprice="1999.69"/></div>
            <div><ResuableItem pimg="./images/sliderImages/Minecraft.jpg" pname="Minecraft" pprice="599.99"/></div>
            <div><ResuableItem pimg="./images/sliderImages/Elden.jpg" pname="Elden Ring" pprice="2000.00"/></div>
            <div><ResuableItem pimg="./images/sliderImages/tekken.jpg" pname="Tekken 8" pprice="6999.69"/></div>
            <div><ResuableItem pimg="./images/sliderImages/lol.png" pname="League Of Legends" pprice="12100.00"/></div>
            <div><ResuableItem pimg="./images/sliderImages/cod.jpg" pname="Call of Duty Warzone" pprice="1500.00"/></div>
            <div><ResuableItem pimg="./images/sliderImages/fortnite.jpg" pname="Fortnite" pprice="1500.00"/></div>
            <div><ResuableItem pimg="./images/sliderImages/valorant.png" pname="Valorant" pprice="2500.00"/></div>
            <div><ResuableItem pimg="./images/sliderImages/roblox.jpeg" pname="Roblox" pprice="2000.00"/></div>
            <div><ResuableItem pimg="./images/sliderImages/dota2.jpg" pname="Dota 2" pprice="2000.00"/></div>
        </div>
    </div>
  )
}

export default browser