import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import collaborateleadership from "../../../assets/images/collaborateleadership.svg";

import innovation from "../../../assets/images/innovation.png"
import credit from "../../../assets/images/credit.png"
import ebay from "../../../assets/images/ebay.png"
import total from "../../../assets/images/total.png"
import inditex from "../../../assets/images/inditex.png"
import siemens from "../../../assets/images/siemens.png"
import spongebobbb from "../../../assets/images/spongebobbb.jpg"

const leadershipData = [
  { 
    name: "Person Name 1", 
    position: "Associate Engagement Director", 
    image: spongebobbb,
    expertise: ["Semiconductor Design", "Team Leadership", "Strategic Planning"],
    experience: "15+ years in semiconductor industry",
    achievements: "Led 20+ successful chip design projects",
    education: "Ph.D. in Electrical Engineering"
  },
  { 
    name: "Person Name 2", 
    position: "Associate Engagement Director", 
    image: credit,
    expertise: ["Product Development", "Innovation Management", "R&D"],
    experience: "12+ years in embedded systems",
    achievements: "Holds 8 patents in silicon technology",
    education: "M.S. in Computer Engineering"
  },
  { 
    name: "Person Name 3", 
    position: "Associate Engagement Director", 
    image: ebay,
    expertise: ["Quality Assurance", "Process Optimization", "Team Management"],
    experience: "10+ years in semiconductor manufacturing",
    achievements: "Reduced production costs by 30%",
    education: "B.S. in Electronics Engineering"
  },
  { 
    name: "Person Name 4", 
    position: "Associate Engagement Director", 
    image: total,
    expertise: ["Project Management", "Client Relations", "Strategy"],
    experience: "18+ years in tech industry",
    achievements: "Managed $100M+ projects",
    education: "MBA, Technical Management"
  },
  { 
    name: "Person Name 5", 
    position: "Chief Strategy Officer", 
    image: inditex,
    expertise: ["Business Strategy", "Market Analysis", "Innovation"],
    experience: "20+ years in leadership roles",
    achievements: "Drove 40% company growth",
    education: "MBA, Harvard Business School"
  },
  { 
    name: "Person Name 6", 
    position: "Chief Technology Officer", 
    image: siemens,
    expertise: ["Technology Strategy", "R&D Leadership", "Innovation"],
    experience: "25+ years in semiconductor industry",
    achievements: "Pioneer in AI chip design",
    education: "Ph.D. in Computer Science"
  }
];

function Leadership() {
  const navigate = useNavigate();
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [isVisible, setIsVisible] = useState({
    hero: false,
    leaders: false,
    stats: false
  });

  useEffect(() => {
    setIsVisible(prev => ({ ...prev, hero: true }));
    
    const leadersTimer = setTimeout(() => {
      setIsVisible(prev => ({ ...prev, leaders: true }));
    }, 500);

    const statsTimer = setTimeout(() => {
      setIsVisible(prev => ({ ...prev, stats: true }));
    }, 1000);

    return () => {
      clearTimeout(leadersTimer);
      clearTimeout(statsTimer);
    };
  }, []);

  const handleContactClick = () => {
    navigate('/contactPage');
  };

  return (
    <div className="w-full font-inter relative">
      {/* Hero Section */}
      <div className="relative min-h-[50vh] sm:min-h-[60vh] flex flex-col xl:flex-row md:flex-row gap-4 items-center px-4 sm:px-0">
        <div className="absolute inset-0 bg-[linear-gradient(200deg,#162447_2%,#162447_31%,#113E61_50%,#080F14_80%,#1B394A_100%)] opacity-90 z-0"></div>

        {/* Left Side - Text Content */}
        <div className={`relative flex xl:w-1/2 w-full flex-col xl:gap-6 gap-4 justify-start items-start z-10 p-6 sm:p-10 lg:p-20 xl:p-28 2xl:p-32 transform transition-all duration-1000 ${
          isVisible.hero ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-4xl 2xl:text-5xl font-bold text-white leading-tight">
            Embedded Silicon <br /> Leadership Team
          </h2>
          <p className="text-[#D1D5DB] text-sm sm:text-base xl:text-lg">
            Our leadership team brings together decades of experience in semiconductor design, 
            embedded systems, and technological innovation. Each leader contributes unique expertise 
            to drive our mission of delivering cutting-edge silicon solutions.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className={`relative xl:w-1/2 w-full flex justify-center z-10 transform transition-all duration-1000 ${
          isVisible.hero ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}>
          <img src={collaborateleadership} alt="Leadership Team" className="w-full h-full object-contain sm:object-cover" />
        </div>
      </div>

      {/* Our People Section */}
      <div className="w-full bg-white flex justify-center py-8 sm:py-16 px-4 sm:px-0">
        <div className="relative w-full sm:w-[90%] lg:w-[80%] max-w-screen-lg bg-white p-4 sm:p-8 xl:p-10 shadow-sm">
          {/* Borders with responsive widths */}
          <div className="absolute top-0 left-0 w-[30px] sm:w-[50px] h-[1px] bg-[#2E7CFD]"></div>
          <div className="absolute top-0 right-0 w-[calc(100%-80px)] sm:w-[calc(100%-120px)] h-[1px] bg-[#2E7CFD]"></div>
          <div className="absolute left-0 top-0 h-full w-[2px] sm:w-[3px] bg-[#2E7CFD]"></div>
          <div className="absolute right-0 top-0 h-full w-[1px] bg-[#2E7CFD]"></div>
          <div className="absolute bottom-0 left-0 w-full h-[2px] sm:h-[3px] bg-[#2E7CFD]"></div>

          {/* Heading with responsive positioning */}
          <div className="absolute -top-3 sm:-top-4 left-6 sm:left-10 flex items-center px-2 sm:px-4 py-1 bg-white whitespace-nowrap">
            <h2 className="text-lg sm:text-xl xl:text-2xl font-bold text-[#111827] px-2 sm:px-4">
              Meet Our Leaders
            </h2>
            <div className="w-full h-[2px] bg-[#2E7CFD]"></div>
          </div>

          {/* Description with responsive text */}
          <div className="mt-6 ml-3 mr-3 sm:ml-5 sm:mr-5">
            <p className="text-[#374151] text-sm sm:text-base xl:text-lg leading-relaxed">
              With over two decades of experience since 2002, our leadership team has cultivated a culture 
              of excellence, innovation, and continuous growth. Each leader brings unique expertise and 
              vision to drive our company's success in the semiconductor industry.
            </p>
          </div>
        </div>
      </div>

      {/* Leadership Team Grid */}
      <div className="w-full flex justify-center py-2 bg-white relative px-4 sm:px-0">
        <div className="relative w-full sm:w-[90%] lg:w-[80%] max-w-screen-lg p-4 sm:p-8 xl:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 relative z-12">
            {leadershipData.map((leader, index) => (
              <div 
                key={index} 
                className={`group bg-white overflow-hidden shadow-lg relative rounded-xl border-2 border-transparent hover:border-[#2E7CFD] transition-all duration-300 transform cursor-pointer ${
                  isVisible.leaders ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                } hover:-translate-y-2`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setSelectedLeader(leader)}
              >
                {/* Image Container */}
                <div className="w-full h-[200px] sm:h-[250px] relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-blue-600 font-medium mb-3 text-sm sm:text-base">{leader.position}</p>
                  <div className="space-y-2">
                    <p className="text-gray-600 text-xs sm:text-sm">{leader.experience}</p>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.slice(0, 2).map((skill, i) => (
                        <span key={i} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Call-to-action */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-600 to-blue-500 text-white py-2 sm:py-3 px-3 sm:px-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs sm:text-sm text-center">Click to view full profile</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Leader Details - Made more responsive */}
      {selectedLeader && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedLeader(null)}
        >
          <div 
            className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 max-w-3xl w-full mx-auto transform transition-all duration-300 max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{selectedLeader.name}</h3>
              <button 
                onClick={() => setSelectedLeader(null)}
                className="text-gray-500 hover:text-gray-700 transition-colors p-2"
              >
                ✕
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <div>
                <img 
                  src={selectedLeader.image} 
                  alt={selectedLeader.name} 
                  className="w-full h-[200px] sm:h-[300px] object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-blue-600">{selectedLeader.position}</h4>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base">{selectedLeader.experience}</p>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Areas of Expertise</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedLeader.expertise.map((skill, i) => (
                      <span key={i} className="text-xs sm:text-sm bg-blue-50 text-blue-600 px-2 sm:px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Key Achievements</h5>
                  <p className="text-gray-700 text-sm sm:text-base">{selectedLeader.achievements}</p>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Education</h5>
                  <p className="text-gray-700 text-sm sm:text-base">{selectedLeader.education}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section - Enhanced responsiveness */}
      <div className={`w-full flex justify-center py-6 sm:py-10 px-4 sm:px-0 transform transition-all duration-1000 ${
        isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="relative w-full sm:w-[90%] lg:w-[80%] max-w-screen-lg bg-[#F4F7FE] p-6 sm:p-8 border border-[#2E7CFD] rounded-xl">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="w-full md:w-1/3">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 text-center md:text-left">
                Join Our <br />Leadership Team
              </h2>
            </div>

            <div className="w-full md:w-2/3 space-y-4">
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-center md:text-left">
                We're always looking for talented individuals who share our passion for innovation 
                and excellence in semiconductor technology. Join us in shaping the future of 
                embedded systems and silicon design.
              </p>
              
              <div className="flex justify-center md:justify-start">
                <button 
                  onClick={handleContactClick}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base active:scale-95"
                >
                  Explore Opportunities
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leadership;
