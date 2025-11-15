import { useState } from "react";
import { motion } from "framer-motion";

export default function BeforeAfterSlider({ before, after, name }) {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg">
      <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={before} alt="Before" className="w-full h-full object-cover" />
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={(e) => setSliderPosition(e.target.value)}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
      />

      <div
        className="absolute top-0 bottom-0 w-1 bg-red-600"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-red-600 rounded-full border-4 border-black shadow-lg flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 bg-black/70 px-4 py-2 rounded">
        <p className="text-white font-bold">{name}</p>
      </div>
    </div>
  );
}