import Credits from "./OtherPages/ Credits";
import About from "./OtherPages/About";
import Contact from "./OtherPages/Contact";
import "./Home.scss";

export default function Home({ page, handlePopupChange }) {
  switch (page) {
    case "about":
      return <About />;
    case "credits":
      return <Credits />;
    case "contact":
      return <Contact />;
    default:
      return (
        <div className="home">
          <h1 className="titleGlow">A la Recherche de la Gaufre Perdue</h1>
          <button
            className="home__button"
            onClick={() => handlePopupChange("choosePath")}
          >
            Commencer l'aventure !
          </button>
        </div>
      );
  }
}
