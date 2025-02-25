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
    <div className={"" + classes}>
      <figure className="">
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
      {imgSrc.length < 2 ? null : (
        <div className="navigation-buttons">
          <button onClick={handlePrevClick}>
            <span className="material-symbols-rounded image-btn">
              arrow_back
            </span>
          </button>
          <button onClick={handleNextClick}>
            <span className="material-symbols-rounded image-btn">
              arrow_forward
            </span>
          </button>
        </div>
      )}

      <div className="">
        <div>
          <h3 className="title-1">{title}</h3>
          <div className="">
            {tags.map((label, key) => (
              <span key={key} className="mr-2">
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="">
          <span className="material-symbols-rounded" aria-hidden="true">
            arrow_outward
          </span>
        </div>
      </div>

      <a href={projectLink} target="_blank" className=""></a>
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
