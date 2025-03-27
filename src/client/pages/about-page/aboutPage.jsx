import {React, useState, useEffect} from "react";
import companyOverview from "../../../assets/images/companyOverview.svg";
import companyBuilding from "../../../assets/images/companyBuilding.svg";
import missionIcon from "../../../assets/images/missionIcon.svg";
import visionIcon from "../../../assets/images/visionIcon.svg";
import valuesIcon from "../../../assets/images/valuesIcon.svg";
import Navbar from '../../navbar-footer/navbar'
import bosch from "../../../assets/images/bosch.png"
import innovation from "../../../assets/images/innovation.png"
import credit from "../../../assets/images/credit.png"
import ebay from "../../../assets/images/ebay.png"
import total from "../../../assets/images/total.png"
import inditex from "../../../assets/images/inditex.png"
import siemens from "../../../assets/images/siemens.png"
import aboutUsPdf from "../../../assets/files/aboutuspager.pdf";

// import { LuArrowRight } from "react-icons/lu";

// map
import svgMap from "svgmap";
// import "svgmap/dist/svgMap.css"; // Import styles

import { GoArrowRight } from "react-icons/go";

function AboutPage() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    content: false
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Trigger hero section animation
    setIsVisible(prev => ({ ...prev, hero: true }));
    
    // Trigger content animation after a delay
    const contentTimer = setTimeout(() => {
      setIsVisible(prev => ({ ...prev, content: true }));
    }, 500);

    return () => clearTimeout(contentTimer);
  }, []);

  return (
    <>
{/* Company Overview Section */}
<div className="relative w-full min-h-[600px] bg-[#000924]">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0 w-full h-full">
    <img
      src={companyOverview}
      alt="Company Overview"
      className={`w-full h-full object-cover object-center transition-all duration-1000 ${
        isVisible.hero ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
      }`}
      style={{ objectPosition: '50% 50%' }}
    />
    <div className={`absolute inset-0 bg-gradient-to-r from-[#000924]/80 to-transparent transition-opacity duration-1000 ${
      isVisible.hero ? 'opacity-100' : 'opacity-0'
    }`}></div>
  </div>

  {/* Content Container */}
  <div className="relative h-full max-w-screen-xl mx-auto">
    <div className="flex items-center h-full py-32">
      <div className={`max-w-2xl px-8 sm:px-12 lg:px-16 transform transition-all duration-1000 ${
        isVisible.content ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
      }`}>
        <h1 className="whitespace-nowrap text-4xl sm:text-5xl lg:text-6xl text-white font-bold mb-8" style={{ width: 'fit-content' }}>Company Overview</h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed">
          Embedded Silicon is a leading development and consulting firm specializing
          in IC design and embedded systems. We collaborate with industry partners
          to deliver seamless integration of component design, embedded systems, and
          firmware development.
        </p>
      </div>
    </div>
  </div>
</div>

{/* Key Facts Section */}
<div className="w-full max-w-screen-xl mx-auto py-16">
  <div className="px-8 sm:px-12 lg:px-16">
    <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-8">
      <h2 className="text-[#201d1d] text-2xl sm:text-3xl font-bold text-center lg:text-left">
        Key Facts About Embedded Silicon
      </h2>
    </div>

    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 border-b border-gray-200 pb-8">
      {[
        { label: "200+ yrs", description: "of combined experience" },
        { label: "50+", description: "engineers and growing" },
        { label: "Established in 2020", description: "with offices in Alabang and Rizal" },
        { label: "30", description: "Partnerships" }
      ].map((fact, index) => (
        <div key={index} className="flex-1 min-w-[180px] text-center flex flex-col items-center justify-center">
          <p className="text-[#1A57C2] text-xl sm:text-2xl md:text-3xl font-bold mb-1">{fact.label}</p>
          <p className="text-gray-600 text-xs sm:text-sm">{fact.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>

{/* Company History & Building Image */}
<div className="w-full max-w-screen-xl mx-auto py-8">
  <div className="px-8 sm:px-12 lg:px-16">
    <div className="w-full flex flex-col-reverse md:flex-row">
      <div className="w-full md:w-1/3 bg-[#121c2e] text-[#ced3dc] p-8 rounded-b-lg md:rounded-l-lg md:rounded-bl-lg md:rounded-br-none">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Company History</h2>
        <p className="text-sm text-gray-300 mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          In deleniti repellat eum harum quas ducimus aliquam tempore 
          vel ad earum dolore consequatur labore eligendi dolores, 
          molestias suscipit atque, dicta enim.
        </p>
        <p className="text-sm text-gray-300 mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          In deleniti repellat eum harum quas ducimus aliquam tempore 
          vel ad earum dolore consequatur labore eligendi dolores, 
          molestias suscipit atque, dicta enim.
        </p>
        <p className="text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error architecto ad tenetur dignissimos nihil culpa.
        </p>
      </div>

      {/* Right: Company Building Image */}
      <div className="w-full md:w-2/3">
        <img
          src={companyBuilding}
          alt="Company Building"
          className="w-full h-64 md:h-full object-cover rounded-t-lg md:rounded-r-lg md:rounded-bl-none"
        />
      </div>
    </div>
  </div>
</div>

{/* Company Overview Sheet */}
<div className="flex justify-center w-full py-5 px-4 sm:px-6">
  <div className="w-full max-w-6xl">
    <div className="bg-[#043A65] text-white px-4 sm:px-6 lg:px-12 py-4 sm:py-6 lg:py-8 rounded-lg flex flex-row items-center justify-between gap-2 sm:gap-4">
      <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-left">
        Company Overview Sheet
      </h2>
      <a 
        href={aboutUsPdf} 
        download="Company_Overview.pdf"
        className="bg-white text-[#0F4C81] px-3 sm:px-5 md:px-7 py-1 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm md:text-lg lg:text-xl hover:bg-gray-200 transition-all cursor-pointer"
      >
        View PDF
      </a>
    </div>
  </div>
</div>


{/* Company Values Section */}
<div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
  {/* Heading and Intro Text */}
  <div className="mb-6 sm:mb-8 max-w-3xl text-center sm:text-left">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
      Company Values
    </h2>
    <p className="text-base sm:text-lg font-semibold text-blue-700 mt-2">
      Innovate. Build. Transform.
    </p>
    <p className="text-sm sm:text-base text-gray-700 mt-3 leading-relaxed">
      At Embedded Silicon, we are dedicated to advancing technology and
      creating a world-class R&D hub in the Philippines. Through innovation,
      learning, and problem-solving, we develop next-generation embedded
      solutions that shape the future.
    </p>
  </div>

  {/* Mission, Vision, and Values Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mt-12">
    {[
      {
        title: "Mission",
        text: "To be the preferred technology development partner, fostering world-class research and innovation in IC design and embedded systems. We drive progress through collaboration, continuous learning, and problem-solving.",
        icon: missionIcon,
      },
      {
        title: "Vision",
        text: "To be the preferred technology development partner and solutions provider in the ASEAN region, delivering smart and reliable solutions for the future.",
        icon: visionIcon,
      },
      {
        title: "Values",
        icon: valuesIcon,
        values: [
          "Teamwork – We collaborate to achieve great results.",
          "Excellence – We strive for high-quality work.",
          "Service – We focus on delivering real value to our customers.",
        ],
      },
    ].map((item, index) => (
      <div
        key={index}
        className="relative bg-gradient-to-r from-[#033F75] to-[#063241] text-white p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg flex flex-col h-full"
      >
        {/* Icon */}
        <div className="absolute -top-10 sm:-top-12 left-1/2 transform -translate-x-1/2 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center">
          <img
            src={item.icon}
            alt={`${item.title} Icon`}
            className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col flex-grow justify-start mt-8 sm:mt-12 lg:mt-16 px-4 text-left">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold uppercase text-center">
            {item.title}
          </h3>

          <div className="flex-grow flex flex-col justify-start">
            {item.text ? (
              <p className="text-xs sm:text-sm lg:text-base mt-4 leading-relaxed">
                {item.text}
              </p>
            ) : (
              <div className="mt-4 space-y-2">
                {item.values?.map((value, idx) => (
                  <p
                    key={idx}
                    className="text-xs sm:text-sm lg:text-base leading-relaxed"
                  >
                    <span className="font-bold">{value.split(" – ")[0]}</span> –{" "}
                    {value.split(" – ")[1]}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

{/* Our Clients */}
<div className="flex flex-col items-center mt-6 sm:mt-8 md:mt-12 px-4 py-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200">
  <div className="text-[#040404] text-xl sm:text-2xl md:text-4xl flex flex-col items-center gap-1 sm:gap-2 font-semibold text-center slide-in">
    Our Clients 
    <span className="text-sm sm:text-base md:text-xl text-[#647185] font-normal">
      Some of the businesses and startups we have worked with
    </span>
  </div>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 grid-auto-rows items-center justify-items-center mt-6 sm:mt-8 md:mt-10 gap-3 sm:gap-5 md:gap-6 w-full max-w-6xl py-4">
    {[bosch, innovation, credit, ebay, total, inditex, siemens, bosch, ebay, total].map((logo, index) => (
      <div key={index} className="flex justify-center items-center p-1 sm:p-2 md:p-3">
        <img src={logo} alt={`Client ${index + 1}`} className="w-20 sm:w-24 md:w-32 h-auto transition-transform duration-300 hover:scale-105 hover:rotate-2 hover:shadow-lg image-effect" />
      </div>
    ))}
  </div>

  <div className="text-[#040404] text-xl sm:text-2xl md:text-4xl flex flex-col items-center gap-1 sm:gap-2 font-semibold text-center slide-in mt-12">
    Industry Recognition
  </div>

  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 items-center mt-6 sm:mt-10 w-full max-w-5xl">
    {[bosch, innovation, credit, total, siemens, siemens, siemens, siemens].map((logo, index) => (
      <div key={index} className="flex justify-center p-4 sm:p-6 border-b border-gray-300 border border-blue-800 bg-blue-50">
        <img src={logo} alt={`Award ${index + 1}`} className="w-20 sm:w-24 lg:w-28 h-20 sm:h-24 lg:h-28 filter grayscale hover:filter-none hover:scale-105 transition-transform duration-300 image-effect" />
      </div>
    ))}
  </div>
</div>

{/* Leadership Section */}
<div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12">
  <h2 className="text-[#040404] text-xl sm:text-2xl md:text-4xl font-semibold text-center mb-8 sm:mb-12">
    Our Experienced Management Team
  </h2>

  <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-center">
    {/* First Leader */}
    <div className="text-center flex-1 transition-transform duration-300 hover:scale-105 hover:bg-gray-100">
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
    <div className="text-center flex-1 transition-transform duration-300 hover:scale-105 hover:bg-gray-100 slide-in">
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






