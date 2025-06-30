import React from "react";
import text from "../assets/text.png";
const TopBar = () => {
  return (
    <div className="flex items-center bg-[#C8B8E8] justify-center">
      <img src={text} alt="" className="w-6 h-6 mt-2 mb-2 mr-2" />
      <p>
        First time user special <span className="text-purple-800 font-semibold">$4.99</span>{" "}
        for the first five minutes
      </p>
    </div>
  );
};

export default TopBar;
