import "./Banner.scss";
import bannerImage from "../../assets/icon/bannerImg.png";

function Banner() {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Bannière" className="banner__image" />
      <div className="banner__overlay"></div>
      <h1 className="banner__text">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
