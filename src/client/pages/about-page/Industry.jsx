import React from "react";
import industrybg from "../../../assets/images/industrybg.svg";
import total from "../../../assets/images/total.png";
import inditex from "../../../assets/images/inditex.png";
import siemens from "../../../assets/images/siemens.png";
import brain from "../../../assets/images/brain.svg";

const Industry = () => {
  return (
    <>
      {/* First Background Section */}
      <div className="relative bg-gray-900 flex flex-col items-center justify-center p-6">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${industrybg})`, height: "100%" }}
        ></div>

        {/* Content Wrapper */}
        <div className="relative flex flex-col items-center space-y-10 w-full">
          {/* First Card (Main Info) */}
          <div
            className="shadow-lg bg-[rgba(31,41,55,0.9)] text-white px-16 py-14 rounded-2xl w-[700px] flex flex-col justify-center"
          >
            <h2 className="text-2xl font-bold text-white text-left leading-tight">
              Pioneering the Future of <br />
              <span className="text-white">Embedded Silicon</span>
            </h2>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed text-left">
              We develop smart and efficient silicon solutions that drive modern
              technology forward. With strong industry partnerships and a
              commitment to innovation, we create reliable and scalable solutions
              for automotive, IoT, consumer electronics, and industrial
              applications. Our goal is to make technology smarter, faster, and
              more connected to shape a better future.
            </p>
          </div>

          {/* Second Card */}
          <div
            className="shadow-lg bg-[rgba(31,41,55,0.9)] text-white px-16 py-10 rounded-2xl w-[900px] flex flex-col justify-center mx-auto my-10"
          >
            <h3 className="text-lg font-bold text-left">Lorem</h3>
            <p className="mt-2 text-gray-300 text-sm leading-relaxed text-left">
              Repellat eum harum quas ducimus aliquam tempore vel ad earum dolore
              consequatur labore eligendi.
            </p>
          </div>
        </div>
      </div>

      {/* Industry Section - Background Image */}
      <div
        className="relative py-10 px-12 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${brain})` }}
      >
        {/* Semi-Transparent Overlay */}
        <div className="absolute inset-0 bg-white opacity-70"></div> {/* Adjust opacity as needed */}

        <div className="max-w-6xl mx-auto space-y-4">
          {/* First Section */}
          <div
            className="flex flex-col md:flex-row items-center p-6 relative"
            style={{
              borderBottom: "3px solid #2E3EFD", // Bottom line
              width: "100%",
              position: "relative",
            }}
          >
            {/* Left Vertical Line - Aligned with the first paragraph */}
            <div
              className="absolute left-0"
              style={{
                width: "3px",
                backgroundColor: "#2E3EFD",
                top: "170px", // Adjust to align with first paragraph
                bottom: "-3px", // Extends down to touch bottom border
              }}
            ></div>

            {/* Left Content */}
            <div className="md:w-1/2 text-left pl-10">
              <h2 className="text-2xl font-bold text-black">ACS</h2>
              <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              {/* Updated Button Section */}
              <div className="flex flex-col items-center text-center mb-0 pb-0">
                <button
                  className="mt-2 px-5 py-2 text-white rounded-md"
                  style={{
                    background: "linear-gradient(90deg, #AABEE2 1%, #5D93EC 19%, #537DE6 51%, #406AB5 75%, #3959A7 100%)",
                  }}
                >
                  Learn more
                </button>
              </div>
            </div>

            {/* Right Section - Logo */}
            <div className="md:w-1/2 flex justify-center">
              <img src={total} alt="ACS Logo" className="w-120 h-98" />
            </div>
          </div>

          {/* Second Section (Reversed Layout) */}
          <div
            className="flex flex-col md:flex-row-reverse items-center p-6 relative"
            style={{
              borderRight: "3px solid #2E3EFD",
              borderBottom: "3px solid #2E3EFD",
              width: "100%",
            }}
          >
            {/* Text Section on the Right */}
            <div className="md:w-1/2 text-left">
              <h2 className="text-2xl font-bold text-black pl-10">ACS</h2>
              <p className="text-gray-700 mt-2 pl-10 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="text-gray-700 pl-10 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              {/* Updated Button Section */}
              <div className="flex flex-col items-center text-center mt-4">
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend in libero nec ultrices.
                </p>
                <button
                  className="mt-4 px-5 py-2 text-white rounded-md"
                  style={{
                    background: "linear-gradient(90deg, #AABEE2 1%, #5D93EC 19%, #537DE6 51%, #406AB5 75%, #3959A7 100%)",
                  }}
                >
                  Learn more
                </button>
              </div>
            </div>

            {/* Left Section - Icon */}
            <div className="md:w-1/2 flex justify-center">
              <img src={siemens} alt="Innovation Group Logo" className="w-120 h-98" />
            </div>
          </div>

          {/* Third Section */}
          <div
            className="flex flex-col md:flex-row items-center p-6 relative"
            style={{
              borderBottom: "3px solid #2E3EFD", // Bottom border
              width: "100%",
              position: "relative",
            }}
          >
            {/* Left Vertical Line - Aligned with the first paragraph */}
            <div
              className="absolute left-0"
              style={{
                width: "3px",
                backgroundColor: "#2E3EFD",
                top: "170px", // Adjust to align with first paragraph
                bottom: "-3px", // Extends down to touch bottom border
              }}
            ></div>

            {/* Left Content */}
            <div className="md:w-1/2 text-left pl-10">
              <h2 className="text-2xl font-bold text-black">ACS</h2>
              <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              {/* Updated Button Section */}
              <div className="flex flex-col items-center text-center mt-4">
                <button
                  className="mt-4 px-5 py-2 text-white rounded-md"
                  style={{
                    background: "linear-gradient(90deg, #AABEE2 1%, #5D93EC 19%, #537DE6 51%, #406AB5 75%, #3959A7 100%)",
                  }}
                >
                  Learn more
                </button>
              </div>
            </div>

            {/* Right Section - Logo */}
            <div className="md:w-1/2 flex justify-center">
              <img src={siemens} alt="ACS Logo" className="w-120 h-98" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Industry;
