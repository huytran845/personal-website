// Components
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/python.svg",
    label: "Python",
    desc: "Language",
  },
  {
    imgSrc: "/images/cpp.svg",
    label: "C++",
    desc: "Language",
  },
  {
    imgSrc: "/images/c.svg",
    label: "C",
    desc: "Language",
  },
  {
    imgSrc: "/images/github.svg",
    label: "Github",
    desc: "Version Control",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/typescript.svg",
    label: "TypeScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/postgres.svg",
    label: "PostgreSQL",
    desc: "Database",
  },
  {
    imgSrc: "/images/css.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/html.svg",
    label: "HTML",
    desc: "Webpage Structure",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Frontend Framework",
  },
  {
    imgSrc: "/images/angular.svg",
    label: "Angular",
    desc: "Frontend Framework",
  },
  {
    imgSrc: "/images/flask.svg",
    label: "Flask",
    desc: "Backend Framework",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/godot.svg",
    label: "Godot",
    desc: "Game Engine",
  },
];

const Skill = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="headline-2">Technologies I've Worked With</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Listed here are technologies and tools I've experienced during my
          educational career, and project building journey.
        </p>
        <div className="skill-card-container">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
