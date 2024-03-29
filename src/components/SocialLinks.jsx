import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import { CiMail } from "react-icons/ci";
import { GrResume } from "react-icons/gr";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkdein <FaLinkedin size={30} />
        </>
      ),
      href: "http://linkdein.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/azadraza007",
      style: "rounded-tr-md",
    },
    {
      id: 3,
      child: (
        <>
          mail <CiMail size={30} />
        </>
      ),
      href: "mailto:mohammadrazaamu@gmail.com",
      style: "rounded-tr-md",
    },
    {
      id: 1,
      child: (
        <>
          Resume <GrResume size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-tr-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex  flex-col top-[35%] left-0 fixed ">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-[-10px] hover:rounded-md duration-300" +
              "" +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              rel="moreferrer"
              target="_blank"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
