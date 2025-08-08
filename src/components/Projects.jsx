//Components
import ProjectCard from "./ProjectCard";

const projectItem = [
  {
    imgSrc: ["/images/cssi-portal-demo.mp4"],
    title: "CSSI Web Portal",
    tags: ["Web-design", "SPA", "API"],
    gitHubLink:
      "https://github.com/McAlvain-Colin/team_three_star/tree/dev/cssi-web-portal",
  },
  {
    imgSrc: [
      "/images/fantasktic-1.png",
      "/images/fantasktic-2.png",
      "/images/fantasktic-3.png",
      "/images/fantasktic-4.png",
      "/images/fantasktic-5.png",
    ],
    title: "Fantasktic AI Task and Project Management App",
    tags: ["Web-design", "SPA", "Appwrite", "AI"],
    gitHubLink: "https://github.com/huytran845/ai-task-manager",
    projectLink: "https://fantasktic.vercel.app",
  },
  {
    imgSrc: [
      "/images/coffeefied-1.png",
      "/images/coffeefied-2.png",
      "/images/coffeefied-3.png",
      "/images/coffeefied-4.png",
    ],
    title: "Caffeine Tracking app",
    tags: ["Web-design", "SPA", "Firebase"],
    gitHubLink: "https://github.com/huytran845/coffee-tracking-app",
    projectLink: "https://coffeefied.netlify.app",
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
    gitHubLink: "https://github.com/huytran845/hackathon-HTTYK",
  },
  {
    imgSrc: ["/images/goldfish-docker.png"],
    title: "Automated Go-Fish",
    tags: ["Deployment", "Testing"],
    gitHubLink: "https://github.com/huytran845/CS-333-Final-Project",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="headline-2 mb-4">My Portfolio</h2>
        <div className="project-container">
          {projectItem.map(
            ({ imgSrc, title, tags, gitHubLink, projectLink }, key) => (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                gitHubLink={gitHubLink}
                projectLink={projectLink}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
