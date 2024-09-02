import React from "react";
import { Link } from "react-router-dom";
import Speedometer from "./Speedometer";
import FeaturesSection from "./FeaturesSection.jsx"; // Import the FeaturesSection component
import CircleWithArrows from "./CircleWithArrows.jsx";

const Homepage = () => {
  // Define your desired percentage values
  const percentage1 = 80;
  const percentage2 = 84.7;
  const percentage3 = 20;

  return (
    <div class="overflow-x-hidden">
      {/* section1 */}
      <section className="bg-[url('./assets/homepg_img.png')] bg-cover bg-center w-screen h-screen flex flex-col justify-center">
        <div className="flex flex-col w-[37%]  pl-5">
          <h1 className="text-6xl font-bold overflow-hidden text-white">
            Welcome to{" "}
            <span className="text-black text-7xl font-playfair">
              ThreatLens
            </span>
          </h1>
          <h3 className="text-xl text-gray-200 mt-4 font-serif">
            In an increasingly digital world, the protection of our nation's
            Critical Information Infrastructure (CII) is more vital than ever.
            CyberWatch India is your trusted platform for real-time monitoring
            and analysis of cyber incidents that impact Indian cyberspace.
          </h3>
        </div>
        <div className="flex gap-4 pl-5 mt-4">
          <Link to="/signup">
            <button className="border border-richblack-700 bg-richblack-800 text-[12px] lg:text-[16px] px-2 py-1 lg:px-[12px] lg:py-[8px] bg-yellow-50 text-black font-semibold rounded-md hover:scale-95 transition-all duration-200">
              Sign Up
            </button>
          </Link>

          <Link to="/login">
            <button className="border border-richblack-700 bg-richblack-700 text-[12px] lg:text-[16px] px-2 py-1 lg:px-[12px] lg:py-[8px] text-richblack-5 font-semibold rounded-md hover:scale-95 transition-all duration-200">
              Log In
            </button>
          </Link>
        </div>
      </section>

      {/* section2 */}
      <section className="py-12 bg-blue-100 flex justify-center items-center">
        <div className="flex space-x-2 flex items-center justify-center ">
          {/* Heading Circle */}
          <div className="flex justify-center items-center w-50 h-40 p-3 bg-blue-700 text-white rounded-full shadow-lg">
            <p className="text-center text-3xl font-bold px-4">What We Do</p>
          </div>

          {/* Description Circle */}
          <div className="flex flex-wrap justify-center items-center w-[70%] h-[40%] bg-white text-blue-800 rounded-full shadow-lg border border-blue-300 p-6">
            <p className="text-lg text-center">
              At CyberWatch India, we are dedicated to safeguarding the
              integrity of India's IT and OT infrastructures by providing
              timely, actionable insights into cyber threats. Our platform
              leverages advanced Machine Learning algorithms to identify and
              gather data from various online sources, including forums, social
              media, paste sites, and more.
            </p>
          </div>
        </div>
      </section>

      {/* section3 */}
      <section className="py-10 bg-blue-100">
        <p className="text-center text-2xl font-bold mb-10 text-black">
          Facts and Statistics
        </p>
        <div className="flex justify-around gap-8">
          {/* Sub-Section 1 */}
          <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 w-[300px] border border-blue-300">
            <Speedometer percentage={percentage1} />
            <p className="mt-4 text-center text-blue-700">
              80% of Indian companies hit by cybersecurity incidents after
              miscommunication with IT team, according to a Kaspersky report.
            </p>
          </div>
          {/* Sub-Section 2 */}
          <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 w-[300px] border border-blue-300">
            <Speedometer percentage={percentage2} />
            <p className="mt-4 text-center text-blue-700">
              84.7% of surveyed organizations were affected by a successful
              cyberattack. (CyberEdge Group 2023 Cyberthreat Defense Report)
            </p>
          </div>
          {/* Sub-Section 3 */}
          <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 w-[300px] border border-blue-300">
            <Speedometer percentage={percentage3} />
            <p className="mt-4 text-center text-blue-700">
              20% of Indian users fell victim to cyber threats in the first
              quarter of 2024, according to a study. <br></br>(The Hindu)
            </p>
          </div>
        </div>
      </section>

      {/* section4 */}
      <section>
        <FeaturesSection />
      </section>

      {/* section5 */}
      <section >
        <p class="text-center font-poppins text-[40px] text-blue-900 pt-5 ">
          Stay Ahead of Threats
        </p>
        <CircleWithArrows />
      </section>

      {/* section6 */}
      <section>
        <footer className="bg-blue-900 text-white py-4 w-full text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} ThreatLens. All rights reserved.
          </p>
        </footer>
      </section>
    </div>
  );
};

export default Homepage;
