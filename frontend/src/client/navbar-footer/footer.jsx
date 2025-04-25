
// ***************************************************************************** ::

// CODED BY:  ALYSA JULIANA M. EMILIO
// GITHUB:    RASBERRIALI / ALI-MANGO

// ***************************************************************************** ::

import React from "react";
import { useNavigate } from "react-router-dom";
import embedded from "../../assets/images/embedded-logo.svg";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const navigate = useNavigate();

  // Function to handle internal page navigation
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <footer className="relative bg-gray-900 text-white py-12 font-inter mt-80">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Logo Section */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src={embedded} alt="logo" className="h-10" />
              <div className="text-[#2D7BFD] text-xl md:text-xl font-semibold font-inter leading-5">
                embedded<br /> silicon
              </div>
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              Innovating semiconductor solutions for a better future.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#2D7BFD]">
                <FaFacebookF size={18} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#2D7BFD]">
                <FaTwitter size={18} />
              </a>
              <a href="https://www.linkedin.com/company/embeddedsilicon" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#2D7BFD]">
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h2 className="text-lg font-semibold">Corporate</h2>
            <ul className="mt-4 space-y-2 text-gray-400 text-sm">
              <li onClick={() => handleNavigation("/")} className="hover:text-white cursor-pointer">Home</li>
              <li onClick={() => handleNavigation("/aboutPage")} className="hover:text-white cursor-pointer">About Us</li>
              <li onClick={() => handleNavigation("/servicesPage")} className="hover:text-white cursor-pointer">Services</li>
              <li onClick={() => handleNavigation("/careersPage")} className="hover:text-white cursor-pointer">Careers</li>
              <li onClick={() => handleNavigation("/success-stories")} className="hover:text-white cursor-pointer">Success Stories</li>
              <li onClick={() => handleNavigation("/contactPage")} className="hover:text-white cursor-pointer">Contact Us</li>
            </ul>
          </div>

          {/* Products Section with Same Navigation Function */}
          <div>
            <h2 className="text-lg font-semibold">Products</h2>
            <ul className="mt-4 space-y-2 text-gray-400 text-sm">
              <li onClick={() => handleNavigation("/servicesPage#ic-design")} className="hover:text-white cursor-pointer">
                Integrated Chip Design
              </li>
              <li onClick={() => handleNavigation("/servicesPage#verification")} className="hover:text-white cursor-pointer">
                Application-Specific IC Verification
              </li>
              <li onClick={() => handleNavigation("/servicesPage#fpga")} className="hover:text-white cursor-pointer">
                FPGA Development
              </li>
              <li onClick={() => handleNavigation("/servicesPage#custom")} className="hover:text-white cursor-pointer">
                Custom ASIC Solutions
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Legal</h2>
            <ul className="mt-4 space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">Privacy</li>
              <li className="hover:text-white cursor-pointer">Security</li>
              <li className="hover:text-white cursor-pointer">Copyright</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Embedded Silicon. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
