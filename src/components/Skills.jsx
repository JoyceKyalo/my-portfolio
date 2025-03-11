import React from "react";

const Skills = () => {
  const skillsData = [
    { name: "HTML", description: "Proficient in building accessible, semantic webpages." },
    { name: "CSS", description: "Experienced in creating responsive and visually appealing layouts." },
    { name: "JavaScript", description: "Skilled in building dynamic web applications using JavaScript." },
    { name: "React", description: "Building modern, fast, and interactive UIs with React.js." },
    { name: "Python", description: "Experienced in data analysis, automation, and backend development." },
    { name: "Git", description: "Proficient in version control and collaboration using Git." },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div className="skill" key={index}>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
