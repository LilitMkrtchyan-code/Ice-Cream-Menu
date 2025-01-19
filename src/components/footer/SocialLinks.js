import facebookIcon from "../../assets/images/facebook.png";
import instagramIcon from "../../assets/images/instagram.png";
import wikipediaIcon from "../../assets/images/wikipedia.png";
import "./SocialLinks.css";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <div className="social-icon">
        <a href="https://www.facebook.com/i.love.icecream/">
          <img src={facebookIcon} alt="facebook Icon" />
        </a>
      </div>
      <div className="social-icon">
        <a href="https://www.instagram.com/icecream/?hl=en">
          <img src={instagramIcon} alt="instagram Icon" />
        </a>
      </div>
      <div className="social-icon">
        <a href="https://en.wikipedia.org/wiki/Ice_cream">
          <img src={wikipediaIcon} alt="wikipedia Icon" />
        </a>
      </div>
    </div>
  );
};
export default SocialLinks;
