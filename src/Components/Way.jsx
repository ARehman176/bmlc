import React from "react";
import way from "../assets/way.png";

const Way = () => {
  return (
    <div className="px-4 py-10 mt-5">
      <div className="flex flex-col md:flex-row justify-center gap-30 items-center mt-10 ">
        <img
          src={way}
          alt="Work Illustration"
          className="w-md max-w-md md:max-w-lg"
        />

        <div className="max-w-xl text-center md:text-left">
          <h3 className="text-4xl  text-[#454545]">
            Communicate Your Way
          </h3>
          <p className="mt-10 text-xl text-[#454545] ">
            Talk to your life coach however you feel <br />
            comfortable __ via phone call or text <br />
            messaging on your time. No contracts, no <br />
            string attached. Just real time support at <br />
            your fingertips.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Way;
