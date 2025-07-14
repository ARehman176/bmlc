import React from "react";
import tyle from "../assets/tyle.png";
import container from "../assets/container.png";
import calendar from "../assets/calendar.png";
import call from "../assets/call.png";
import chat from "../assets/chat.png";
import arrow from "../assets/arrow.png";
const coaches = [
  {
    name: "Tyla William",
    title: "Neurologist | Energy Healing | Tarot",
    rating: "4.9",
    rateCall: "$6 / minute",
    rateMsg: "$6 / 100 word bundle",
    image: tyle,
  },
  {},
  {},
  {},
  {},
  {}, // placeholders
];

const FindCard = ({ coach }) => (
  <div className="bg-white rounded-2xl shadow-md p-1 flex flex-col w-100 mt-20 ml-20   ">
    <img
      src={coach.image || tyle}
      alt={coach.name || "Coach"}
      className="w-37 h-24  mb-4 ml-3"
    />
    <h4 className="text-lg font-semibold text-gray-800 ml-3">
      {coach.name || "Tyla William"}
    </h4>
    <p className="text-sm text-gray-500 mb-1 ml-3">
      {coach.title || "Neurologist | Energy Healing | Tarot"}
    </p>
    <p className="flex items-center  text-sm text-yellow-600 font-medium mb-2 ml-3">
      {coach.rating || "4.9"}
      <img src={container} alt="Stars" className="w-20 h-4 ml-3" />
    </p>
    <p className="text-sm text-gray-600 mb-1 ml-3">
      Calls: {coach.rateCall || "$6 / minute"}
    </p>
    <p className="text-sm text-gray-600 mb-4 ml-3 font-semibold">
      Messages: {coach.rateMsg || "$6 / 100 word bundle"}
    </p>

    <div className="flex   gap-2  ml-3 mb-2">
      <button 
        className="flex items-center justify-center gap-2 bg-purple-300 text-black
       font-medium py-2 rounded cursor-pointer hover:bg-purple-400 transition w-28"
      >
        <img src={calendar} alt="" className="w-4 h-4 " /> Book a call
      </button>
      <button
        className="flex items-center justify-center gap-1 cursor-pointer text-purple-300
       font-medium py-2 rounded  transition w-25 border-1 border-gray-200 "
      >
        <img src={call} alt="" className="w-5 h-5" /> Call Now
      </button>
      <button
        className="flex items-center justify-center gap-2 bg-white text-black cursor-pointer
       font-medium py-2 rounded hover: transition w-20 border-1 border-gray-300"
      >
        <img src={chat} alt="" className="w-4 h-4" /> Chat
      </button>
    </div>
  </div>
);

const Find = () => {
  return (
    
    <div className="bg-gray-100 p-6 mt-4">
      
      <div className="flex justify-between">
        <h1 className="font-semibold text-5xl text-gray-700 mt-3 ml-39">Life Coaches</h1>
      <div className="flex flex-col md:flex-row gap-4 p-4 mr-31  ">
  <select className="border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 w-45
   focus:outline-none focus:ring-2 focus:ring-purple-400">
    <option value="">Select Category</option>
    <option value="career">Career</option>
    <option value="relationship">Relationship</option>
    <option value="wellness">Wellness</option>
  </select>

  <select className="border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 w-45 
  focus:outline-none focus:ring-2 focus:ring-purple-400">
    <option value="">Sort By</option>
    <option value="rating">Top Rated</option>
    <option value="experience">Most Experienced</option>
    <option value="priceLow">Price: Low to High</option>
  </select>
</div>
</div>
      {/* Grid of Coaches */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {coaches.map((coach, index) => (
          <FindCard key={index} coach={coach} />
        ))}

        {/* Button spanning all columns */}
        <div className="col-span-full flex justify-center mt-8 mb-10">
          <button
            className="bg-purple-300 text-black font-semibold py-3 px-8 
        rounded-md shadow-md hover:bg-purple-400 transition duration-300 ease-in-out 
        cursor-pointer flex items-center gap-2"
          >
            See all life coaches
            <img src={arrow} alt="arrow" className="w-4 h-4" />
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Find;
