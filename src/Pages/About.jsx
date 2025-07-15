import React from "react";
// import Navbar from '../Components/Navbar'
import lyer from "../assets/lyer.png";
import { Icon } from "@iconify/react";
import Group from "../Components/Group";
// import Footer from '../Components/Footer';
import life from "../assets/life.png";
const About = () => {
  return (
    <div>
      <div className="flex justify-center mt-20 bg-[#F8F6FC] gap-60">
        <div className="mt-10">
          <h1 className=" text-4xl mb-5 leading-tight text-[#27272A]">
            Be My Life Coach Was Created <br />
            With one Simple Belief:
          </h1>
          <p className=" text-1xl mb-5 text-[#27272A] font-semibold">
            Getting The Support You Need Shuldn't Be <br />
            Complicated.
          </p>
          <p className="text-[#454545] ">
            Wheather you're navigating career chaos, parenting stress, <br />
            relationship strugles, or simply need someone to talk to, we believe{" "}
            <br />
            connection shouldn't be delayed by paperwork ,contracts, or long{" "}
            <br />
            waitlists. You desrve guidance now __ not next week.
          </p>
        </div>
        <div className="mt-8 mb-8">
          <img src={lyer} alt="" />
        </div>
      </div>

      <div>
        <h1 className="text-center mt-20 text-5xl  leading-tight text-[#454545]  ">
          So We Built A Platform That Removes <br />
          The Barriers
        </h1>
      </div>
      <div className="flex justify-center mt-10 gap-18">
        <button
          className=" h-35 w-55 bg-[linear-gradient(to_bottom_left,_#C8B8E866_0%,_white_15%,_white_15%,_#C8B8E866_100%)]
         rounded-xl shadow-xl"
        >
          <Icon
            className="h-12 w-40 text-purple-400 ml-7 mb-2 -mt-4 "
            icon="icon-park-outline:form-one"
          />
          No forms
        </button>
        <button
          className="h-35 w-55 bg-[linear-gradient(to_bottom_left,_#C8B8E866_0%,_white_15%,_white_15%,_#C8B8E866_100%)]
        rounded-xl shadow-xl"
        >
          <Icon
            className="h-12 w-40 text-purple-400 ml-7 mb-2 -mt-4"
            icon="flowbite:grid-outline"
          />
          No fuss
        </button>
        <button
          className=" w-55 h-35 bg-[linear-gradient(to_bottom_left,_#C8B8E866_0%,_white_15%,_white_15%,_#C8B8E866_100%)]
           rounded-xl shadow-xl"
        >
          <Icon
            className="h-12 w-40 text-purple-400 mb-2 ml-6"
            icon="flowbite:badge-check-outline"
          />
          Just real, instant access
          <br />
          to certified life coaches
        </button>
      </div>

      <div className="flex justify-center mt-20  gap-25 bg-[#F8F6FC]">
        <div className="mt-35">
          <h1 className="font-medium text-4xl  leading-11.5 text-[#27272A]">
            Feeling Overwhelmed? <br />
            We're just A Tap Away.
          </h1>
          <p className="mt-6 mb-2 text-2xl text-[#454545]">
            Connect with a life coach __ no waiting, no judgment.
          </p>
          <h2 className="mb-8 mt-8 text-2xl font-semibold italic capitalize leading-8.5 text-[#9363C4]">
            Because When life Feels Heavy, <br />
            Support should Feel Light.
          </h2>

          <button
            className="group flex items-center justify-center gap-2 px-5 h-[50px] w-65 bg-[#C8B8E8] text-[#27272A]
             text-sm rounded-lg shadow-[inset_0_2px_2px_#ffffff] border-2 border-[#C8B8E8]
             transition-all duration-300 hover:shadow-md"
          >
            <span className="font-semibold">Connect with a Life Coach</span>
            <span className="transition-transform duration-300 transform group-hover:translate-x-2">
              <Icon className="h-6 w-6" icon="majesticons:arrow-right" />
            </span>
          </button>
        </div>
        <div>
          <img src={life} alt="" className="h-160 mt-10 mb-10" />
        </div>
      </div>
      <Group />
      {/* <Footer /> */}
    </div>
  );
};

export default About;
