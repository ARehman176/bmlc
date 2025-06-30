import React, { useState } from "react";
import logo from "../assets/remove.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import profileImage from "../assets/profile.png";
import client1 from "../assets/client1.png";
import coach1 from "../assets/pic1.png";

const Session = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [filter, setFilter] = useState("busy");
  const [selectedCoach, setSelectedCoach] = useState(null);
 
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [showAll, setShowAll] = useState(false);

  const navTabs = [
    { label: "Home", icon: "mynaui:home", to: "/Home" },
    { label: "My Sessions", icon: "solar:calendar-linear", to: "/Session" },
    { label: "Chats", icon: "fluent:chat-20-regular", to: "/chats" },
    { label: "Earnings", icon: "ant-design:dollar-outlined", to: "/earnings" },
    { label: "Availability", icon: "tdesign:calendar-2", to: "/availability" },
    { label: "Profile", icon: "ant-design:setting-outlined", to: "/profile" },
    { label: "Call History", icon: "solar:phone-linear", to: "/calls" },
  ];

  const today = new Date();

  const handleDayClick = (day) => {
    alert(
      `Add session for ${day} ${new Date(
        currentYear,
        currentMonth
      ).toLocaleString("default", { month: "long" })}, ${currentYear}`
    );
  };

  return (
    <div className="flex h-screen bg-Purple/100">
      {/* Sidebar */}
      <div
        className={`bg-white text-gray-600 p-4 md:p-6 transition-all flex flex-col justify-between ${
          collapsed ? "w-20" : "w-full md:w-60"
        } fixed md:static z-20 h-[60px] md:h-auto top-0 left-0 right-0`}
      >
        <div>
          <div
            className={`flex ${
              collapsed
                ? "flex-col items-center gap-2"
                : "items-center justify-between"
            }`}
          >
            <img
              src={logo}
              alt="Logo"
              className={`${
                collapsed ? "h-10 w-10 object-contain" : "h-[56px]"
              }`}
            />
            <button
              className="cursor-pointer"
              onClick={() => setCollapsed(!collapsed)}
            >
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
            className="flex items-center gap-2 text-md hover:text-[#FF0000] hover:font-bold border
             border-[#FF0000] text-[#FF0000] p-2 rounded-lg"
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
          <h1 className="text-xl text-[#27272A] font-bold">My Sessions</h1>
          <div className="flex items-center gap-3">
            <img
              src={profileImage}
              alt="User"
              className="h-9 w-9 rounded-full"
            />
            <div className="text-left text-sm text-gray-700">
              <div className="font-medium">Admin</div>
              <div className="text-gray-500 text-xs">admin@bmlc.com</div>
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div className="flex flex-col lg:flex-row gap-6 ">
          <div className="bg-white p-6 rounded-xl shadow-md w-full lg:w-2/3 h-125">
            <div className="flex justify-between items-center mb-4">
              {/* month switch */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    if (currentMonth === 0) {
                      setCurrentMonth(11);
                      setCurrentYear(currentYear - 1);
                    } else {
                      setCurrentMonth(currentMonth - 1);
                    }
                    setShowAll(false);
                  }}
                >
                  <Icon
                    icon="mdi:chevron-left"
                    className="text-2xl text-gray-600"
                  />
                </button>
                <p className="text-lg font-semibold text-gray-700">
                  {new Date(currentYear, currentMonth).toLocaleString(
                    "default",
                    {
                      month: "long",
                    }
                  )}{" "}
                  {currentYear}
                </p>
                <button
                  onClick={() => {
                    if (currentMonth === 11) {
                      setCurrentMonth(0);
                      setCurrentYear(currentYear + 1);
                    } else {
                      setCurrentMonth(currentMonth + 1);
                    }
                    setShowAll(false);
                  }}
                >
                  <Icon
                    icon="mdi:chevron-right"
                    className="text-2xl text-gray-600"
                  />
                </button>
              </div>
              {/* button */}
              <div className="flex gap-3 bg-purple-100 p-2 rounded-md  ">
                <button
                  onClick={() => {
                    setCurrentMonth(today.getMonth());
                    setCurrentYear(today.getFullYear());
                    setShowAll(false);
                  }}
                  className="bg-purple-100 text-purple-700 px-4 py-1 rounded-md font-medium text-sm"
                >
                  Today
                </button>
                <button
                  onClick={() => setShowAll(true)}
                  className="bg-gray-100 text-gray-600 px-4 py-1 rounded-md font-medium text-sm"
                >
                  All
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-600">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="font-semibold text-gray-500">
                  {day}
                </div>
              ))}
              {(() => {
                const firstDay = new Date(
                  currentYear,
                  currentMonth,
                  1
                ).getDay();
                const totalDays = new Date(
                  currentYear,
                  currentMonth + 1,
                  0
                ).getDate();

                const blanks = Array.from({ length: firstDay }, (_, i) => (
                  <div key={`blank-${i}`} />
                ));
                const days = Array.from({ length: totalDays }, (_, i) => {
                  const isToday =
                    today.getDate() === i + 1 &&
                    today.getMonth() === currentMonth &&
                    today.getFullYear() === currentYear;

                  return (
                    <div
                      key={i + 1}
                      onClick={() => handleDayClick(i + 1)}
                      className={`py-2 rounded-lg transition-all cursor-pointer ${
                        isToday
                          ? "bg-purple-500 text-white font-bold"
                          : "hover:bg-purple-100 hover:text-purple-700"
                      }`}
                    >
                      {i + 1}
                    </div>
                  );
                });
                return [...blanks, ...days];
              })()}
            </div>
          </div>

          {/* All View */}
          {showAll && (
            <div className="bg-white p-6 rounded-xl shadow-md w-full lg:w-1/3">
              <h3 className="text-md font-semibold mb-3 text-gray-700">
                Upcoming Sessions
              </h3>
              <div className="space-y-4">
                {[1, 2, 3, 4,5].map((idx) => ( 
                  <div
                    key={idx}
                    className="flex gap-5 items-center p-4 rounded-md shadow-sm"
                  >
                     <img
                      src={coach1}
                      className="h-10 w-10 rounded-full mb-10"
                      alt="Coach"
                    />
                    <div>
                      <h4 className="font-medium text-[#33384B]">
                         John Doe
                      </h4>
                      <p className="text-[#AAB6C3] font-medium">
                        Career Guidance & Personal Growth
                      </p>
                      <p className="text-sm text-[#AAB6C3] mt-1">
                        📅 sunday,June 26 |  🕒 2:00 PM - 3:00 PM
                      </p>
                    
                    </div>
                   
                   
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Session;
