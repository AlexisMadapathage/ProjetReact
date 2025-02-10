import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Slideshow from "../components/Slideshow/Slideshow";
import Collapse from "../components/Collapse/Collapse";
import "./Details.scss";

function Details() {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const [logement, setLogement] = useState(null); // Commence à `null`

  useEffect(() => {
    fetch("/data.json") // Charge le fichier JSON
      .then((response) => response.json())
      .then((jsonData) => {
        const foundLogement = jsonData.find((item) => item.id === id);
        if (foundLogement) {
          setLogement(foundLogement);
        } else {
          setLogement(undefined); // Indique qu'aucun logement ne correspond
        }
      })
      .catch((error) => console.error("Erreur lors du chargement du JSON :", error));
  }, [id]);

  // Redirection vers la page 404 si l'ID ne correspond à aucun logement
  if (logement === undefined) {
    return <Navigate to="/404" />;
  }

  // Attendre que les données soient chargées
  if (!logement) {
    return <p>Chargement en cours...</p>;
  }

  return (
    <div className="container">
      {/* Slideshow pour afficher les images */}
      <Slideshow pictures={logement.pictures} />

      {/* Informations principales */}
      <div className="details__header">
        <div className="details__info">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="details__tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="details__tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* Infos sur l'hôte */}
        <div className="details__host">
          <div className="details__host-info">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <div className="details__rating">
            {"★".repeat(Number(logement.rating))}
            {"☆".repeat(5 - Number(logement.rating))}
          </div>
        </div>
      </div>

      {/* Description et équipements */}
      <div className="details__collapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipements" content={logement.equipments.join(", ")} />
      </div>
    </div>
  );
}

export default Details;