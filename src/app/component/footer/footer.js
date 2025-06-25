import React from 'react'
import { SiTrustpilot } from "react-icons/si";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const Footer = () => {
  return (
    <div className="footer  bottom-0 w-full h-80 bg-navBar">
      <div className='container mx-auto px-0 h-full'>
        <div className='flex justify-between h-auto py-8 px-5 mt-48' >
          <p className='text-white  text-sm'>JM Store © 2022 - 2024 An affiliate <br /> with Pranav Karmacharya</p>
          <div>
            <p className='text-white  text-sm  relative right-28 '> kathmandu 15,Nepal</p>
            <CiLocationOn className='text-white h-10 w-6 relative right-40 bottom-7' />
          </div>
          <p className='text-white  text-sm relative right-72 ' >About us:</p>
        </div>
        <div className='flex justify-between h-12 relative bottom-5 px-5'>
          <img src="/images/logo.png" className="h-10 w-30 rounded-full"></img>
          <div>
            <FaPhoneAlt className='text-white h-5 w-5 relative left-40' />
          </div>
          <p className='text-white  text-sm relative right-11'>+977 9822789260</p>
          <p className='text-white  text-sm relative bottom-8'>JM&Store or ParcelNepal is Nepal based digital<br /> marketplace that specializes in the sale of <br />videogames, game-keys, and gaming-related products.</p>
        </div>
        <div className='flex justify-between h-auto  px-5'>
          <p className='text-white  text-sm'>JM Store Inc © 2022 - 2023 <br /> An Pranav's Company.</p>
          <div><IoMdMail className='h-5 w-5 relative text-white left-52' /></div>
          <p className='relative text-white left-28 bottom-1'>pranavkarmacharya@gmail.com</p>
          <div><FaFacebook className='text-white h-16 w-10 relative  bottom-3 left-36' /></div>
          <div><FaTwitterSquare className='text-white h-20 w-10 relative  bottom-5 left-24' /></div>
          <div><CiLinkedin className='text-white h-20 w-10 relative bottom-5 left-14' /></div>
          <div><FaGithub className='text-white h-20 w-10 relative bottom-5 ' /></div>
        </div>
        <div className='flex justify-between h-auto py-3 px-3'>
          <img src="/images/jmsGif.gif" className='h-10 w-30'></img>
          <p className='text-white relative left-96'>See our reviews on Trustpilot</p>
          <SiTrustpilot className=' text-white relative left-44 top-1' />
          <p className='text-white relative right-8'>Trustpilot</p>
        </div>
      </div>
    </div>
  )
}
export default Footer