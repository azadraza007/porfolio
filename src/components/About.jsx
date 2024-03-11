import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl">
          I'm a passionate frontend developer with a keen eye for detail and a
          strong desire to create engaging and user-friendly web experiences.
          With 1 years of experience in the industry, I've had the opportunity
          to work on a variety of projects ranging from responsive websites to
          interactive web applications. <br />
          <strong>Skills & Expertise:</strong>
          <br />
          Proficient in HTML, CSS, and JavaScript, with a focus on modern
          frontend frameworks like React.js and Next.js. <br />
          Experienced in responsive web design, ensuring optimal viewing
          experiences across desktops, tablets, and mobile devices. <br />
          Skilled in UI/UX design principles, creating visually appealing
          interfaces that prioritize usability and accessibility. <br />
          Familiar with version control systems such as Git and collaborative
          development workflows.
        </p>
      </div>
    </div>
  );
};

export default About;
