import React, { useState, useEffect } from "react";
import clients from "../../../assets/images/clients.png"; // Background Image
import icclient from "../../../assets/images/icclient.png"; // IC Image

// Import client logos
import bosch from "../../../assets/images/bosch.png";
import innovation from "../../../assets/images/innovation.png";
import credit from "../../../assets/images/credit.png";
import ebay from "../../../assets/images/ebay.png";
import total from "../../../assets/images/total.png";
import inditex from "../../../assets/images/inditex.png";
import siemens from "../../../assets/images/siemens.png";

const testimonials = [
  [
    {
      id: 1,
      name: "Person 1 Name",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In deleniti repellat eum harum quas ducimus aliquam tempore.",
      image: siemens,
    },
    {
      id: 2,
      name: "Person 2 Name",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In deleniti repellat eum harum quas ducimus aliquam tempore.",
      image: siemens,
    },
  ],
  [
    {
      id: 3,
      name: "Person 3 Name",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In deleniti repellat eum harum quas ducimus aliquam tempore.",
      image: siemens,
    },
    {
      id: 4,
      name: "Person 4 Name",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In deleniti repellat eum harum quas ducimus aliquam tempore.",
      image: siemens,
    },
  ],
  [
    {
      id: 5,
      name: "Person 5 Name",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In deleniti repellat eum harum quas ducimus aliquam tempore.",
      image: siemens,
    },
    {
      id: 6,
      name: "Person 6 Name",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In deleniti repellat eum harum quas ducimus aliquam tempore.",
      image: siemens,
    },
  ],
];

const OurClients = () => {
  const logos = [
    [bosch, innovation, bosch, credit],
    [ebay, total, inditex, siemens],
    [inditex, siemens, credit, innovation],
    [bosch, siemens, siemens, bosch],
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({
    hero: false,
    logos: false,
    testimonials: false
  });

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
            "The list below ...Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. In deleniti repellat eum harum quas ducimus
            aliquam tempore vel ad earum dolore consequatur labore eligendi
            dolores, molestias suscipit atque, dicta enim."
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
      <div className={`py-16 px-10 max-w-6xl mx-auto transform transition-all duration-1000 ${
        isVisible.logos ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        {/* Title (Left Aligned) */}
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-left">
          All of the businesses and startups we have worked with
        </h2>

        {/* Logo Grid with Staggered Animation */}
        <div className="grid grid-cols-4 gap-y-12 gap-x-10 justify-items-center">
          {logos.map((row, rowIndex) =>
            row.map((logo, colIndex) => (
              <img
                key={`${rowIndex}-${colIndex}`}
                src={logo}
                alt="Client Logo"
                className={`h-16 md:h-24 object-contain transform transition-all duration-500 hover:scale-110 ${
                  isVisible.logos ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{
                  transitionDelay: `${(rowIndex * 4 + colIndex) * 100}ms`
                }}
              />
            ))
          )}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className={`py-16 px-10 max-w-6xl mx-auto transform transition-all duration-1000 ${
        isVisible.testimonials ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        {/* Title (Centered) */}
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-8 text-center">
          What Our <span className="font-bold">Client Say</span>
        </h2>

        {/* Testimonials Container with Fade Transition */}
        <div className="grid grid-cols-2 gap-10">
          {testimonials[activeIndex].map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="flex items-center space-x-6 transform transition-all duration-500 hover:scale-105"
            >
              {/* Image on the Left with Rotate Animation */}
              <div className="w-[114px] h-[114px] flex items-center justify-center rounded-full border-2 border-blue-500 overflow-hidden transform transition-all duration-500 hover:rotate-3">
                <img
                  src={testimonial.image}
                  alt={`Profile ${testimonial.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Description on the Right */}
              <div className="text-left max-w-[300px]">
                <p className="text-lg italic text-gray-600">{`"${testimonial.text}"`}</p>
                <p className="mt-2 font-semibold text-gray-800">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots with Scale Animation */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full shadow-md transition-all duration-300 transform hover:scale-125 ${
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

