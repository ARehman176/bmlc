import React from "react";
import work from "../assets/work.png";

const Work = () => {
  return (
    <div className="px-4 py-10 mt-10">
      <h1 className="flex justify-center text-5xl font-semibold text-[#454545]">
        How it Works
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center mt-20 gap-50">
        <img
          src={work}
          alt="Work Illustration"
          className="w-full max-w-md md:max-w-lg"
        />

        <div className="max-w-xl text-center md:text-left">
          <h3 className="text-5xl  text-[#454545]">
            Explore Our Certified Life <br />
            Coaches
          </h3>
          <p className="mt-10 text-2xl text-[#454545]">
            Browse our list of available life coaches and <br />
            choose a coach that fits your needs and <br />
            preferences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
