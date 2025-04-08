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
import pin from "../../../assets/images/pin.svg";
// import { LuArrowRight } from "react-icons/lu";

// map
import "svgmap/dist/svgMap.css";
import svgMap from "svgmap";

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
// Maps section
useEffect(() => {
  // Remove existing map if it exists to prevent duplicates
  const existingMapContainer = document.getElementById("svgMapContainer");
  if (existingMapContainer) {
    existingMapContainer.innerHTML = ""; // Clear any existing map
  }

  const map = new svgMap({
    targetElementID: "svgMapContainer",
    colorNoData: "#BFB9B9", // Lighter gray that won't show tooltip
    colorMax: "#2d7bfd",
    showZoomReset: true,
    mouseWheelZoomEnabled: false,
    initialZoom: 0.9,
    initialPan: { x: 80, y: 0 },
    noDataText: "", // Remove "no data available" text
    data: {
      data: {
        activities: { format: "{0}" },
      },
      applyData: "activities",
      values: {
        PH: { activities: "Multiple ongoing activities + growing partnerships", name: "Philippines", color: "#4caf50" },
        IN: { activities: "Potential partnerships", name: "India", color: "#7eaefc" },
        SG: { activities: "Ongoing activities", name: "Singapore", color: "#2d7bfd" },
        JP: { activities: "Ongoing activities", name: "Japan", color: "#2d7bfd" },
        US: { activities: "Ongoing activities + potential partnerships", name: "United States", color: "#2d7bfd" },
        MY: { activities: "Multiple ongoing activities", name: "Malaysia", color: "#4caf50" },
        CA: { activities: "Potential partnerships", name: "Canada", color: "#7eaefc" },
      },
    },
  });

  // Add contact information container below the map
  const mapContainer = document.getElementById("svgMapContainer");
  const contactContainer = document.createElement("div");
  contactContainer.className = "contact-info-container";
  contactContainer.style.cssText = `
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background: transparent;
  `;

  // Add contact information
  const contactInfo = `
    <div style="display: flex; align-items: center; width: 100%; background-color: #ECECEC;">
      <div style="display: flex; align-items: center; justify-content: center; width: 100%; color: #666; font-size: 14px; padding: 4px 0;">
        <div style="display: flex; align-items: center; justify-content: space-between; width: 90%; max-width: 1200px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <svg style="width: 16px; height: 16px; color: #2d7bfd;" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L12.53 12.67C12.21 12.87 11.79 12.87 11.47 12.67L4.4 8.25C4.15 8.09 4 7.82 4 7.53C4 6.86 4.73 6.46 5.3 6.81L12 11L18.7 6.81C19.27 6.46 20 6.86 20 7.53C20 7.82 19.85 8.09 19.6 8.25Z"/>
            </svg>
            <span style="font-weight: 600;">Email:</span>
            <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=info@esilicontech.com" 
               target="_blank" 
               style="color: #2d7bfd; text-decoration: none;">info@esilicontech.com</a>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <svg style="width: 16px; height: 16px; color: #2d7bfd;" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 15.5C18.8 15.5 17.5 15.3 16.4 14.9C16.3 14.9 16.2 14.9 16.1 14.9C15.8 14.9 15.6 15 15.4 15.2L13.2 17.4C10.4 15.9 8 13.6 6.6 10.8L8.8 8.6C9.1 8.3 9.2 7.9 9 7.6C8.7 6.5 8.5 5.2 8.5 4C8.5 3.5 8 3 7.5 3H4C3.5 3 3 3.5 3 4C3 13.4 10.6 21 20 21C20.5 21 21 20.5 21 20V16.5C21 16 20.5 15.5 20 15.5Z"/>
            </svg>
            <span style="font-weight: 600;">Contact:</span>
            <span style="color: #2d7bfd; cursor: pointer; position: relative;" 
                  onclick="navigator.clipboard.writeText('+63 (02) 8660-4748'); this.setAttribute('data-tooltip', 'Number copied!');"
                  onmouseover="this.setAttribute('data-tooltip', 'Click to copy number');"
                  onmouseout="this.setAttribute('data-tooltip', '');"
                  data-tooltip="">
              +63 (02) 8660-4748
            </span>
            <span>|</span>
            <span style="color: #2d7bfd; cursor: pointer; position: relative;" 
                  onclick="navigator.clipboard.writeText('+63 920-9110801'); this.setAttribute('data-tooltip', 'Number copied!');"
                  onmouseover="this.setAttribute('data-tooltip', 'Click to copy number');"
                  onmouseout="this.setAttribute('data-tooltip', '');"
                  data-tooltip="">
              +63 920-9110801
            </span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <svg style="width: 16px; height: 16px; color: #2d7bfd;" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span style="font-weight: 600;">Offices:</span>
            <a href="https://www.google.com/maps/place/Richville+Corporate+Tower/@14.426674,121.0253703,937m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3397d1ce490a4ac3:0xc8e733a24739e87!8m2!3d14.426674!4d121.0253703!16s%2Fg%2F11gxw2h7cz?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D" 
               target="_blank" 
               style="color: #2d7bfd; text-decoration: none; position: relative;"
               onmouseover="this.setAttribute('data-tooltip', 'Click to view location');"
               onmouseout="this.setAttribute('data-tooltip', '');"
               data-tooltip="">
              Ayala Alabang, Muntinlupa City 1780 PH
            </a>
            <span>|</span>
            <a href="https://www.google.com/maps/place/Golden+City+Subdivision/@14.566938,121.1413669,59m/data=!3m1!1e3!4m6!3m5!1s0x3397c76cb086a2bb:0x4439d42bb32bb041!8m2!3d14.5670274!4d121.1414972!16s%2Fg%2F11g9qf6l9z?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D" 
               target="_blank" 
               style="color: #2d7bfd; text-decoration: none; position: relative;"
               onmouseover="this.setAttribute('data-tooltip', 'Click to view location');"
               onmouseout="this.setAttribute('data-tooltip', '');"
               data-tooltip="">
              Taytay, Province of Rizal 1920 PH
            </a>
          </div>
        </div>
      </div>
    </div>
    <style>
      [data-tooltip]:before {
        content: attr(data-tooltip);
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        padding: 4px 8px;
        background: rgba(0,0,0,0.8);
        color: white;
        font-size: 12px;
        white-space: nowrap;
        border-radius: 4px;
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.2s;
        z-index: 1000;
      }
      [data-tooltip]:hover:before {
        visibility: visible;
        opacity: 1;
      }
      [data-tooltip][data-tooltip=""]:before {
        display: none;
      }
    </style>
  `;

  contactContainer.innerHTML = contactInfo;
  mapContainer.appendChild(contactContainer);

  // Tooltip event handlers
  const tooltip = document.getElementById("tooltip");

  const countryHover = (event) => {
    const country = event.target?.getAttribute("data-code");
    const countryData = map.data.values[country];

    if (countryData?.activities) {
      tooltip.innerHTML = `
        <div class="tooltip-content">
          <h3>${countryData.name}</h3>
          <p>${countryData.activities}</p>
        </div>
      `;
      tooltip.style.display = "block";
      tooltip.style.left = event.pageX + 10 + "px";
      tooltip.style.top = event.pageY - 30 + "px";
      event.target.style.fill = countryData.color;
      event.target.style.stroke = "#ffffff";
      event.target.style.strokeWidth = "1px";
      event.target.style.transition = "all 0.3s ease";
    }
  };

  const countryLeave = (event) => {
    tooltip.style.display = "none";
    event.target.style.fill = "";
    event.target.style.stroke = "";
    event.target.style.strokeWidth = "";
  };

  // Add event listeners
  const countries = document.querySelectorAll(".svgMap-country");
  countries.forEach((country) => {
    country.addEventListener("mouseenter", countryHover);
    country.addEventListener("mouseleave", countryLeave);
    country.style.transition = "all 0.3s ease";
  });

  // Enable zoom only when map is clicked
  let isMapActive = false;

  if (mapContainer) {
    mapContainer.addEventListener('click', () => {
      if (!isMapActive) {
        isMapActive = true;
        map.options.mouseWheelZoomEnabled = true;
      }
    });

    document.addEventListener('click', (event) => {
      if (!mapContainer.contains(event.target)) {
        isMapActive = false;
        map.options.mouseWheelZoomEnabled = false;
      }
    });
  }

  return () => {
    if (mapContainer) {
      mapContainer.removeEventListener('click', () => {});
      document.removeEventListener('click', () => {});
    }
    countries.forEach((country) => {
      country.removeEventListener("mouseenter", countryHover);
      country.removeEventListener("mouseleave", countryLeave);
    });
  };
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
      <div className={`max-w-2xl transform transition-all duration-1000 ${
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
<div className="w-full max-w-screen-xl mx-auto py-12">
  <div>
    <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-4">
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
<div className="w-full max-w-screen-xl mx-auto py-4">
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


{/* Company Overview Sheet */}
<div className="w-full max-w-screen-xl mx-auto py-5">
  <div className="w-full">
    <div className="bg-[#043A65] text-white px-4 py-4 sm:py-6 lg:py-8 rounded-lg flex flex-row items-center justify-between gap-2 sm:gap-4">
      <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-left pl-4 pr-4 sm:pl-6 sm:pr-6 md:pl-8 md:pr-8">
        Company Overview Sheet
      </h2>
      <a 
        href={aboutUsPdf} 
        download="Company_Overview.pdf"
        className="bg-white text-[#0F4C81] px-3 sm:px-5 md:px-7 py-1 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm md:text-lg lg:text-xl hover:bg-gray-200 transition-all cursor-pointer pl-4 pr-4 sm:pl-6 sm:pr-6 md:pl-8 md:pr-8 ml-auto"
      >
        View PDF
      </a>
    </div>
  </div>
</div>







{/* Company Values Section */}
<div className="w-full max-w-screen-xl mx-auto px-0 sm:px-6 py-6 sm:py-8">
  {/* Heading and Intro Text */}
  <div className="max-w-screen-xl mx-auto 2xl:p-0 p-6 font-inter relative z-10">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
      Company Values
    </h2>
    <p className="text-base sm:text-lg font-semibold text-blue-700 mt-2">
      Innovate. Build. Transform.
    </p>
    <p className="text-sm sm:text-base text-gray-700 mt-3 leading-relaxed px-0">
      At Embedded Silicon, we are dedicated to advancing technology and
      creating a world-class R&D hub in the Philippines.
      <br />
      Through innovation, learning, and problem-solving, we develop next-generation embedded
      solutions that shape the future.
    </p>
  </div>


  {/* Mission, Vision, and Values Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mt-12 px-4 sm:px-6">
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
<div className="flex flex-col items-center mt-6 sm:mt-8 md:mt-12 px-4 py-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200">
  <div className="ml-10 text-[#040404] text-xl sm:text-2xl md:text-4xl flex flex-col items-center gap-1 sm:gap-2 font-semibold text-center slide-in">
    Our Clients 
    <span className="text-sm sm:text-base md:text-xl text-[#647185] font-normal">
      Some of the businesses and startups we have worked with
    </span>
  </div>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center justify-items-center mt-4 sm:mt-6 md:mt-8 gap-2 sm:gap-3 md:gap-4 w-full max-w-6xl py-2">
    {[bosch, innovation, credit, ebay, total, inditex, siemens, bosch, ebay, total].map((logo, index) => (
      <div key={index} className="flex justify-center items-center p-1 sm:p-1.5 md:p-2">
        <img src={logo} alt={`Client ${index + 1}`} className="w-24 sm:w-28 md:w-36 h-24 sm:h-28 md:h-36 transition-transform duration-300 hover:scale-105 hover:rotate-2 hover:shadow-lg image-effect" />
      </div>
    ))}
  </div>

  <div className="text-[#040404] text-xl sm:text-2xl md:text-4xl flex flex-col items-center gap-1 sm:gap-2 font-semibold text-center slide-in mt-6">
    Industry Recognition
  </div>

  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 items-center mt-4 sm:mt-6 w-full max-w-5xl">
    {[bosch, innovation, credit, total, siemens, siemens, siemens, siemens].map((logo, index) => (
      <div key={index} className="flex justify-center p-2 sm:p-3 border-b border-gray-300 border border-blue-800 bg-blue-50">
        <img src={logo} alt={`Award ${index + 1}`} className="w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 filter grayscale hover:filter-none hover:scale-105 transition-transform duration-300 image-effect" />
      </div>
    ))}
  </div>
</div>

{/* Global Activity Footprint Section */}
<div className="w-full bg-[#ECECEC] py-12">
  <div className='max-w-screen-xl mx-auto 2xl:p-0 p-6 font-inter relative z-10'>
    <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
      <h2 className="text-[#201d1d] text-2xl sm:text-3xl font-bold text-center lg:text-left">
        Global Activity Footprint
      </h2>
    </div>
    <p className="text-[#555] text-base sm:text-lg text-center lg:text-left mb-0">
      We collaborate with industry leaders, forming partnerships with top semiconductor and electronics corporations worldwide.
    </p>
  </div>
</div>

{/* Map Section */}
<div className="relative w-full">
  {/* Partner Countries List */}
  <div className="w-full bg-[#ECECEC]">
    <div className="flex flex-wrap justify-center items-center gap-6 py-2">
      {/* Country Flags */}
      {[
        { src: "us", name: "United States" },
        { src: "ca", name: "Canada" },
        { src: "in", name: "India" },
        { src: "jp", name: "Japan" },
        { src: "my", name: "Malaysia" },
        { src: "id", name: "Indonesia" },
        { src: "ph", name: "Philippines" },
      ].map((country, index) => (
        <div key={index} className="flex items-center gap-2">
          <img 
            src={`https://flagcdn.com/w40/${country.src}.png`} 
            width="32" 
            height="24" 
            alt={country.name} 
            className="border border-gray-100"
          />
          <span className="text-sm font-medium">{country.name}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Map Container */}
  <div className="relative w-full  "> {/* Adjusted map height */}
    <div id="svgMapContainer" className="bottom-0"></div>

    {/* "Our Offices" Title */}
    <div className="absolute top-1 left-40 text-[#201d1d] text-xl sm:text-2xl p-6 font-bold z-20">
      Our Offices
    </div>

    {/* Legend Box */}
    <div className="absolute top-4 right-4 bg-white/90 p-4 rounded-lg shadow-md z-20">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#4caf50" }}></span>
          <span className="text-sm">Multiple ongoing activities + growing partnerships</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#2d7bfd" }}></span>
          <span className="text-sm">Ongoing activities</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#7eaefc" }}></span>
          <span className="text-sm">Potential partnerships</span>
        </div>
      </div>
    </div>

    {/* Tooltip */}
    <div id="tooltip" className="fixed hidden bg-white/95 p-3 rounded-lg shadow-lg border border-gray-200 max-w-[250px] z-50">
      <style jsx>{`
        .tooltip-content {
          font-size: 0.875rem;
        }
        .tooltip-content h3 {
          font-weight: 600;
          color: #1a57c2;
          margin-bottom: 4px;
        }
        .tooltip-content p {
          color: #4a5568;
          margin: 0;
          font-size: 0.8rem;
        }
      `}</style>
    </div>
  </div>
</div>

{/* Leadership Section - Placed Below Map */}
<div className="bg-white">
  <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 p-6">
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
      <div className="text-center flex-1 transition-transform duration-300 hover:scale-105 hover:bg-gray-100">
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
</div>







    </>
  );
}

export default AboutPage;


