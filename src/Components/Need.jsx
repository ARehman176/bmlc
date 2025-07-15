import React from "react";
import mobile from "../assets/mobile.png";

const Need = () => {
  return (
    <div className="px-4 py-10 mt-5">
      <div className="flex flex-col md:flex-row justify-center gap-30 items-center mt-10 ">
        <img
          src={mobile}
          alt="Work Illustration"
          className="w-md max-w-md md:max-w-lg mt-10"
        />

        <div className="max-w-xl text-center md:text-left">
          <h3 className="text-4xl  text-[#454545]">
            Coaching When You <br />
            Need it
          </h3>
          <p className="mt-10 text-xl text-[#454545] ">
            You can call or message your life coach at <br />
            anytime, from anywhere. You also get to <br />
            schedule coaching sessions when it's <br />
            convenient for you, and can connect from any <br />
            mobile device or computer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Need;
