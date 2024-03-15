import CursorSVG from "@/public/assets/CursorSVG";
import React from "react";

interface props {
  color: string;
  x: number;
  y: number;
  message: string;
}

const Cursor = ({ color, x, y, message }: props) => {
  return (
    <div
      className="pointer-events-none absolute top-0 left-0"
      style={{ transform: `translate(${x}px, ${y}px)` }}
    >
      <CursorSVG color={color} />
      {message && (
        <div
          className="absolute left-2 top-5 rounded-3xl px-4 py-2"
          style={{ backgroundColor: color }}
        >
          <p className="whitespace-nowrap text-white text-sm leading-relaxed">
            {message}
          </p>
        </div>
      )}
    </div>
  );
};

export default Cursor;
