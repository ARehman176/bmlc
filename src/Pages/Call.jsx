import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import logo from "../assets/remove.png";
import profileImage from "../assets/profile.png";

const Call = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navTabs = [
    { label: "Home", icon: "mynaui:home", to: "/Admin" },
    { label: "My Sessions", icon: "solar:calendar-linear", to: "/Session" },
    { label: "Chats", icon: "fluent:chat-20-regular", to: "/chats" },
    { label: "Earnings", icon: "ant-design:dollar-outlined", to: "/Earnings" },
    { label: "Availability", icon: "tdesign:calendar-2", to: "/Availability" },
    { label: "Profile", icon: "ant-design:setting-outlined", to: "/Profile" },
    { label: "Call History ", icon: "solar:phone-linear", to: "/Call" },
  ];

  return (
    <div className="flex h-screen bg-[#F8F6FC]">
      {/* Sidebar */}
      <div
        className={`bg-white text-gray-600 p-4 md:p-6 transition-all flex flex-col justify-between ${
          collapsed ? "w-20" : "w-full md:w-60"
        } fixed md:static z-20 h-[60px] md:h-auto top-0 left-0 right-0 md:flex md:flex-col`}
      >
        <div>
          <div
            className={`flex ${
              collapsed
                ? "flex-row md:flex-col items-center gap-2 md:gap-4"
                : "items-center justify-between"
            }`}
          >
            <img src={logo} alt="Logo" className="h-12 w-15 ml-2" />
           
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

        <div className="hidden md:block mt-10 ml-5 ">
          <button
            className={`flex items-center border-1  text-red-500 border-red-500 cursor-pointer rounded-lg py-2 gap-2 text-lg transition-all duration-300 ${
              collapsed ? "justify-center px-2" : " px-2"
            }`}
            onClick={() => (window.location.href = "/")}
          >
            <Icon icon="mdi:logout" className="text-xl font-bold" />
            {!collapsed && "Logout"}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl mt-4 text-[#27272A] font-semibold">
            Call History
          </h1>
          <div className="flex items-center gap-3">
            <img src={profileImage} alt="User" className="h-9 w-9 rounded-full" />
            <div className="text-left text-sm text-gray-700">
              <div className="font-medium">Admin</div>
              <div className="text-gray-500 text-xs">admin@bmlc.com</div>
            </div>
          </div>
        </div>

        {/* Call History Card */}
        <div className="bg-white shadow rounded-xl p-6 w-full overflow-x-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-[#27272A] mt-4 mb-4">
              Call History with User
            </h2>

            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search User"
                className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg text-sm"
              />
              <button
                className="absolute right-1 top-1/2 transform -translate-y-1/2 -mr-[3px] rounded-tr-lg rounded-br-lg bg-[#C8B8E8] text-white p-[8.5px]"
                title="Search"
              >
                <Icon icon="mdi:magnify" className="text-lg text-[#27272A]" />
              </button>
            </div>
          </div>

          {/* Table */}
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="border-b-2 border-gray-200">
              <tr>
                <th className="py-2 px-4 font-medium">Sr#</th>
                <th className="py-2 px-4 font-medium">Title</th>
                <th className="py-2 px-4 font-medium">User</th>
                <th className="py-2 px-4 font-medium">Status</th>
                <th className="py-2 px-4 font-medium">Cost</th>
                <th className="py-2 px-4 font-medium">Duration</th>
                <th className="py-2 px-4 font-medium">Rate & Reviews</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: "01",
                  title: "Mental Health Sickness",
                  name: "Sarah Thompson",
                  cost: "$100",
                  duration: "30 mins",
                  status: "Completed",
                  rating: 4.5,
                  review: "Very helpful session!",
                },
                {
                  id: "02",
                  title: "Career Guidance",
                  name: "James Miller",
                  cost: "$80",
                  duration: "45 mins",
                  status: "User Declined",
                  rating: 0,
                  review: "",
                },
                {
                  id: "03",
                  title: "Stress Management",
                  name: "Amanda Lee",
                  cost: "$120",
                  duration: "60 mins",
                  status: "Coach Declined",
                  rating: 0,
                  review: "",
                },
              ].map((call, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="py-2 px-4">{call.id}</td>
                  <td className="py-2 px-4">{call.title}</td>
                  <td className="py-2 px-4 flex items-center gap-2">
                    <img
                      src={profileImage}
                      alt={call.name}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <span>{call.name}</span>
                  </td>
                  <td className="py-2 px-4">
                    <span
                      className={`w-[140px] inline-block text-center rounded-lg py-2 text-xs font-semibold ${
                        call.status === "Completed"
                          ? "bg-green-100 text-green-600"
                          : call.status === "User Declined"
                          ? "bg-red-100 text-red-500"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {call.status}
                    </span>
                  </td>
                  <td className="py-2 px-4">{call.cost}</td>
                  <td className="py-2 px-4">{call.duration}</td>
                  <td className="py-2 px-4">
                    {call.rating > 0 ? (
                      <div className="flex items-center gap-1">
                        <Icon
                          icon="material-symbols:star"
                          className="text-yellow-400 text-lg"
                        />
                        <span className="font-medium">{call.rating}</span>
                        <span className="text-gray-500 text-sm">
                          ({call.review})
                        </span>
                      </div>
                    ) : (
                      <span className="text-gray-400 italic">No review</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Footer Pagination */}
          <div className="flex flex-row justify-between items-center mt-4 px-4 ">
            <div className="flex items-center gap-2 text-sm text-gray-600 -ml-1">
              <span>Rows per page:</span>
              <select className="rounded px-2 py-1 text-sm">
                <option value="5" selected>
                  5
                </option>
                <option value="10">10</option>
                <option value="25">25</option>
              </select>
              <p>1 - 5 of 20</p>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <button className="hover:text-gray-800">
                <Icon icon="mdi:chevron-left" className="w-5 h-5" />
              </button>
              <button className="hover:text-gray-800">
                <Icon icon="mdi:chevron-right" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Call;
