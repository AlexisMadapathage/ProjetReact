import { useNavigate } from "react-router-dom"; //hook qui permet de naviguer entre les pages sans recharger l’application
import "./Card.scss";

function Card({ id, title, cover }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/logement/${id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={cover} alt={title} className="card__image" />
      <h3 className="card__title">{title}</h3>
    </div>
  );
}

export default Card;