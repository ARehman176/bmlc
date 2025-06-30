import React from "react";
import about from "../assets/about.png"; // Replace with your actual image path

const About = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-24 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row  gap-72">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src={about}
            alt="About us"
            className="w-[400px] h-auto rounded-3xl object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="max-w-xl ml-20">
          <h2 className="text-3xl font-semibold text-[#454545] mb-4 mt-10">
            About Us
          </h2>
          <p className="text-[#454545] font-medium mb-4 text-2xl  ">
            We started Be My Life Coach after seeing <br />
            close friends burn out from juggling <br />
            careers, motherhood, and everything in
            <br />
            between.
          </p>
          <p className="text-[#454545] ">
            Our mission is simple: to make personalized support
            <br />
            as easy and accessible as texting a best friend.
            <br />
            Whether you need clarity, encouragement, or a plan <br />
            forward, we're here to help—right when you need it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
