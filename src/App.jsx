import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import HeroCarousel from "./components/HeroCarousel/HeroCarousel.jsx";
import MenuSection from "./components/MenuSection/MenuSection.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MapSection from "./components/MapSection/MapSection.jsx";
import DeliverySection from "./components/DeliverySection/DeliverySection.jsx";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext.jsx";
import CartPage from "./components/CartPage.jsx";

function App() {
  return (
    <CartProvider>
      <Navbar />

      <Routes>
        {/* головна сторінка */}
        <Route
          path="/"
          element={
            <>
              <HeroCarousel />
              <DeliverySection />
              <MenuSection />
              <MapSection />
              <Footer />
            </>
          }
        />

        {/* сторінка checkout */}
        <Route
          path="/checkout"
          element={
            <>
              <CartPage />
              <MapSection />
              <Footer />
            </>
          }
        />
      </Routes>
    </CartProvider>
  );
}

export default App;
