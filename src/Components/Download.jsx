import React from "react";
import btn from "../assets/btn.png";
import butn from "../assets/butn.png";
import mbl from "../assets/mbl.png";
const Download = () => {
  return (
    <div className="flex justify-center gap-45 mt-20">
      <div className="mt-12 ml-60">
        <h2 className="text-3xl font-semibold">
          Download Be My Life <br />
          Coach App
        </h2>
        <p className="mt-8">
          Download Be My Life Coach app today to get started <br />
          on a better you for tomorrow
        </p>
        <div className="flex gap-4 mt-8">
          <img src={btn} alt="" className="w-39 " />
          <img src={butn} alt="" className="w-39 " />
        </div>
      </div>

      <div className="ml-60">
        <img src={mbl} alt="" className="w-150" />
      </div>
    </div>
  );
};

export default Download;
