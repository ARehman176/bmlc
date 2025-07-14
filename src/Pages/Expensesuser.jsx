import React, { useState } from "react";
import SideBar from "../Components/Sidebar";
import { Icon } from "@iconify/react";
import profileImage from '../assets/profile.png'


const dummyData = {
   chat: [
  { id: 1, coach: "Tyla William", title: "Energy Healing Session", count: '$35.00 - Up to 60', cost: "$18.00", image: "https://randomuser.me/api/portraits/women/65.jpg" },
  { id: 2, coach: "Jason Roy", title: "Clarity & Focus Tips", count: '$30.00 - Up to 45', cost: "$15.00", image: "https://randomuser.me/api/portraits/men/15.jpg" },
  { id: 3, coach: "Nora Allen", title: "Confidence Coaching", count: '$28.00 - Up to 40', cost: "$14.00", image: "https://randomuser.me/api/portraits/women/68.jpg" },
  { id: 4, coach: "Chris Nolan", title: "Life Strategy Session", count: '$25.00 - Up to 36', cost: "$12.50", image: "https://randomuser.me/api/portraits/men/60.jpg" },
  { id: 5, coach: "Amber Grace", title: "Stress Relief Chat", count: '$22.00 - Up to 30', cost: "$10.00", image: "https://randomuser.me/api/portraits/women/75.jpg" },
],

call: [
  { id: 1, coach: "Tyla William", title: "Energy Healing Call", duration: "$35.00 - Up to 60", cost: "$30.00", image: "https://randomuser.me/api/portraits/women/65.jpg" },
  { id: 2, coach: "Jason Roy", title: "Focus Strategy Call", duration: "$30.00 - Up to 45", cost: "$24.00", image: "https://randomuser.me/api/portraits/men/15.jpg" },
  { id: 3, coach: "Nora Allen", title: "Confidence Boost Call", duration: "$28.00 - Up to 40", cost: "$22.00", image: "https://randomuser.me/api/portraits/women/68.jpg" },
  { id: 4, coach: "Chris Nolan", title: "Life Planning Call", duration: "$25.00 - Up to 36", cost: "$19.50", image: "https://randomuser.me/api/portraits/men/60.jpg" },
  { id: 5, coach: "Amber Grace", title: "Stress Detox Call", duration: "$22.00 - Up to 30", cost: "$16.00", image: "https://randomuser.me/api/portraits/women/75.jpg" },
],
};

const Expensesuser = () => {
    const [selectedFilter, setSelectedFilter] = useState("chat");
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(1);

    const dataToShow = dummyData[selectedFilter];

    return (
        <div className="flex bg-[#F8F6FC] min-h-screen">
            <SideBar />

            <div className="flex-1 p-6">
                {/* Header */}
                <div className="flex justify-between items-center w-full mb-6">
                    <h1 className="text-2xl font-bold">Expenses</h1>

                    <div className="flex items-center gap-3 hover:scale-105 transition duration-200 ease-in-out">

                        <img src={profileImage} alt="User profile" className="h-9 w-9 rounded-full" />
                        <div className="text-left text-sm text-gray-700">
                            <div className="font-medium">Admin</div>
                            <div className="text-gray-500 text-xs">admin@domain.com</div>
                        </div>
                    </div>
                </div>

                {/* Filters and Summary */}
                <div className="flex justify-between items-center mb-6 bg-white p-3 rounded-xl shadow border border-gray-200">
                    <div className="flex items-center gap-4"><p>Filter</p>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="filter"
                                value="chat"
                                checked={selectedFilter === "chat"}
                                onChange={() => setSelectedFilter("chat")}
                                className="form-radio text-purple-600"
                            />
                            <span className="ml-2 text-sm text-gray-700">Chat Expenses</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="filter"
                                value="call"
                                checked={selectedFilter === "call"}
                                onChange={() => setSelectedFilter("call")}
                                className="form-radio text-purple-600"
                            />
                            <span className="ml-2 text-sm text-gray-700">Call Expenses</span>
                        </label>
                    </div>

                    <div className="flex flex-row w-[500px] p-3 justify-between items-center gap-2 bg-white  rounded-lg shadow border border-gray-200 ">
                        <div className="flex items-center gap-2">
                            <div className="bg-[#E0F6ED] p-2 rounded-lg"><Icon icon="mdi:currency-usd" className="text-green-500 text-3xl" /></div><div className="text-sm">
                                <div className="text-gray-600">{selectedFilter === "chat" ? "Chat Expense" : "Call Expense"}</div>
                                <div className="font-semibold text-black">$99.00</div>
                            </div>
                        </div>

                        <span className="text-sm flex gap-1 text-[#7F7F7F]">+5.00 (+12.5%) <span><Icon icon='mdi:arrow-top-thick' className="text-green-500 text-xl" /></span> Last Month</span>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white shadow rounded-xl overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 text-sm">
                        <thead className="bg-[#F1EEF9] text-gray-700">
                            <tr>
                                <th className="px-6 py-3 text-left">Sr#</th>
                                <th className="px-6 py-3 text-left">Life Coach</th>
                                <th className="px-6 py-3 text-left">Title/Session</th>
                                {selectedFilter === "chat" ? (
                                    <th className="px-6 py-3 text-left">Message Count with Chat Expenses</th>
                                ) : (
                                    <th className="px-6 py-3 text-left">Duration with Expense</th>
                                )}
                                <th className="px-6 py-3 text-left">Cost</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-100 text-[#27272A] ">
                            {dataToShow.map((item, idx) => (
                                <tr key={item.id} className="hover:bg-gray-50 hover:shadow-[0_2px_8px_rgba(147,99,196,0.3)]">
                                    <td className="px-6 py-4 ">{idx + 1}</td>
                                    <td className="px-6 py-4 flex items-center gap-2"><img src={item.image} alt="User profile" className="h-9 w-9 rounded-full" />{item.coach}</td>
                                    <td className="px-6 py-4">{item.title}</td>
                                    <td className="px-6 py-4">
                                        {selectedFilter === "chat" ? `${item.count} messages` : `${item.duration} messages`}
                                    </td>
                                    <td className="px-6 py-4 font-medium">{item.cost}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex justify-between items-center mt-6">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Rows per page:</span>
                        <select
                            className="text-sm border border-gray-300 rounded px-2 py-1"
                            value={rowsPerPage}
                            onChange={(e) => setRowsPerPage(parseInt(e.target.value))}
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                        </select>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                            disabled={page === 1}
                            className="px-2 py-1 border border-gray-300 rounded disabled:opacity-50"
                        >
                            <Icon icon="mdi:chevron-left" />
                        </button>
                        <span className="text-sm text-gray-600">Page {page}</span>
                        <button
                            onClick={() => setPage((prev) => prev + 1)}
                            className="px-2 py-1 border border-gray-300 rounded"
                        >
                            <Icon icon="mdi:chevron-right" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expensesuser;