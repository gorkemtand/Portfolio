import React from "react";
import Projects from "./Projects";
import Head from "./Head";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { BrowserRouter as Router} from "react-router-dom";




function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <section id="head">
          <Head />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
