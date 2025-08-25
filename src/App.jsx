import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import HeroCarousel from "./components/HeroCarousel/HeroCarousel.jsx";
import MenuSection from "./components/MenuSection/MenuSection.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MapSection from "./components/MapSection/MapSection.jsx";
import DeliverySection from "./components/DeliverySection/DeliverySection.jsx";

function App() {
  return(
    <>
    <Navbar/>
    <HeroCarousel/>
    <DeliverySection/>
    <MenuSection/>
    <MapSection/>
    <Footer/>
    </>
  )
}



export default App


// Components moved into separate files.
