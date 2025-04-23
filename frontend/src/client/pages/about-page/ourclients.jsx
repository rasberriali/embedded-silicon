import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Images
import clients from "../../../assets/images/clients.png";
import icclient from "../../../assets/images/icclient.png";

// Logos
import bosch from "../../../assets/images/bosch.png";
import innovation from "../../../assets/images/innovation.png";
import credit from "../../../assets/images/credit.png";
import ebay from "../../../assets/images/ebay.png";
import inditex from "../../../assets/images/inditex.png";
import siemens from "../../../assets/images/siemens.png";
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
  {
    name: "John Doe",
    role: "CTO, Tech Innovations",
    initials: "JD",
    rating: "★★★★★",
    text: `"Embedded Silicon's VLSI design services exceeded our expectations. Their team delivered a high-performance chip that met all our requirements and was ready for production ahead of schedule."`,
  },
  {
    name: "Emily Davis",
    role: "Project Lead, Smart Devices Co.",
    initials: "ED",
    rating: "★★★★★",
    text: `"The team's innovative solutions and attention to detail have significantly improved our product development cycle."`,
  },
  {
    name: "Michael Brown",
    role: "VP Engineering, FutureTech",
    initials: "MB",
    rating: "★★★★★",
    text: `"Embedded Silicon's commitment to excellence and timely delivery has made them an invaluable partner."`,
  },
  {
    name: "Sarah Lee",
    role: "CEO, AI Ventures",
    initials: "SL",
    rating: "★★★★★",
    text: `"They demonstrated incredible technical expertise and an impressive turnaround time. Highly recommended!"`,
  },
  {
    name: "Daniel Kim",
    role: "Product Manager, SmartSoft",
    initials: "DK",
    rating: "★★★★★",
    text: `"The quality of service and consistent communication made a big difference for our product launch."`,
  },
  {
    name: "Anna Zhang",
    role: "Director of R&D, BioSys",
    initials: "AZ",
    rating: "★★★★★",
    text: `"They adapted to our needs and delivered outstanding results on our embedded software integration project."`,
  },
];

const OurClients = () => {
   useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const logos = [
    [aws, innovation, avl, credit],
    [ebay, questtrade, record, utilitycloud],
    [inditex, gorillas, ktc, spotzer],
    [bosch, siemens, opentextPartnership, adverty],
    [delaware, sinense, cluepoint, trifecta],
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({
    hero: false,
    logos: false,
    testimonials: false,
  });

  useEffect(() => {
    const autoplay = setInterval(() => {
      setActiveIndex((prev) =>
        prev + 3 >= testimonials.length ? 0 : prev + 3
      );
    }, 5000);
    return () => clearInterval(autoplay);
  }, []);

  useEffect(() => {
    setIsVisible({ hero: true, logos: true, testimonials: true });
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[587px] flex items-center justify-center text-white px-10">
        <img
          src={clients}
          alt="Background"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isVisible.hero ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="max-w-screen-xl mx-auto font-inter relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h2 className="text-4xl font-extrabold mb-4">Our Clients</h2>
              <p className="text-lg italic text-gray-300 leading-relaxed">
                "The list below represents some of the respected companies that
                have partnered with Embedded Silicon Technology Solutions Corp.
                Throughout the years, the company has built strong relationships
                through reliable project execution, deep technical expertise,
                and a commitment to innovation."
              </p>
            </div>
            <div className="bg-black p-4 rounded-lg shadow-lg">
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

      {/* Client Logos */}
      <div className="py-16 px-6 max-w-screen-xl mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-left mt-20">
          All of the businesses and startups we have worked with
        </h2>
        <div className="grid grid-cols-4 gap-y-12 gap-x-10 justify-items-center">
          {logos.map((row, rowIndex) =>
            row.map((logo, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="w-[200px] h-[150px] flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt="Client Logo"
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))
          )}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mx-auto max-w-screen-xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-10 mb-20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4 md:mb-0">
              What Our Clients Say
            </h2>
            <div className="bg-blue-50 rounded-full py-2 px-6 flex items-center">
              <span className="text-blue-600 font-medium mr-2">★★★★★</span>
              <span className="text-gray-600">4.9/5 average rating</span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center items-start gap-6"
            >
              {testimonials.slice(activeIndex, activeIndex + 3).map((t, idx) => {
                const isMiddle = idx === 1;
                return (
                  <div
                    key={idx}
                    className={`bg-white p-6 rounded-xl shadow-md border border-gray-100 relative flex flex-col justify-between ${
                      isMiddle
                        ? "w-[405px] h-[290px] mt-10"
                        : "w-[405px] h-[330px]"
                    }`}
                  >
                    <div className="text-blue-500 text-4xl absolute -top-5 -left-2">
                      ❝
                    </div>
                    <div className="flex items-center mb-6 mt-2">
                      <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                        {t.initials}
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-lg">{t.name}</h3>
                        <p className="text-sm text-blue-600">{t.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-4">{t.text}</p>
                    <div className="text-yellow-400">{t.rating}</div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default OurClients;
