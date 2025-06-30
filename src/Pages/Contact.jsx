import React from "react";
// import Navbar from "../Components/Navbar";
import { Icon } from "@iconify/react";
import Group from "../Components/Group";
// import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div
        className=" bg-purple-200 h-[450px] w-full overflow-hidden mt-4 relative backdrop-blur-3xl"
      >
       
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#27272A] mt-16">
            Get In Touch!
          </h2>
          <p className="text-[#27272A] text-1xl mt-10">
            We’re Here To Help And Answer Any Questions You Might Have. <br />
            We Look Forward To Hearing From You.
          </p>
        </div>

        {/* Concave Arch Shape */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,320 Q720,160 1440,320 L1440,320 L0,320 Z"
          />
        </svg>
      </div>
      <div className="flex justify-center gap-8 z-10 relative -mt-45 h-80 ">
        <div className="bg-white rounded-2xl shadow-md text-center p-6 hover:shadow-xl transition">
          <Icon
            icon="ph:headset-bold"
            className="text-purple-400 text-5xl mx-auto mb-4 -mt-2"
          />
          <h3 className="text-xl font-semibold text-[#454545] mb-2 mt-6">
            Contact Support
          </h3>
          <p className="text-[#7F7F7F] mb-4 mt-6">
            Get help from our support
            <br /> team.
          </p>
          <button
            className="bg-purple-200 hover:bg-purple-300 text-black font-medium px-4 py-2 
          rounded-full transition mt-6"
          >
            Get Support →
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md text-center p-6 hover:shadow-xl transition">
          <Icon
            icon="mdi:handshake-outline"
            className="text-purple-400 text-5xl mx-auto mb-4 -mt-2"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">
            Partnership
          </h3>
          <p className="text-gray-600 mb-4 mt-6">
            Partner with Be My Life Coach <br /> or become a Life Coach.
          </p>
          <button
            className="bg-purple-200 hover:bg-purple-300 text-black font-medium px-4 py-2 
          rounded-full transition mt-6"
          >
            Become a Partner →
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-md text-center p-6 hover:shadow-xl transition">
          <Icon
            icon="material-symbols:feedback-outline"
            className="text-purple-400 text-5xl mx-auto mb-4 -mt-2"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">
            Feedback
          </h3>
          <p className="text-gray-600 mb-4 mt-6">
            Share suggestions about our <br /> products or services.
          </p>
          <button
            className="bg-purple-200 hover:bg-purple-300 text-black font-medium px-4 py-2
           rounded-full transition mt-6"
          >
            Share Feedback →
          </button>
        </div>
      </div>
      <div className="m-8">
        <h1 className="text-4xl md:text-4xl text-[#27272A] text-center font-medium leading-snug
         whitespace-nowrap p-2 pt-20 pb-10 capitalize">
          For any other inquiry, please use the form below.
        </h1>

        <form className="max-w-3xl mx-auto bg-white p-10 rounded-2xl space-y-6 mb-30">
          {/* First & Last Name */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label className="block text-sm font-medium text-[#454545] mb-1">
                First Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none
                 focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium text-[#454545] mb-1">
                Last Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none 
                focus:ring-2 focus:ring-purple-400"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label className="block text-sm font-medium text-[#454545] mb-1">
                Email Address
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none
                 focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium text-[#454545] mb-1">
                Subject
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none 
                focus:ring-2 focus:ring-purple-400"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-[#454545] mb-1">
              Message
            </label>
            <textarea
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none 
              focus:ring-2 focus:ring-purple-400 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex flex-row items-center justify-center">
            <button
              type="submit"
              className="bg-[#C8B8E8] px-6 h-12 text-black font-semibold 
               hover:bg-purple-300 hover:text-black py-2 rounded-md
               shadow-[inset_0_2px_2px_#ffffff] border-1 border-[#C8B8E8] transition-all"
            >
              <span className="flex items-center gap-4">
                <Icon icon="ion:paper-plane-outline" className="text-2xl" />
                Submit Request
              </span>
            </button>
          </div>
        </form>
      </div>
      <Group />
      {/* <Footer /> */}
    </div>
  );
};

export default Contact;
