
// ***************************************************************************** ::

// CODED BY:  ALYSA JULIANA M. EMILIO
// GITHUB:    RASBERRIALI / ALI-MANGO

// ***************************************************************************** ::


import React from 'react'
import MarqueeItem from './marqueeitem'
import innovation from "../../assets/images/innovation.png"
import bosch from "../../assets/images/bosch.png"
import credit from "../../assets/images/credit.png"
import siemens from "../../assets/images/siemens.png"
import total from "../../assets/images/total.png"
import ebay from "../../assets/images/ebay.png"
import inditex from "../../assets/images/inditex.png"

function MarqueeAnimation() {
  const upperMarquee = [
    <img src={bosch} alt="bosch" className='h-30' />,
    <img src={innovation} alt="innovation" className='h-30' />,
    <img src={credit} alt="credit" className='h-30' />,
    <img src={siemens} alt="siemens" className='h-30' />,
    <img src={ebay} alt="ebay" className='h-30' />,
    <img src={inditex} alt="inditex" className='h-30' />,
    <img src={bosch} alt="bosch" className='h-30' />,
    <img src={innovation} alt="innovation" className='h-30' />,
    <img src={bosch} alt="bosch" className='h-30' />,
    <img src={total} alt="total" className='h-30' />,
  ];

  const lowerMarquee = [
    <img src={bosch} alt="bosch" className='h-30' />,
    <img src={innovation} alt="innovation" className='h-30' />,
    <img src={bosch} alt="bosch" className='h-30' />,
    <img src={innovation} alt="innovation" className='h-30' />,
    <img src={ebay} alt="ebay" className='h-30' />,
    <img src={inditex} alt="inditex" className='h-30' />,
    <img src={credit} alt="credit" className='h-30' />,
    <img src={siemens} alt="siemens" className='h-30' />,
    <img src={bosch} alt="bosch" className='h-30' />,
    <img src={total} alt="total" className='h-30' />,
  ];

  return (
    <div className="container mx-auto">
      <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
      <MarqueeItem images={lowerMarquee} from={"-100%"} to={0} />
    </div>
  );
}

export default MarqueeAnimation;
