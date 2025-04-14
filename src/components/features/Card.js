import React from 'react';

const Card = ({ title, des, icon }) => {
  return (
    <div className="relative w-full px-6 md:px-8 min-h-[380px] py-6 md:py-8 rounded-xl shadow-xl border-2 border-opacity-20 border-designColor bg-gradient-to-br from-[#2a2d35] via-[#2d3339] to-[#2a2d35] group hover:shadow-2xl hover:-translate-y-2 hover:border-opacity-40 hover:bg-gradient-to-b hover:from-[#2a2d35] hover:to-[#1e2024] transition-all duration-300">
      <div className="absolute top-0 right-0 -mt-2 -mr-2 w-4 h-4 rounded-full bg-designColor/10 group-hover:bg-designColor/30 transition-colors duration-300"></div>
      <div className="h-full flex flex-col">
        <div className="flex items-center mb-6">
          <div className="flex-shrink-0 flex justify-center items-center w-12 h-12 mr-2 rounded-lg bg-gradient-to-br from-designColor/5 to-transparent ring-1 ring-designColor/5 group-hover:ring-designColor/20 group-hover:from-designColor/20 transition-all duration-300">
            {icon ? (
              <div className="text-designColor/70 transform group-hover:scale-110 group-hover:text-designColor transition-all duration-300">
                {icon}
              </div>
            ) : (
              <div className="w-8 h-8 flex flex-col justify-between">
                <span className="w-full h-[2px] rounded-lg bg-designColor"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor"></span>
              </div>
            )}
          </div>
          <h2 className="text-h5 font-titleFont font-bold text-textSecondary group-hover:text-designColorLight transition-colors duration-300">
            {title}
          </h2>
        </div>

        <div className="flex flex-col flex-grow">
          <p className="text-base font-bodyFont text-textMuted leading-7 group-hover:text-textSecondary transition-colors duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card
