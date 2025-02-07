import React, { useState, useEffect } from "react";
import footerDesktop from "../../assets/icon/FooterDesktop.png";
import footerMobile from "../../assets/icon/FooterMobile.png";
import "./Footer.scss";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="footer">
      <img
        src={isMobile ? footerMobile : footerDesktop}
        alt="Footer"
        className="footer-image"
      />
    </footer>
  );
};

export default Footer;