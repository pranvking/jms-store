import React from 'react'
import Link from "next/link"
const news = () => {
  return (
    <div>
        <div className="flex text-white gap-10 pl-[138px] py-2 ml-6 mt-7 mb-7">
            <Link href="/discovery">Discovery</Link>
            <Link href="/browser">Browser</Link>
            <Link href="/news">News</Link>
        </div>
        <div className='justify-center justify-item-center ml-40 mr-44 mt-5 mb-5 '>
            <img className="mt-5" src="/images/sliderImages/news.png"></img>
            <img className="mt-5" src="/images/sliderImages/news.png"></img>
            <img className="mt-5" src="/images/sliderImages/news.png"></img>
            <img className="mt-5" src="/images/sliderImages/news.png"></img>
        </div>
    </div>
  )
}

export default news