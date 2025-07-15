import React from "react";
// import Navbar from "../Components/Navbar";
import { Icon } from "@iconify/react";
import Download from '../Components/Download'
import Group from '../Components/Group'
// import Footer from '../Components/Footer'
const cardProp =
  "flex flex-col items-center justify-start py-6 rounded-2xl bg-[linear-gradient(to_bottom_left,_#C8B8E866_0%,_white_20%,_white_80%,_#C8B8E866_100%)] shadow-lg w-80 h-90";

const Price = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className=" bg-[#F1EEF9] flex flex-col justify-center items-center p-8 mt-5">
        <h1 className="text-4xl md:text-4xl text-[#454545] text-center  capitalize leading-snug
         whitespace-nowrap p-6 m-2">
          How Pricing Works
        </h1>
        <div className="flex flex-row justify-center items-center gap-10">
          {/* Card 1 */}
          <div className={cardProp}>
            <div className="bg-[#C8B8E8] rounded-full p-2 mb-2">
              <Icon icon="mdi-light:gift" className="w-10 h-10" />
            </div>
            <div>
              <p className="text-[20px] font-semibold text-[#33384B]">
                Special Offer for New Users
              </p>
            </div>
            <hr className="w-70 border-t border-dotted border-gray-400 mt-4 mb-4" />
            <p className="pr-8 pl-8  text-[12px] mt-4 text-[#454545] leading-snug">
              All first-time users receive their first 5 minutes
              <br /> for just $4.99—whether connecting through
              <br /> voice calls or messaging.
            </p>
            <br />
            <p className="pr-8 pl-5  text-[12px] text-[#454545] leading-snug">
              This exclusive offer is available only for new <br />
              users, giving you the chance to explore our
              <br /> platform with confidence.
            </p>
          </div>
          {/* Card 2 */}
          <div className={cardProp}>
            <div className="bg-[#C8B8E8] rounded-full p-2 mb-2">
              <Icon icon="mynaui:dollar" className="w-10 h-10" />
            </div>
            <div>
              <p className="text-[20px] text-[#33384B] font-semibold ">Pricing</p>
            </div>
            <hr className="w-70 border-t border-dotted border-gray-400 mt-4 mb-4" />

            <div className="flex items-center gap-3 mr-45 ">
              <Icon
                icon="mingcute:phone-call-line"
                className="w-6 h-6 text-purple-300 mt-4"
              />
              <span className="text-md font-medium text-gray-800 mt-4">
                Voice Call
              </span>
            </div>

            <p className="pr-8 pl-5  text-[12px] text-[#454545] mb-3 ">
              Each life coach charges per minute. <br />
              Rates are clearly displayed on profiles.
            </p>

            <div className="flex items-center gap-3 mr-45 ">
              <Icon
                icon="fluent:chat-28-regular"
                className="w-6 h-6 text-purple-300"
              />
              <span className="text-md font-medium text-gray-800">
                Messaging
              </span>
            </div>

            <p className="pr-8 pl-7  text-[12px] text-[#454545]">
              Messages are purchased in bundles of <br />
              100 words,priced per coach's rate.
            </p>
          </div>

          {/* Card 3 */}
          <div className={cardProp}>
            <div className=" bg-[#C8B8E8] rounded-full p-2 mb-2">
              <Icon icon="solar:card-broken" className="w-10 h-10" />
            </div>
            <div>
              <p className="text-[20px] text-[#33384B] font-semibold">Purchasing Credits</p>
            </div>
            <hr className="w-70 border-t border-dotted border-gray-400 mt-4 mb-4" />
            <p className="pr-8 pl-8 leading-snug text-[12px] text-[#454545] mb-3 mt-5">
              To get started, you'll need to purchase credits
              <br />
              before initiating any voice or messaging <br />
              sessions.
            </p>

            <p className="pr-8 pl-2 leading-snug text-[12px] text-[#454545] mt-2">
              Each credit equals $1, sp for example, 10 <br />
              credits = $10
            </p>
          </div>
        </div>
        <p className="mt-6 mr-100">
          <span className="text-purple-600 font-medium">*Note:</span> Messaging
          for new user: Get 500 words for just
          <span className="text-purple-500 font-medium"> $4.99 </span>
          as part of our new user special.
        </p>
      </div>
       <Download />
       <Group />
       {/* <Footer /> */}
    </div>
  );
};

export default Price;
