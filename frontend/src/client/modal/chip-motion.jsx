import React from 'react'
import { motion } from "framer-motion";

function Chipmotion() {

    const paths = [
        "M250 225 V150 H180 V120 H160 V100", 
        "M250 225 V150 H320 V120 H340 V100", 
        "M250 275 V350 H180 V380 H160 V400", 
        "M250 275 V350 H320 V380 H340 V400", 
        "M225 250 H150 V230 H120 V200 H100", 
        "M275 250 H350 V270 H380 V300 H400", 
        "M225 250 H125 V190 H90 V170 H70", 
        "M275 250 H375 V310 H410 V330 H430", 
        "M250 225 V130 H190 V110 H170 V90", 
        "M250 275 V370 H300 V390 H320 V410"
      ];
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <svg
        viewBox="0 0 500 500"
        className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px]"
      >
        {/* Chip */}
        <rect x="225" y="225" width="50" height="50" fill="#00ffcc" stroke="#00ffcc" strokeWidth="3" className="shadow-lg filter drop-shadow-glow" />
        
        {/* Animated PCB Circuit Traces with Glowing Effect */}
        {paths.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke="#00ffcc"
            strokeWidth="3"
            fill="transparent"
            strokeLinecap="square"
            className="filter drop-shadow-glow"
            initial={{ pathLength: 0, opacity: 0.5 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: Math.random() * 2 + 1.5, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 1.5 }}
          />
        ))}
      </svg>
      
      <style jsx>{`
        .drop-shadow-glow {
          filter: drop-shadow(0px 0px 6px #00ffcc);
        }
      `}</style>
    </div>
  )
}

export default Chipmotion
