import React from "react";
import group from "../assets/group.png";
import calendar from "../assets/calendar.png";

const Home = () => {
  return (
    <section className="w-full bg-[#F1EEF9] py-16 px-4 md:px-12 mt-12  ">
      <div className=" flex justify-between ml-17  md:flex-row items-center ">
        {/* Left Section */}
        <div className="md:w-1/2 mb-10 md:mb-0 ">
          <h4 className="text-3xl md:text-4xl font-bold text-gray-500 leading-tight mb-6 ">
            Certified Life Coaches,
            <br />
            A Tap Away — Because <br />
            You're Never Alone.
          </h4>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Whether you're juggling career chaos, parenting
            <br />
            stress, or at a crossroads, our life coaches are ready
            <br />
            to help you refocus and take your next step now.
          </p>
          <button
            className="flex items-center gap-2 px-6 py-3 bg-purple-300 text-white font-medium
           rounded-md hover:bg-purple-400 transition duration-300 cursor-pointer"
          >
            <img src={calendar} alt="calendar" className="w-5 h-5" />
            Speak with a Life Coach Now
          </button>
        </div>

        {/* Right Section */}
        <div className="ml-10 ">
          <img
            src={group}
            alt="Group Illustration"
            className=" w-165 mr-20  "
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
