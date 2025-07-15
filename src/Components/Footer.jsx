
import coach from "../assets/coach.png";

import google from "../assets/google.png";
import apple from "../assets/apple.png";
import { Link } from "react-router";
import { Icon } from "@iconify/react/dist/iconify.js";
const Footer = () => {
  return (
    <div className="flex gap-60 justify-center  bg-purple-200">
      <div className="mb-20 mt-10">
        <img src={coach} alt="" className="w-30 mt-3 " />
        <p className="mt-5 ml-2 text-[#454545]"> Privacy Policy</p>
        <p className="ml-2 mt-2 text-[#454545]"> Terms of Service</p>
      </div>
      <div className="mt-10">
        <h4 className="font-semibold text-lg mt-6 text-[#27272A]">Useful Links</h4>
        <ul className="mt-5 mb-10 ">
          <li className="text-[#454545] hover:text-purple-300"><Link to = "/">Home </Link></li>
          <li className="mt-3 text-[#454545] hover:text-purple-300 "><Link to= '/About'>About Us </Link></li>
          <li className="mt-3 text-[#454545] hover:text-purple-300"> <Link to= '/price'>Pricing </Link></li>
          <li className="mt-3 text-[#454545] hover:text-purple-300"> <Link to= '/Coaches'>Life Coaches</Link></li>
            <li className="mt-3 text-[#454545] hover:text-purple-300"><Link to= '/Contact'>Contact Us</Link></li>
        </ul>
      </div>
      <div className="mt-10">
        <h3 className="font-semibold text-lg mt-6 text-[#27272A]">Follow us on Social</h3>
        <div className="flex gap-2 mt-5 ">
         <Icon icon='ic:baseline-facebook'className="w-7 h-7 text-[#454545] transition-transform duration-300 hover:scale-120 cursor-pointer " />
             <Icon icon='ri:instagram-fill' className="w-7 h-7 text-[#454545] transition-transform duration-300 hover:scale-120 cursor-pointer "/>
                 <Icon icon='streamline-flex:tiktok-solid' className="w-7 h-7 text-[#454545] transition-transform duration-300 hover:scale-120 cursor-pointer " />
                     <Icon icon='mage:linkedin' className="w-7 h-7 text-[#454545] transition-transform duration-300 hover:scale-120 cursor-pointer " />
          
        </div>
      </div>
      <div className="mt-10">
        <h3 className="font-semibold text-lg mt-6 text-[#27272A]">Download The App</h3>

        <div className="flex mt-5 gap-2">
          <img src={google} alt="" className="w-23" />
          <img src={apple} alt="" className="w-23" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
