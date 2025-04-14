import React from "react";
import Title from "../layouts/Title";
import {
  FaDatabase,
  FaPython,
} from "react-icons/fa";
import { SiPowerbi, SiMicrosoftexcel, SiDocker, SiDbt, SiApacheairflow } from "react-icons/si";

const Skills = () => {
  // Re-added colors to skills data
  const skillsData = [
    { icon: <FaPython size={32} />, name: "Python", color: "#3776AB" },
    { icon: <FaDatabase size={32} />, name: "SQL", color: "#f29111" },
    { icon: <SiPowerbi size={32} />, name: "Power BI", color: "#F2C811" },
    { icon: <SiMicrosoftexcel size={32} />, name: "Excel", color: "#217346" },
    { icon: <SiDocker size={32} />, name: "Docker", color: "#2496ED" },
    { icon: <SiDbt size={32} />, name: "dbt", color: "#FF694B" },
    { icon: <SiApacheairflow size={32} />, name: "Airflow", color: "#007A87" },
  ];

  return (
    <section id="skills" className="w-full py-20 mdl:py-28 border-b-[1px] border-b-black bg-[#1e2024]">
      <div className="max-w-5xl mx-auto px-7 md:px-14">
        <Title title="Skills" des="Technical Expertise" />

        <div className="mt-12">
          <div className="w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
              {skillsData.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-6 bg-[#2a2d35] rounded-lg shadow-md hover:bg-[#353a40] transition-all duration-300 transform hover:scale-105"
                >
                  {/* Apply color using inline style */}
                  <div className="mb-4 text-4xl" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <span className="text-base text-gray-300 text-center font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
