import React from "react";
import companyOverview from "../../../assets/images/companyOverview.svg";
import companyBuilding from "../../../assets/images/companyBuilding.svg";
import missionIcon from "../../../assets/images/missionIcon.svg";
import visionIcon from "../../../assets/images/visionIcon.svg";
import valuesIcon from "../../../assets/images/valuesIcon.svg";
import treeIcon from "../../../assets/images/treeIcon.svg";
function AboutPage() {
  const acronym = [
    { letter: "E", word: "Embedded", definition: "Specializing in IC design and firmware development." },
    { letter: "S", word: "Systems", definition: "Delivering seamless integration in hardware and software." },
    { letter: "I", word: "Innovation", definition: "Pioneering advancements in embedded technology." },
    { letter: "L", word: "Logic", definition: "Building smart solutions with cutting-edge design." },
    { letter: "I", word: "Integration", definition: "Ensuring efficiency across digital and analog systems." },
    { letter: "C", word: "Connectivity", definition: "Enhancing communication between devices." },
    { letter: "O", word: "Optimization", definition: "Maximizing performance in embedded applications." },
    { letter: "N", word: "Networks", definition: "Expanding possibilities with connected solutions." }
  ];
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
          <div className="w-1/3 bg-[#0F2230] text-[#F1F4F9] p-6 rounded-l-lg">
            <h2 className="text-3xl font-bold">Company History</h2>
            <p className="text-lg font-semibold mt-4"></p>
            <p className="text-sm mt-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              In deleniti repellat eum harum quas ducimus aliquam tempore 
              vel ad earum dolore consequatur labore eligendi dolores, 
              molestias suscipit atque, dicta enim.
            </p>
            <p className="text-sm mt-3">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    In deleniti repellat eum harum quas ducimus aliquam tempore 
    vel ad earum dolore consequatur labore eligendi dolores, 
    molestias suscipit atque, dicta enim Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores eos inventore accusamus deserunt! 
    Dolor quisquam eius temporibus architecto 
    accusantium vero maxime necessitatibus delectus rerum dolorum, eligendi distinctio aperiam officiis iusto.
  </p>
  <p className="text-sm mt-3">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    In deleniti repellat eum harum quas ducimus aliquam tempore 
    vel ad earum dolore consequatur labore eligendi dolores, 
    molestias suscipit atque, dicta enim Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores eos inventore accusamus deserunt! 
    Dolor quisquam eius temporibus architecto 
    accusantium vero maxime necessitatibus delectus rerum dolorum, eligendi distinctio aperiam officiis iusto.
  </p>
  <p className="text-sm mt-3">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error architecto ad tenetur dignissimos nihil culpa, dolore assumenda nostrum 
    autem veritatis obcaecati dolores quo deserunt nisi aperiam repellendus nam iusto.
  </p>
          </div>
          {/* Right: Company Building Image */}
          <div className="w-2/3">
            <img
              src={companyBuilding}
              alt="Company Building"
              className="w-full h-full object-cover rounded-2xl rounded-l-lg "
            />
          </div>
        </div>
        </div>

      {/* Company Overview Sheet (Added Below Company History) */}
      <div className="flex justify-center w-full mt-6">
  <div className="w-full max-w-6xl">
    <div className="bg-[#043A65] text-white px-30 py-12 rounded-lg flex justify-between items-center gap-6">
      <h2 className="text-2xl font-bold">Company Overview Sheet</h2>
      <button className="bg-white text-[#0F4C81] px-12 py-2 rounded-lg font-bold">
        View PDF
      </button>
    </div>
  </div>
</div>
{/* Company Values Section */}
<div className="w-full max-w-6xl mx-auto px-6 py-16">
  {/* Left Side: Heading and Intro Text */}
  <div className="mb-16 max-w-3xl">  {/* Increased bottom margin */}
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
    <div className="relative bg-gradient-to-r from-[#033F75] to-[#063241] text-white p-6 rounded-none shadow-lg text-center h-[350px] flex flex-col">
      {/* Enlarged Circle Icon */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center">
        <img src={missionIcon} alt="Mission Icon" className="w-16 h-16" />
      </div>
      {/* Mission Text */}
      <div className="flex-1 flex flex-col justify-center"> {/* Ensures alignment */}
        <h3 className="text-2xl font-bold uppercase mt-12">Mission</h3>
        <p className="text-base mt-4 leading-relaxed px-6">
          Dedicated to advancing technology and creating a world-class R&D 
          hub in the Philippines. Through innovation, learning, and problem-solving, 
          we develop next-generation solutions.
        </p>
      </div>
    </div>
    

    {/* Vision Card */}
    <div className="relative bg-gradient-to-r from-[#033F75] to-[#063241] text-white p-6 rounded-none shadow-lg text-center h-[350px] flex flex-col">
      {/* Enlarged Circle Icon */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center">
        <img src={visionIcon} alt="Vision Icon" className="w-16 h-16" />
      </div>
      {/* Vision Text */}
      <div className="flex-1 flex flex-col justify-center"> {/* Ensures alignment */}
        <h3 className="text-2xl font-bold uppercase mt-6">Vision</h3>
        <p className="text-base mt-4 leading-relaxed px-6">
          To be a globally recognized leader in embedded system design and 
          integrated solutions that drive industry innovation.
        </p>
      </div>
    </div>

    {/* Values Card */}
    <div className="relative bg-gradient-to-r from-[#033F75] to-[#063241] text-white p-6 rounded-none shadow-lg text-center h-[350px] flex flex-col">
      {/* Enlarged Circle Icon */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center">
        <img src={valuesIcon} alt="Values Icon" className="w-16 h-16" />
      </div>
      {/* Values Text */}
      <div className="flex-1 flex flex-col justify-center"> {/* Ensures alignment */}
        <h3 className="text-2xl font-bold uppercase">Values</h3>
        <p className="text-base mt-4 leading-relaxed px-6">
          Innovation, Integrity, and Excellence guide our work and relationships 
          with our partners and clients.
        </p>
      </div>
    </div>
  </div>
</div>
<div className="relative flex flex-col items-center py-16 px-10 bg-gray-900 min-h-screen text-white">
      {/* Background Tree Icon - The meaning of Esilicon*/}
      <img src={treeIcon} alt="Tree Background" className="absolute inset-0 w-full h-full object-cover opacity-20" />

      <h1 className="relative z-10 text-5xl font-bold mb-12 text-center">The Meaning of ESILICON</h1>

      <div className="relative flex flex-col items-center space-y-6 md:space-y-10 w-full max-w-4xl">
        {acronym.map((item, index) => (
          <div key={index} className={`relative flex items-center w-full ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
            {/* Letter Circle */}
            <div className="w-20 h-20 bg-blue-600 text-white flex items-center justify-center text-4xl font-bold rounded-full shadow-lg">
              {item.letter}
            </div>

            {/* Definition Box */}
            <div className={`ml-6 p-4 bg-white text-gray-900 rounded-lg shadow-lg max-w-md ${index % 2 === 0 ? "ml-6" : "mr-6"}`}>
              <h2 className="text-xl font-semibold">{item.word}</h2>
              <p className="text-sm mt-2">{item.definition}</p>
            </div>
          </div>
        ))}
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







    </>
  );
}

export default AboutPage;
