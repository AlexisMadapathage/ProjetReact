import "./Banner.scss";
import bannerHome from "../../assets/icon/bannerImg.png";  // Image pour Home
import bannerAbout from "../../assets/icon/AboutImg.png"; // Image pour About

function Banner({ page }) {

  const bannerImage = page === "about" ? bannerAbout : bannerHome;

  return (
    <div className="banner">
      <img src={bannerImage} alt="Bannière" className="banner__image" />
      <div className="banner__overlay"></div>
      {page !== "about" && <h1 className="banner__text">Chez vous, partout et ailleurs</h1>}
    </div>
  );
}

export default Banner;