import React from "react";
import chat from "../assets/chat.png";
import material from "../assets/material.png";
import heart from "../assets/heart.png";

const supportData = [
  {
    icon: chat,
    title: "Millions of Meaningful Conversations",
    text: "Guiding users through voice and chat sessions.",
  },
  {
    icon: material,
    title: "Certified Life Coaches",
    text: "Real support at your fingertips with no waiting times.",
  },
  {
    icon: heart,
    title: "Life-Changing Support for Countless Users",
    text: "Helping individuals transform their lives every day.",
  },
];

const Support = () => {
  return (
    <div className="flex  flex-col md:flex-row gap-10 p-8 md:p-16 bg-white  ">
      {/* Left Content */}
      <div className="flex-1 ml-50 mt-20 ">
        <h2 className="text-3xl md:text-4xl font-bold text-[#454545] leading-snug mb-4">
          Immediate Support For <br />
          Life's Pivotal Moments
        </h2>
        <p className="text-[#454545] leading-relaxed ">
          Life doesn't wait for office hours. Whether you're
          <br />
          dealing with relationship stress, burnout, or just
          <br />
          feeling stuck, our certified life coaches are here—
          <br />
          right now. No paperwork, no shame. Just real-
          <br />
          time support, when you need it most.
        </p>
      </div>

      {/* Right Content */}
      <div className="flex-1 flex flex-col gap-6 mt-20 ml-50 ">
        {supportData.map((item, index) => (
          <div
            className="flex items-start gap-4 bg-gray-100 rounded-xl shadow hover:scale-105 transition-transform 
          duration-200 cursor-pointer w-[440px] h-[80px]"
            key={index}
          >
            <img src={item.icon} alt="" className="w-12 h-12 ml-4 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mt-2">
                {item.title}
              </h4>
              <p className="text-gray-600">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;
