"use client";
import Carousel from "./component/Carousel/carousel";
export default function Home() {
  return (
    <div>
      <div className="flex text-white gap-10 pl-[138px] py-2">
        <h3>Discovery</h3>
        <h3>Browse</h3>
        <h3>News</h3>
      </div>
      <div>
        <Carousel />
      </div>
      <div>
        
      </div>
    </div>
  );
}
