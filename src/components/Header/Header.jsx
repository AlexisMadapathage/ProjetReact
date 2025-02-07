import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/icon/Logo.png";

function Header() {
    return (
        <header className="header">
            <div className="container"> {/* Ajout du container ici */}

                <div className="header__logo">
                    <img src={logo} alt="Logo Kasa" className="header__logo" />
                </div>
                <nav className="header__nav">
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/about">À propos</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;