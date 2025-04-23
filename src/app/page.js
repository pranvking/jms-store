"use client";

import EmblaCarousel from "./component/Carousel/carousel";
import EmblaCarousel2 from "./component/Carousel/carousel2";
import Slider from "./component/Carousel/slider";

export default function Home() {
  return (
    <div>
      <div className="flex text-white gap-10 pl-[138px] py-2">
        <h3>Discovery</h3>
        <h3>Browse</h3>
        <h3>News</h3>
      </div>
      <div className="flex">
        <EmblaCarousel></EmblaCarousel>
        <EmblaCarousel2></EmblaCarousel2>
      </div>
      <div>
        {/* <Slider></Slider> */}
      </div>
      <div>
      </div>
    </div>
  );
}