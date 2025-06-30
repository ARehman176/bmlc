import React from "react";
import book from "../assets/book.png";
import calendar from "../assets/calendar.png";
const About = () => {
  return (
    <section className="bg-[#F8F6FC] py-16 px-4 md:px-24 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row  gap-72">
        {/* Text Section */}
        <div className="max-w-xl ml-20">
          <h2 className="text-3xl font-semibold text-[#454545] mb-4 mt-10">
            Get Our ebook:
            <br />
            "Finding Clarity in Chaos"
          </h2>
          <p className="text-[#454545] font-medium mb-4 mt-8 ">
            Discover practical steps to navigate stress, regain
            <br />
            control, and reconect with your goals. This short,
            <br />
            powerful guide is uour first steo toward a more <br />
            focused life.
          </p>
          <p className="text-[#9363C4] font-semibold mb-6 mt-6">Only $4.99</p>
          <button
            className="bg-[#C8B8E8] hover:bg-purple-100  text-black font-medium px-2 py-2 gap-2 mt-8
        rounded-md shadow flex items-center justify-center mx-auto md:mx-0"
          >
            <img src={calendar} alt="" className="w-8 h-8" />
            Purchase & Download Instantly
          </button>
          <p className="text-xs text-[#454545] mt-4">
            After payment, you'll be instantly redirected to download your
            eBook.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src={book}
            alt="About us"
            className="w-[400px] h-auto rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
