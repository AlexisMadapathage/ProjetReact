import { useState, useEffect } from "react";
import "./Gallery.scss";
import leftArrow from "../../assets/icons/icon-arrow.png";
import rightArrow from "../../assets/icons/icon-arrow.png";

function Gallery() {
  const [logements, setLogements] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 📌 Charger les données depuis "public/data.json"
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setLogements(data))
      .catch((error) => console.error("Erreur lors du chargement des données:", error));
  }, []);

  if (logements.length === 0) {
    return <p>Chargement des logements...</p>;
  }

  const { pictures, title } = logements[currentIndex];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logements.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? logements.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery">
      <h2 className="gallery__title">{title}</h2>

      <img className="gallery__image" src={pictures[0]} alt={`Logement ${currentIndex + 1}`} />

      {logements.length > 1 && (
        <>
          <button className="gallery__arrow gallery__arrow--left" onClick={prevImage}>
            <img src={leftArrow} alt="Précédent" />
          </button>
          <button className="gallery__arrow gallery__arrow--right" onClick={nextImage}>
            <img src={rightArrow} alt="Suivant" />
          </button>
          <div className="gallery__counter">
            {currentIndex + 1} / {logements.length}
          </div>
        </>
      )}
    </div>
  );
}

export default Gallery;