import React from 'react';
import { BsGithub } from "react-icons/bs";

const ProjectsCard = ({ title, des, src, githubLink, demoLink, techStack = [] }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-xl shadow-xl border-2 border-opacity-20 border-designColor bg-gradient-to-br from-[#2a2d35] via-[#2d3339] to-[#2a2d35] group hover:shadow-2xl hover:-translate-y-2 hover:border-opacity-50 hover:bg-gradient-to-b hover:from-gray-900 hover:to-[#1e2024] transition-all duration-300">
      <div className="w-full h-48 overflow-hidden rounded-lg relative">
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-300"
          src={src}
          alt={title}
          loading="lazy"
          style={{
            objectPosition: 'center',
            imageRendering: 'auto'
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm inline-flex justify-center items-center text-gray-200 hover:text-designColorLight hover:bg-black/40 transition-all duration-300"
            >
              <BsGithub size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full mt-6 flex flex-col gap-4">
        <h3 className="text-h5 font-titleFont font-bold text-designColorLight">
          {title}
        </h3>
        <p className="text-base font-bodyFont text-textMuted tracking-wide leading-relaxed">
          {des}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm-plus font-medium bg-designColor/5 text-designColor rounded-full border border-designColor/10 hover:bg-designColor/10 hover:border-designColor/20 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard
