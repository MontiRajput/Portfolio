import { useState } from "react";
import "./Navbar.css";
import highlighter from "../../assets/highlighter.svg";
import { Link } from "react-scroll";
import nav_mob_open from "../../assets/nav_mob_open.svg";
import nav_mob_close from "../../assets/nav_mob_close.svg";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = (value) => {
    setIsOpen(value);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsOpen(false); // Close mobile menu
  };

  return (
    <div className="navbar">
      <div className="logo">MoNTI</div>
      <img
        src={nav_mob_open}
        alt=""
        className="nav_open"
        onClick={() => handleOpenMenu(true)}
      />
      <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
        <img
          src={nav_mob_close}
          alt=""
          className="nav_close"
          onClick={() => handleOpenMenu(false)}
        />
        {[
          { name: "Home", link: "home" },
          { name: "About Me", link: "About" },
          { name: "Services", link: "Services" },
          { name: "Portfolio", link: "MyWork" },
          { name: "Contact", link: "Contact" },
        ].map((item) => (
          <li
            key={item.name}
            className={`link ${activeLink === item.name ? "active" : ""}`}
          >
            <Link
              className={`anchor_link ${item.name}`}
              to={item.link}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => handleLinkClick(item.name)}
            >
              {item.name}
              <img src={highlighter} alt="" />
            </Link>
          </li>
        ))}
      </ul>
      <div className="nav-connect">
        <Link
          className="anchor_link"
          to="Contact"
          smooth={true}
          offset={-100}
          duration={500}
        >
          Connect with me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
