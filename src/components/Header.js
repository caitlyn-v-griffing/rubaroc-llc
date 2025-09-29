import React, { useEffect, useState } from "react";
import "./Header.css"; // import the CSS file
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPinterest } from "react-icons/fa";

function Header() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${visible ? "show" : "hide"}`}>
      <div className="header-left">
        <select className="language-select">
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="es">Español</option>
        </select>
      </div>

      <div className="header-right">
        <a href="https://www.facebook.com/Rubaroc" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.youtube.com/channel/UCzBkwjs2vYoGu42yW49RCNQ" target="_blank" rel="noreferrer">
          <FaYoutube />
        </a>
        <a href="https://x.com/RubarocInt" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/rubaroc/?hl=en" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/company/rubaroc/?viewAsMember=true" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://ca.pinterest.com/rubarocrubbersurfacing/" target="_blank" rel="noreferrer">
          <FaPinterest />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
      </div>
    </header>
  );
}

export default Header;
