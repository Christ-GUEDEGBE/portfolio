import React from 'react'
import EnhancedBanner from './EnhancedBanner';

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full py-20 mdl:py-24 min-h-screen flex items-center justify-center border-b-[1px] font-titleFont border-b-black relative overflow-hidden bg-gradient-to-br from-[#3a6b71] via-[#2a2d35] 60% to-[#1e2024]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(61,117,124,0.15)] via-[rgba(58,107,113,0.05)] 40% to-transparent z-0"></div>
      <EnhancedBanner />
    </section>
  );
}

export default Banner
