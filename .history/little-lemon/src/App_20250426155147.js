import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Navigation/NavBar";

function Home() {
  return <h1>Home Page</h1>;
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
    <div className="container">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </Router>
      <div className="column"></div>
      <div className="column"></div>
      <div className="column"></div>
      <div className="column"></div>
      <div className="column"></div>
    </div>
  );
}

export default App;
