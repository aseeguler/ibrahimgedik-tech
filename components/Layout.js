import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import {motion} from 'framer-motion'

function Layout({ children }) {
  return (
    <>
      <Navigation />
        <motion.main 
        className="main"
        initial={{
          opacity:0,
          y:-100
        }}
        animate={{
          opacity:1,
          y:0
        }}
        transition={{
          // delay:0.1,
          duration:0.5
        }}
        >{children}
        </motion.main>
      <Footer />
    </>
  );
}

export default Layout;
