import React from "react";
import pic from "../assets/pic.png";

const Arrow = () => {
  return (
    <div className=" flex justify-center mt-20">
      <img src={pic} alt="" className="  w-32 h-32 animate-bounce" />
    </div>
  );
};

export default Arrow;
