import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import logo from "../assets/remove.png";
import profileImage from "../assets/Avatar.png";
import backgroundImage from "../assets/stroke.png";

const Profile = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

  const navTabs = [
    { label: "Home", icon: "mynaui:home", to: "/Admin" },
    { label: "My Sessions", icon: "solar:calendar-linear", to: "/Session" },
    { label: "Chats", icon: "fluent:chat-20-regular", to: "/chats" },
    { label: "Earnings", icon: "ant-design:dollar-outlined", to: "/Earnings" },
    { label: "Availability", icon: "tdesign:calendar-2", to: "/Availability" },
    { label: "Profile", icon: "ant-design:setting-outlined", to: "/Profile" },
    { label: "Call History", icon: "solar:phone-linear", to: "/Call" },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8F6FC]">
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
          <h1 className="text-xl text-[#27272A] font-bold">Profile</h1>
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

        {/* Background Section */}
        <div
          className="border border-gray-300 rounded-xl overflow-hidden w-full max-w-5xl mx-auto mb-10
         bg-white"
        >
          {/* Background Image */}
          <div className="relative w-full h-60 overflow-hidden">
            <img
              src={backgroundImage}
              alt="Profile Background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Profile Image */}
          <div className="relative z-10 flex justify-center -mt-50 mb-10">
            <div className="relative w-32 h-32">
              <img
                src={profileImage}
                alt="User"
                className="w-full h-full object-cover rounded-full border-4 border-white shadow"
              />
              <button className="absolute bottom-0 right-0 bg-[#BBA5E0] p-1 rounded-full shadow">
                <Icon
                  icon="fluent:camera-28-regular"
                  className="text-gray-700 text-lg"
                />
              </button>
            </div>
            
          </div>

          {/* Form Section */}
          <div className="px-6 pb-6">
            {/* Top Row: Name, Email, Phone */}
            <p className="text-[#454545] font-semibold mt-20 ">
              Personal Information
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1 mt-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <div className="absolute left-3 top-[33px] text-gray-400">
                  <Icon icon="iconoir:user" className="w-5 h-5 mt-2" />
                </div>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full pl-10 py-2 text-sm border border-gray-300 rounded-xl"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1 mt-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="absolute left-3 top-[33px] text-gray-400">
                  <Icon icon="fluent:mail-20-regular" className="w-5 h-5 mt-2" />
                </div>
                <input
                  type="text"
                  placeholder="john@gmail.com"
                  className="w-full pl-10 py-2 text-sm border border-gray-300 rounded-xl"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1 mt-2">
                  Phone <span className="text-red-500">*</span>
                </label>
                <div className="absolute left-3 top-[33px] text-gray-400">
                  <Icon icon="lucide:phone-call" className="w-5 h-5 mt-2" />
                </div>
                <input
                  type="text"
                  placeholder="0300-1234567"
                  className="w-full pl-10 py-2 text-sm border border-gray-300 rounded-xl"
                />
              </div>
            </div>

            {/* Bio Row */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Bio <span className="text-red-500">*</span>
              </label>
              <div className="absolute left-3 top-[34px] text-gray-400">
                <Icon icon="mage:id-card" className="w-5 h-5 mt-2" />
              </div>
              <textarea
                placeholder="Write a short bio about your self..."
                rows={5}
                className="w-full pl-10 border border-gray-300 py-2 text-sm resize-none rounded-xl"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Experience Section */}

        <div className="bg-white shadow rounded-xl p-6 w-full max-w-5xl mx-auto mb-10">
          <p className="text-[#454545] font-semibold mb-4 ">Personal Info</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
           <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Experience <span className="text-red-500">*</span>
                            </label>
                            <div className="absolute left-3 top-[33px] text-gray-400">
                                <Icon icon="carbon:id-management" className="w-5 h-5" />
                            </div>
                            <input
                                type="text"
                                placeholder="Years of practice"
                                className="w-full pl-10 py-2 text-sm border border-gray-300 rounded-xl"
                            />
                        </div>

            <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Certifications <span className="text-red-500">*</span></label>
                            <div className="absolute left-3 top-[33px] text-gray-400">
                                <Icon icon="humbleicons:certificate" className="w-5 h-5 " />
                            </div>
                            <input
                                type="text"
                                placeholder="123456789"
                                className="w-full pl-10 py-2 text-sm border border-gray-300 rounded-xl"
                            />
                        </div>

            <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Specailities <span className="text-red-500">*</span></label>
                            <div className="absolute left-3 top-[33px] text-gray-400">
                                <Icon icon="mdi:head-heart-outline" className="w-5 h-5" />
                            </div>
                            <input
                                type="text"
                                placeholder="123456789"
                                className="w-full pl-10 py-2 text-sm border border-gray-300 rounded-xl"
                            />
                        </div>
          </div>
        </div>
       {/* Password Section */}
                <div className="bg-white shadow rounded-xl p-6 w-full max-w-5xl mx-auto mb-5">
                    <h1 className="text-xl font-semibold mb-6">Change Password</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {/* Current Password */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                            <div className="absolute left-3 top-[34px] text-gray-400">
                                <Icon icon="lsicon:lock-outline" className="w-5 h-5" />
                            </div>
                            <input
                                type={showCurrent ? "text" : "password"}
                                placeholder="********"
                                className="w-full pl-10 pr-10 border border-gray-300 rounded-xl px-4 py-2 text-sm"
                            />
                            <button
                                type="button"
                                onClick={() => setShowCurrent(!showCurrent)}
                                className="absolute right-3 top-[34px] text-gray-500"
                            >
                                <Icon icon={showCurrent ? "mdi:eye-off" : "solar:eye-outline"} className="w-5 h-5" />
                            </button>
                        </div>

                        {/* New Password */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                            <div className="absolute left-3 top-[34px] text-gray-400">
                                <Icon icon="lsicon:lock-outline" className="w-5 h-5" />
                            </div>
                            <input
                                type={showNew ? "text" : "password"}
                                placeholder="********"
                                className="w-full pl-10 pr-10 border border-gray-300 rounded-xl px-4 py-2 text-sm"
                            />
                            <button
                                type="button"
                                onClick={() => setShowNew(!showNew)}
                                className="absolute right-3 top-[34px] text-gray-500"
                            >
                                <Icon icon={showNew ? "mdi:eye-off" : "solar:eye-outline"} className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Confirm New Password */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                            <div className="absolute left-3 top-[34px] text-gray-400">
                                <Icon icon="lsicon:lock-outline" className="w-5 h-5" />
                            </div>
                            <input
                                type={showConfirm ? "text" : "password"}
                                placeholder="********"
                                className="w-full pl-10 pr-10 border border-gray-300 rounded-xl px-4 py-2 text-sm"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirm(!showConfirm)}
                                className="absolute right-3 top-[34px] text-gray-500"
                            >
                                <Icon icon={showConfirm ? "mdi:eye-off" : "solar:eye-outline"} className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-row justify-between rounded-xl p-6 w-full max-w-5xl mx-auto mb-5">
                    <button className="text-red-600 border border-red-600 px-4 py-2 rounded-lg font-medium">Delete Account</button>
                    <button className="bg-[#C8B8E8] flex flex-row gap-2 px-4 py-2 rounded-lg font-medium text-[#27272A] transition"><Icon icon='mynaui:save' className="w-5 h-5 justify-center items-center mt-1" />Save Changes</button>
                </div>

      </div>
    </div>
  );
};

export default Profile;
