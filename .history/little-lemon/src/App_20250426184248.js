import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Navigation/NavBar";
import Hero from "./components/Hero/Hero";
import Specials from "./components/Specials/Specials";
import Testimonials from "./components/Testimonials/Testimonials";
import About from "./components/About/About";

function Home() {
  return (
    <div>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </div>
  );
}

function Menu() {
  return <h1>Menu Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Reservation() {
  return <h1>Reservation Page</h1>;
}

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </Router>
  );
}

export default App;
