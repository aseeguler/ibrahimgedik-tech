import React from "react";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { SiVsco } from "react-icons/si";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-nav">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/about" className="nav-link">
            About
          </a>
          <a href="/writings" className="nav-link">
            Writings
          </a>
          <a href="/bookmarks" className="nav-link">
            Bookmarks
          </a>
        </div>
        <div className="footer-nav-social">
          <div className="social">
            <a href="https://github.com/ibrahimgediktr" target="_blank" aria-label="İbrahim Gedik Github Account">
              <AiFillGithub color="#fff" size={23} />
            </a>
            <a href="https://twitter.com/ibrahimgediktr" target="_blank" aria-label="İbrahim Gedik Twitter Account">
              <AiOutlineTwitter color="#fff" size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ibrahimgedik/" aria-label="İbrahim Gedik Linkedin Account">
              <AiFillLinkedin color="#fff" size={24} />
            </a>
            <a href="https://vsco.co/ibrahimgedik/gallery" aria-label="İbrahim Gedik Vsco.co Account">
              <SiVsco color="#fff" size={22} />
            </a>
          </div>
          <a href="mailto:ibrahimgediktc@gmail.com" className="gmail">
            ibrahimgediktc <span>at</span> gmail <span>dot</span> com
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
