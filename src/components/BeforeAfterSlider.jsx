// src/components/BeforeAfterSlider.jsx
import { useState } from "react";

export default function BeforeAfterSlider({ before, after }) {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl select-none">
      {/* AFTER IMAGE */}
      <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" />

      {/* BEFORE IMAGE - RESIZED BY WIDTH */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img src={before} alt="Before" className="w-full h-full object-cover" />
      </div>

      {/* SLIDER - PURE CSS INPUT */}
      <input
        type="range"
        min="0"
        max="100"
        value={pos}
        onChange={(e) => setPos(e.target.value)}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
        style={{ appearance: "none", background: "transparent" }}
      />

      {/* HANDLE (VISUAL ONLY) */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none z-20"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-red-600 rounded-full shadow-xl flex items-center justify-center">
          <span className="text-white text-xs font-bold">↔</span>
        </div>
      </div>

      {/* LABELS */}
      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-bold pointer-events-none z-30">
        BEFORE
      </div>
      <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold pointer-events-none z-30">
        AFTER
      </div>
    </div>
  );
}