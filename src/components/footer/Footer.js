import "./Footer.css";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <SocialLinks />
          <div>
            © {new Date().getFullYear()} Ice Cream Menu. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
