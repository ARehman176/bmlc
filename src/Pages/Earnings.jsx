import profileImage from "../assets/profile.png";
import coach1 from "../assets/pic1.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/remove.png";

const Earnings = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navTabs = [
    { label: "Home", icon: "mynaui:home", to: "/Admin" },
    { label: "My Sessions", icon: "solar:calendar-linear", to: "/Session" },
    { label: "Chats", icon: "fluent:chat-20-regular", to: "/Chats" },
    { label: "Earnings", icon: "ant-design:dollar-outlined", to: "/Earnings" },
    { label: "Availability", icon: "tdesign:calendar-2", to: "/Availability" },
    { label: "Profile", icon: "ant-design:setting-outlined", to: "/profile" },
    { label: "Call History", icon: "solar:phone-linear", to: "/Call" },
  ];

  const users = [
    {
      name: "Sarah Thompson",
      expertise: "Career Guidance & Personal",
      image: coach1,
      date: "June 29,2025",
      amount: "$150.00",
    },
    {
      name: "James Miller",
      expertise: "Life Coaching & Confidence",
      image: coach1,
      date: "June 28,2025",
      amount: "$130.00",
    },
    {
      name: "Amanda Lee",
      expertise: "Mindfulness & Stress",
      image: coach1,
      date: "June 27,2025",
      amount: "$170.00",
    },
    {
      name: "Michael Chen",
      expertise: "Startup & Career Advice",
      image: coach1,
      date: "June 26,2025",
      amount: "$200.00",
    },
    {
      name: "Linda Park",
      expertise: "Work-Life Balance",
      image: coach1,
      date: "June 25,2025",
      amount: "$120.00",
    },
    {
      name: "Robert Green",
      expertise: "Financial Coaching",
      image: coach1,
      date: "June 24,2025",
      amount: "$180.00",
    },
  ];

  return (
    <div className="flex h-screen bg-[#F8F6FC]">
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

        <div className="mt-10 ml-5">
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
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl text-[#27272A] font-bold">Earnings</h1>
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

        {/* Users and Summary Section */}
        <div className="flex flex-col lg:flex-row gap-6 bg-white rounded-xl shadow p-6">
          {/* Users Section */}
          <div className="w-full lg:w-3/4">
            <h2 className="text-lg font-bold text-[#27272A] mb-4">Users</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {users.map((user, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow border-1 border-gray-300 p-4 flex flex-col gap-4"
                >
                  {/* Top */}
                  <div className="flex items-center gap-4">
                    <img
                      src={user.image}
                      alt={user.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-gray-800 font-semibold text-md">
                        {user.name}
                      </h4>
                      <p className="text-sm text-gray-500">{user.expertise}</p>
                    </div>
                  </div>

                  {/* Bottom */}
                  <div className="flex gap-8">
                    <div className="flex-1 bg-white border-1 border-gray-200 h-30 pt-4 rounded-xl flex flex-col items-center">
                      <div className="bg-[#E8EFF6] p-2 rounded-lg">
                        <Icon
                          icon="solar:calendar-linear"
                          className="text-2xl text-[#2B4F67]   "
                        />
                      </div>
                      <p className="text-[#7F7F7F]">Date</p>
                      <p className="text-md font-semibold text-[#27272A]">
                        {user.date}
                      </p>
                    </div>
                    <div className="flex-1 bg-white border-1 border-gray-200 h-30 pt-4 rounded-lg flex flex-col items-center">
                      <div className="bg-[#F0FDF4] p-2 rounded-lg border-[#9363C4]">
                        <Icon
                          icon="stash:hand-holding-dollar-light"
                          className="text-2xl text-[#16A34A]  "
                        />
                      </div>
                      <p className="text-[#7F7F7F]">Payment</p>
                      <p className="text-lg font-semibold text-[#27272A]">
                        {user.amount}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Section */}
        
          {/* Total Earnings Section Wrapper */}
<div className="w-full lg:w-1/4 space-y-6">

  <h2 className="text-lg font-bold text-[#27272A] mb-2">Total Earning</h2>

  {/* Card Wrapper with Border */}
  <div className="border-2 border-[#D4D4D8] rounded-2xl p-4 space-y-6 mt-4 h-115 ">
    {/* Total Revenue Card */}
    <div
      className="bg-white rounded-2xl shadow p-6 bg-blur-md 
      bg-[linear-gradient(to_bottom_left,_#C8B8E866_45%,_white_60%,_white_50%,_#C8B8E866_100%)]"
    >
      <p className="text-sm text-gray-500 mb-1">Total Revenue</p>
      <h2 className="text-3xl font-bold text-[#27272A] mb-4">$4,800.00</h2>
      <div className="border-t pt-3 text-sm text-gray-600 space-y-2">
        <div className="flex justify-between">
          <span>Revenue Split</span>
          <span>70%</span>
        </div>
        <div className="flex justify-between">
          <span>Your Earnings</span>
          <span>$3,360.00</span>
        </div>
      </div>
    </div>

    {/* Stripe Card */}
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-lg font-medium text-[#33384B] mb-2">
        Stripe Account
      </h3>
      <div className="border bg-[#F8F6FC] border-gray-200 rounded-lg ml-2 mb-2 px-4 py-2">
   <div className="flex items-center justify-between text-sm text-gray-600">
          <Icon icon="simple-icons:stripe" className="text-xl mr-2" />
         <span className="font-semibold whitespace-nowrap">Stripe Account.....2345</span>

          <Icon icon="ic:round-play-arrow" className="text-3xl " />
        </div>

      </div>

      <div className="flex items-center gap-0.5 mt-8 ml-2">
        <button className="px-3 py-2 bg-[#C8B8E8] text-white text-sm rounded-tl-md rounded-bl-md">
          <Icon icon="simple-icons:stripe" className="text-xl text-[#27272A]" />
        </button>
      <button className="w-full px-2 py-2 bg-[#C8B8E8] text-sm rounded-tr-md rounded-br-md text-[#27272A] whitespace-nowrap">
  Disconnect Stripe account
</button>

      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Earnings;

