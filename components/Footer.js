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
          <a href="/" className="nav-link">
            About
          </a>
          <a href="/" className="nav-link">
            Writings
          </a>
          <a href="/" className="nav-link">
            Bookmarks
          </a>
        </div>
        <div className="footer-nav-social">
          <div className="social">
            <a href="">
              <AiFillGithub color="#fff" size={23} />
            </a>
            <a href="">
              <AiOutlineTwitter color="#fff" size={24} />
            </a>
            <a href="">
              <AiFillLinkedin color="#fff" size={24} />
            </a>
            <a href="">
              <SiVsco color="#fff" size={22} />
            </a>
          </div>
          <a href="" className="gmail">
            ibrahimgediktc <span>at</span> gmail <span>dot</span> com
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
