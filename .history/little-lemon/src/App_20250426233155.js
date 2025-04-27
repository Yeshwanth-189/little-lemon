import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Navigation/NavBar";
import Hero from "./components/Hero/Hero";
import Specials from "./components/Specials/Specials";
import Testimonials from "./components/Testimonials/Testimonials";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Reservation from "./components/Reservation/Reservation";
import ReservationImages from "./components/ReservationImages/ReservationImages";
import PersonalDetails from "./components/PersonalDetails/PersonalDetails";

function Home() {
  return (
    <div>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
}

function Menu() {
  return <h1>Menu Page</h1>;
}

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/reservation"
          element={
            <>
              <Reservation />
              <ReservationImages />
            </>
          }
        />
        <Route path="/personal-details" element={<PersonalDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
