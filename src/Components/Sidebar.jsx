import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'
import logo from '../assets/logo.png'

export default function UserPanelSideBar() {
    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        { title: 'Home', icon: 'mynaui:home', to: '/User' },
        { title: 'My Appointments', icon: 'solar:calendar-linear', to: '/Appointments' },
        { title: 'Chats', icon: 'fluent:chat-20-regular', to: '/UserChats' },
        { title: 'Profile', icon: 'ant-design:setting-outlined', to: '/Profileuser' },
        { title: 'Expenses', icon: 'solar:card-linear', to: '/Expenseuser' },
        { title: 'Credit History', icon: 'game-icons:backward-time', to: '/Credit' },
        { title: 'Call History', icon: 'proicons:call', to: '/Calluser' },
    ];

    const handleLogout = () => {
        
        navigate('/');
    };

    return (
        <div className='min-h-screen w-60 bg-white text-[#27272A] fixed md:relative flex flex-col justify-between'>
            
            <div>
                <div className='p-6 flex items-center justify-start '>
                    <img src={logo} alt="Logo" className="w-40 h-15 ml-2 object-contain" />
                </div>

                {/* Navigation */}
                <nav className="flex flex-col space-y-4 p-6 text-[#27272A]">
                    {navItems.map((item) => (
                        <Link
                            key={item.title}
                            to={item.to}
                            className={`p-2 rounded-xl hover:bg-[#C8B8E8] flex flex-row gap-2 items-center
                                 justify-start transition ${location.pathname === item.to ? 'bg-[#C8B8E8] font-semibold' : ''
                                }`}
                        >
                            <Icon icon={item.icon} className='w-5 h-5 text-2xl' />{item.title}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Logout Button */}
            <div className='p-6'>
                <button
                    onClick={handleLogout}
                    className=' p-2 rounded-lg border border-red-600 text-red-600 flex  items-center gap-2  justify-center hover:bg-red-200 transition'
                >
                    <Icon icon='mdi:logout' className='w-5 h-5' />
                    Logout
                </button>
            </div>
        </div>
    )
}