import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaPython,
  FaDatabase
} from "react-icons/fa";
const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Data Analyst.", "Energy And Industrial Processes Engineer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-16 px-8 lgl:px-12">
      <div className="flex flex-col gap-5 pt-6 lgl:pt-8">
        <h4
          className="text-base-plus font-medium tracking-wide text-textSecondary mb-2 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
        >
          WELCOME TO MY WORLD
        </h4>
        <h1 className="text-display font-extrabold text-textPrimary mb-4 text-3xl xs:text-4xl sm:text-5xl md:text-display">
          <span className="opacity-0 animate-split-fade-in inline-block" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>Hi, </span>
          <span className="opacity-0 animate-split-fade-in inline-block" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>I'm </span>
          <span className="opacity-0 animate-split-fade-in inline-block whitespace-nowrap" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>Christ </span>
          <span className="opacity-0 animate-split-fade-in inline-block whitespace-nowrap" style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}>GUEDEGBE</span>
        </h1>
        <h2
          className="text-h3 font-bold text-designColorLight/90 mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "800ms", animationFillMode: "forwards" }}
        >
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#4a8b94"
          />
        </h2>
        <p
          className="text-base-plus font-bodyFont leading-[1.85] text-textSecondary tracking-wide mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "1000ms", animationFillMode: "forwards" }}
        >
          I leverage data to uncover patterns and tell compelling stories,
          turning raw information into clear, actionable insights that drive
          smarter decisions. With a background in energy engineering, I bring a
          unique perspective to data analysis, bridging technical expertise with
          analytical problem-solving.
        </p>
        <p
          className="text-designColor text-base font-medium italic mb-8 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "1200ms", animationFillMode: "forwards" }}
        >
          "Transforming complex data into actionable strategies for sustainable
          growth"
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-8 justify-between">
        <div>
          <h2
            className="text-sm-plus uppercase font-titleFont font-semibold mb-4 text-textSecondary tracking-wider opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1400ms", animationFillMode: "forwards" }}
          >
            Connect with me
          </h2>
          <div className="flex gap-4">
            <a
              href="https://github.com/Christ-GUEDEGBE"
              target="blank"
              className="bannerIcon opacity-0 animate-bounce-in"
              style={{ animationDelay: "1600ms", animationFillMode: "forwards" }}
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/christ-guedegbe-6b3216341/"
              target="blank"
              className="bannerIcon opacity-0 animate-bounce-in"
              style={{ animationDelay: "1700ms", animationFillMode: "forwards" }}
            >
              <FaLinkedinIn className="text-xl" />
            </a>
            <a
              href="https://twitter.com/"
              target="blank"
              className="bannerIcon opacity-0 animate-bounce-in"
              style={{ animationDelay: "1800ms", animationFillMode: "forwards" }}
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href="mailto:christguedegbe@gmail.com"
              className="bannerIcon opacity-0 animate-bounce-in"
              style={{ animationDelay: "1900ms", animationFillMode: "forwards" }}
            >
              <FaEnvelope className="text-xl" />
            </a>
          </div>
        </div>
        <div>
          <h2
            className="text-sm-plus uppercase font-titleFont font-semibold mb-6 text-textSecondary tracking-wider opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1400ms", animationFillMode: "forwards" }}
          >
            Main Tools
          </h2>
          <div className="flex gap-6">
            <div
              className="bannerIcon opacity-0 animate-bounce-in"
              style={{ animationDelay: "2000ms", animationFillMode: "forwards" }}
            >
              <FaPython className="text-xl text-[#3776AB]" />
            </div>
            <div
              className="bannerIcon opacity-0 animate-bounce-in"
              style={{ animationDelay: "2100ms", animationFillMode: "forwards" }}
            >
              <FaDatabase className="text-xl text-designColor" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
