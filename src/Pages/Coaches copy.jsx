import { FaStar, FaRegCalendarAlt, FaPhoneAlt, FaComments, FaChevronDown } from "react-icons/fa";
import ProfilePicture from "../assets/tyle.png";

function Card({ coach }) {
  return (
    <div className="rounded-xl shadow p-3 sm:p-4 bg-white max-w-xs mx-auto w-full flex flex-col items-start h-full">
      <div className="relative">
        <img
          src={coach.image}
          alt={coach.name}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div className="absolute top-0 left-14 bg-white px-1 py-0.5 flex items-center gap-1 rounded-full text-green-600 text-[10px] font-medium">
          <span className="w-2 h-2 bg-green-500 rounded-full" />
          Available
        </div>
      </div>

      <h2 className="mt-4 text-base font-semibold text-gray-800">{coach.name}</h2>
      <p className="text-xs text-gray-500 mt-1">
        {coach.expertise.join(" | ")}
      </p>

      <div className="flex items-center mt-2 text-yellow-500 text-xs">
        <span className="font-medium text-gray-700 mr-1">{coach.rating}</span>
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            className={i < Math.round(coach.rating) ? "text-yellow-400" : "text-gray-300"}
          />
        ))}
        <span className="text-gray-500 ml-2">({coach.reviews})</span>
      </div>

      <hr className="my-3 w-full text-gray-200" />

      <div className="text-xs text-gray-600 w-full">
        <p><span className="font-medium text-xs text-gray-500">Call Rate:</span> <span className="font-semibold">{coach.callRate}</span></p>
        <p className="mt-1"><span className="font-medium text-xs text-gray-500">Message Rate:</span> <span className="font-semibold">{coach.messageRate}</span></p>
        <p className="mt-1"><span className="font-medium text-xs text-gray-500">Minute Balance:</span><span className="font-semibold"> {coach.minuteBalance}</span></p>
      </div>

      <div className="mt-auto pt-4 flex flex-wrap gap-2 w-full ml-2">
        <button className="flex items-center gap-1 px-2 py-1 bg-[#C8B8E8] text-black font-semibold text-xs rounded-md shadow-[inset_0_2px_2px_#ffffff] border-2 
        border-[#C8B8E8]  hover:bg-purple-200 cursor-pointer transition">
          <FaRegCalendarAlt className="text-gray" /> Book a call
        </button>
        <button className="flex items-center gap-1 px-4 py-2 bg-white border-1 border-[#9363C4aa] text-[#9363C4] text-xs font-semibold rounded-md
        hover:bg-purple-200 cursor-pointer transition">
          <FaPhoneAlt /> Call
        </button>
        <button className="flex items-center gap-1 px-4 py-2 bg-white border-1 border-gray-400 text-gray-700 text-xs font-semibold rounded-md
        hover:bg-purple-200 cursor-pointer transition">
          <FaComments /> Chat
        </button>
      </div>
    </div>
  );
}

function FindCoach() {
  const coaches = [
    {
     name: `Tyle William`,
         expertise: ["Neurologist", "Energy Healing", "Tarot"],
         rating: 4.9,
         reviews: "12K",
         callRate: "$2 / min",
         messageRate: "$6 / 100 word bundle",
         minuteBalance: "2 minutes",
         image: ProfilePicture,
    },
    {
      name: `Tyle William`,
         expertise: ["Neurologist", "Energy Healing", "Tarot"],
         rating: 4.9,
         reviews: "12K",
         callRate: "$2 / min",
         messageRate: "$6 / 100 word bundle",
         minuteBalance: "2 minutes",
         image: ProfilePicture,
    },
    {
      name: `Tyle William`,
         expertise: ["Neurologist", "Energy Healing", "Tarot"],
         rating: 4.9,
         reviews: "12K",
         callRate: "$2 / min",
         messageRate: "$6 / 100 word bundle",
         minuteBalance: "2 minutes",
         image: ProfilePicture,
    },
    {
       name: `Tyle William`,
         expertise: ["Neurologist", "Energy Healing", "Tarot"],
         rating: 4.9,
         reviews: "12K",
         callRate: "$2 / min",
         messageRate: "$6 / 100 word bundle",
         minuteBalance: "2 minutes",
         image: ProfilePicture,
    },
    {
       name: `Tyle William`,
         expertise: ["Neurologist", "Energy Healing", "Tarot"],
         rating: 4.9,
         reviews: "12K",
         callRate: "$2 / min",
         messageRate: "$6 / 100 word bundle",
         minuteBalance: "2 minutes",
         image: ProfilePicture,
    },
    {
       name: `Tyle William`,
         expertise: ["Neurologist", "Energy Healing", "Tarot"],
         rating: 4.9,
         reviews: "12K",
         callRate: "$2 / min",
         messageRate: "$6 / 100 word bundle",
         minuteBalance: "2 minutes",
         image: ProfilePicture,
    },
     
    
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-[#c4b3c33c] min-h-screen mt-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-2 sm:px-6 md:px-12 pt-4 sm:pt-6 md:pt-8 pb-4 sm:pb-6 md:pb-8">
        <h1 className="text-2xl sm:text-3xl md:text-[40px] lg:text-[50px] text-[#454545]  capitalize">
          Life Coaches
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 mt-4 md:mt-0">
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 sm:px-6 md:px-8 py-2 text-sm text-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-300 pr-10 w-full sm:w-auto">
              <option value="">Category</option>
              <option value="career">Career</option>
              <option value="relationship">Relationship</option>
              <option value="wellness">Wellness</option>
            </select>
            <FaChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
          </div>

          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 sm:px-6 py-2 text-sm text-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-300 pr-10 w-full sm:w-auto">
              <option value="">Sort By</option>
              <option value="rating">Top Rated</option>
              <option value="experience">Most Experienced</option>
              <option value="priceLow">Price: Low to High</option>
            </select>
            <FaChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-x-4 lg:gap-x-10 gap-y-6 lg:gap-y-8 max-w-full lg:max-w-[1060px] mx-auto">
        {coaches.map((coach, idx) => (
          <Card key={idx} coach={coach} />
        ))}
      </div>

      <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
        <button className='flex items-center gap-1 px-6 py-3 sm:py-4 bg-[#C8B8E8] shadow-[inset_0_2px_2px_#ffffff] border-2
        cursor-pointer border-[#C8B8E8] text-[#454545] text-xs sm:text-sm font-semibold rounded-lg hover:bg-purple-200 transition'>
          View All Coaches
        </button>
      </div>
    </div>
  );
}

export default FindCoach;
