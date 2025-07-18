import React, { useState } from "react";
import logo from "../assets/remove.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import profileImage from "../assets/profile.png";
import coach1 from "../assets/pic1.png";

const Session = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [showAll, setShowAll] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedCoach, setSelectedCoach] = useState(null);

  const navTabs = [
    { label: "Home", icon: "mynaui:home", to: "/Admin" },
    { label: "My Sessions", icon: "solar:calendar-linear", to: "/Session" },
    { label: "Chats", icon: "fluent:chat-20-regular", to: "/chats" },
    { label: "Earnings", icon: "ant-design:dollar-outlined", to: "/earnings" },
    { label: "Availability", icon: "tdesign:calendar-2", to: "/availability" },
    { label: "Profile", icon: "ant-design:setting-outlined", to: "/profile" },
    { label: "Call History", icon: "solar:phone-linear", to: "/Call" },
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
        <div className="mt-10">
          <button
            className="flex items-center gap-2 text-md ml-5 hover:text-[#FF0000] hover:font-bold border border-[#FF0000] text-[#FF0000] p-2 rounded-lg"
            onClick={() => (window.location.href = "/")}
          >
            <Icon icon="mdi:logout" className="text-lg " />
            {!collapsed && "Logout"}
          </button>
        </div>
      </div>

      <div className="flex-1 p-6 overflow-y-auto bg-[#F8F6FC]">
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

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="bg-white px- pt-12 rounded-xl shadow-md w-full lg:w-2/3">
            <div className="flex justify-between items-center mb-4">
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
                    { month: "long" }
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
              <div className="flex gap-3 bg-purple-100 p-2 rounded-md">
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

            <div className="overflow-hidden border border-gray-300 rounded-lg">
              <div className="grid grid-cols-7 divide-x divide-y divide-gray-300 text-sm">
                {"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(",").map((day) => (
                  <div
                    key={day}
                    className="py-2 bg-[#F1EEF9] font-semibold text-center col-span-1"
                  >
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
                    <div
                      key={`blank-${i}`}
                      className="h-20 px-2 pt-1 text-xs text-gray-500"
                    />
                  ));
                  const days = Array.from({ length: totalDays }, (_, i) => (
                    <div
                      key={i + 1}
                      onClick={() => handleDayClick(i + 1)}
                      className="h-20 px-2 pt-1 text-xs text-center text-gray-700 cursor-pointer hover:bg-purple-100 relative"
                    >
                      <div className="absolute top-1 left-1 right-1 text-center font-semibold text-black">
                        {i + 1}
                      </div>
                    </div>
                  ));
                  return [...blanks, ...days];
                })()}
              </div>
            </div>
          </div>

          {showAll && (
            <div className="w-full lg:w-1/3 mt-2">
              <h3 className="text-md font-semibold mb-3 text-gray-700">
                Upcoming Sessions
              </h3>
              <div className="space-y-4">
                {[1, 2, 3, ].map((idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-between rounded-xl shadow-sm border border-gray-200 h-full"
                  >
                    <div className="pt-4 px-4">
                      <div className="flex gap-5 items-start">
                        <img
                          src={coach1}
                          className="h-10 w-10 rounded-full"
                          alt="Coach"
                        />
                        <div className="flex flex-col flex-1 text-left ">
                          <h4 className="font-medium text-[#33384B]">
                            John Doe
                          </h4>
                          <p className="text-[#AAB6C3] ">
                            Career Guidance & Personal Growth
                          </p>
                          <p className="text-sm flex flex-row gap-2 mt-2 mb-2 text-[#454545]">
                            <Icon
                              icon="solar:calendar-linear"
                              className="text-lg text-[#454545]"
                            />
                            Sunday, June 26 |{" "}
                            <Icon
                              icon="iconoir:clock"
                              className="text-lg text-[#454545]"
                            />{" "}
                            2:00 PM - 3:00 PM
                          </p>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        setSelectedCoach({
                          name: "John Doe",
                        
                           expertise: "Career Guidance & Personal Growth",
                           session: "Session With  Sarah Thompson",
                           Topic:"🔹 Topic : Overcoming Career Burnout",
                           date: "Sunday, June 26",
                          time: "2:00 PM - 3:00 PM",
                          image: coach1,
                        })
                      }
                      className="w-full flex items-center justify-start gap-2 text-sm bg-[#F1EEF9] text-[#9363C4] px-4 py-2 rounded-b-md hover:bg-purple-200"
                    >
                      <Icon icon="mdi:note-plus-outline" className="text-lg" />
                      Add Notes
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {selectedCoach && (
          <div
            className="fixed inset-0 flex items-center  justify-center z-50"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
             <div className="flex flex-col items-center border p-4 border-gray-300 rounded-xl gap-y-3 mb-4 text-center">
  <img
    src={selectedCoach.image}
    alt="Coach"
    className="w-16 h-16 rounded-full"
  />
 <div className="text-center">
  <h2 className="text-lg font-semibold text-gray-800">
    {selectedCoach.name}
  </h2>
  <p className="text-md text-gray-500 font-bold">{selectedCoach.expertise}</p>
  <p className="text-sm text-gray-500 mt-1">📅 {selectedCoach.session}</p>
  <p className="text-sm text-gray-500 mt-1">{selectedCoach.Topic}</p>
  <p className="text-sm text-gray-500 mt-1">{selectedCoach.date}</p>
  <p className="text-sm text-gray-500 mt-1">🕒 {selectedCoach.time}</p>
</div>

</div>
            <p className="ml-2 mb-1 font-semibold">Add Notes</p>
              <textarea
                className="w-full border border-gray-300 rounded-md p-2 resize-none mb-4"
                rows="4"
                placeholder="Write your notes here..."
              ></textarea>
              <div className="flex justify-center gap-2">
                <button
                  onClick={() => setSelectedCoach(null)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
               <button
  onClick={() => setSelectedCoach(null)}
  className="flex items-center gap-2 px-4 py-2 bg-[#C8B8E8] text-white rounded hover:bg-purple-200
  shadow-[inset_0_2px_2px_#ffffff] border-1 border-[#C8B8E8]"
>
   <Icon icon="material-symbols:save-rounded" className="text-white text-xl" />
  <span>Save Notes</span>
 
</button>

              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Session;
