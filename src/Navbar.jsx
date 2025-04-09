import React, { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.jpg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainer = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linksHeight = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button onClick={toggleLinks} className="nav-toggle">
            <FaBars />
          </button>
        </div>

        <div
          className="links-container"
          ref={linksContainer}
          style={linksHeight}
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* social icons */}

        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon} </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
