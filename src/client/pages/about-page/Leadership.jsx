import React from "react";
import collaborateleadership from "../../../assets/images/collaborateleadership.svg";

import innovation from "../../../assets/images/innovation.png"
import credit from "../../../assets/images/credit.png"
import ebay from "../../../assets/images/ebay.png"
import total from "../../../assets/images/total.png"
import inditex from "../../../assets/images/inditex.png"
import siemens from "../../../assets/images/siemens.png"
import spongebobbb from "../../../assets/images/spongebobbb.jpg"
function Leadership() {
  return (
    <div className="w-full font-inter relative">
      {/* Leadership Section */}
      <div className="relative flex flex-col xl:flex-row md:flex-row gap-4 items-center">
        
      <div className="absolute inset-0 bg-[linear-gradient(200deg,#162447_2%,#162447_31%,#113E61_50%,#080F14_80%,#1B394A_100%)] opacity-90 z-0"></div>


        {/* Left Side - Text Content */}
        <div className="relative flex xl:w-1/2 w-full flex-col xl:gap-6 gap-4 justify-start items-start z-10 p-10 lg:p-20 xl:p-28 2xl:p-32">
          <h2 className="2xl:text-5xl text-3xl md:text-4xl xl:text-4xl font-bold text-white">
            Embedded Silicon <br /> Leadership Team
          </h2>
          <p className="text-[#D1D5DB] text-[14px] xl:text-[18px]">
            Achieving your goals is much easier with a strong team by your side. 
            It is made up of savvy entrepreneurs, industry experts, and 
            technology enthusiasts who work together towards a common vision.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="relative xl:w-1/2 w-full flex justify-center z-10">
          <img src={collaborateleadership} alt="Leadership Team" className="w-full object-cover" />
        </div>
      </div>
{/* Our People Section */}
<div className="w-full bg-bg-white flex justify-center py-16">
  <div className="relative w-[80%] max-w-screen-lg bg-white p-8 xl:p-10 shadow-sm ">
    
    {/* Top and Side Borders */}
    <div className="absolute top-0 left-0 w-[50px] h-[1px] bg-[#2E7CFD]"></div>
    <div className="absolute top-0 right-0 w-[calc(100%-120px)] h-[1px] bg-[#2E7CFD]"></div>
    <div className="absolute left-0 top-0 h-full w-[3px] bg-[#2E7CFD]"></div>
    <div className="absolute right-0 top-0 h-full w-[1px] bg-[#2E7CFD]"></div>
    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#2E7CFD]"></div>




    {/* Heading - Our People (Fixed Background to White) */}
    <div className="absolute -top-4 left-10 flex items-center px-4 py-1 bg-white whitespace-nowrap">
   
      <h2 className="text-xl xl:text-2xl font-bold text-[#111827] px-4">
        Leaders
      </h2>
      <div className="w-full h-[2px] bg-[#2E7CFD]"></div>
    </div>

    {/* Description */}
    <div className="mt-6  ml-5 mr-5">
      <p className="text-[#374151] text-[14px] xl:text-[16px] leading-relaxed">
        We've been in this business since 2002 and have built a culture predicated on trust, commitment, 
        and professionalism. Our people, their wealth of experience, and passion for technology are what 
        makes us one of the most dynamic IT service companies in Europe.
      </p>
    </div>
    
  </div>
</div>


{/* Our People Section-picture */}

{/* Our People Section */}
<div className="w-full flex justify-center py-2 bg-white relative">
  <div className="relative w-[80%] max-w-screen-lg p-8 xl:p-10">
    
    {/* Grid Layout for Leadership Team */}
    <div className="grid grid-cols-3 gap-12 relative z-12">
      
      {/* Leader Cards */}
      {[
        { name: "Person Name 1", position: "Associate Engagement Director", image: spongebobbb },
        { name: "Person Name 2", position: "Associate Engagement Director", image: credit },
        { name: "Person Name 3", position: "Associate Engagement Director", image: ebay },
        { name: "Person Name 4", position: "Associate Engagement Director", image: total },
        { name: "Person Name 5", position: "Chief Strategy Officer", image: inditex },
        { name: "Person Name 6", position: "Chief Technology Officer", image: siemens },
      ].map((leader, index) => (
        <div 
          key={index} 
          className="w-[292px] h-[335px] border-[3px] border-transparent bg-white overflow-hidden shadow-lg relative"
          style={{ 
            borderImage: "linear-gradient(to right bottom, #1A57C2, #01D1FF) 1 / 3px ",
            borderRadius: "10px "  // <-- Explicit border-radius to ensure it works
          }}
        >
          {/* Image Section */}
          {/* <div className="w-full h-[70%] flex justify-center items-center overflow-hidden rounded-t-[10px]">
            <img src={leader.image} alt={leader.name} className="object-cover w-full h-full" />
          </div> */}
{/* Image Section */}
<div className="w-full h-[75%] flex justify-center items-center overflow-hidden rounded-t-[10px] relative slide-in">
  <img 
    src={leader.image} 
    alt={leader.name} 
    className="object-contain w-[276px] h-[300px] relative top-[2px]" 
  />
</div>

{/* Name and Position */}
<h3 className="text-black font-semibold mt-4 text-center">{leader.name}</h3>
<p className="text-gray-600 text-sm text-center">{leader.position}</p>

        </div>
      ))}

    </div>
  </div>
</div>


{/* Contact section  */}
<div className="w-full flex justify-center py-10 contact-section-animated">
  <div className="relative w-[80%] max-w-screen-lg bg-[#F4F7FE] p-4 sm:p-6 xl:p-8 border border-[#2E7CFD] flex flex-col sm:flex-row items-center">
    {/* Left Section */}
    <div className="w-full sm:w-1/3 flex justify-center items-center px-4 sm:px-6 mb-4 sm:mb-0">
      <h2
        className="text-[22px] sm:text-[24px] xl:text-[26px] font-bold text-transparent bg-clip-text leading-tight text-center sm:text-left"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #DD085D 0%, #0249DC 34%, #8C0D65 69%, #620166 100%)",
        }}
      >
        Do you want to <br /> be part of our <br /> company?
      </h2>
    </div>

    {/* Divider */}
    <div className="h-[1px] sm:h-[80%] w-full sm:w-[1px] bg-[#2E7CFD] mb-4 sm:mb-0"></div>

    {/* Right Section */}
    <div className="w-full sm:w-2/3 flex flex-col sm:flex-row justify-between px-4 sm:px-6 items-center">
      <div className="flex-1 text-center sm:text-left mb-4 sm:mb-0">
        <h3 className="text-xl font-bold text-[#111827]">Connect with Us</h3>
        <p className="text-[#374151] text-sm sm:text-[14px] leading-relaxed mt-2">
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In deleniti
          repellat eum harum quas ducimus aliquam tempore vel ad earum dolore
          consequuntur labore eligendi dolores, molestias suscipit atque, dicta enim."
        </p>
      </div>
      {/* Button centered vertically on the right */}
      <button
        className="px-4 sm:px-6 py-2 text-white font-semibold rounded-lg ml-0 sm:ml-6 contact-button"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #E1075C 0%,#9E1265 50%, #610166 100%)",
        }}
      >
        Contact Us
      </button>
    </div>
  </div>
</div>


    </div>

  );
}

export default Leadership;
