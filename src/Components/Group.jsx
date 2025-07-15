import React from "react";
import jam from "../assets/jam.png";
import GroupcoachingBg from "../assets/GroupcoachingBg.png"; // Make sure it has an extension

const Group = () => {
  return (
    <div
      className="flex justify-center mt-10 gap-70 bg-cover bg-center bg-no-repeat px-4 py-4"
      style={{ backgroundImage: `url(${GroupcoachingBg})` }}
    >
      <div>
        <h2 className="font-semibold text-3xl mt-10 text-[#454545]">Group Coaching</h2>
        <p className="mt-4 mb-20 text-[#454545]">
          Interested in group coaching for your team, workplace, or event? Fill
          out the form <br />
          below, and our team will get in touch with you with more information.
        </p>
      </div>

      <div>
        <button className="flex items-center border border-purple-300 rounded-md mt-20 py-2 px-3 cursor-pointer hover:bg-purple-100 transition">
          <img src={jam} alt="jam-icon" className="w-6 h-6 mr-2" />
          Inquire About Group Coaching
        </button>
      </div>
    </div>
  );
};

export default Group;
