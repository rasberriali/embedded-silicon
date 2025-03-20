import {React} from "react";
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
<div className="relative w-full min-h-[780px] flex items-center justify-start">
  {/* Background Image */}
  <img
    src={companyOverview}
    alt="Company Overview"
    className="absolute inset-0 w-full h-full object-cover "
  />

  {/* Text Content */}
  <div className="relative z-20 text-white max-w-3xl px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 ml-0 mr-auto mb-20">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
      Company Overview
    </h1>
    <p className="text-lg sm:text-xl md:text-2xl mt-4">
      Embedded Silicon is a leading development and consulting firm specializing
      in IC design and embedded systems. We collaborate with industry partners
      to deliver seamless integration of component design, embedded systems, and
      firmware development.
    </p>
  </div>
</div>




{/* Key Facts Section */}
<div className="flex flex-col lg:flex-row lg:mx-20 xl:mx-40 3xl:mx-80 justify-between gap-4 py-1 mt-20">
  <p className="text-[#201d1d] text-2xl sm:text-3xl font-bold text-center lg:text-left">
    Key Facts About Embedded Silicon
  </p>
</div>

<div className="flex flex-col sm:flex-row flex-wrap justify-center w-full max-w-6xl mx-auto py-6 sm:py-10 border-b border-gray-200">
  <div className="w-full max-w-6xl flex flex-col sm:flex-row justify-between px-4 gap-6 sm:gap-x-8 lg:gap-x-20">
    {[
      { label: "200+ yrs", description: "of combined experience" },
      { label: "50+", description: "engineers and growing" },
      { label: "Established in 2020", description: "with offices in Alabang and Rizal" },
      { label: "30", description: "Partnerships" }
    ].map((fact, index) => (
      <div key={index} className="text-center min-w-[100px] sm:min-w-[150px]">
        <p className="text-[#1A57C2] text-xl sm:text-2xl md:text-3xl font-bold">{fact.label}</p>
        <p className="text-gray-600 text-xs sm:text-sm">{fact.description}</p>
      </div>
    ))}
  </div>
</div>

{/* Company History & Building Image */}
<div className="flex justify-center items-center w-full py-10 px-4">
  <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row">

    {/* Left: Company History (Displays Below Image on Mobile) */}
    <div className="w-full md:w-1/3 bg-[#121c2e] text-[#ced3dc] p-6 rounded-b-lg md:rounded-l-lg md:rounded-bl-lg md:rounded-br-none">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">Company History</h2>
      <p className="text-lg sm:text-xl text-[#b0b8c4] font-normal mt-4"></p>
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error architecto ad tenetur dignissimos nihil culpa, dolore assumenda nostrum 
        autem veritatis obcaecati dolores quo deserunt nisi aperiam repellendus nam iusto.
      </p>
    </div>

    {/* Right: Company Building Image (Appears First on Mobile) */}
    <div className="w-full md:w-2/3">
      <img
        src={companyBuilding}
        alt="Company Building"
        className="w-full h-64 md:h-full object-cover rounded-t-lg md:rounded-2xl md:rounded-l-lg md:rounded-bl-none"
      />
    </div>

  </div>
</div>



{/* Company Overview Sheet */}
<div className="flex justify-center w-full mt-6 px-4 sm:px-6">
  <div className="w-full max-w-6xl">
    <div className="bg-[#043A65] text-white px-4 sm:px-6 lg:px-12 py-4 sm:py-6 lg:py-8 rounded-lg flex flex-row items-center justify-between gap-2 sm:gap-4">
      <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-left">
        Company Overview Sheet
      </h2>
      <button className="bg-white text-[#0F4C81] px-3 sm:px-5 md:px-7 py-1 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm md:text-lg lg:text-xl hover:bg-gray-200 transition-all">
        View PDF
      </button>
    </div>
  </div>
</div>





{/* Company Values Section */}
<div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16">
  {/* Heading and Intro Text */}
  <div className="mb-8 sm:mb-12 lg:mb-16 max-w-3xl text-center sm:text-left">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
      Company Values
    </h2>
    <p className="text-base sm:text-lg lg:text-xl font-semibold text-blue-700 mt-2">
      Innovate. Build. Transform.
    </p>
    <p className="text-sm sm:text-base lg:text-lg text-gray-700 mt-4 leading-relaxed">
      At Embedded Silicon, we are dedicated to advancing technology and creating a world-class R&D hub in the Philippines. Through innovation, learning, and problem-solving, we develop next-generation embedded solutions that shape the future.
    </p>
  </div>

  {/* Mission, Vision, and Values Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
    {/* Reusable Card Component */}
    {[
      { title: "Mission", text: "To be the preferred technology development partner, fostering world-class research and innovation in IC design and embedded systems. We drive progress through collaboration, continuous learning, and problem-solving.", icon: missionIcon },
      { title: "Vision", text: "To be the preferred technology development partner and solutions provider in the ASEAN region, delivering smart and reliable solutions for the future.", icon: visionIcon },
      { title: "Values", text: "", icon: valuesIcon, values: ["Teamwork – We collaborate to achieve great results.", "Excellence – We strive for high-quality work.", "Service – We focus on delivering real value to our customers."] }
    ].map((item, index) => (
      <div key={index} className="relative bg-gradient-to-r from-[#033F75] to-[#063241] text-white p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg text-center h-auto flex flex-col">
        {/* Icon */}
        <div className="absolute -top-10 sm:-top-12 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center">
          <img src={item.icon} alt={`${item.title} Icon`} className="w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14" />
        </div>

        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-center mt-14 sm:mt-16 lg:mt-20 px-4">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold uppercase">
            {item.title}
          </h3>
          {item.text ? (
            <p className="text-xs sm:text-sm lg:text-base mt-4 leading-relaxed">
              {item.text}
            </p>
          ) : (
            <div className="mt-4 space-y-2 text-left">
              {item.values?.map((value, idx) => (
                <p key={idx} className="text-xs sm:text-sm lg:text-base">
                  <span className="font-bold">{value.split(" – ")[0]}</span> – {value.split(" – ")[1]}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
</div>




{/* Our Clients */}
<div className="flex flex-col items-center mt-6 sm:mt-8 md:mt-12 px-4">
  {/* Heading */}
  <div className="text-[#040404] text-xl sm:text-2xl md:text-4xl flex flex-col items-center gap-1 sm:gap-2 font-semibold text-center">
    Our Clients 
    <span className="text-sm sm:text-base md:text-xl text-[#647185] font-normal">
      Some of the businesses and startups we have worked with
    </span>
  </div>

  {/* Responsive Clients Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 grid-auto-rows items-center justify-items-center mt-6 sm:mt-8 md:mt-10 gap-3 sm:gap-5 md:gap-6 w-full max-w-6xl">
    {[bosch, innovation, credit, ebay, total, inditex, siemens, bosch, ebay, total].map((logo, index) => (
      <div key={index} className="flex justify-center items-center p-2 sm:p-3 md:p-5">
        <img src={logo} alt={`Client ${index + 1}`} className="w-14 sm:w-18 md:w-24 h-auto" />
      </div>
    ))}
  </div>
</div>




<div className="flex flex-col items-center mt-6 sm:mt-8 md:mt-12 px-4">
  {/* Heading */}
  <div className="text-[#040404] text-xl sm:text-2xl md:text-4xl flex flex-col items-center gap-1 sm:gap-2 font-semibold text-center">
    Industry Recognition
  </div>

  {/* 🔹 Icons Grid Display with Line Separators */}
  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 grid-rows-2 items-center mt-6 sm:mt-10 w-full max-w-5xl">
    
    {/* 🔹 Row 1 */}
    <div className="flex justify-center p-4 sm:p-6 border-b border-gray-300 border-r">
      <img src={innovation} alt="Bosch Award" className="w-14 sm:w-16 lg:w-20 h-14 sm:h-16 lg:h-20 filter grayscale" />
    </div>

    <div className="flex justify-center p-4 sm:p-6 border-b border-gray-300 border-r">
      <img src={innovation} alt="Innovation Award" className="w-14 sm:w-16 lg:w-20 h-14 sm:h-16 lg:h-20 filter grayscale" />
    </div>

    <div className="flex justify-center p-4 sm:p-6 border-b border-gray-300 border-r">
      <img src={credit} alt="Credit Award" className="w-14 sm:w-16 lg:w-20 h-14 sm:h-16 lg:h-20 filter grayscale" />
    </div>

    <div className="flex justify-center p-4 sm:p-6 border-b border-gray-300">
      <img src={total} alt="Total Award" className="w-14 sm:w-16 lg:w-20 h-14 sm:h-16 lg:h-20 filter grayscale xs:border-b" />
    </div>

    {/* 🔹 Row 2 */}
    <div className="flex justify-center p-4 sm:p-6 xl:border-r  border-gray-300 xs:border-b">
      <img src={siemens} alt="Siemens Award" className="w-14 sm:w-16 lg:w-20 h-14 sm:h-16 lg:h-20 filter grayscale" />
    </div>

    <div className="flex justify-center p-4 sm:p-6 border-r border-gray-300">
      <img src={siemens} alt="Siemens Award" className="w-14 sm:w-16 lg:w-20 h-14 sm:h-16 lg:h-20 filter grayscale" />
    </div>

    <div className="flex justify-center p-4 sm:p-6 border-r border-gray-300">
      <img src={siemens} alt="Siemens Award" className="w-14 sm:w-16 lg:w-20 h-14 sm:h-16 lg:h-20 filter grayscale" />
    </div>

    <div className="flex justify-center p-4 sm:p-6">
      <img src={siemens} alt="Siemens Award" className="w-14 sm:w-16 lg:w-20 h-14 sm:h-16 lg:h-20 filter grayscale" />
    </div>
    
  </div>
</div>


{/* Leadership Section */}
<div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
    Our Experienced Management Team
  </h2>

  <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-center">
    
    {/* First Leader */}
    <div className="text-center flex-1">
      <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto bg-white border-4 border-blue-500 rounded-full flex items-center justify-center shadow-lg">
        <img src="/your-svg-file.svg" alt="Profile Icon" className="w-20 sm:w-24 h-20 sm:h-24" />
      </div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-4 sm:mt-6">Mr. Robert O. Minguez II</h3>
      <p className="text-blue-600 font-semibold text-sm sm:text-base">CEO & President</p>
      <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-2 sm:mt-4 px-4 md:px-6">
        An accomplished entrepreneur and former IC Design Engineer at Intel Technology Philippines Inc., 
        brings extensive experience in IC Design services, microelectronics training, and technology development. 
      </p>
    </div>

    {/* Second Leader */}
    <div className="text-center flex-1">
      <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto bg-white border-4 border-blue-500 rounded-full flex items-center justify-center shadow-lg">
        <img src="/your-svg-file.svg" alt="Profile Icon" className="w-20 sm:w-24 h-20 sm:h-24" />
      </div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-4 sm:mt-6">Mr. Fred Chua</h3>
      <p className="text-blue-600 font-semibold text-sm sm:text-base">Director</p>
      <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-2 sm:mt-4 px-4 md:px-6">
        A distinguished Electronics and Communication Engineering graduate from the University of the Philippines, 
        is a seasoned serial entrepreneur. As the founder and CEO of Magellan Solutions Outsourcing, Inc.
      </p>
    </div>

  </div>
</div>


{/* Map */}













    </>
  );
}

export default AboutPage;





