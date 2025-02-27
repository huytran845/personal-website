// Node Modules
import { useState } from "react";
import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imgSrc.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imgSrc.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentSrc = imgSrc[currentIndex];
  const isVideo = imgSrc[currentIndex].endsWith(".mp4");

  return (
    <div
      className={
        "relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " +
        classes
      }
    >
      <figure className="img-box rounded-lg mb-4">
        {isVideo ? (
          <video controls className="img-cover">
            <source src={currentSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={currentSrc}
            alt={title}
            loading="lazy"
            className="img-cover"
          />
        )}
      </figure>

      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="title-1 mb-3">{title}</h3>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <span
                key={key}
                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        {imgSrc.length < 2 ? null : (
          <div className="navigation-buttons grid grid-cols-3 place-items-center">
            <button onClick={handlePrevClick}>
              <span className="material-symbols-rounded image-btn">
                arrow_back
              </span>
            </button>
            <h3 className="title-1 mb-1">
              {currentIndex + 1} of {imgSrc.length}{" "}
            </h3>
            <button onClick={handleNextClick}>
              <span className="material-symbols-rounded image-btn">
                arrow_forward
              </span>
            </button>
          </div>
        )}
        <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 hover:bg-sky-300 text-zinc-950 shrink-0">
          <span className="material-symbols-rounded" aria-hidden="true">
            arrow_outward
          </span>
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute w-11 h-11 right-3 "
          ></a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
