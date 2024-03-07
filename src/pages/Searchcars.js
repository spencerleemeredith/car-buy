import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import AffordCars from "../components/home/AffordCars";
import GreatValue from "../components/home/GreatValue";
import Selling from "../components/Selling";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
// import SearchCars from "../components/Searchcars";


function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <AffordCars />
      <GreatValue />
      <Selling />
      <Testimonials />
      <Footer />
      {/* <SearchCars /> */}
    </main>
  );
}

export default Home;
