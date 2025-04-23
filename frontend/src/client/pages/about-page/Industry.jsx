import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import industrybg from "../../../assets/images/industrybg.svg";
import total from "../../../assets/images/total.png";
import inditex from "../../../assets/images/inditex.png";
import siemens from "../../../assets/images/siemens.png";
import brain from "../../../assets/images/brain.svg";
import synopsisViolet from "../../../assets/images/synopsisViolet.jpg";
import acs from "../../../assets/images/acs.png";
import camp from "../../../assets/images/camp.svg";

const partnershipData = [
  {
    id: 1,
    name: "Total Energy Solutions",
    logo: total,
    description: "Strategic partnership in developing energy-efficient semiconductor solutions for sustainable power systems and smart grid applications.",
    achievements: [
      "Developed high-performance chips reducing energy consumption by 40%",
      "Joint research in renewable energy integration systems",
      "Smart meter solutions deployed across 3 continents"
    ],
    collaboration: "Together, we're pioneering sustainable energy solutions through advanced semiconductor technology.",
    stats: {
      projects: "50+",
      years: "10+",
      countries: "25"
    }
  },
  {
    id: 2,
    name: "Siemens Industrial Innovation",
    logo: acs,
    description: "Collaborative partnership focusing on industrial automation and Industry 4.0 solutions through cutting-edge semiconductor technology.",
    achievements: [
      "Created next-gen industrial control systems",
      "Implemented AI-powered predictive maintenance solutions",
      "Developed custom IoT chips for smart factories"
    ],
    collaboration: "Driving the future of industrial automation with innovative silicon solutions.",
    stats: {
      projects: "75+",
      years: "15+",
      countries: "30"
    }
  },
  {
    id: 3,
    name: "Synopsis Tech Solutions",
    logo: synopsisViolet,
    description: "Strategic alliance in developing retail technology solutions and smart supply chain management systems.",
    achievements: [
      "Implemented RFID chip solutions across global retail chains",
      "Developed smart inventory management systems",
      "Created energy-efficient POS systems"
    ],
    collaboration: "Revolutionizing retail technology through innovative semiconductor solutions.",
    stats: {
      projects: "40+",
      years: "8+",
      countries: "20"
    }
  }
];

const Industry = () => {
   useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState({
    hero: false,
    cards: false,
    partners: false
  });
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [activePartnerIndex, setActivePartnerIndex] = useState(0);

  useEffect(() => {
    setIsVisible(prev => ({ ...prev, hero: true }));
    
    const cardsTimer = setTimeout(() => {
      setIsVisible(prev => ({ ...prev, cards: true }));
    }, 500);

    const partnersTimer = setTimeout(() => {
      setIsVisible(prev => ({ ...prev, partners: true }));
    }, 1000);

    return () => {
      clearTimeout(cardsTimer);
      clearTimeout(partnersTimer);
    };
  }, []);

  const handleLearnMore = (partner) => {
    setSelectedPartner(partner);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] bg-gray-900">
        {/* Background Image with Parallax Effect */}
        <div
          className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 hover:scale-105"
          style={{ backgroundImage: `url(${industrybg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center space-y-10">
          {/* Main Info Card */}
          <div 
            className={`bg-[#1E293B]/90 backdrop-blur-sm shadow-xl rounded-xl max-w-3xl w-full p-8 transform transition-all duration-1000 ${
              isVisible.hero ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Strategic Partnerships in<br />
              Silicon Innovation
            </h2>
            <p className="mt-6 text-gray-300 text-sm sm:text-base leading-relaxed">
              We forge powerful alliances with industry leaders to push the boundaries 
              of embedded silicon technology. Our partnerships span across energy, 
              industrial automation, retail, and more, creating innovative solutions 
              that shape the future of technology.
            </p>
          </div>

          {/* Stats Card */}
          <div 
            className={`bg-[#1E293B]/90 backdrop-blur-sm shadow-xl rounded-xl max-w-4xl w-full p-6 transform transition-all duration-1000 ${
              isVisible.cards ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="p-4 hover:bg-blue-900/30 rounded-lg transition-colors">
                <h3 className="text-3xl font-bold text-blue-400">20+</h3>
                <p className="text-gray-300 mt-2">Global Partners</p>
              </div>
              <div className="p-4 hover:bg-blue-900/30 rounded-lg transition-colors">
                <h3 className="text-3xl font-bold text-purple-400">150+</h3>
                <p className="text-gray-300 mt-2">Joint Projects</p>
              </div>
              <div className="p-4 hover:bg-blue-900/30 rounded-lg transition-colors">
                <h3 className="text-3xl font-bold text-blue-400">30+</h3>
                <p className="text-gray-300 mt-2">Countries Reached</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Showcase */}
      <div className="bg-white py-16">
        <div className="max-w-screen-xl mx-auto px-6 2xl:p-0">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
            Our Strategic Partners
          </h2>
          
          {partnershipData.map((partner, index) => (
            <div 
              key={partner.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 p-6 mb-8 rounded-xl hover:bg-gray-50 transition-all duration-300 transform ${
                isVisible.partners ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Content */}
              <div className="md:w-1/2 space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">{partner.name}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {partner.description}
                </p>
                
                {/* Achievement List */}
                <ul className="space-y-2">
                  {partner.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>

                {/* Partnership Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center">
                    <p className="text-xl font-bold text-blue-600">{partner.stats.projects}</p>
                    <p className="text-sm text-gray-500">Projects</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-blue-600">{partner.stats.years}</p>
                    <p className="text-sm text-gray-500">Years</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-blue-600">{partner.stats.countries}</p>
                    <p className="text-sm text-gray-500">Countries</p>
                  </div>
                </div>

                <button 
                  onClick={() => handleLearnMore(partner)}
                  className="mt-6 px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-md hover:from-blue-600 hover:to-blue-800 transition-all transform hover:scale-105 active:scale-95"
                >
                  Learn more
                </button>
              </div>

              {/* Logo Section */}
              <div className="md:w-1/2 flex justify-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-blue-500/10 rounded-xl transform transition-transform group-hover:scale-105"></div>
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} Logo`} 
                    className="max-w-xs relative z-10 transform transition-transform group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partnership Details Modal */}
      {selectedPartner && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPartner(null)}
        >
          <div 
            className="bg-white rounded-2xl p-6 max-w-3xl w-full mx-auto transform transition-all duration-300 max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-gray-900">{selectedPartner.name}</h3>
              <button 
                onClick={() => setSelectedPartner(null)}
                className="text-gray-500 hover:text-gray-700 transition-colors p-2"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              <img 
                src={selectedPartner.logo} 
                alt={selectedPartner.name} 
                className="h-32 object-contain mx-auto"
              />

              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  {selectedPartner.description}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mt-6">Key Achievements</h4>
                <ul className="space-y-2">
                  {selectedPartner.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mt-6">Partnership Impact</h4>
                <div className="grid grid-cols-3 gap-6 mt-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">{selectedPartner.stats.projects}</p>
                    <p className="text-sm text-gray-500">Joint Projects</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">{selectedPartner.stats.years}</p>
                    <p className="text-sm text-gray-500">Years of Partnership</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">{selectedPartner.stats.countries}</p>
                    <p className="text-sm text-gray-500">Countries Impacted</p>
                  </div>
                </div>

                <p className="text-gray-600 mt-6 italic">
                  {selectedPartner.collaboration}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Industry;