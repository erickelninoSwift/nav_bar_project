import { useState, useRef } from "react";
import "./index.css";
import logo from "./logo.svg";
import {
  FaBars,
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
export const Navbar = ({ links, socials }) => {
  const [showList, setShowList] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    console.log(linksContainerRef.current.getBoundingClientRect());

    setShowList(!showList);
  };

  return (
    <nav>
      <div className="navBar">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div
          className={showList ? "links show-container" : "links"}
          ref={linksContainerRef}
        >
          <ul ref={linksRef} className="links-container">
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="icons-link">
          {socials.map((social) => {
            return (
              <li key={social.id}>
                <a href={social.url}>{social.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
