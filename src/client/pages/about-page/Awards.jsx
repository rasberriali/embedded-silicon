import React, { useState } from "react";

// Import background images
import awardsSetting1 from "../../../assets/images/awardsSetting1.svg";
import awardsSetting2 from "../../../assets/images/awardsSetting2.svg";

// Import award images
import total from "../../../assets/images/total.png";
import inditex from "../../../assets/images/inditex.png";
import siemens from "../../../assets/images/siemens.png";

// Award Data
const awardsData_tab = [
  { image: total, text: "Microsoft is recognized for its contributions to the tech industry." },
  { image: inditex, text: "EDA Playground provides tools for semiconductor design and verification." },
  { image: siemens, text: "ISO certification ensures quality standards in industry practices." },
];

const industryRecognitionData_tab = [
  { image: siemens, text: "N-iX Achieves AWS Advanced Tier Services Partner Status." },
  { image: inditex, text: "N-iX is a Microsoft Solutions Partner." },
  { image: siemens, text: "ISG recognizes N-iX for excellence in public cloud services." },
  { image: total, text: "Google Cloud recognized for AI innovations." },
];

function Awards() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("awards");

  return (
    <>
      {/* First Part */}
      <div
        className="w-full py-20 text-left relative overflow-hidden flex flex-col items-center"
        style={{
          background: "radial-gradient(ellipse at top right, #093252 15%, #093252 40%, #155386 59%, #113E61 76%, #113E61 100%)",
        }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <img
            src={awardsSetting1}
            alt="awardsSetting1"
            className="absolute top-10 left-0 opacity-50 w-60 h-50"
          />
          <img
            src={awardsSetting2}
            alt="awardsSetting2"
            className="absolute bottom-2 right-0 opacity-50 w-195 h-115"
          />
        </div>

        {/* Awards Title & Description */}
        <div className="relative z-10 max-w-4xl px-10 py-20">
          <h2 className="text-white text-3xl font-bold mb-4">
            Awards & Industry Recognition
          </h2>
          <p className="text-gray-300 text-lg">
            The recognition of Embedded Silicon by industry leaders validates our
            commitment to innovation and the high quality of technological
            expertise.
          </p>
        </div>
      </div>

      {/* Most Awarded Section */}
      <div
        className="w-full py-10 flex flex-col justify-center items-center"
        style={{
          background: "linear-gradient(to right, #142F2E 5%, #122C2B 16%, #0C2121 31%, #0D2423 74%, #142F2E 91%)",
        }}
      >
        <div className="max-w-6xl w-full relative">
          {/* Award Logos Carousel */}
          <div className="flex justify-center space-x-8 overflow-hidden">
            {/* Award Icons with Tooltips */}
            {[
              { src: total, alt: "Microsoft" },
              { src: siemens, alt: "EDA Playground" },
              { src: total, alt: "ISO Certification" },
              { src: total, alt: "EDA Playground" },
              { src: siemens, alt: "Microsoft" },
              { src: siemens, alt: "EDA Playground" },
              { src: total, alt: "ISO Certification" },
            ].map((award, index) => (
              <div key={index} className="most-awarded-container">
                <img src={award.src} alt={award.alt} className="w-16 h-16 most-awarded-icon" />
                <div className="most-awarded-tooltip">{award.alt}</div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows Below */}
          <div className="flex justify-center mt-4 space-x-4">
            <button className="bg-gray-800 text-white p-2 rounded-full shadow-lg">‹</button>
            <button className="bg-gray-800 text-white p-2 rounded-full shadow-lg">›</button>
          </div>
        </div>
      </div>

      {/* Award and Industry Tab */}
      <div className="flex justify-center mt-8">
        <button
          className={`tab-button ${activeTab === "awards" ? "active-tab" : ""}`}
          onClick={() => setActiveTab("awards")}
        >
          Awards
        </button>
        <button
          className={`tab-button ${activeTab === "industry" ? "active-tab" : ""}`}
          onClick={() => setActiveTab("industry")}
        >
          Industry Recognition
        </button>
      </div>

{/* Dynamic Content Section */}
<div className="w-full bg-white py-10 fade-in">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
    {(activeTab === "awards" ? awardsData_tab : industryRecognitionData_tab).map((item, index) => (
      <div 
        key={index} 
        className={`bg-gray-100 p-6 shadow-md rounded-lg text-center 
          ${activeTab === "awards" ? "w-80 h-64" : "w- h-52"}`}
      >
        <img src={item.image} alt="Award Icon" className="mx-auto mb-4 w-24" />
        <p className="text-sm font-semibold">{item.text}</p>
      </div>
    ))}
  </div>
</div>



    </>
  );
}

export default Awards;
