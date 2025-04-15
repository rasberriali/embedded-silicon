import React, { useState, useEffect } from "react";
import clients from "../../../assets/images/clients.png"; // Background Image
import icclient from "../../../assets/images/icclient.png"; // IC Image

// Import client logos
import bosch from "../../../assets/images/bosch.png";
import innovation from "../../../assets/images/innovation.png";
import credit from "../../../assets/images/credit.png";
import ebay from "../../../assets/images/ebay.png";
import inditex from "../../../assets/images/inditex.png";
import siemens from "../../../assets/images/siemens.png";
import person1 from "../../../assets/images/person1.png";
import person2 from "../../../assets/images/person2.png";
import person3 from "../../../assets/images/person3.png";
import person4 from "../../../assets/images/person4.jpg";
import person5 from "../../../assets/images/person5.jpg";
import person6 from "../../../assets/images/person6.png";

import adverty from "../../../assets/images/adverty.png";
import avl from "../../../assets/images/avl.png";
import aws from "../../../assets/images/Aws.png";
import delaware from "../../../assets/images/delaware.png";
import gorillas from "../../../assets/images/gorillas.png";
import ktc from "../../../assets/images/ktc.png";
import spotzer from "../../../assets/images/spotzer.png";
import questtrade from "../../../assets/images/questtrade.png";
import utilitycloud from "../../../assets/images/utilitycloud.png";
import record from "../../../assets/images/record.png";
import opentextPartnership from "../../../assets/images/opentextPartnership.png";
import sinense from "../../../assets/images/sinense.png";
import cluepoint from "../../../assets/images/cluepoint.png";
import trifecta from "../../../assets/images/trifecta.png";

const testimonials = [
  [
    {
      id: 1,
      name: "John Smith",
      text: "Working with Embedded Silicon has been a game-changer for our projects. Their expertise in IC design is unmatched.",
      image: person1,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      text: "The team's dedication to quality and innovation has made them our go-to partner for embedded systems development.",
      image: person2,
    },
  ],
  [
    {
      id: 3,
      name: "David Chen",
      text: "Their technical expertise and professional approach have consistently exceeded our expectations.",
      image: person3,
    },
    {
      id: 4,
      name: "Michael Brown",
      text: "Embedded Silicon's commitment to excellence and timely delivery has made them an invaluable partner.",
      image: person4,
    },
  ],
  [
    {
      id: 5,
      name: "Emily Davis",
      text: "The team's innovative solutions and attention to detail have significantly improved our product development cycle.",
      image: person5,
    },
    {
      id: 6,
      name: "Robert Wilson",
      text: "Outstanding technical capabilities combined with excellent project management make them a reliable partner.",
      image: person6,
    },
  ],
];

const OurClients = () => {
  const logos = [
    [aws, innovation, avl, credit],
    [ebay, questtrade, record, utilitycloud],
    [inditex, gorillas, ktc, spotzer],
    [bosch, siemens, opentextPartnership, adverty],
    [delaware, sinense,  cluepoint, trifecta],
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({
    hero: false,
    logos: false,
    testimonials: false
  });

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Animation classes for testimonials
  const getSlideAnimation = (index) => {
    if (index === activeIndex) {
      return "opacity-100 translate-x-0 transition-all duration-1000";
    }
    return "opacity-0 translate-x-full transition-all duration-1000";
  };

  useEffect(() => {
    // Trigger animations when component mounts
    setIsVisible(prev => ({ ...prev, hero: true }));
    
    // Trigger logos section animation after a delay
    const logosTimer = setTimeout(() => {
      setIsVisible(prev => ({ ...prev, logos: true }));
    }, 500);

    // Trigger testimonials section animation after logos
    const testimonialsTimer = setTimeout(() => {
      setIsVisible(prev => ({ ...prev, testimonials: true }));
    }, 1000);

    return () => {
      clearTimeout(logosTimer);
      clearTimeout(testimonialsTimer);
    };
  }, []);

  return (
<div className="w-full">
  {/* Section 1: Background with Text and Image */}
  <div className="relative w-full h-[587px] flex items-center justify-center text-white px-10">
    
    {/* Background Image with Fade In */}
    <img
      src={clients}
      alt="Background"
      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 fade-in ${
        isVisible.hero ? 'opacity-100' : 'opacity-0'
      }`}
    />

    {/* Main Content Container aligned with logo */}
    <div className="max-w-screen-xl mx-auto 2xl:p-0 p-6 font-inter relative z-10 w-full">
      <div className={`grid md:grid-cols-2 gap-8 items-center transition-effect ${
        isVisible.hero ? 'fade-in-up' : 'fade-out-down'
      }`}>
        
        {/* Text Section */}
        <div className="text-left">
          <h2 className="text-4xl font-extrabold mb-4">Our Clients</h2>
          <p className="text-lg italic text-gray-300 leading-relaxed">
            "The list below represent some of the respected companies that have partnered with Embedded Silicon Technology Solutions Corp.
Throughout the years, the company has built strong relationships through reliable project execution, deep technical expertise, and a commitment to innovation.
These collaborations reflect the trust placed in the team by industry leaders across various sectors in embedded systems and semiconductor design.

"
          </p>
        </div>

        <div className={`bg-black p-4 rounded-lg shadow-lg transition-effect ${
  isVisible.hero ? 'scale-in' : 'scale-out'
}`}>
  <div className="w-[300px] h-[200px] md:w-[350px] md:h-[480px] mx-auto">
    <img
      src={icclient}
      alt="IC Circuit"
      className="w-full h-full object-contain"
    />
  </div>
</div>

      </div>
    </div>
  </div>





      {/* Section 2: Clients We Serve */}
      <div className={`py-16 px-6 2xl:p-0 max-w-screen-xl mx-auto transform transition-all duration-1000 ${
        isVisible.logos ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        {/* Title (Left Aligned) */}
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-left mt-20">
          All of the businesses and startups we have worked with
        </h2>

        {/* Logo Grid with Staggered Animation */}
        <div className="grid grid-cols-4 gap-y-12 gap-x-10 justify-items-center">
          {logos.map((row, rowIndex) =>
            row.map((logo, colIndex) => (
              <div key={`${rowIndex}-${colIndex}`} className="w-[200px] h-[150px] flex items-center justify-center">
                <img
                  src={logo}
                  alt="Client Logo"
                  className={`w-full h-full object-contain transform transition-all duration-100 hover:scale-110 ${
                    isVisible.logos ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  } ${logo === aws ? 'max-w-[150px]' : ''}`}
                  style={{
                    transitionDelay: `${(rowIndex * 4 + colIndex) * 100}ms`
                  }}
                />
              </div>
            ))
          )}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className={`py-8 px-6 2xl:p-0 max-w-screen-xl mx-auto transform transition-all duration-1000 overflow-hidden ${
        isVisible.testimonials ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        {/* Title (Centered) */}
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6 text-center mt-20">
          What Our <span className="font-bold">Client Say</span>
        </h2>

        {/* Testimonials Container with Fade and Slide Transition */}
        <div className="relative min-h-[200px]">
          {testimonials.map((testimonialPair, pairIndex) => (
            <div
              key={pairIndex}
              className={`${pairIndex === activeIndex ? 'relative' : 'absolute'} top-0 left-0 w-full grid grid-cols-1 md:grid-cols-2 gap-6 ${getSlideAnimation(pairIndex)}`}
              style={{ 
                display: pairIndex === activeIndex ? 'grid' : 'none',
                minHeight: '180px'
              }}
            >
              {testimonialPair.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-6 p-2"
                >
                  {/* Image with Rotate Animation */}
                  <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex-shrink-0 flex items-center justify-center rounded-full border-2 border-blue-500 overflow-hidden transform transition-all duration-500 hover:rotate-3">
                    <img
                      src={testimonial.image}
                      alt={`Profile ${testimonial.id}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Description */}
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-base md:text-lg italic text-gray-600 mb-1">{`"${testimonial.text}"`}</p>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-2 space-x-2.5">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full shadow-md transition-all duration-300 transform hover:scale-125 ${
                activeIndex === index ? "bg-[#95C5DC] shadow-lg" : "bg-gray-300"
              }`}
              onClick={() => setActiveIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClients;

