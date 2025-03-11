import { useState } from 'react'
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from './components/About';
import Projects from "./components/Projects";
import Skills from './components/Skills';
import Contact from './components/Contact';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./styles.css";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      {/* Other sections will go here */}
    </div>
  );
};

export default App;
