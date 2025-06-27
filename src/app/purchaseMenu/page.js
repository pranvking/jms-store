"use client";
import { useSearchParams } from "next/navigation";
import Fakenavbar from "../component/navbar/fakeNav";
import Link from "next/link";
const Purchase = () => {
  const searchParams = useSearchParams();
  const img = searchParams.get("img");
  const name = searchParams.get("name");
  const price = searchParams.get("price");

  return (
    <div>
      <Fakenavbar />
      <div className="flex text-white gap-10 pl-[138px] py-2 ml-6 mt-7 mb-7">
        <Link href="/discovery">Discovery</Link>
        <Link href="/browser">Browser</Link>
        <Link href="/news">News</Link>
      </div>
      <div className="flex ">
        {img && <img src={img} alt={name} className=" w-[257px] h-[350px] mt-10  mr-24 ml-40 rounded-lg" />}
        <div>
            <h2 className="text-white text-3xl mt-10">{name}</h2>
            <h1 className="text-white text-lg mt-4">Nrp.{price}</h1>
            <img src="./images/carouselLogo/Buynow.png" className='h-14 w-32 rounded-3xl mt-6 mr-20 '></img>
            <h2 className="text-white text-lg mt-4">{name} GiftCard | Instant Delivery or within a few selected hours.</h2>
            <h2 className="text-white text-lg mt-4">{name} INSTANT AUTOMATIC DELIVERY. After payment, you will <br></br>immediately receive a giftcard code in digital form.</h2>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
