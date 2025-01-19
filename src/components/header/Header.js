import iceCreamImg from "../../assets/images/ice-cream.png";
import Navigation from "./Navigation";
import SearchForm from "./SearchForm";
import "./Header.css";

const Header = ({ onMenuFilter }) => {
  return (
    <header className="header-section">
      <div className="container">
        <div className="header-section__content">
          <div className="header-section__logo">
            <a href="https://lilitmkrtchyan-code.github.io/Ice-Cream-Menu/">
              <img src={iceCreamImg} alt="logo" />
            </a>
          </div>
          <div className="header-section__nav">
            <Navigation />
            <SearchForm onMenuFilter={onMenuFilter} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
