import React, { useRef, useState } from "react";

function Navigation() {
  const [toggle, setToggle] = useState(false);
  const navList = useRef(null);
  const navbar = useRef(null);

  const handleClick = () => {
    setToggle(!toggle);
    const list = navList.current;
    list.classList.toggle("nav-active");
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
        <a href="/" className="navbar-brand"></a>
        <ul className="nav-list" ref={navList}>
          <li className="nav-item">
            <a className="nav-link active" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/writings">
              Writings
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/bookmarks">
              Bookmarks
            </a>
          </li>
        </ul>
        <button className="bars" onClick={handleClick}>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
