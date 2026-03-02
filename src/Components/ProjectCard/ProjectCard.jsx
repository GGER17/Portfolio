import ImageCarousel from "../ImageCarousel/ImageCarousel";
import "./ProjectCard.css";

export default function ProjectCard({
  title,
  description,
  images,
  github,
  demo,
}) {
  return (
    <div className="project-card">
      {" "}
      <h3 className="project-card__title">{title}</h3>{" "}
      <ImageCarousel images={images} />{" "}
      <p className="project-card__description">{description}</p>{" "}
      <div className="project-card__links">
        {" "}
        {github && (
          <a href={github} target="_blank" className="project-card__button">
            {" "}
            View Code{" "}
          </a>
        )}{" "}
        {demo && (
          <a href={demo} target="_blank" className="project-card__button">
            {" "}
            Video Demo{" "}
          </a>
        )}{" "}
      </div>{" "}
    </div>
  );
}
