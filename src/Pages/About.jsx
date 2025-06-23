import React from 'react'
// import Navbar from '../Components/Navbar'
import lyer from "../assets/lyer.png";
import { Icon } from "@iconify/react";
import Group from '../Components/Group';
// import Footer from '../Components/Footer';
import life from "../assets/life.png";
const About = () => {
return(
    <div>
        {/* <Navbar /> */}
       <div className='flex justify-center mt-20 bg-[#F8F6FC] gap-100'>
        <div className='mt-10'>
            <h1 className=' text-5xl mb-5 leading-tight'>
                Be My Life Coach Was Created <br />
                With one Simple Belief:
            </h1>
            <p className='font-semibold text-2xl mb-5'>
                Getting The Support You Need Shuldn't Be <br />
                Complicated.
            </p>
            <p>
                Wheather you're navigating career chaos, parenting stress, <br />
                relationship strugles, or simply need someone to talk to, we believe <br />
                connection shouldn't be delayed by paperwork ,contracts, or long <br/>
                waitlists. You desrve guidance now __ not next week.
            </p>
        </div>
        <div className='mt-8 mb-8'>
            <img src={lyer} alt="" />
           
        </div>
       </div>

       <div>
          <h1 className='text-center mt-20 text-5xl font-semibold leading-tight text-gray-700'>
            So We Built A Platform That Removes <br/>
            The Barriers
          </h1>
       
       </div>
       <div className='flex justify-center mt-10 gap-20'>
        <button className=' h-35 w-45 bg-purple-100  rounded-xl'>
            <Icon className='h-12 w-40 text-purple-400 ml-2 mb-2' icon="icon-park-outline:form-one" />
            No forms
        </button>
        <button className='h-35 w-45 bg-purple-100  rounded-xl'>
             <Icon className='h-12 w-40 text-purple-400 ml-2 mb-2 ' icon="flowbite:grid-outline" />
             No fuss
        </button>
         <button className=' w-48 h-35 bg-purple-100  rounded-xl'>
             <Icon className='h-12 w-40 text-purple-400 mb-2' icon="flowbite:badge-check-outline" />
             just real,instant access<br/>
             to certified life coaches
        </button>
        </div>

          <div className='flex justify-center mt-20  gap-90 bg-[#F8F6FC]'>
            <div className='mt-30'>
                <h1 className='font-semibold text-4xl leading-tight'>
                    Feeling Overwhelmed? <br/>
                    We're just A Tap Away.
                </h1>
                <p className='mt-6 mb-2 text-2xl'>
                    Connect with a life coach __ no waiting, no judgment.
                </p>
                <h2 className='mb-4 mt-8 text-2xl font-semibold text-purple-300'>
                    Because When life Feels Heavy, <br />
                    Support should Feel Light.
                </h2>

                <button className='bg-purple-300 w-50 py-2 rounded-lg mt-8 '>
                    connect with a life Coach → 
                </button>
            </div>
            <div>
                <img src={life} alt=""  className='h-160 mt-10 mb-10'/>
            </div>
          </div>
        <Group />
        {/* <Footer /> */}
    </div>
    
)
}

export default About