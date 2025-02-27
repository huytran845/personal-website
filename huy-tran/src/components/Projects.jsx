//Components
import ProjectCard from "./ProjectCard";

const projectItem = [
  {
    imgSrc: ["/images/cssi-portal-demo.mp4"],
    title: "CSSI Web Portal",
    tags: ["Web-design", "SPA", "API"],
    projectLink:
      "https://github.com/McAlvain-Colin/team_three_star/tree/dev/cssi-web-portal",
  },
  {
    imgSrc: [
      "/images/todo-app-1.png",
      "/images/todo-app-2.png",
      "/images/todo-app-3.png",
    ],
    title: "To Do app",
    tags: ["Web-design", "SPA"],
    projectLink: "https://github.com/huytran845/personal-website",
  },
  {
    imgSrc: ["/images/portfolio.png"],
    title: "Portfolio Website",
    tags: ["Web-design", "SPA"],
    projectLink: "https://github.com/huytran845/personal-website",
  },
  {
    imgSrc: [
      "/images/kitchentrains-1.png",
      "/images/kitchentrains-2.png",
      "/images/kitchentrains-3.png",
      "/images/kitchentrains-4.png",
    ],
    title: "Hackathon RPG Game",
    tags: ["Game-design", "Godot"],
    projectLink: "https://github.com/huytran845/hackathon-HTTYK",
  },
  {
    imgSrc: ["/images/goldfish-docker.png"],
    title: "Automated Go-Fish",
    tags: ["Deployment", "Testing"],
    projectLink: "https://github.com/huytran845/CS-333-Final-Project",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="headline-2 mb-4">My Portfolio</h2>
        <div className="project-container">
          {projectItem.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
