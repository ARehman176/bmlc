import { useState } from "react";
import SideBar from "../Components/Sidebar";
import { Icon } from "@iconify/react";
import profileImage from "../assets/profile.png";
import CoachCard from "../components/CoachCardComponent";

const coaches = [
    {
        name: "Sarah Johnson",
        image: "https://randomuser.me/api/portraits/women/29.jpg",
        expertise: "Mindfulness & Mental Health",
        rating: 4,
        calls: "$6 / minute",
        messages: "$6 / 100 word bundle",
        minutes: "2 minutes",
        online: true,
        reviews: '23K'
    },
    {
        name: "David Lee",
        image: "https://randomuser.me/api/portraits/men/26.jpg",
        expertise: "Life Strategy & Productivity",
        rating: 5,
        calls: "$6 / minute",
        messages: "$6 / 100 word bundle",
        minutes: "2 minutes",
        online: true,
        reviews: '2K'
    },
    {
        name: "Maria Smith",
        image: "https://randomuser.me/api/portraits/women/31.jpg",
        expertise: "Relationships & Self-esteem",
        rating: 3,
        calls: "$6 / minute",
        messages: "$6 / 100 word bundle",
        minutes: "2 minutes",
        online: true,
        reviews: '3K'
    },
    {
        name: "James Patel",
        image: "https://randomuser.me/api/portraits/men/35.jpg",
        expertise: "Career Guidance",
        rating: 4.4,
        calls: "$6 / minute",
        messages: "$6 / 100 word bundle",
        minutes: "2 minutes",
        online: true,
        reviews: '2.3K'
    },
    {
        name: "Robert Downey",
        image: "https://randomuser.me/api/portraits/men/29.jpg",
        expertise: "Spiritual Wellness",
        rating: 5,
        calls: "$6 / minute",
        messages: "$6 / 100 word bundle",
        minutes: "2 minutes",
        online: true,
        reviews: '3.4K'
    },
    {
        name: "Liam Brown",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        expertise: "Confidence | Public Speaking",
        rating: 4.8,
        calls: "$6 / minute",
        messages: "$6 / 100 word bundle",
        minutes: "2 minutes",
        online: false,
        reviews: '5K'
    },
];

const UserPanel = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [amount, setAmount] = useState(0);
    const [selectedCoach, setSelectedCoach] = useState(null);

    const handleAdd = () => setAmount(prev => prev + 1);
    const handleSubtract = () => {
        if (amount > 0) setAmount(prev => prev - 1);
    };

    const handleConfirm = () => {
        console.log("Confirming payment of: $", amount);
        setIsModalOpen(false);
        setAmount(0);
    };

    return (
        <div className="flex bg-[#F8F6FC] min-h-screen">
            <SideBar />

            <div className="flex-1 p-6">
                {/* Header */}
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-2xl font-bold">Home</h1>

                    <div className="flex items-center gap-3">
                        <button
                            className="text-[#3C3C3C] font-light px-4 py-2 rounded flex items-center gap-2 border border-gray-200"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <Icon icon="prime:wallet" className="text-2xl" />
                            Wallet Balance:{" "}
                            <span className="text-[#9363C4] font-medium">$20</span>
                        </button>

                        <img
                            src={profileImage}
                            alt="User profile"
                            className="h-9 w-9 rounded-full"
                        />
                        <div className="text-left text-sm text-gray-700">
                            <div className="font-medium">User</div>
                            <div className="text-gray-500 text-xs">johndoe516@</div>
                        </div>
                    </div>
                </div>

                {/* Life Coach Section */}
                <div className="mt-8">
                    <div className="flex justify-between items-center">
                        <h1 className="text-xl font-semibold ml-8">Meet Your Life Coach</h1>
                        <div className="flex">
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-white px-6 py-1 rounded-l-lg border border-gray-200"
                            />
                            <Icon
                                icon="mdi:magnify"
                                className="text-4xl text-black px-2 bg-[#C8B8E8] rounded-r-lg"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-6">
                        {coaches.map((coach, index) => (
                            <div
                                key={index}
                                className="w-full sm:w-[48%] lg:w-[32%]"
                                onClick={() => setSelectedCoach(coach)}
                            >
                                <CoachCard coach={coach} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Add Balance Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/30 bg-opacity-40 backdrop-blur-sm z-50">
                    <div className="bg-white p-8 rounded-4xl shadow-xl w-[90%] max-w-md text-center relative">
                        <button
                            className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl"
                            onClick={() => setIsModalOpen(false)}
                        >
                            &times;
                        </button>

                        <div className="flex justify-center mb-4">
                            <div className="bg-[#FF000014] p-2 w-16 h-16 flex items-center justify-center rounded-full border border-white">
                                <Icon icon="qlementine-icons:warning-24" className="text-4xl text-[#FF3E3D]" />
                            </div>
                        </div>


                        <h2 className="text-xl text-[#27272A] font-semibold mb-6 capitalize">low balance warning</h2>
                        <p className="text-[#7F7F7F] mb-6 ">Your credit balance is below <span className="text-[#8646F4]">$20</span>.
                            The call may end soon. Consider topping it up.</p>

                        <div className="flex items-center justify-center gap-4 mb-6">
                            <button onClick={handleSubtract} className="text-2xl text-gray-400 px-4 py-2 bg-white border border-gray-300 rounded-lg">−</button>
                            <span className="flex text-2xl font-medium w-50 text-start border border-gray-300 rounded px-4 py-2 items-center gap-2">
                                <Icon icon="iconoir:dollar" className="text-3xl text-[#7F7F7F]" />
                                <span className=" text-gray-500"> 35</span>
                            </span>

                            <button onClick={handleAdd} className="text-2xl text-gray-400 px-4 py-2 bg-white border border-gray-300 rounded-lg">+</button>
                        </div>

                        <p className="text-[#9363C4] text-xs -mt-4 mb-4">(Min: $10.00 to Max: $5000.00)</p>

                        <button onClick={handleConfirm} className="bg-[#C8B8E8] text-white px-20 ml-6 py-2 rounded-lg flex items-center gap-2
                        bg-purple-300 transition duration-300 cursor-pointer
                         shadow-[inset_0_2px_2px_#ffffff] border-1 border-[#C8B8E8]">
                            <Icon icon="fluent:payment-20-regular" className="text-2xl text-black" />
                            <p className="text-black">Continue to payment</p>
                        </button>

                    </div>
                </div>
            )}

            {/* Coach Modal */}
            {selectedCoach && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-center items-start pt-10 overflow-auto">
                    <div className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-2xl p-8 relative -mt-9 h-174">
                        <div className="flex justify-between items-center">
                            <Icon icon="ion:arrow-back-outline" className="text-2xl cursor-pointer text-[#454545]" onClick={() => setSelectedCoach(null)} />
                            <Icon icon="mdi:close" className="text-2xl cursor-pointer text-[#454545]" onClick={() => setSelectedCoach(null)} />
                        </div>

                        <div className="flex flex-col items-center text-center -mt-10">
                            <img src={selectedCoach.image} alt={selectedCoach.name} className="w-20 h-20 rounded-full object-cover mb-2" />
                            <h2 className="text-xl -mt-1 font-bold">{selectedCoach.name}</h2>
                            <p className="text-gray-600 -mt-1">{selectedCoach.expertise}</p>
                            <p className="mt-1 text-[#7F7F7F] text-sm ">⭐ {selectedCoach.rating} ({selectedCoach.reviews} reviews)</p>
                            <p className="mt-1 text-sm">Calls: <span className="text-[#9363C4] font-medium"> {selectedCoach.calls}</span></p>
                            <p className="mt-1 text-sm"> Messages: <span className="text-[#9363C4] font-medium">{selectedCoach.messages}</span></p>
                            <p className="mt-1 text-sm mb-4">Minutes: <span className="text-[#9363C4] font-medium">{selectedCoach.minutes}</span></p>

                            <div className="flex gap-4 -mt-2">
                                <div className="border border-gray-300 rounded-lg p-2 cursor-pointer">
                                    <Icon icon="mdi:calendar-month-outline" className="text-2xl text-[#9363C4]" />
                                </div>
                                <div className="border border-gray-300 rounded-lg p-2 cursor-pointer">
                                    <Icon icon="mdi:phone-outline" className="text-2xl text-[#9363C4]" />
                                </div>
                                <div className="border border-gray-300 rounded-lg p-2 cursor-pointer">
                                    <Icon icon="mdi:chat-outline" className="text-2xl text-[#9363C4]" />
                                </div>
                            </div>
                        </div>


                        <div className="mt-1 bg-[#F8F6FC] px-4 py-2 rounded-lg ">
                            <div className="space-y-2 rounded-lg text-sm">
                                <p>🌟 Bio & Introduction: Write about yourself & your coaching approach</p>
                                <p>🎓 Experience: 10+ Years in Life Coaching</p>
                                <p>📜 Certifications: Certified Life Coach, NLP Practitioner</p>
                            </div>
                        </div>


                        <h3 className="text-lg font-semibold mb-2 mt-2 px-2">Upcoming Session</h3>
                        <div className="mt-2 bg-[#F8F6FC] px-4 py-3 rounded-lg">

                            <div className="space-y-2 rounded-lg text-sm -mt-1">
                                <p>📅 Date: July 15, 2025</p>
                                <p>⏰ Time: 3:00 PM</p>

                            </div>
                        </div>

                        <div className="mt-2">
                            <h3 className="text-lg font-semibold mb-2 px-2">Previous Call Details</h3>
                            <div className="bg-[#F8F6FC] px-4 py-2 rounded-lg text-sm space-y-2">
                                <p>🗓️ July 01 – Focused on mindfulness training</p>
                                <p>🗓️ June 20 – Reviewed personal growth goals</p>
                                <p>🗓️ June 12 – Initial discussion</p>
                            </div>
                        </div>

                        <div className="mt-2 flex justify-center">
                            <button onClick={() => setSelectedCoach(null)} className="bg-[#C8B8E8] flex text-black px-4 py-2 rounded-lg gap-2 font-semibold shadow-lg">
                                <Icon icon='weui:done2-outlined' className="text-2xl" />Done
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserPanel;