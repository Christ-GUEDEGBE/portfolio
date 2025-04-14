import React from 'react';
import { Link } from "react-scroll";
import Typewriter from 'typewriter-effect';
import { FaArrowRight } from 'react-icons/fa';
import { BiAnalyse } from 'react-icons/bi';
import { MdDashboard } from 'react-icons/md';
import { SiPowerbi, SiMicrosoftexcel, SiTableau } from 'react-icons/si';
import AnimatedSection from '../layouts/AnimatedSection';

const EnhancedBanner = () => {
    return (
        <div className="max-w-5xl w-full mx-auto px-8 md:px-16 z-10">
            <AnimatedSection animation="fade-up" className="flex flex-col gap-8 max-w-3xl mx-auto">
                {/* Hero Text */}
                <div className="flex flex-col gap-3 text-center">
                    <h4 className="text-lg sm:text-xl text-gray-300">WELCOME TO MY WORLD</h4>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight">
                        Hi, I'm{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a7880] to-[#6dc7d0]">
                            Christ Guedegbe
                        </span>
                    </h1>
                    {/* Changed h-20 to min-h-[5rem] to prevent text cutoff */}
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 min-h-[5rem]">
                        <Typewriter
                            options={{
                                strings: ['Data Analyst', 'BI Specialist'],
                                autoStart: true,
                                loop: true,
                                wrapperClassName: 'typewriter-wrapper',
                                cursorClassName: 'typewriter-cursor',
                            }}
                        />
                    </div>
                    <p className="text-base-plus md:text-lg text-gray-300 font-medium mx-auto mt-2 max-w-prose leading-relaxed text-justify">
                        Hi, I’m Christ boss, a data analyst with an engineering background and a strong drive for problem-solving. I love technology in general and enjoy building things—but let’s focus on data analysis here. I use various tools to transform complex data into clear insights that support decision-making.
                        With a foundation in energy engineering and industrial processes, I bring a structured, analytical approach to data. These days, I’m particularly interested in data automation and lightweight ETL processes, which are typically the domain of data engineers, to ensure smarter, more efficient work.
                        As a self-taught data analyst, I’ve developed my skills through hands-on projects and continuous learning. My goal is to help businesses unlock the full potential of their data while refining my expertise in data analytics and engineering.
                        </p>
                </div>

                {/* Decorative Element */}
                <div className="w-24 h-1 bg-gradient-to-r from-[#3d757c] to-[#6dc7d0] mx-auto rounded-full"></div>

                {/* Skills Badges */}
                <div className="flex flex-wrap justify-center gap-3 mt-2">
                    <span className="px-3.5 py-2 bg-gray-800/50 border border-[#3d757c]/40 rounded-full text-sm-plus flex items-center gap-2 text-gray-200 hover:bg-gray-800/70 hover:border-[#3d757c] transition-all duration-300">
                        <SiPowerbi className="text-[#F2C811]" /> Power BI
                    </span>
                    <span className="px-3.5 py-2 bg-gray-800/50 border border-[#3d757c]/40 rounded-full text-sm-plus flex items-center gap-2 text-gray-200 hover:bg-gray-800/70 hover:border-[#3d757c] transition-all duration-300">
                        <SiTableau className="text-[#E97627]" /> Tableau
                    </span>
                    <span className="px-3.5 py-2 bg-gray-800/50 border border-[#3d757c]/40 rounded-full text-sm-plus flex items-center gap-2 text-gray-200 hover:bg-gray-800/70 hover:border-[#3d757c] transition-all duration-300">
                        <SiMicrosoftexcel className="text-[#217346]" /> Excel
                    </span>
                    <span className="px-3.5 py-2 bg-gray-800/50 border border-[#3d757c]/40 rounded-full text-sm-plus flex items-center gap-2 text-gray-200 hover:bg-gray-800/70 hover:border-[#3d757c] transition-all duration-300">
                        <BiAnalyse className="text-[#4a7880]" /> Data Analysis
                    </span>
                    <span className="px-3.5 py-2 bg-gray-800/50 border border-[#3d757c]/40 rounded-full text-sm-plus flex items-center gap-2 text-gray-200 hover:bg-gray-800/70 hover:border-[#3d757c] transition-all duration-300">
                        <MdDashboard className="text-[#4a7880]" /> Dashboards
                    </span>
                </div>

                {/* Stats section removed as per request */}

                {/* Call To Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center sm:gap-10 mt-6">
                    <Link
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                        className="group flex items-center gap-2 w-fit hover:gap-4 transition-all duration-300 mx-auto sm:mx-0"
                    >
                        <span className="px-6 py-3 bg-designColor hover:bg-designColorLight text-white font-semibold rounded-lg transition-colors duration-300">
                            View Projects
                        </span>
                        <FaArrowRight className="text-[#4a7880] group-hover:text-[#6dc7d0] transition-all duration-300" />
                    </Link>

                    {/* Download Resume button removed as per request */}

                </div>

                {/* Social Links removed as per request */}

            </AnimatedSection>

            {/* Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-[#4a7880]/30 hidden md:block"></div>
            <div className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-[#4a7880]/20 hidden md:block"></div>
            <div className="absolute bottom-1/4 left-1/3 w-5 h-5 rounded-full bg-[#4a7880]/40 hidden md:block"></div>
        </div>
    );
};

export default EnhancedBanner;
