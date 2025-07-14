import React from "react";
import tyle from "../assets/tyle.png";
import container from "../assets/container.png";
import calendar from "../assets/calendar.png";
import call from "../assets/call.png";
import chat from "../assets/chat.png";
import arrow from "../assets/arrow.png";

// Dummy coach data
const coaches = Array(6).fill().map((_, i) => ({
  name: `Tyla William `,
  title: "Neurologist | Energy Healing | Tarot",
  rating: (4.8 + (i % 2) * 0.1).toFixed(1),
  rateCall: "$6 / minute",
  rateMsg: "$6 / 100 word bundle",
  balance: `${2 + i} minutes`,
  image: tyle,
}));

// Coach Card Component
const FindCard = ({ coach }) => (
  <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col w-100">
    <img
      src={coach.image}
      alt={coach.name}
      className="w-36 h-24 mb-4 ml-3"
    />
    <h4 className="text-lg font-semibold text-gray-800 ml-3">
      {coach.name}
    </h4>
    <p className="text-sm text-gray-500 mb-1 ml-3">{coach.title}</p>
    <p className="flex items-center text-sm text-yellow-600 font-medium mb-2 ml-3">
      {coach.rating}
      <img src={container} alt="Stars" className="w-20 h-4 ml-3" />
    </p>
    <p className="text-sm text-gray-600 mt-1 ml-3">
      Calls: {coach.rateCall}
    </p>
    <p className="text-sm text-gray-600 mt-1 ml-3 font-semibold">
      Messages: {coach.rateMsg}
    </p>
    <p className="text-sm text-gray-600 mb-4 mt-1 ml-3 font-semibold">
      Minutes Balance: {coach.balance}
    </p>

    {/* Buttons in one line, wrapping on small screens */}
    <div className="flex gap-3 ml-3 mb-2 flex-wrap justify-start">
      <button
        className="flex items-center justify-center gap-2 bg-[#C8B8E8] text-black
        font-medium py-2 px-3 rounded cursor-pointer hover:bg-purple-300 transition
        shadow-[inset_0_2px_2px_#ffffff] border border-[#C8B8E8] min-w-[110px]"
      >
        <img src={calendar} alt="calendar" className="w-4 h-4" />
        Book a call
      </button>

      <button
        className="flex items-center justify-center gap-1 cursor-pointer text-purple-300
        font-medium py-2 px-3 rounded transition border border-gray-200 min-w-[90px]"
      >
        <img src={call} alt="call" className="w-5 h-5" />
        Call Now
      </button>

      <button
        className="flex items-center justify-center gap-2 bg-white text-black cursor-pointer
        font-medium py-2 px-3 rounded hover:bg-gray-100 transition border border-gray-300 min-w-[80px]"
      >
        <img src={chat} alt="chat" className="w-4 h-4" />
        Chat
      </button>
    </div>
  </div>
);

// Main Find Section
const Find = () => {
  return (
    <div className="bg-gray-100 p-6">
      {/* Section Title */}
      <h2 className="text-3xl font-semibold text-center text-[#454545] mb-6 mt-4">
        Find Your Life Coach
      </h2>

      {/* Coaches Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {coaches.map((coach, index) => (
          <FindCard key={index} coach={coach} />
        ))}
      </div>

      {/* Bottom Button */}
      <div className="flex justify-center mt-10 mb-10">
        <button
          className="bg-[#C8B8E8] text-black font-semibold py-3 px-8 
          rounded-md hover:bg-purple-300 transition duration-300 ease-in-out 
          cursor-pointer flex items-center gap-2 shadow-[inset_0_2px_2px_#ffffff] 
          border border-[#C8B8E8]"
        >
          See all life coaches
          <img src={arrow} alt="arrow" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Find;
