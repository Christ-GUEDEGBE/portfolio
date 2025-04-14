import React, { useState, useEffect } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index"
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`w-full h-24 sticky top-0 z-50 transition-all duration-300 ${navbarBg
        ? "bg-[#2a3940]/90 backdrop-blur-md shadow-lg"
        : "bg-gradient-to-r from-[#3d757c] via-[#3a6b71] 30% to-[#356166]"
      } mx-auto flex justify-between items-center font-titleFont`}>
      <div className="flex items-center h-full px-4">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
          className="cursor-pointer"
        >
          <img src={logo} alt="logo" className="h-12" />
        </Link>
      </div>
      <div className="flex items-center h-full pr-4">
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-sm-plus uppercase font-medium text-gray-300 tracking-wider cursor-pointer hover:text-designColorLight duration-300"
              key={_id}
            >
              <Link
                activeClass="text-[#4a7880] border-b-[2px] border-[#4a7880]"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden w-10 h-10 inline-flex items-center justify-center rounded-full text-gray-300 bg-black/20 hover:text-designColorLight cursor-pointer duration-300"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gradient-to-r from-[#3d757c] via-[#3a6b71] 30% to-[#356166] p-6 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="h-12" src={logo} alt="logo" />
                <p className="text-sm text-gray-300 mt-4">
                  Data Analyst specializing in transforming data into actionable insights.
                </p>
              </div>
              <ul className="flex flex-col gap-6">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-sm-plus uppercase font-medium text-gray-300 tracking-wider cursor-pointer hover:text-designColorLight duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="text-[#4a7880] border-b-[2px] border-[#4a7880]"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={800}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-6">
                <h2 className="text-sm-plus uppercase font-medium tracking-wider text-gray-300 mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <span className="w-10 h-10 text-xl bg-black/20 rounded-full inline-flex items-center justify-center hover:text-designColorLight duration-300">
                    <FaFacebookF />
                  </span>
                  <span className="w-10 h-10 text-xl bg-black/20 rounded-full inline-flex items-center justify-center hover:text-designColorLight duration-300">
                    <FaTwitter />
                  </span>
                  <span className="w-10 h-10 text-xl bg-black/20 rounded-full inline-flex items-center justify-center hover:text-designColorLight duration-300">
                    <FaLinkedinIn />
                  </span>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-300 hover:text-designColorLight duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar
