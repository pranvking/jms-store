"use client";

import EmblaCarousel from "./component/Carousel/carousel";
import EmblaCarousel2 from "./component/Carousel/carousel2";
import { GameSlider } from "./component/Carousel/gameSlider";
import GiftCardSlider from "./component/Carousel/giftCardSlider";

export default function Home() {
  return (
    <div>
      <div className="flex text-white gap-10 pl-[138px] py-2">
        <h3>Discovery</h3>
        <h3>Browse</h3>
        <h3>News</h3>
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