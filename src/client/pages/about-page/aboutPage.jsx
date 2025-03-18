import React from "react";
import companyOverview from "../../../assets/images/companyOverview.svg";
import companyBuilding from "../../../assets/images/companyBuilding.svg";
import missionIcon from "../../../assets/images/missionIcon.svg";
import visionIcon from "../../../assets/images/visionIcon.svg";
import valuesIcon from "../../../assets/images/valuesIcon.svg";
import treeIcon from "../../../assets/images/treeIcon.svg";
import Navbar from '../../navbar-footer/navbar'
import image1 from "../../../assets/images/Integrated-circuit.jpg"
import image2 from "../../../assets/images/ic.jpg"
import image3 from "../../../assets/images/icc.webp"
import work from "../../../assets/images/work.png"
import Icon1 from "../../../assets/images/Icon1.svg"
import icon2 from "../../../assets/images/icon2.svg"
import icon3 from "../../../assets/images/icon3.svg"
import line from "../../../assets/images/Line.svg"
import bosch from "../../../assets/images/bosch.png"
import innovation from "../../../assets/images/innovation.png"
import credit from "../../../assets/images/credit.png"
import ebay from "../../../assets/images/ebay.png"
import total from "../../../assets/images/total.png"
import inditex from "../../../assets/images/inditex.png"
import siemens from "../../../assets/images/siemens.png"
import small_icons from "../../../assets/images/small-icons.svg"
import arrow from "../../../assets/images/arrow.svg"
import acs from "../../../assets/images/acs.svg";
import logokeyindustry from "../../../assets/images/logokeyindustry.svg";
import synopsysCoverr from "../../../assets/images/synopsysCoverr.svg";

// import icImage from "../../../assets/images/ic-bg.svg"
// import FaAward from "../../../assets/icons/fa-award.svg";
// import IoIosRibbon from "../../../assets/icons/io-ios-ribbon.svg";
// import MdVerified from "../../../assets/icons/md-verified.svg";
// import AiOutlineTrophy from "../../../assets/icons/ai-outline-trophy.svg";
// import GiAchievement from "../../../assets/icons/gi-achievement.svg";

// import { LuArrowRight } from "react-icons/lu";

// map
import { useEffect } from "react";
// import svgMap from "svgmap";
// import "svgmap/dist/svgMap.css"; // Import styles


import { GoArrowRight } from "react-icons/go";
function AboutPage() {
  // const acronym = [
  //   { letter: "E", word: "Embedded", definition: "Specializing in IC design and firmware development." },
  //   { letter: "S", word: "Systems", definition: "Delivering seamless integration in hardware and software." },
  //   { letter: "I", word: "Innovation", definition: "Pioneering advancements in embedded technology." },
  //   { letter: "L", word: "Logic", definition: "Building smart solutions with cutting-edge design." },
  //   { letter: "I", word: "Integration", definition: "Ensuring efficiency across digital and analog systems." },
  //   { letter: "C", word: "Connectivity", definition: "Enhancing communication between devices." },
  //   { letter: "O", word: "Optimization", definition: "Maximizing performance in embedded applications." },
  //   { letter: "N", word: "Networks", definition: "Expanding possibilities with connected solutions." }
  // ];
  return (
    <>
      {/* Navbar Component */}

{/* Company Overview Section */}
<div className="relative w-[1000] h-[500px] flex items-center px-40">
  {/* Background Image */}
  <img
    src={companyOverview}
    alt="Company Overview"
    className="absolute inset-0 w-full h-500px object-cover"
  />

  {/* Overlay for readability */}
  <div className="absolute inset-full bg-black bg-opacity-50"></div>

  {/* Text Content - Aligned Left */}
  <div className="relative z-20 text-white max-w-2xl mt-50">

<h1 className="text-5xl font-bold pr-4">Company Overview</h1>
<p className="text-2xl mt-4">
  Embedded Silicon is a leading development and consulting firm
  specializing in IC design and embedded systems. We collaborate with
  industry partners to deliver seamless integration of component design,
  embedded systems, and firmware development.
    </p>
  </div>
</div>


{/* Key Facts Section */}
<div className="flex flex-row lg:mx-40 3xl:mx-80 justify-between gap-4 py-1 mt-60">
  <p className="text-[#201d1d] text-3xl font-bold">
    Key Facts About Embedded Silicon
  </p>
</div>

<div className="flex justify-center w-full max-w-6xl mx-auto py-10 border-b border-gray-200">
  <div className="w-full max-w-6xl flex justify-between px-4">
    <div className="text-center">
      <p className="text-[#1A57C2] text-3xl font-bold">200+ yrs</p>
      <p className="text-gray-600 text-sm">of combined experience</p>
    </div>
    <div className="text-center">
      <p className="text-[#1A57C2] text-3xl font-bold">50+</p>
      <p className="text-gray-600 text-sm">engineers and growing</p>
    </div>
    <div className="text-center">
      <p className="text-[#1A57C2] text-3xl font-bold">Established in 2020</p>
      <p className="text-gray-600 text-sm">
        with offices in Alabang and Rizal
      </p>
    </div>
    <div className="text-center">
      <p className="text-[#1A57C2] text-3xl font-bold">30</p>
      <p className="text-gray-600 text-sm">Partnership</p>
    </div>
  </div>
</div>

{/* Company History & Building Image */}
<div className="flex justify-center items-center w-full py-10">
  <div className="w-full max-w-6xl flex">

    {/* Left: Company History */}
    <div className="w-1/3 bg-[#121c2e] text-[#ced3dc] p-6 rounded-l-lg">
      <h2 className="xl:text-3xl text-4xl font-bold text-white">Company History</h2>
      <p className="xl:text-xl text-sm text-[#b0b8c4] font-normal mt-4"></p>
      <p className="text-sm mt-8 text-gray-300">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        In deleniti repellat eum harum quas ducimus aliquam tempore 
        vel ad earum dolore consequatur labore eligendi dolores, 
        molestias suscipit atque, dicta enim.
      </p>
      <p className="text-sm mt-3 text-gray-300">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        In deleniti repellat eum harum quas ducimus aliquam tempore 
        vel ad earum dolore consequatur labore eligendi dolores, 
        molestias suscipit atque, dicta enim. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores eos inventore accusamus deserunt! 
        Dolor quisquam eius temporibus architecto 
        accusantium vero maxime necessitatibus delectus rerum dolorum, eligendi distinctio aperiam officiis iusto.
      </p>
      <p className="text-sm mt-3 text-gray-300">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        In deleniti repellat eum harum quas ducimus aliquam tempore 
        vel ad earum dolore consequatur labore eligendi dolores, 
        molestias suscipit atque, dicta enim. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores eos inventore accusamus deserunt! 
        Dolor quisquam eius temporibus architecto 
        accusantium vero maxime necessitatibus delectus rerum dolorum, eligendi distinctio aperiam officiis iusto.
      </p>
      <p className="text-sm mt-3 text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error architecto ad tenetur dignissimos nihil culpa, dolore assumenda nostrum 
        autem veritatis obcaecati dolores quo deserunt nisi aperiam repellendus nam iusto.
      </p>
    </div>

    {/* Right: Company Building Image */}
    <div className="w-2/3">
      <img
        src={companyBuilding}
        alt="Company Building"
        className="w-full h-full object-cover rounded-2xl rounded-l-lg"
      />
    </div>
  </div>
</div>

{/* Company Overview Sheet */}
<div className="flex justify-center w-full mt-6">
  <div className="w-full max-w-6xl">
    <div className="bg-[#043A65] text-white px-8 lg:px-12 py-8 lg:py-8 rounded-lg flex justify-between items-center gap-6">
      <h2 className="xl:text-3x text-3xl font-bold">Company Overview Sheet</h2>
      <button className="bg-white text-[#0F4C81] px-8 lg:px-12 py-2 rounded-lg font-bold text-lg hover:bg-gray-200 transition-all">
        View PDF
      </button>
    </div>
  </div>
</div>




{/* Company Values Section */}
<div className="w-full max-w-6xl mx-auto px-6 py-16">
  {/* Left Side: Heading and Intro Text */}
  <div className="mb-16 max-w-3xl">
    <h2 className="text-4xl font-bold text-gray-900">Company Values</h2>
    <p className="text-xl font-semibold text-blue-700 mt-2">
      Innovate. Build. Transform.
    </p>
    <p className="text-gray-700 mt-4">
      At Embedded Silicon, we are dedicated to advancing technology and 
      creating a world-class R&D hub in the Philippines. Through innovation, 
      learning, and problem-solving, we develop next-generation embedded 
      solutions that shape the future.
    </p>
  </div>

  {/* Right Side: Mission, Vision, and Values Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
    {/* Mission Card */}
    <div className="relative bg-gradient-to-r from-[#033F75] to-[#063241] text-white p-6 rounded-none shadow-lg text-center h-[380px] flex flex-col">
      {/* Icon */}
      <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-28 h-28 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center">
        <img src={missionIcon} alt="Mission Icon" className="w-14 h-14" />
      </div>
      {/* Text Content */}
      <div className="flex-1 flex flex-col justify-center mt-14">
        <h3 className="text-2xl font-bold uppercase">Mission</h3>
        <p className="text-base mt-4 leading-relaxed px-6">
          "To be the preferred technology development partner, fostering world-class research and innovation in IC design and embedded systems. We drive progress through collaboration, continuous learning, and problem-solving."
        </p>
      </div>
    </div>

    {/* Vision Card */}
    <div className="relative bg-gradient-to-r from-[#033F75] to-[#063241] text-white p-6 rounded-none shadow-lg text-center h-[380px] flex flex-col">
      {/* Icon */}
      <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-28 h-28 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center">
        <img src={visionIcon} alt="Vision Icon" className="w-14 h-14" />
      </div>
      {/* Text Content */}
      <div className="flex-1 flex flex-col justify-center mt-14">
        <h3 className="text-2xl font-bold uppercase">Vision</h3>
        <p className="text-base mt-4 leading-relaxed px-6">
          "To be the preferred technology development partner and solutions provider in the ASEAN region, delivering smart and reliable solutions for the future."
        </p>
      </div>
    </div>

    {/* Values Card */}
    <div className="relative bg-gradient-to-r from-[#033F75] to-[#063241] text-white p-6 rounded-none shadow-lg text-center h-[380px] flex flex-col">
      {/* Icon */}
      <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-28 h-28 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center">
        <img src={valuesIcon} alt="Values Icon" className="w-14 h-14" />
      </div>

      {/* Text Content */}
      <div className="flex-1 flex flex-col justify-center mt-14 px-6 text-left">
        <h3 className="text-2xl font-bold uppercase text-center">Values</h3>

        {/* Properly Aligned List */}
        <div className="mt-4 space-y-2">
          <p><span className="font-bold">Teamwork</span> – We collaborate to achieve great results.</p>
          <p><span className="font-bold">Excellence</span> – We strive for high-quality work.</p>
          <p><span className="font-bold">Service</span> – We focus on delivering real value to our customers.</p>
        </div>
      </div>
    </div>
  </div> {/* Closing tag for grid container */}
</div> {/* Closing tag for Company Values Section */}



{/* Our Clients */}
<div className="flex flex-col items-center mt-12">
  <div className="text-[#040404] text-[50px] flex flex-col items-center gap-2 font-semibold">
    Our Clients 
    <span className="text-xl text-[#647185] font-normal">
      Some of the businesses and startups we have worked with
    </span>
  </div>

  {/* Centered Clients Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 grid-rows-2 items-center mt-10 gap-6 w-full max-w-6xl justify-center">
    <div className="flex justify-center p-6">
      <img src={bosch} alt="Bosch" className="w-28 h-28" />
    </div>
    <div className="flex justify-center p-6">
      <img src={innovation} alt="Innovation" className="w-28 h-28" />
    </div>
    <div className="flex justify-center p-6">
      <img src={credit} alt="Credit" className="w-28 h-28" />
    </div>
    <div className="flex justify-center p-6">
      <img src={ebay} alt="Ebay" className="w-28 h-28" />
    </div>
    <div className="flex justify-center p-6">
      <img src={total} alt="Total" className="w-28 h-28" />
    </div>
    <div className="flex justify-center p-6">
      <img src={inditex} alt="Inditex" className="w-28 h-28" />
    </div>
    <div className="flex justify-center p-6">
      <img src={siemens} alt="Siemens" className="w-28 h-28" />
    </div>
    <div className="flex justify-center p-6">
      <img src={bosch} alt="Bosch" className="w-28 h-28" />
    </div>
    <div className="flex justify-center p-6">
      <img src={ebay} alt="Ebay" className="w-28 h-28" />
    </div>
    <div className="flex justify-center p-6">
      <img src={total} alt="Total" className="w-28 h-28" />
    </div>
  </div>
</div>

{/* Industry Section */}
<div className="flex flex-col items-center mt-24">
      <div className="text-[#040404] text-[50px] font-semibold text-center">
        Industry Recognition
      </div>

      {/* 🔹 Icons Grid Display with Line Separators */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 grid-rows-2 items-center mt-10 w-full max-w-5xl">
        
        {/* 🔹 Row 1 */}
        <div className="flex justify-center p-6 border-b border-gray-300 border-r">
          <img src={innovation} alt="Bosch Award" className="w-20 h-20 filter grayscale" />
        </div>

        <div className="flex justify-center p-6 border-b border-gray-300 border-r">
          <img src={innovation} alt="Innovation Award" className="w-20 h-20 filter grayscale" />
        </div>

        <div className="flex justify-center p-6 border-b border-gray-300 border-r">
          <img src={credit} alt="Credit Award" className="w-20 h-20 filter grayscale" />
        </div>

        <div className="flex justify-center p-6 border-b border-gray-300">
          <img src={total} alt="Total Award" className="w-20 h-20 filter grayscale" />
        </div>

        {/* 🔹 Row 2 */}
        <div className="flex justify-center p-6 border-r border-gray-300">
          <img src={siemens} alt="Siemens Award" className="w-20 h-20 filter grayscale" />
        </div>

        <div className="flex justify-center p-6 border-r border-gray-300">
          <img src={siemens} alt="Siemens Award" className="w-20 h-20 filter grayscale" />
        </div>

        <div className="flex justify-center p-6 border-r border-gray-300">
          <img src={siemens} alt="Siemens Award" className="w-20 h-20 filter grayscale" />
        </div>

        <div className="flex justify-center p-6">
          <img src={siemens} alt="Siemens Award" className="w-20 h-20 filter grayscale" />
        </div>
        
      </div>
    </div>



{/* Leadership Section */}
<div className="w-full max-w-6xl mx-auto px-6 py-16">
  <h2 className="text-4xl font-bold text-center text-gray-900 mb-25">
    Our Experienced Management Team
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
    {/* First Leader Profile */}
    <div className="text-center relative">
      {/* Circular Image Placeholder with SVG */}
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center shadow-lg">
        <img src="/your-svg-file.svg" alt="Profile Icon" className="w-24 h-24" />
      </div>
      <h3 className="text-2xl font-bold mt-30">Mr. Robert O. Minguez II</h3>
      <p className="text-blue-600 font-semibold">CEO & President</p>
      <p className="text-gray-700 mt-4 text-sm px-4">
      An accomplished entrepreneur and former IC Design Engineer at Intel Technology Philippines Inc., brings extensive experience in IC Design services, 
      microelectronics training, and technology development. A UP Diliman alumnus with a BS ECE degree and an Ateneo REGIS-MBA graduate, Mr. Minguez combines 
      technical expertise with strategic leadership. As a Trustee of UPERDFI from 2020-2023, he continues to shape the landscape of IC Design with a commitment to excellence.
      </p>
    </div>

    {/* Vertical Separator with Circles */}
    <div className="absolute left-1/2 transform -translate-x-1/2 h-full flex flex-col items-center">
      <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
      <div className="w-[2px] h-full bg-gray-400"></div>
      <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
    </div>

    {/* Second Leader Profile */}
    <div className="text-center relative">
      {/* Circular Image Placeholder with SVG */}
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center shadow-lg">
        <img src="/your-svg-file.svg" alt="Profile Icon" className="w-24 h-24" />
      </div>
      <h3 className="text-2xl font-bold mt-30">Mr. Fred Chua</h3>
      <p className="text-blue-600 font-semibold">Director</p>
      <p className="text-gray-700 mt-4 text-sm px-4">
      A distinguished Electronics and Communication Engineering graduate from the University of the Philippines, is a seasoned serial entrepreneur. 
      As the founder and CEO of Magellan Solutions Outsourcing, Inc., established in 2005, he has led the organization to serve over 90 clients across 
      diverse industries, including e-commerce, medical, education, manufacturing, and retail services.
      </p>
    </div>
  </div>
</div>

{/* Map */}













    </>
  );
}

export default AboutPage;





