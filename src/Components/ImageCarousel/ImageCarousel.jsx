import { useState, useEffect } from "react";
import "./ImageCarousel.css";

export default function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (!isModalOpen) return;
    const handleKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setIsModalOpen(false);
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [isModalOpen]);

  return (
    <>
      {" "}
      <div className="carousel">
        {" "}
        <button className="carousel__btn" onClick={prev}>
          ←
        </button>{" "}
        <div className="carousel__image-container">
          <img
            src={images[index]}
            alt="project"
            className="carousel__image"
            onClick={() => setIsModalOpen(true)}
          />{" "}
        </div>
        <button className="carousel__btn" onClick={next}>
          →
        </button>{" "}
      </div>{" "}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-arrow left" onClick={prev}>
              ←
            </button>
            <div className="modal__image-container">
              <img src={images[index]} alt="zoomed" className="modal-image" />
            </div>
            <button className="modal-arrow right" onClick={next}>
              →
            </button>
            <button
              className="modal-close"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
