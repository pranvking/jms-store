"use client";
import React, { useState } from "react";
import Fakenavbar from "../component/navbar/fakeNav";
import { GameSlider } from "../component/Carousel/gameSlider";

const Page = () => {
  const [imageSrc, setImageSrc] = useState("./images/blank_profile_picture.png");
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Fakenavbar />
      <div className="text-center ">
        < div className="flex ">
             <img src={imageSrc} alt="Profile" className="h-40 w-40 rounded-full ml-36  mt-16 " />
             <h1 className="text-white ml-28 mt-20 text-2xl"> Pranav Karmacharya</h1>
        </div>
        <div className="mr-96 -mt-16 ">        
            <input 
                type="file" 
                accept="image/*" 
                id="fileUpload"
                onChange={handleImageChange} 
                className="hidden"
            />
            <label 
            htmlFor="fileUpload" 
            className="cursor-pointer px-4  py-2 bg-navBar text-white rounded-xl hover:bg-white hover:text-backGround h-10 " 
        >
          Upload Image
        </label>
        </div>
        <div>
            <h1 className="text-2xl mt-24 text-white">Past Items Bought</h1>
            <div className="border-t border-navBar w-[800px] ml-[300px] mr-0 my-4 mb-10"></div>
            <GameSlider />
        </div>
      </div>
    </div>
  );
};

export default Page;
