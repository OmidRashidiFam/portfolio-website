import React from "react";

import "./App.css";

import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
    </div>
  );
}

export default App;
