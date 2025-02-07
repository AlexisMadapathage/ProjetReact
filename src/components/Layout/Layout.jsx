import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.scss";

function Layout ({ children }) {
    return (
        <div className="layout">
          <Header />
          <main className="layout__content">{children}</main>
          <Footer />
        </div>
      );
    }

export default Layout;