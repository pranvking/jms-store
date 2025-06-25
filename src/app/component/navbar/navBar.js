import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Signin from "./signin";
import Search from "./searchBar";
const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-navBar  top-0 ">
        <div className="container mx-auto px-0 h-full">
            <div className="flex justify-between items-center h-full">
                <img src="./images/logo.png" className="h-10 w-30 rounded-full"></img>
                <Search />
                <AiOutlineShoppingCart className="h-7 w-7 text-cart   right-40 absolute "/>
                <Signin />
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;``