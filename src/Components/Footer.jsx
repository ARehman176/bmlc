import React from "react";
import coach from "../assets/coach.png";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import linkdin from "../assets/linkdin.png";
import tiktok from "../assets/tiktok.png";
import google from "../assets/google.png";
import apple from "../assets/apple.png";
import { Link } from "react-router";
const Footer = () => {
  return (
    <div className="flex gap-60 justify-center  bg-purple-200">
      <div className="mb-20 mt-20">
        <img src={coach} alt="" className="w-60 h-17 " />
        <p className="mt-5 ml-4 text-[#454545]"> Privacy Policy</p>
        <p className="ml-4 mt-4 text-[#454545]"> Terms of Service</p>
      </div>
      <div className="mt-20">
        <h4 className="font-semibold text-lg text-[#27272A]">Useful Links</h4>
        <ul className="mt-13 mb-10 ">
          <li className="text-[#454545]"><Link to = "/">Home </Link></li>
          <li className="mt-3 text-[#454545]"><Link to= '/About'>About Us </Link></li>
          <li className="mt-3 text-[#454545]"> <Link to= '/price'>Pricing </Link></li>
          <li className="mt-3 text-[#454545]"> <Link to= '/Coaches'>Life Coaches</Link></li>
            <li className="mt-3 text-[#454545]"><Link to= '/Contact'>Contact Us</Link></li>
        </ul>
      </div>
      <div className="mt-20">
        <h3 className="font-semibold text-lg text-[#27272A]">Follow us on Social</h3>
        <div className="flex gap-2 mt-12">
          <img src={fb} alt="" className="w-8 h-8" />
          <img src={insta} alt="" className="w-8 h-8" />
          <img src={linkdin} alt="" className="w-8 h-8" />
          <img src={tiktok} alt="" className="w-8 h-8" />
        </div>
      </div>
      <div className="mt-20">
        <h3 className="font-semibold text-lg text-[#27272A]">Download The App</h3>

        <div className="flex mt-12 gap-2">
          <img src={google} alt="" className="w-23" />
          <img src={apple} alt="" className="w-23" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
