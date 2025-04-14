import React, { useEffect, useState } from "react";

const SkillProgress = ({ progress }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(progress);
    }, 100);
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="relative group">
      <div className="w-full h-2 bg-[#1e2024] rounded-full overflow-hidden shadow-shadowOne">
        <div
          className="h-full bg-gradient-to-r from-designColor via-designColorLight to-designColorDark transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
      {/* Tooltip */}
      <div
        className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <div className="bg-bodyColor border border-designColor/20 text-designColor px-2 py-1 rounded text-sm whitespace-nowrap shadow-shadowOne">
          {progress}%
        </div>
        <div className="w-2 h-2 bg-bodyColor border-r border-b border-designColor/20 rotate-45 absolute -bottom-1 left-1/2 transform -translate-x-1/2"></div>
      </div>
    </div>
  );
};

export default SkillProgress;
