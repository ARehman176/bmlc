import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import profileImage from "../assets/profile.png";
import SideBar from '../Components/Sidebar';

export default function Calluser() {
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [reviewText, setReviewText] = useState("");

    const callHistoryData = [
        {
            id: "01",
            title: "Mental Health Sickness",
            name: "Sarah Thompson",
            expertise: "Mental Health",
            cost: "$100",
            duration: "30 mins",
            status: "Completed",
            rating: 4.5,
            image: "https://randomuser.me/api/portraits/women/87.jpg",
            review: "Very helpful session!",
        },
        {
            id: "02",
            title: "Career Guidance",
            name: "James Miller",
            expertise: "Career Coaching",
            cost: "$80",
            duration: "45 mins",
            status: "User Declined",
            rating: 0,
            image: "https://randomuser.me/api/portraits/men/36.jpg",
            review: "",
        },
        {
            id: "03",
            title: "Stress Management",
            name: "Amanda Lee",
            expertise: "Stress Management",
            cost: "$120",
            duration: "60 mins",
            status: "Coach Declined",
            rating: 0,
            image: "https://randomuser.me/api/portraits/women/56.jpg",
            review: "",
        },
        {
            id: "04",
            title: "Life Coach",
            name: "sara Taylor",
            expertise: "Life Couch",
            cost: "$120",
            duration: "60 mins",
            status: "Coach Declined",
            rating: 0,
            image: "https://randomuser.me/api/portraits/women/36.jpg",
            review: "",
        },
        {
            id: "05",
            title: "Mental Health Sickness",
            name: "Steve Smith",
            expertise: "Mental Health",
            cost: "$110",
            duration: "50 mins",
            status: "Completed",
            rating: 4.5,
            image: "https://randomuser.me/api/portraits/men/87.jpg",
            review: "Very helpful session!",
        },
        {
            id: "01",
            title: "Mental Health Sickness",
            name: "Aron Finch",
            expertise: "Mental Health",
            cost: "$190",
            duration: "90 mins",
            status: "Completed",
            rating: 4.5,
            image: "https://randomuser.me/api/portraits/men/97.jpg",
            review: "Very helpful session!",
        },
    ];

    const handleAddReview = (user) => {
        setSelectedUser(user);
        setRating(0);
        setHoverRating(0);
        setReviewText("");
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };

    return (
        <div className="flex bg-[#F8F6FC] min-h-screen">
            <SideBar />

            <div className="flex-1 p-6">
                <div className="flex justify-between items-center w-full mb-4">
                    <h1 className="text-2xl font-semibold text-[#27272A]">Call History</h1>
                    <div className="flex items-center gap-3 hover:scale-105 transition duration-200 ease-in-out">

                        <img src={profileImage} alt="User profile" className="h-9 w-9 rounded-full" />
                        <div className="text-left text-sm text-gray-700">
                            <div className="font-medium">User</div>
                            <div className="text-gray-500 text-xs">johndoe516@</div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center relative bg-white rounded-xl shadow  p-4">
                    <h2 className="text-2xl font-semibold text-[#27272A] mt-4 mb-4 capitalize">Call History with life coaches</h2>

                    <div className="relative w-64 ">
                        <input
                            type="text"
                            placeholder="Search User"
                            className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg text-sm"
                        />
                        <button
                            className="absolute right-1 top-1/2 transform -translate-y-1/2 -mr-[3px] rounded-tr-lg rounded-br-lg bg-[#C8B8E8] text-white p-[8.5px]"
                            title="Search"
                        >
                            <Icon icon="mdi:magnify" className="text-lg text-[#27272A] border-1 border-[#C8B8E8]" />
                        </button>
                    </div>
                </div>
                <div className='bg-white shadow rounded-xl overflow-x-auto mt-2'>
                    <table className="w-full text-sm text-left text-gray-700 bg-white rounded-bl-xl rounded-br-xl  p-6">
                        <thead className="border-b-1 border-gray-200">
                            <tr className='bg-white'>
                                <th className="py-2 px-4 font-bold">Sr#</th>
                                <th className="py-2 px-4 font-bold">Title</th>
                                <th className="py-2 px-4 font-bold">User</th>
                                <th className="py-2 px-4 font-bold">Status</th>
                                <th className="py-2 px-4 font-bold">Cost</th>
                                <th className="py-2 px-4 font-bold">Duration</th>
                                <th className="py-2 px-4 font-bold">Rate & Reviews</th>
                            </tr>
                        </thead>
                        <tbody>
                            {callHistoryData.map((call, index) => (
                                <tr key={index} className="border-b border-gray-200   ">
                                    <td className="py-2 px-4">{call.id}</td>
                                    <td className="py-2 px-4">{call.title}</td>
                                    <td className="py-2 px-4 flex items-center gap-2">
                                        <img
                                            src={call.image}
                                            alt={call.name}
                                            className="h-8 w-8 rounded-full object-cover"
                                        />
                                        <span>{call.name}</span>
                                    </td>
                                    <td className="py-2 px-4">
                                        <span
                                            className={`px-2 rounded-lg py-2 text-xs font-semibold ${call.status === "Completed"
                                                ? "bg-green-100 text-green-600 px-8"
                                                : call.status === "User Declined"
                                                    ? "bg-red-100 text-red-500 px-6"
                                                    : "bg-red-100 text-red-500  px-5"
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
                                                <Icon icon="material-symbols:star" className="text-yellow-400 text-lg" />
                                                <span className="font-medium">{call.rating}</span>
                                                <span className="text-gray-500 text-sm">({call.review})</span>
                                            </div>
                                        ) : (
                                            <div className='flex flex-row gap-2'> <p className='text-gray-400 font-extralight ml-1'>No review added yet.</p> <button
                                                onClick={() => handleAddReview(call)}
                                                className="text-[#9363C4] hover:text-[#7a50b2] flex items-center gap-2"
                                            >
                                                Add Review <Icon icon="bx:message-edit" className="text-lg" />
                                            </button></div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-row justify-between items-center mt-4 px-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>Rows per page:</span>
                        <select className="rounded px-2 py-1 text-sm">
                            <option value="5" defaultValue>5</option>
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

                {isModalOpen && selectedUser && (
                    <div className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-xl w-[90%] max-w-md text-center">
                            <h2 className="text-xl font-semibold mb-4 text-[#374151]">How Clients are Growing 😊?</h2>
                            <img src={profileImage} alt={selectedUser.name} className="h-20 w-20 mx-auto rounded-full object-cover mb-4 border-2 border-[#C8B8E8]" />
                            <h3 className="text-lg font-medium -mt-3">{selectedUser.name}</h3>
                            <p className="text-sm text-gray-500 mb-2">{selectedUser.expertise}</p>
                            <div className="flex justify-center items-center gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Icon
                                        key={star}
                                        icon={star <= (hoverRating || rating) ? "material-symbols:star" : "material-symbols:star-outline"}
                                        className="text-yellow-400 text-2xl cursor-pointer"
                                        onMouseEnter={() => setHoverRating(star)}
                                        onMouseLeave={() => setHoverRating(0)}
                                        onClick={() => setRating(star)}
                                    />
                                ))}
                            </div>
                            <textarea
                                rows="4"
                                placeholder="Write your review..."
                                className="w-full border border-gray-300 rounded p-2 text-sm resize-none"
                                value={reviewText}
                                onChange={(e) => setReviewText(e.target.value)}
                            ></textarea>
                            <div className="mt-4 ml-35">
                                <button
                                    onClick={closeModal}
                                    className="flex items-center gap-2 px-4 py-2 bg-[#C8B8E8] text-white rounded hover:bg-purple-200
                                    shadow-[inset_0_2px_2px_#ffffff] border-1 border-[#C8B8E8]"
                                >
                                    <Icon icon="mynaui:send-solid" className="text-lg text-black mt-1" />
                                  <p className='text-black'> Submit</p> 
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}