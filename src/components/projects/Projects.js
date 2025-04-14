import React from 'react';
import Title from '../layouts/Title';
import { projectFOUR, projectTwo, projectThree, hospital, Jordan} from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import AnimatedSection from '../layouts/AnimatedSection';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-28 mdl:py-36 border-b-[1px] border-b-black"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <AnimatedSection className="flex justify-center items-center text-center mb-12" animation="fade-up">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK. You can click on the github icon in the center of the image for each project, to see the complete project very well documented."
            des="My Projects"
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-12 xl:gap-20">
          <AnimatedSection animation="fade-up" className="w-full">
            <ProjectsCard
              title="USA ELECTRIC CARS"
              des="Analysis of the electric car market in Washington, highlighting their evolution, adoption and eligibility for policies supporting clean energy."
              src={projectFOUR}
              githubLink="https://github.com/Christ-GUEDEGBE/ELECTRIC_CARS" // Updated link
              techStack={["Python", "Power BI"]}
            />
          </AnimatedSection>
          <AnimatedSection animation="fade-up" className="w-full" style={{ transitionDelay: '150ms' }}>
            <ProjectsCard
              title="COFFEE SHOP SALES"
              des="Design of a dashboard for a coffee sales company, allowing you to follow the evolution of sales month by month and analyze consumption trends."
              src={projectTwo}
              githubLink="https://github.com/Christ-GUEDEGBE/COFFEE-SHOP-SALES" // Updated link
              techStack={["Power BI", "Excel", "DAX"]}
            />
          </AnimatedSection>
          <AnimatedSection animation="fade-up" className="w-full" style={{ transitionDelay: '150ms' }}>
            <ProjectsCard
              title="EMERGENCY-ROOM DASHBOARD"
              des="This Power BI project analyzes hospital emergency room data through three dashboards: Monthly Trends; Consolidated Overview and Patient Details, offering in-depth insights on individual cases."
              src={hospital}
              githubLink="https://github.com/Christ-GUEDEGBE/EMERGENCY-ROOM-DASHBOARD" // Updated link
              techStack={["Power BI", "Excel", "DAX"]}
            />
          </AnimatedSection>
          <AnimatedSection animation="fade-up" className="w-full" style={{ transitionDelay: '300ms' }}>
            <ProjectsCard
              title="DATA JOBS MARKET"
              des="Analysis double of the data science job market, with a focus on the most demanded skills, salary trends and therefore the best professional opportunities for data analysts."
              src={projectThree}
              githubLink="https://github.com/Christ-GUEDEGBE/PYTHON_DATA" // Updated link
              techStack={["Python"]}
            />
          </AnimatedSection>
          <AnimatedSection animation="fade-up" className="w-full" style={{ transitionDelay: '300ms' }}>
            <ProjectsCard
              title="NBA SCRAPING PROJECT"
              des="This project automates the extraction, cleaning, and storage of NBA data by scraping a website, processing the data, and exporting it to a PostgreSQL database and CSV for deeper analysis."
              src={Jordan}
              githubLink="https://github.com/Christ-GUEDEGBE/NBA_DATA_SCRAPING-" // Updated link
              techStack={["Python","Docker","PostgreSQL"]}
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default Projects

