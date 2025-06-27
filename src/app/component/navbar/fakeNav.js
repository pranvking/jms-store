import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Search from "./searchBar";
import Link from "next/link";
const Fakenavbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-navBar  top-0 ">
        <div className="container mx-auto px-0 h-full">
            <div className="flex justify-between items-center h-full">
                <Link href="/homea"><img src="./images/logo.png" className="h-10 w-30 rounded-full"></img></Link>
                <Search />
                <AiOutlineShoppingCart className="h-7 w-7 text-cart   right-40 absolute "/>
                <Link href="/profile"><img src="./images/blank_profile_picture.png" className="h-10 w-30 rounded-full"></img> </Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default Fakenavbar;