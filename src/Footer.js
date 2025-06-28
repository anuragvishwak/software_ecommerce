import React from "react";
import img1 from "./1.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#783f8e] p-5">
      <div className="flex justify-between w-full">
        <div>
        <img src={img1} className="h-10" />
      </div>

      <div>
        <div>
          <p className="font-bold text-white text-xl">Usefull Links</p>
          <p className="text-white">Home</p>
          <p className="text-white">Contact Us</p>
          <p className="text-white">Services</p>
        </div>
      </div>
      </div>


      <hr className="mt-7 mb-3"/>
     <div className="flex justify-between">
         <div className="flex items-center text-xl text-white space-x-2">
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
        </div>
      <div className="flex space-x-3">
        <p className="underline font-semibold text-white">Terms & Condition</p>
        <p className="underline font-semibold text-white">Privacy & Policy</p>
      </div>
     </div>
    </div>
  );
}

export default Footer;
