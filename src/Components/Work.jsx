import React from "react";
import work from "../assets/work.png";

const Work = () => {
  return (
    <div className="px-4 py-10 mt-10">
      <h1 className="flex justify-center text-4xl font-semibold text-[#454545]">
        How it Works
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center mt-15 gap-30">
        <img
          src={work}
          alt="Work Illustration"
          className="w-md max-w-md md:max-w-lg"
        />

        <div className="max-w-xl text-center md:text-left">
          <h3 className="text-4xl  text-[#454545]">
            Explore Our Certified Life <br />
            Coaches
          </h3>
          <p className="mt-10 text-xl text-[#454545]">
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
