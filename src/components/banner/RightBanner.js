import React from 'react'
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <div className="w-[300px] h-[450px] lgl:w-[500px] lgl:h-[750px] z-10 overflow-hidden rounded-md group">
        <div className="w-full h-full p-6 flex items-center justify-center opacity-0 animate-scale-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          <img
            className="w-[90%] h-[90%] object-cover object-top transform group-hover:scale-105 transition-transform duration-300"
            src={bannerImg}
            alt="bannerImg"
          />
        </div>
      </div>
      <div className="absolute bottom-0 w-[370px] h-[300px] lgl:w-[560px] lgl:h-[500px] bg-gradient-to-tr from-[#1e2024] via-[#202327] to-transparent shadow-shadowOne flex justify-center items-center"></div>
      <div className="absolute top-0 -right-4 w-[180px] h-[180px] lgl:w-[220px] lgl:h-[220px] bg-gradient-to-l from-[#1e2024] to-transparent rounded-full blur-3xl"></div>
    </div>
  );
}

export default RightBanner
