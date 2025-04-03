import React, { useState, useRef, useEffect} from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';
import embedded from "../../assets/images/embedded-logo.svg";
import {
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
  UserIcon,
  TrophyIcon,
  UsersIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";
import { Menu as MenuIcon, X } from 'lucide-react';

const aboutMenuItems = [
  {
    title: "Leadership Team",
    description: "Meet our experienced leadership team",
    icon: UserIcon,
    path: '/Leadership'
  },
  {
    title: "Industry Recognitions",
    description: "Awards and recognition for excellence",
    icon: TrophyIcon,
    path: '/Awards'
  },
  {
    title: "Partnerships",
    description: "Our strategic partnerships",
    icon: UserGroupIcon,
    path: '/Industry'
  },
  {
    title: "Clients",
    description: "Trusted by leading companies",
    icon: UsersIcon,
    path: '/ourClients'
  },
  {
    title: "News",
    description: "Latest company updates and news",
    icon: NewspaperIcon,
    path: '/aboutPage#news'
  },
  {
    title: "Events",
    description: "Upcoming and past events",
    icon: CalendarIcon,
    path: '/aboutPage#events'
  },
];

const navListMenuItems = [
  {
    title: "Integrated Chip Design",
    description: "End-to-end VLSI Design Flow Services",
    icon: SquaresPlusIcon,
    subItems: [
      "Full VLSI Design",
      "Full-Chip Integration",
      "Standard Cells Development",
      "Design Library Creation",
      "Analog IP Blocks Development",
      "Full Custom Layout"
    ]
  },
  {
    title: "Application-Specific IC Verification",
    description: "Comprehensive verification services",
    icon: UserGroupIcon,
    subItems: [
      "ASIC Functional Verification",
      "Post-PNR Regression",
      "UVM Testbench Development",
      "RTL to Transistor Level Verification",
      "Analog Mixed Signal Verification"
    ]
  },
  {
    title: "Physical Design and Verification",
    description: "Expert physical design implementation",
    icon: Bars4Icon,
    subItems: [
      "Automated Place and Route",
      "Full Custom Layout Proficiency",
      "Proficiency across Technology Nodes",
      "Tailored Designs for Varied Industries"
    ]
  },
  {
    title: "FPGA Development",
    description: "Custom FPGA solutions and prototyping",
    icon: SunIcon,
    subItems: [
      "FPGA to ASIC",
      "Test Development Platforms",
      "Microsatellites"
    ]
  },
  {
    title: "Embedded Systems Development",
    description: "Complete embedded system solutions",
    icon: GlobeAmericasIcon,
    subItems: [
      "Rapid Prototyping",
      "PCB Layout and Design",
      "Firmware Development"
    ]
  }
];

function AboutUsMegaMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const aboutPagePath = "/aboutPage"; // Main About Us page

  // Check if About Us is active (either submenu item or main page is active)
  const isActive = 
    location.pathname === aboutPagePath || 
    aboutMenuItems.some(({ path }) => location.pathname === path || location.hash === `#${path.split('#')[1]}`);

  const handleAboutUsClick = () => {
    navigate(aboutPagePath); // Navigate to main About Us page
  };

  const renderItems = aboutMenuItems.map(({ icon, title, description, path }, key) => (
    <div key={key} onClick={() => navigate(path)}>
      <MenuItem className={`flex items-center gap-3 rounded-lg p-4 hover:bg-gray-200 ${location.pathname === path ? 'bg-gray-100' : ''}`}>
        <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-4 bg-gray-200">
          {React.createElement(icon, {
            strokeWidth: 2,
            className: "h-6 text-[#2D7BFD] w-6",
          })}
        </div>
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className={`flex items-center text-sm font-bold font-inter ${location.pathname === path ? 'text-[#2D7BFD]' : ''}`}
          >
            {title}
          </Typography>
          <Typography
            variant="paragraph"
            className="text-xs !font-medium text-blue-gray-500 font-inter"
          >
            {description}
          </Typography>
        </div>
      </MenuItem>
    </div>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 32 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className={`flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 text-sm cursor-pointer${isActive ? 'text-[#2D7BFD]' : ''}`}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={handleAboutUsClick} // Navigate to About Page when clicked
            >
              About Us
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""}`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""}`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-lg rounded-xl lg:block border-1 border-gray-300 z-50">
          <div className="grid grid-cols-4 gap-4 p-4">
            {/* Left column with image */}
            <div className="col-span-1">
              <div className="relative h-full rounded-lg overflow-hidden">
                <img 
                  src="https://placehold.co/400x600/2D7BFD/FFF" 
                  alt="Latest Achievement" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent font-inter">
                  <h4 className="text-white font-semibold mb-1">AWS Financial Services</h4>
                  <p className="text-gray-300 text-sm">Embedded Silicon achieves AWS competency</p>
                </div>
              </div>
            </div>
            {/* Right columns with menu items */}
            <div className="col-span-3">
              <div className="grid grid-cols-2 gap-4">
                {renderItems}
              </div>
            </div>
          </div>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}



function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === '/servicesPage';

  const renderItems = navListMenuItems.map(
    ({ icon, title, description, subItems }, key) => (
      <div key={key} className="px-4">
        <MenuItem className="flex flex-col gap-3 rounded-lg hover:bg-gray-200 p-2 ">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center rounded-lg bg-gray-100 p-3">
              {React.createElement(icon, {
                className: "h-6 w-6 text-[#2D7BFD]",
              })}
            </div>
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="text-sm font-bold font-inter"
              >
                {title}
              </Typography>
              <Typography
                variant="paragraph"
                className="text-xs font-medium text-blue-gray-500 font-inter"
              >
                {description}
              </Typography>
            </div>
          </div>
          <div className="pl-12">
            <ul className="space-y-1">
              {subItems.map((subItem, index) => (
                <li 
                  key={index}
                  className="text-sm text-gray-600 hover:text-[#2D7BFD] cursor-pointer"
                  onClick={() => {
                    if (subItem === "Full VLSI Design") {
                      navigate('/fullvlsi');
                    } else if (subItem === "Full-Chip Integration") {
                      navigate('/fullvlsi');
                    } else {
                      navigate('/servicesPage');
                    }
                  }}
                >
                  {subItem}
                </li>
              ))}
            </ul>
          </div>
        </MenuItem>
      </div>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 32 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className={`flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 font-inter text-sm cursor-pointer ${
                isActive ? 'text-[#2D7BFD]' : ''
              }`}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Services
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-[90vw] w-[1200px] rounded-xl lg:block border border-gray-200 p-6 z-50">
          <div className="grid grid-cols-3 gap-6">
            {renderItems}
            {/* Design Consultancy Button Section */}
            <div className="col-span-3 mt-2 border-t border-gray-200 pt-2">
              <div className="flex items-center justify-between bg-gray-50 rounded-lg p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-blue-50">
                    <PhoneIcon className="h-6 w-6 text-[#2D7BFD]" />
                  </div>
                  <div>
                    <Typography
                      variant="h6"
                      className="text-sm font-bold font-inter"
                    >
                      Need Design Consultancy?
                    </Typography>
                    <Typography
                      variant="paragraph"
                      className="text-xs text-gray-600"
                    >
                      Get expert advice for your silicon design needs
                    </Typography>
                  </div>
                </div>
                <button
                  onClick={() => navigate('/contactPage')}
                  className="bg-[#2D7BFD] hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.mega-menu-container')) {
        setIsAboutOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsAboutOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActivePage = (path) => {
    return location.pathname === path;
  };

  const activeClass = "text-[#2D7BFD] font-semibold";
  const normalClass = "text-[#162447] hover:text-[#2D7BFD] transition-colors";

  return (
    <div className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-gray-300 font-inter">
      <div className='max-w-screen-xl mx-auto flex justify-between items-center py-3 2xl:py-4 2xl:p-0 p-6 '>
        <div className='flex items-center gap-2 cursor-pointer ' onClick={() => navigate('/')}> 
          <img src={embedded} alt="logo" className='h-12 w-12 md:h-16 md:w-16'/>
          <div className='text-[#2D7BFD] text-xl md:text-xl font-semibold leading-5'>embedded<br/> silicon</div>
        </div>

        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>

        <div className={`absolute md:static top-16 left-0 w-full md:w-auto overflow-y-scroll xl:overflow-y-hidden  xl:p-0 p-6
          max-h-[500px] md:flex md:items-center md:gap-10 md:text-base text-lg font-medium shadow-md md:shadow-none 
          transition-transform duration-300 bg-white md:bg-transparent ${isMobileMenuOpen ? 'block' : 'hidden md:flex'}`}>
          <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 gap-4 ">
            <Typography
              as="div"
              variant="small"
              color="blue-gray"
              className="font-medium"
            >
              <ListItem 
                className={`flex items-center gap-2 py-2 pr-4 text-sm cursor-pointer${isActivePage('/') ? 'text-[#2D7BFD]' : ''}`}
                selected={isActivePage('/')}
                onClick={() => navigate('/')}
              >
                Home
              </ListItem>
            </Typography>

            <AboutUsMegaMenu />
            <NavListMenu />

            <Typography
              as="div"
              variant="small"
              color="blue-gray"
              className="font-medium"
            >
              <ListItem 
                className={`flex items-center gap-2 py-2 pr-4 text-sm cursor-pointer ${isActivePage('/careersPage') ? 'text-[#2D7BFD]' : ''}`}
                selected={isActivePage('/careersPage')}
                onClick={() => navigate('/careersPage')}
              >
                Careers
              </ListItem>
            </Typography>

            <Typography
              as="div"
              variant="small"
              color="blue-gray"
              className="font-medium"
            >
              <ListItem 
                className={`flex items-center gap-2 py-2 pr-4 text-sm cursor-pointer ${isActivePage('/success-stories') ? 'text-[#2D7BFD]' : ''}`}
                selected={isActivePage('/success-stories')}
                onClick={() => navigate('/success-stories')}
              >
                Success Stories
              </ListItem>
            </Typography>
          </List>
        </div>

        <div className='hidden md:flex'>
          <div 
            className={`bg-[#2E7CFD] hover:bg-blue-600 text-[#FFFFFF] py-2 px-6 text-sm rounded-lg cursor-pointer ${isActivePage('/contactPage') ? 'ring-2 ring-blue-300' : ''}`}
            onClick={() => navigate('/contactPage')}
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;