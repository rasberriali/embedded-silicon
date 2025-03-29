import React, { useState, useEffect } from "react";

// Import background images
import awardsSetting1 from "../../../assets/images/awardsSetting1.svg";
import awardsSetting2 from "../../../assets/images/awardsSetting2.svg";

// Import award images
import total from "../../../assets/images/total.png";
import inditex from "../../../assets/images/inditex.png";
import siemens from "../../../assets/images/siemens.png";

// Award Data
const awardsData_tab = [
  { 
    image: total, 
    text: "Excellence in Semiconductor Design Award for groundbreaking innovations in chip architecture.",
    year: "2023",
    category: "Technology Innovation",
    achievement: "Best-in-Class Design",
    impact: "Reduced power consumption by 40%"
  },
  { 
    image: inditex, 
    text: "Industry Leadership Award for pioneering advancements in embedded systems.",
    year: "2023",
    category: "Design Excellence",
    achievement: "Market Leader",
    impact: "30% faster time-to-market"
  },
  { 
    image: siemens, 
    text: "Quality Excellence Award for maintaining exceptional standards in silicon production.",
    year: "2023",
    category: "Quality Assurance",
    achievement: "Zero Defect Rate",
    impact: "99.9% reliability rate"
  },
];

const industryRecognitionData_tab = [
  { 
    image: siemens, 
    text: "Strategic Partnership Excellence with leading semiconductor manufacturers.",
    year: "2023",
    category: "Industry Partnership",
    achievement: "Preferred Partner",
    impact: "20+ Global Partners"
  },
  { 
    image: inditex, 
    text: "Innovation Hub Recognition for cutting-edge research in silicon technology.",
    year: "2023",
    category: "Research Excellence",
    achievement: "Top Innovator",
    impact: "15 Patents Filed"
  },
  { 
    image: siemens, 
    text: "Sustainability Champion for eco-friendly semiconductor manufacturing.",
    year: "2023",
    category: "Sustainability",
    achievement: "Green Tech Leader",
    impact: "50% Carbon Reduction"
  },
  { 
    image: total, 
    text: "Digital Transformation Leader in semiconductor industry practices.",
    year: "2023",
    category: "Digital Excellence",
    achievement: "Industry 4.0 Pioneer",
    impact: "100% Digital Integration"
  },
];

const stats = [
  { number: "25+", label: "Industry Awards", icon: "🏆" },
  { number: "50+", label: "Global Partners", icon: "🤝" },
  { number: "100%", label: "Client Satisfaction", icon: "⭐" },
  { number: "30+", label: "Countries Served", icon: "🌍" },
];

function Awards() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("awards");
  const [startIndex, setStartIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isVisible, setIsVisible] = useState({
    hero: false,
    carousel: false,
    content: false,
    stats: false
  });

  const awards = [
    { src: total, alt: "Microsoft", desc: "Excellence in Technology" },
    { src: siemens, alt: "EDA Playground", desc: "Design Innovation" },
    { src: total, alt: "ISO Certification", desc: "Quality Standards" },
    { src: total, alt: "EDA Playground", desc: "Tool Innovation" },
    { src: siemens, alt: "Microsoft", desc: "Partnership Excellence" },
    { src: siemens, alt: "EDA Playground", desc: "Design Leadership" },
    { src: total, alt: "ISO Certification", desc: "Industry Standard" },
  ];

  const visibleAwards = awards.slice(startIndex, startIndex + 4);

  const handlePrevClick = () => {
    setStartIndex((prev) => (prev === 0 ? awards.length - 4 : prev - 1));
  };

  const handleNextClick = () => {
    setStartIndex((prev) => (prev === awards.length - 4 ? 0 : prev + 1));
  };

  useEffect(() => {
    setIsVisible(prev => ({ ...prev, hero: true }));
    
    const carouselTimer = setTimeout(() => {
      setIsVisible(prev => ({ ...prev, carousel: true }));
    }, 500);

    const contentTimer = setTimeout(() => {
      setIsVisible(prev => ({ ...prev, content: true }));
    }, 1000);

    return () => {
      clearTimeout(carouselTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="w-full py-12 text-left relative overflow-hidden flex flex-col items-center"
        style={{
          background: "linear-gradient(to bottom, #093252 0%, #051a2b 100%)",
        }}
      >
        <div className="absolute inset-0">
          <img
            src={awardsSetting1}
            alt="awardsSetting1"
            className={`absolute top-10 left-0 opacity-30 w-60 h-50 transform transition-all duration-1000 ${
              isVisible.hero ? 'translate-x-0 opacity-30' : '-translate-x-full opacity-0'
            }`}
          />
          <img
            src={awardsSetting2}
            alt="awardsSetting2"
            className={`absolute bottom-2 right-0 opacity-30 w-195 h-115 transform transition-all duration-1000 ${
              isVisible.hero ? 'translate-x-0 opacity-30' : 'translate-x-full opacity-0'
            }`}
          />
        </div>

        {/* Awards Title & Stats */}
        <div className={`relative z-10 max-w-5xl px-10 py-12 transform transition-all duration-1000 ${
          isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-12">
            <h2 className="text-white text-5xl font-bold mb-4">
              Awards & Industry Recognition
            </h2>
            <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto">
              The recognition of Embedded Silicon by industry leaders validates our
              commitment to innovation and the high quality of technological
              expertise.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-4 gap-8 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-white text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Most Awarded Section */}
      <div
        className="w-full py-10 flex flex-col justify-center items-center relative overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, #051a2b 0%, #000000 100%)",
        }}
      >
        <div className={`max-w-6xl w-full relative transform transition-all duration-1000 ${
          isVisible.carousel ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-white text-2xl font-semibold text-center mb-8">Featured Partners & Certifications</h3>
          
          {/* Award Logos Carousel */}
          <div className="flex justify-center space-x-16 overflow-hidden">
            {visibleAwards.map((award, index) => (
              <div 
                key={startIndex + index} 
                className="group relative transform transition-all duration-500 hover:scale-105"
                onMouseEnter={() => setHoveredIndex(startIndex + index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative w-40 h-40 bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
                  <img 
                    src={award.src} 
                    alt={award.alt} 
                    className="w-full h-full object-contain p-6" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#2D7BFD]/90 to-[#1a4d9c]/90 transform -translate-y-full transition-transform duration-300 group-hover:translate-y-0 flex flex-col items-center justify-center p-4 text-center">
                    <p className="text-white text-lg font-medium mb-2">{award.alt}</p>
                    <p className="text-white/80 text-sm">{award.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={handlePrevClick}
              className="bg-white/10 backdrop-blur-sm text-white px-5 py-3 text-xl rounded-full shadow-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              ‹
            </button>
            <button 
              onClick={handleNextClick}
              className="bg-white/10 backdrop-blur-sm text-white px-5 py-3 text-xl rounded-full shadow-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      {/* Award and Industry Tab */}
      <div className="flex justify-center mt-12 space-x-4">
        <button
          className={`px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
            activeTab === "awards" 
              ? "bg-[#2D7BFD] text-white shadow-lg" 
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
          onClick={() => setActiveTab("awards")}
        >
          Awards
        </button>
        <button
          className={`px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
            activeTab === "industry" 
              ? "bg-[#2D7BFD] text-white shadow-lg" 
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
          onClick={() => setActiveTab("industry")}
        >
          Industry Recognition
        </button>
      </div>

      {/* Dynamic Content Section */}
      <div className={`w-full bg-white py-16 transform transition-all duration-1000 ${
        isVisible.content ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(activeTab === "awards" ? awardsData_tab : industryRecognitionData_tab).map((item, index) => (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 cursor-pointer"
                onClick={() => setSelectedCard(item)}
              >
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto bg-gray-50 rounded-full p-4 transform transition-all duration-500 group-hover:scale-110">
                    <img 
                      src={item.image} 
                      alt="Award Icon" 
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" 
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-[#2D7BFD] text-white text-xs px-2 py-1 rounded-full">
                    {item.year}
                  </div>
                </div>
                <div className="text-center">
                  <span className="inline-block bg-blue-50 text-blue-600 text-sm px-3 py-1 rounded-full mb-3">
                    {item.category}
                  </span>
                  <p className="text-gray-700 font-medium leading-relaxed mb-4">
                    {item.text}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Achievement:</span>
                      <span className="font-medium text-blue-600">{item.achievement}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Impact:</span>
                      <span className="font-medium text-green-600">{item.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Card Modal */}
      {selectedCard && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setSelectedCard(null)}
        >
          <div 
            className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 transform transition-all duration-300"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-gray-800">{selectedCard.category}</h3>
              <button 
                onClick={() => setSelectedCard(null)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gray-50 rounded-lg p-3">
                  <img src={selectedCard.image} alt="" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="text-sm text-blue-600 font-semibold">{selectedCard.year}</p>
                  <p className="text-lg font-medium">{selectedCard.text}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="text-sm font-semibold text-blue-600 mb-2">Achievement</h4>
                  <p className="text-gray-700">{selectedCard.achievement}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="text-sm font-semibold text-green-600 mb-2">Impact</h4>
                  <p className="text-gray-700">{selectedCard.impact}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Awards;
