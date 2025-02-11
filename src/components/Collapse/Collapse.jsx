import { useState } from "react"; // hook qui permet de gérer un état local dans un composant fonctionnel
import "./Collapse.scss";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Icônes de flèche

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      {/* En-tête cliquable */}
      <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        {isOpen ? <FaChevronDown className="collapse__icon" /> : <FaChevronUp className="collapse__icon" />}
      </div>

      {/* Contenu conditionnel */}
      {isOpen && <div className="collapse__content">{content}</div>}
    </div>
  );
}

export default Collapse;