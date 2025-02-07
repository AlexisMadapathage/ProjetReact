import { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import "./Home.scss";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json") // Charge le fichier JSON
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => console.error("Erreur lors du chargement des données :", error));
  }, []);

  return (
    <div className="container"> {/* Unique container ici */}
      <Banner />
      <div className="cards-container">
        {data.map((item) => (
          <Card key={item.id} title={item.title} cover={item.cover} />
        ))}
      </div>
    </div>
  );
}

export default Home;