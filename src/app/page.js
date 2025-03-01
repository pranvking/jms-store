"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Home() {
  const [inn, setInn] = useState(0);
  const carouselImages = [
    "/images/carouselImages/fifa.jpg",
    "/images/carouselImages/Gta6.jpeg",
    "/images/carouselImages/rdr2.jpg",
    "/images/carouselImages/Wukong.jpg",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setInn((prevInn) => (prevInn + 1) % carouselImages.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex text-white gap-10 pl-[138px] py-2">
        <h3>Discovery</h3>
        <h3>Browse</h3>
        <h3>News</h3>
      </div>
      <div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className=""
        >
          <CarouselContent className="">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pl-8">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex h-[250px] items-center justify-center p-6">
                      <Image
                        src={carouselImages[inn]}
                        height={5000}
                        width={5000}
                        alt="apple"
                        className="h-full w-auto"
                      />
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
