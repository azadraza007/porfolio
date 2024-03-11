import React from "react";
import html from "../assets/icons8-html-logo-48.png";
import css from "../assets/icons8-css-48.png";
import javascript from "../assets/icons8-javascript-48.png";
import reactImg from "../assets/ReactImage.png";
import tailwind from "../assets/icons8-tailwind-css-24.png";
import nextjs from "../assets/icons8-next-50.png";
import github from "../assets/icons8-github-50.png";
import java from "../assets/icons8-java-50.png";
import dsa from "../assets/icons8-data-structure-64.png";
import bootstrap from "../assets/icons8-bootstrap-48.png";
import cPanel from "../assets/icons8-cpanel-32.png";

const Experience = () => {
  const tech = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImg,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next.js",
      style: "shadow-white",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: java,
      title: "Java",
      style: "shadow-orange-500",
    },
    {
      id: 9,
      src: dsa,
      title: "Data Structure and Algorithm",
      style: "shadow-red-500",
    },
    {
      id: 10,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 11,
      src: cPanel,
      title: "cPanel",
      style: "shadow-orange-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen pt-10 pb-10"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        {" "}
        <div className="">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            {" "}
            Experience
          </p>
          <p className="py-6">
            These are the technologies I've worked on:
          </p>{" "}
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {tech.map((item) => (
            <div
              key={item.id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${item.style}`}
            >
              <img src={item.src} alt={item.title} className="w-20 mx-auto" />{" "}
              {/* Added alt text for accessibility */}
              <p className="mt-4">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
