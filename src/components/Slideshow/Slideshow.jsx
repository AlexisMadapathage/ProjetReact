import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Slideshow.scss";

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Si une seule image, pas besoin de flèches ni de numérotation
  if (!pictures || pictures.length === 0) {
    return null;
  }
  
  const totalImages = pictures.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  return (
    <div className="slideshow">
      <img src={pictures[currentIndex]} alt={`Image ${currentIndex + 1}`} className="slideshow__image" />

      {totalImages > 1 && (
        <>
          <button className="slideshow__arrow slideshow__arrow--left" onClick={prevSlide}>
            <FaChevronLeft />
          </button>
          <button className="slideshow__arrow slideshow__arrow--right" onClick={nextSlide}>
            <FaChevronRight />
          </button>
          <span className="slideshow__counter">
            {currentIndex + 1} / {totalImages}
          </span>
        </>
      )}
    </div>
  );
}

export default Slideshow;
