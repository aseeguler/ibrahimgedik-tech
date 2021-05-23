import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
