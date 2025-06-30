import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router";
import arrow from "../assets/arrow.png";
const Navbar = () => {
  return (
    <nav className="   mt-4  ">
      <div className=" flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="Company Logo" className="h-10 w-auto ml-30" />

        {/* Navigation Menu */}
        <ul className="hidden md:flex space-x-15 text-gray-700 font-medium">
          <li className="hover:text-purple-300 cursor-pointer"> <Link to="/" >Home </Link></li>

          <li className="hover:text-purple-300 cursor-pointer"><Link to= "/About">About Us </Link></li>
          <li className="hover:text-purple-300 cursor-pointer"><Link to= "/Price">Pricing</Link></li>
          <li className="hover:text-purple-300 cursor-pointer"> <Link to= "/Coaches">Life Coaches </Link></li>
          <li className="hover:text-purple-300 cursor-pointer"> <Link to= "/Contact">Contact Us </Link></li>
        </ul>

        {/* Buttons */}
        <div className="flex space-x-4 mr-35">
         <div className="flex items-center border-1 border-gray-200 rounded-md ">
          <div>
             <button
            className="px-4 py-2 text-sm font-semibold text-black-700 
          cursor-pointer rounded-md hover:bg-purple-350 transition"
          > <Link to= "Login">
            Log In 
               
         </Link> </button>
          </div>
          <div>
             <img src={arrow} alt="arrow" className="w-4 h-4 mr-2" />
          </div>
         </div>
       <div className="flex items-center  bg-purple-300 rounded-md cursor-pointer 
        hover:bg-purple-400 transition text-sm  ">
        <div>
            <button
            className="px-4 py-2 text-sm font-semibold text-blackcursor-pointer rounded-md
          "
          > <Link to= "Signup">
            Sign Up 
        </Link>  </button>
        </div>
        <div>
           <img src={arrow} alt="arrow" className="w-4 h-4 mr-2" />
        </div>
       </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
