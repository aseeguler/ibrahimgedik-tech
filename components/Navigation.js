import React, { useRef, useState } from "react";
import {useRouter} from 'next/router'

function Navigation() {
  const [toggle, setToggle] = useState(false);
  const navList = useRef(null);
  const navbar = useRef(null);
  const toggleBar = useRef(null)

  const router = useRouter();

  const handleClick = () => {
    setToggle(!toggle);
    const list = navList.current;
    const bar = toggleBar.current;
    list.classList.toggle("nav-active");
    bar.classList.toggle('nav-active');
    document.body.classList.toggle('nav-active');
  };

  if (typeof window !== "undefined") {
    const handleScroll = () => {
      var nav = navbar.current;
      var offset = window.scrollY;
      if (offset > 60) {
        nav.classList.add("nav-active");
      }else {
        nav.classList.remove('nav-active');
      }
    };
    window.addEventListener("scroll", handleScroll);
  }

 

  return (
    <nav className="navbar" ref={navbar}>
      <div className="container">
        <a href="/" className="navbar-brand" aria-label="İbrahim Gedik Logo"></a>
        <ul className="nav-list" ref={navList}>
          <li className="nav-item">
            <a className={router.pathname == "/" ? "nav-link active" : "nav-link"} href="/" aria-label="Home page">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className={router.pathname == "/about" ? "nav-link active" : "nav-link"} href="/about" aria-label="About page">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className={router.pathname == "/writings" ? "nav-link active" : "nav-link"} href="/writings" aria-label="Writings page">
              Writings
            </a>
          </li>
          <li className="nav-item">
            <a className={router.pathname == "/bookmarks" ? "nav-link active" : "nav-link"} href="/bookmarks" aria-label="Bookmarks page">
              Bookmarks
            </a>
          </li>
        </ul>
        <button className="bars" onClick={handleClick} ref={toggleBar} aria-label="Mobile Menu Button">
          <div className="bar bar-1"></div>
          <div className="bar bar-2"></div>
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
