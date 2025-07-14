import React from "react";
import jam from "../assets/jam.png";
const Group = () => {
  return (
    <div className="flex justify-center gap-100 bg-[#F8F6FC] ">
      <div>
        <h2 className="font-semibold text-3xl mt-10 text-[#454545]">Group Coaching</h2>
        <p className="mt-4 mb-20 text-[#454545]">
          Intersted in group coaching for your team, workplace, or event? Fill
          out the form <br />
          below, and our team will get in touch with you with more information.
        </p>
      </div>
      <div>
        <button className="flex border-1 border-purple-300 rounded-md mt-20 py-2 px-2 cursor-pointer">
          <img src={jam} alt="" className="w-6 h-6 mr-2 " />
          Inquire About Group Coaching
        </button>
      </div>
    </div>
  );
};

export default Group;
