import Collapse from "../components/Collapse/Collapse";
import Banner from "../components/Banner/Banner";
import "./About.scss";

function About() {
  return (
    <div className="container">
     <Banner page="about" />
      <div className="about__content">
        <Collapse title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Nos équipes vérifient régulièrement les logements." />
        <Collapse title="Respect" content="La bienveillance fait partie des valeurs fondamentales de Kasa. Nos équipes veillent au respect de tous." />
        <Collapse title="Service" content="Nos équipes se tiennent à votre disposition pour vous assurer une expérience exceptionnelle." />
        <Collapse title="Sécurité" content="La sécurité est primordiale. Nous vous offrons des logements totalement sûrs et conformes aux normes en vigueur." />
      </div>
    </div>
  );
}

export default About;
