import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dropdownimage from "../../assets/images/dropdown-img.svg";
import leadership from "../../assets/images/leadership.png";
import handshake from "../../assets/images/handshake.png";
import reward from "../../assets/images/reward.png";
import costumer from "../../assets/images/costumer.png";
import triangle from "../../assets/images/triangle.svg";

function Dropdown() {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null); // Track clicked item

  const menuItems = [
    { id: 1, label: "Leadership Overview", icon: leadership },
    { id: 2, label: "Industry Recognitions", icon: reward },
    { id: 3, label: "Partnerships", icon: handshake },
    { id: 4, label: "Clients", icon: costumer }
  ];

  return (
    <div className="relative w-full max-w-screen-lg sm:max-w-screen-md md:max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 2xl:p-0 font-inter rounded-lg bg-white border-b border-l-2 border-r-2 border-[#2D7BFD] shadow-2xl shadow-gray-950 mt-2 
    max-h-[80vh] overflow-y-auto">
    
      <img 
        src={triangle} 
        alt="" 
        className="absolute top-[-12px] left-1/2 -translate-x-1/2 z-50 h-3"
      />

      <div className="flex xl:flex-row flex-col p-4">
        <div className="flex flex-col xl:w-2/3 gap-6 p-4">
          <h1 
            className="font-bold text-xl cursor-pointer" 
            onClick={() => navigate('/servicesPage')}
          >
            COMPANY OVERVIEW
          </h1>

          <div className="xl:ml-14 ml-8 xl:space-y-2 space-y-0">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className={`flex flex-row xl:gap-0 gap-4 rounded-lg p-2 cursor-pointer
                  hover:bg-[#A4D5FF] 
                  ${selectedItem === item.id ? "bg-[#2D7BFD] text-white" : "bg-transparent"}`}
                onClick={() => setSelectedItem(item.id)}
              >
                <div className="w-1/6 flex flex-col justify-center items-center" onClick={() => navigate('/servicesPage')}>
                  <img src={item.icon} alt="" className="w-8" />
                </div>
                <div className="w-full">{item.label}</div>
              </div>
            ))}
          </div>

          <h1 className="font-bold text-xl cursor-pointer">NEWS</h1>
          <h1 className="font-bold text-xl cursor-pointer">EVENTS</h1>
        </div>

        <div className="flex flex-col xl:w-2/5 justify-center items-center p-4 gap-4">
          <h1 className="font-bold text-xl">WHY EMBEDDED SILICON?</h1>
          <p className="text-sm">
            Proven processes, advanced technologies, and deep expertise 
            ensure reliable project. Proven processes, advanced 
            technologies, and deep expertise ensure reliable project.
          </p>

          <div className="flex flex-col xl:p-6 p-4 rounded-2xl xl:gap-6 gap-2 bg-[#94CDFB]">
            <h2 className="font-semibold leading-5 text-sm">
              Embedded Silicon achieves emerging<br/> semiconductor company
            </h2>
            <img src={dropdownimage} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
