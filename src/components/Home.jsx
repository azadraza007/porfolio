import React from "react";
import { FaArrowRight } from "react-icons/fa";
import raza from "../assets/raza.jpg";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="w-full
    bg-gradient-to-b from-black via-black to-gray-800 h-screen"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col item-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am frontend developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I designed and developed a responsive portfolio website to showcase
            my frontend development skills and projects. The website features a
            modern and clean design, with attention to detail in typography,
            layout, and user experience. It is built using HTML, CSS, and
            JavaScript,React js, Next js with a focus on responsive design
            principles to ensure compatibility across various devices and screen
            sizes.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <FaArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={raza}
            alt="my Img"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
