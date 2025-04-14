import React from 'react';
import Title from '../layouts/Title';
import Card from './Card';
import { BiFilterAlt, BiBarChartAlt2 } from 'react-icons/bi';
import { MdDashboard, MdDataObject } from 'react-icons/md';
import { FaSpider } from 'react-icons/fa'; // Added FaSpider
import useInView from "../hooks/useInView";

const Features = () => {
  const [sectionRef, isInView] = useInView({ threshold: 0.15 }); // Adjusted threshold slightly

  return (
    <section
      id="features"
      className="w-full py-26 mdl:py-32 border-b-[1px] border-b-black bg-gradient-to-b from-transparent via-[#1e2024]/50 to-transparent"
      ref={sectionRef}
    >
      <div className="max-w-5xl mx-auto px-7 md:px-12">
        <div
          className={`opacity-0 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "translate-y-10"
            }`}
        >
          <Title
            title="" // Removed redundant "Features" title
            des={
              <span
                className={`opacity-0 transition-all duration-1000 delay-200 ${isInView ? "opacity-100 translate-y-0" : "translate-y-10"
                  }`}
              >
                What I Do
              </span>
            }
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-12 xl:gap-16 mt-8">
          {/* Data Cleaning Card */}
          <div
            className={`opacity-0 transition-all duration-1000 delay-[450ms] ${isInView ? "opacity-100 scale-100" : "scale-90" // Adjusted delay
              }`}
          >
            <Card
              title="Data Analysis"
              des="Extract valuable insights from raw data by applying statistical and analytical techniques to uncover patterns, trends, and correlations that drive informed decision-making."
              icon={<BiFilterAlt className="text-5xl text-designColor" />}
            />
          </div>
          {/* Data Reporting Card */}
          <div
            className={`opacity-0 transition-all duration-1000 delay-[600ms] ${isInView ? "opacity-100 scale-100" : "scale-90" // Adjusted delay
              }`}
          >
            <Card
              title="Data Reporting & Storytelling"
              des="Translate complex data findings into clear, compelling narratives and reports that inform strategy and drive action effectively."
              icon={<BiBarChartAlt2 className="text-5xl text-designColor" />}
            />
          </div>
          {/* Data Visualization Card */}
          <div
            className={`opacity-0 transition-all duration-1000 delay-[750ms] ${isInView ? "opacity-100 scale-100" : "scale-90" // Adjusted delay
              }`}
          >
            <Card
              title="Data Visualization (Dashboards)"
              des="Transform raw data into clear and impactful visuals, from interactive dashboards to insightful graphs, making data exploration and analysis easier."
              icon={<MdDashboard className="text-5xl text-designColor" />}
            />
          </div>
          {/* Data Pipeline Card */}
          <div
            className={`opacity-0 transition-all duration-1000 delay-[900ms] ${isInView ? "opacity-100 scale-100" : "scale-90" // Adjusted delay
              }`}
          >
            <Card
              title="Data Pipeline Development (ETL/ELT)"
              des="Build efficient data pipelines to automate data extraction, transformation, and loading across various systems seamlessly."
              icon={<MdDataObject className="text-5xl text-designColor" />}
            />
          </div>
          {/* Data Scraping Card - New */}
          <div
            className={`opacity-0 transition-all duration-1000 delay-[1050ms] ${isInView ? "opacity-100 scale-100" : "scale-90" // Adjusted delay
              }`}
          >
            <Card
              title="Data Scraping"
              des="Develop and deploy web scraping solutions to gather valuable data from online sources ethically and efficiently for analysis."
              icon={<FaSpider className="text-5xl text-designColor" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
