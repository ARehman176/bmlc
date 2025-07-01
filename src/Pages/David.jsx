import React from 'react';
import { Icon } from '@iconify/react';

const David = ({ isOpen, onClose, coach }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      <div className="relative z-10 bg-white p-6 rounded-4xl shadow-2xl w-full max-w-md h-[80vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <Icon icon="mdi:close" className="text-2xl" />
        </button>
        <button
  onClick={onClose}
  className="absolute top-4 left-4 text-gray-400 hover:text-gray-600 flex items-center gap-1"
>
  <Icon className='text-2xl' icon="ic:round-arrow-back" />
  
</button>

        {/* Profile Image */}
        <div className="flex justify-center -mt-1 mb-1">
          <img
            src={coach.image}
            alt={coach.name}
            className="w-24 h-24 rounded-full border-4 border-purple-300"
          />
        </div>

        {/* Coach Info */}
        <h2 className="text-xl font-semibold text-center">{coach.name}</h2>
        <p className="text-center text-gray-500">{coach.expertise}</p>
        <p className="text-center text-sm text-gray-600 mb-2">{coach.availability}</p>

        {/* Action Icons */}
        <div className="flex justify-center gap-6 mb-1">
          <a href="tel:+123456789" >
            <Icon icon="mdi:phone-outline" className="text-2xl border-1 text-purple-400 border-gray-400 rounded-md" />
          </a>
          <a href="mailto:coach@example.com" >
            <Icon icon="mdi:email-outline" className="text-2xl border-1 text-purple-400 border-gray-400 rounded-md" />
          </a>
          <a href="#" >
            <Icon icon="mdi:calendar-outline" className="text-2xl text-purple-400 border-1 border-gray-400 rounded-md" />
          </a>
        </div>

        {/* About Section */}
        <div className="mb-1">
          <h3 className="text-md font-medium mb-1">About John Doe</h3>
          <div className='border-1 border-gray-200 rounded-lg '>
          <p className="text-sm text-gray-600 mt-2 mb-2 p-1">{coach.about}
            John is seeking expert guidance on career transition and <br/>
            personal growth. He has previously consulted with life <br/>
            coach, and is eager to learn from industry experts.
          </p>
          
       
        
      
          </div>
        </div>

        {/* Save Button */}
        <button className="bg-[#C8B8E8] text-black  py-2 px-6 rounded-lg font-medium
         hover:bg-purple-300 mb-1 mx-auto block
         shadow-[inset_0_2px_2px_#ffffff] border-1 border-[#C8B8E8]">
          <div className='flex gap-2'>
          <div><Icon icon="material-symbols:movie-info-rounded" className="text-2xl " /></div>
          <div> Save Info</div>
           </div>
        </button>

        {/* Previous Sessions */}
       <h2 className='ml-2 font-semibold'>Previous Sessions</h2>
        <div className='bg-[#F8F6FC] rounded-lg p-2'>
          
       
      <p className="mb-1 flex items-center gap-1 text-[#33384B]">
        📅 Session with Sarah Thompson
      </p>
       <p className="mb-1 flex items-center gap-1 text-[#33384B]">
        🔹 Topic : Overcoming Career Burnout
      </p>
      <p className="mb-1 flex items-center gap-1 text-[#33384B]">
        📅 Date : Jan 20, 2025
      </p>
      <p className="mb-1 flex items-center gap-1 text-[#33384B]">
        🕒 Time : 2:00 PM-3:00 PM 
      </p>
      <p className="mb-3 flex items-start gap-1 text-[#33384B]">
        📝 Notes : "sarah Provided actionable steps to <br/>
        manage work stress. Highly recomended..."
      </p>
        </div>
        <div>
         
        </div>
        <div>
           <button className="bg-[#C8B8E8] hover:bg-purple-300 mt-1
         text-black px-4 py-1 rounded-md flex items-center justify-center mx-auto gap-2
         shadow-[inset_0_2px_2px_#ffffff] border-1 border-[#C8B8E8]">
        <Icon icon="weui:done2-outlined" className="text-1xl  " /> Done
      </button>
        </div>
        
       
      </div>
      
    </div>
  );
};

export default David;
