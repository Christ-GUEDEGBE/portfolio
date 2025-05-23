import React from 'react'
// Import FaGithub
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Christ GUEDEGBE</h3>
        <p className="text-lg font-normal text-gray-400">
          Data Analyst
        </p>
        <p className="text-base text-gray-400 tracking-wide">
           Here are the digital addresses through witch you can contact me.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+229 0190730961</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">divinguedegbe@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          {/* GitHub Link Added */}
          <a href="https://github.com/Christ-GUEDEGBE" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"> {/* Assuming default twitter link is placeholder */}
            <span className="bannerIcon">
              <FaTwitter />
            </span>
          </a>
          <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer"> {/* Assuming default linkedin link is placeholder */}
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;