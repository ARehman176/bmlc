import React from "react";
import life from "../assets/life.png"; 
import bounce from "../assets/bounce.png";
import control from "../assets/control.png";
import graph from "../assets/graph.png";
import talk from "../assets/talk.png";
const Life = () => {
  return (
    <section className="bg-purple-100 py-16 px-4 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-38">
        {/* Left Side */}
        <div className="max-w-xl text-center md:text-left mr-35">
          <h2 className="text-4xl font-semibold text-[#454545] mb-4">
            Transform Your Life
          </h2>
          <p className="text-[#454545] mb-8 ">
            Helping you live life to the fullest. Each of our Certified
            <br /> Life Coaches encourages and empowers you to build
            <br /> personal skills to manage life’s unexpected ups and <br />{" "}
            downs.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm text-center">
              <div className="flex justify-center mb-2">
                <img src={bounce} alt="" className="w-12 h-12" />
              </div>
              <p className="text-sm font-medium">Able To Overcome</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm text-center">
              <div className="flex justify-center mb-2">
                <img src={control} alt="" className="w-12 h-12" />
              </div>
              <p className="text-sm font-medium">Able To Take Control</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm text-center">
              <div className="flex justify-center mb-2">
                <img src={graph} alt="" className="w-12 h-12" />
              </div>
              <p className="text-sm font-medium">Able To Manage Stress</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm text-center ">
              <div className="flex justify-center mb-2">
                <img src={talk} alt="" className="w-12 h-12" />
              </div>
              <p className="text-sm font-medium">Able To Open Up</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative">
          <div className=" h-125 mr-15 ">
            <img src={life} alt="Coach" className="w-full h-full " />
          </div>
          <div className="absolute top-1/2 right-[-40px] w-40 h-40 bg-purple-300 rounded-full z-[-1]"></div>
        </div>
      </div>
    </section>
  );
};

export default Life;
