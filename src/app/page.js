"use client";

import Link from "next/link";
import EmblaCarousel from "./component/Carousel/carousel";
import EmblaCarousel2 from "./component/Carousel/carousel2";
import { GameSlider } from "./component/Carousel/gameSlider";
import GiftCardSlider from "./component/Carousel/giftCardSlider";

export default function Home() {
  return (
    <div>
      <div>
      </div>
      <div class="flex text-white gap-10 pl-[138px] py-2 ml-6 mt-7 mb-7">
        <Link href="/discovery">Discovery</Link>
        <Link href="/browser">Browser</Link>
        <Link href="/news">News</Link>
      </div>
      <div className="flex">
        <EmblaCarousel />
        <EmblaCarousel2 />
      </div>
      <div className="mr-8">
        <h1 className="mt-14 text-3xl ml-36 mr-6 text-white">Gift Cards</h1>
       <GiftCardSlider/>
       <h1 className="mt-14 text-3xl ml-36 mr-6 text-white">Games</h1>
        <GameSlider></GameSlider>
      </div>
      <div>

      </div>
    </div>
  );
}