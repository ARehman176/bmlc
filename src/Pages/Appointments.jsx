import React, { useState } from "react";
import SideBar from "../Components/Sidebar";
import { Icon } from "@iconify/react";
import profileImage from "../assets/profile.png";
import coach1 from "../assets/coach1.png";

export default function Appointments() {
    const today = new Date();

    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [showAll, setShowAll] = useState(false);
    const [selectedCoach, setSelectedCoach] = useState(null);

    const handleDayClick = (day) => {
        alert(`Add session for ${day} ${new Date(currentYear, currentMonth).toLocaleString("default", { month: "long" })}, ${currentYear}`);
    };

    return (
        <div className="flex bg-[#F8F6FC] min-h-screen">
            <SideBar />

            <div className="flex-1 p-6">
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-2xl font-semibold text-[#27272A]">My Sessions</h1>
                    <div className="flex items-center gap-3">

                        <img src={profileImage} alt="User profile" className="h-9 w-9 rounded-full" />
                        <div className="text-left text-sm text-gray-700">
                            <div className="font-medium">User</div>
                            <div className="text-gray-500 text-xs">johndoe516@</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 mt-6 ">
                    <div className="bg-white px-6 pt-12 pb-12 rounded-xl shadow-md w-full lg:w-2/3">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-4">
                                <button onClick={() => {
                                    if (currentMonth === 0) {
                                        setCurrentMonth(11);
                                        setCurrentYear((y) => y - 1);
                                    } else {
                                        setCurrentMonth((m) => m - 1);
                                    }
                                    setShowAll(false);
                                }}>
                                    <Icon icon="mdi:chevron-left" className="text-2xl text-gray-600" />
                                </button>
                                <p className="text-lg font-semibold text-gray-700">
                                    {new Date(currentYear, currentMonth).toLocaleString("default", { month: "long" })} {currentYear}
                                </p>
                                <button onClick={() => {
                                    if (currentMonth === 11) {
                                        setCurrentMonth(0);
                                        setCurrentYear((y) => y + 1);
                                    } else {
                                        setCurrentMonth((m) => m + 1);
                                    }
                                    setShowAll(false);
                                }}>
                                    <Icon icon="mdi:chevron-right" className="text-2xl text-gray-600" />
                                </button>
                            </div>
                            <div className="flex gap-3 bg-purple-100 p-2 rounded-md">
                                <button onClick={() => {
                                    setCurrentMonth(today.getMonth());
                                    setCurrentYear(today.getFullYear());
                                    setShowAll(false);
                                }} className="bg-purple-100 text-purple-700 px-4 py-1 rounded-md font-medium text-sm">
                                    Today
                                </button>
                                <button onClick={() => setShowAll(true)} className="bg-gray-100 text-gray-600 px-4 py-1 rounded-md font-medium text-sm">
                                    All
                                </button>
                            </div>
                        </div>

                        <div className="overflow-hidden border border-gray-300 rounded-lg">
                            <div className="grid grid-cols-7 divide-x divide-y divide-gray-300 text-sm">
                                {"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(",").map((day) => (
                                    <div key={day} className="py-2 bg-[#F1EEF9] font-semibold text-center col-span-1">
                                        {day}
                                    </div>
                                ))}
                                {(() => {
                                    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
                                    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
                                    const blanks = Array.from({ length: firstDay }, (_, i) => <div key={`blank-${i}`} className="h-20" />);
                                    const days = Array.from({ length: totalDays }, (_, i) => (
                                        <div key={i + 1} onClick={() => handleDayClick(i + 1)} className="h-20 px-2 pt-1 text-xs text-center  
                                        text-gray-700 cursor-pointer hover:bg-purple-100 relative">
                                            <div className="absolute top-1 left-1 right-1 text-center font-semibold text-black">{i + 1}</div>
                                        </div>
                                    ));
                                    return [...blanks, ...days];
                                })()}
                            </div>
                        </div>
                    </div>

                    {showAll && (
                        <div className="w-full lg:w-1/3 mt-2">
                            <h3 className="text-md font-semibold mb-3 text-gray-700">Upcoming Sessions</h3>
                            <div className="space-y-4">
                                {[1, 2, 3,].map((idx) => (
                                    <div key={idx} className="flex flex-col justify-between rounded-xl shadow-sm border border-gray-200 h-full">
                                        <div className="pt-4 px-4">
                                            <div className="flex gap-5 items-start">
                                                <img src={coach1} className="h-10 w-10 rounded-full" alt="Coach" />
                                                <div className="flex flex-col flex-1 text-left">
                                                    <h4 className="font-medium text-[#33384B]">John Doe</h4>
                                                    <p className="text-[#AAB6C3]">Career Guidance & Personal Growth</p>
                                                    <p className="text-sm flex flex-row gap-2 mt-2 mb-2 text-[#454545]">
                                                        <Icon icon='solar:calendar-linear' className="text-lg text-[#454545] mt-1" />Sunday, June 26  |  <Icon icon='iconoir:clock' className="text-lg text-[#454545]" /> 2:00 PM - 3:00 PM
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => setSelectedCoach({
                                                name: "John Doe",
                                                expertise: "Career Guidance & Personal Growth",
                                                session: "Sunday, June 26",
                                                time: "2:00 PM - 3:00 PM",
                                                image: coach1,
                                                nextSession: "Session with Sarah Thompson",
                                                Date: "Sunday, June 26"
                                            })}
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
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
                        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-4 h-[575px]">
                            <div className="rounded-lg p-4 shadow-inner mb-4">
                                <img src={selectedCoach.image} alt="Coach" className="w-20 h-20 rounded-full mx-auto mb-2" />
                                <h2 className="text-lg font-semibold text-gray-800 text-center">{selectedCoach.name}</h2>
                                <p className="text-md text-gray-500 text-center mb-3">{selectedCoach.expertise}</p>
                                <p className="text-sm text-gray-600 m-2">📅 {selectedCoach.nextSession}</p>
                                <p className="text-sm text-gray-600 m-2">📅 {selectedCoach.session}</p>
                                <p className="text-sm text-gray-600 m-2">🕒 {selectedCoach.time}</p>
                                <p className="text-sm text-gray-600 m-2">🕒 {selectedCoach.Date}</p>
                            </div>
                            <h3>Add Notes</h3>
                            <textarea className="w-full border border-gray-300 rounded-md p-3 mb-4 resize-none" rows="5" placeholder="Write your notes here..."></textarea>
                            <div className="flex justify-center gap-2">
                                <button onClick={() => setSelectedCoach(null)} className="px-4 py-2 bg-gray-200 text-gray-700 cursor-pointer rounded-lg hover:bg-gray-300">
                                    Cancel
                                </button>
                                <button onClick={() => setSelectedCoach(null)} className="px-4 py-2 bg-[#C8B8E8] text-black rounded-lg cursor-pointer shadow-[inset_0_2px_2px_#ffffff] border-1 border-[#C8B8E8] flex items-center gap-2">
                                    <Icon icon="mdi:content-save-outline" className=" w-5 h-5" />
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}