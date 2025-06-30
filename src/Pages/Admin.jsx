import React, { useState } from "react";
import { Icon } from "@iconify/react";
import profileImage from "../assets/profile.png";
import logo from "../assets/remove.png";
import coach1 from "../assets/pic1.png";
import client1 from "../assets/client1.png";
import David from "./David";
import { Link } from "react-router-dom";

export default function AdminPanel() {
  const [collapsed, setCollapsed] = useState(false);
  const [filter, setFilter] = useState("busy");
  const [selectedCoach, setSelectedCoach] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const reviews = [
    {
      name: "Courtney Henry",
      image: client1,
      rating: 5,
      time: "2 min ago",
      text: "Incredibly insightful! Helped me gain clarity and confidence in my career choices. Great listener and provider of actionable advice. Highly recommended...",
    },
    {
      name: "Courtney Henry",
      image: client1,
      rating: 4,
      time: "1 hour ago",
      text: "Incredibly insightful! Helped me gain clarity and confidence in my career choices. Great listener and provider of actionable advice. Highly recommended...",
    },
    {
      name: "Courtney Henry",
      image: client1,
      rating: 5,
      time: "Yesterday",
      text: "Incredibly insightful! Helped me gain clarity and confidence in my career choices. Great listener and provider of actionable advice. Highly recommended...",
    },
    {
      name: "Courtney Henry",
      image: client1,
      rating: 3,
      time: "3 days ago",
      text: "Incredibly insightful! Helped me gain clarity and confidence in my career choices. Great listener and provider of actionable advice. Highly recommended...",
    },
  ];

 const navTabs = [
        { label: 'Home', icon: 'mynaui:home', to: '/Admin' },
        { label: 'My Sessions', icon: 'solar:calendar-linear', to: '/Session' },
        { label: 'Chats', icon: 'fluent:chat-20-regular', to: '/Chats' },
        { label: 'Earnings', icon: 'ant-design:dollar-outlined', to: '/Earnings' },
        { label: 'Availability', icon: 'tdesign:calendar-2', to: '/Availability' },
        { label: 'Profile', icon: 'ant-design:setting-outlined', to: '/profile' },
        { label: 'Call History', icon: 'solar:phone-linear', to: '/calls' },
    ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`bg-white text-gray-600 p-4 md:p-6 transition-all flex flex-col justify-between ${collapsed ? 'w-20' : 'w-full md:w-60'} fixed md:static z-20 h-[60px] md:h-auto top-0 left-0 right-0`}>
        <div>
          <div className={`flex ${collapsed ? 'flex-col items-center gap-2' : 'items-center justify-between'}`}>
            <img
              src={logo}
              alt="Logo"
              className={`${collapsed ? 'h-10 w-10 object-contain' : 'h-[56px]'}`}
            />
            <button className="cursor-pointer" onClick={() => setCollapsed(!collapsed)}>
              <Icon icon="mdi:menu" className="text-purple-400 text-2xl" />
            </button>
          </div>

              <nav className="mt-6 md:mt-10 space-y-4 hidden md:block">
                        {navTabs.map((tab, idx) => (
                            <Link
                                key={idx}
                                to={tab.to}
                                className="flex items-center gap-4 cursor-pointer hover:text-gray-700 hover:bg-[#C8B8E8] hover:font-semibold hover:rounded-lg py-2 px-2"
                            >
                                <Icon icon={tab.icon} className="text-xl" />
                                {!collapsed && <span>{tab.label}</span>}
                            </Link>
                        ))}
                    </nav>
        </div>

        {/* Logout Button */}
        <div className="mt-10">
          <button
            className="flex items-center gap-2 text-md hover:text-[#FF0000] hover:font-bold border border-[#FF0000] text-[#FF0000] p-2 rounded-lg"
            onClick={() => (window.location.href = "/")}
          >
            <Icon icon="mdi:logout" className="text-lg" />
            {!collapsed && "Logout"}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto bg-[#F8F6FC]">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">Home</h1>
          <div className="flex items-center gap-3">
            <img src={profileImage} alt="User" className="h-9 w-9 rounded-full" />
            <div className="text-left text-sm text-gray-700">
              <div className="font-medium">Admin</div>
              <div className="text-gray-500 text-xs">admin@bmlc.com</div>
            </div>
          </div>
        </div>

        {/* Upcoming Sessions */}
        <div className="mb-10">
        
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-2xl font-semibold">Upcoming Sessions</h2>
            <button className="text-purple-600 text-sm cursor-pointer">See All</button>
          </div>
          <div className="flex gap-8 overflow-x-auto pb-5">
         
            {[1, 2, 3, 4, 5].map((item) => (
             <div
             
  key={item}
  className="min-w-[300px] bg-purple-300/50 hover:bg-purple-400/50 p-4 rounded-xl
             shadow-lg cursor-pointer hover:shadow-md transition-all"
  onClick={() => {
    setSelectedCoach({
      name: "John Doe",
      expertise: "Neurologist | Energy Healing | Tarot",
      availability: "21 June | 2:00 PM - 3:00 PM",
      image: coach1,
    });
    setModalOpen(true);
  }}
>
  {/* Flex container to align image and text in a row */}
  
  <div className="flex items-center gap-4 mb-2">
    
    <img src={coach1} className="h-12 w-12 rounded-full" alt="Coach" />
    <div>
      <h3 className="font-medium">Coach John Doe</h3>
      <p className="text-sm text-gray-500">Mental Health and Well-being</p>
    </div>
  </div>

  <p className="text-sm text-gray-600 ml-16 mt-2">21 June | 2:00 PM - 3:00 PM</p>
</div>

            ))}
          </div>
        </div>

        {/* Earnings Overview */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-2xl font-semibold">Earnings Overview - Last Month</h2>
            <div className="flex items-center gap-6 text-sm">
              <p>Filter :</p>
              <label className="flex items-center gap-1 cursor-pointer">
                <input type="radio" name="filter" checked={filter === "busy"} onChange={() => setFilter("busy")} />
                Most Busy Last Month
              </label>
              <label className="flex items-center gap-1 cursor-pointer ">
                <input type="radio" name="filter"  checked={filter === "rated"} onChange={() => setFilter("rated")} />
                Top Rated last Month
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { label: "Total Earnings", value: "$4,200", icon: "icon-park-outline:dollar", bg: "bg-[#E0F6ED]", color: "text-green-500" },
              { label: "Your Earnings", value: "$1,500", icon: "hugeicons:save-money-euro", bg: "bg-[#E0F2FF]", color: "text-blue-400" },
              { label: "Rating", value: "4.8", icon: "mdi:star-outline", bg: "bg-[#FFF1E0]", color: "text-yellow-400" },
              { label: "Sessions", value: "32", icon: "hugeicons:doctor-01", bg: "bg-[#E7EBF9]", color: "text-blue-500" },
              { label: "Bill Hours", value: "48", icon: "material-symbols:wallet", bg: "bg-[#F1ECF8]", color: "text-purple-300" },
            ].map((card, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl text-center shadow-lg flex flex-col items-center">
                <div className={`text-3xl ${card.color} mt-4 mb-2`}>
                  <Icon icon={card.icon} className={`rounded-xl p-2 h-10 w-10 ${card.bg}`} />
                </div>
                <div className="text-sm text-gray-500">{card.label}</div>
                <div className="text-xl font-semibold">{card.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-2xl font-semibold">My Reviews</h2>
            <button className="text-purple-600 text-sm cursor-pointer">See All</button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {reviews.map((review, idx) => (
              <div key={idx} className="min-w-[300px] bg-white p-4 rounded-xl shadow relative">
                <div className="flex items-center gap-3">
                  <img src={review.image} className="h-10 w-10 rounded-full" alt="Client" />
                  <div>
                    <div className="font-medium">{review.name}</div>
                    <div className="flex text-yellow-400 text-sm">
                      {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 text-xs text-gray-400">{review.time}</div>
                </div>
                <p className="text-sm text-gray-600 mt-3 whitespace-pre-line">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedCoach && (
        <David isOpen={isModalOpen} onClose={() => setModalOpen(false)} coach={selectedCoach} />
      )}
    </div>
  );
}