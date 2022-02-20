import React from "react";
import Footer from "../components/Footer";
import Header from "../sections/CatalogoSections/Header";
import Market from "../sections/CatalogoSections/Market";

function Catalogo() {
  return (
    <div>
      {/* <div id="preloader">
        <div className="jumper">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div> */}

      <Header />
      <Market />
      <Footer />

      <script src="vendor/jquery/jquery.min.js"></script>
      <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

      <script src="assets/js/custom.js"></script>
      <script src="assets/js/owl.js"></script>
      <script src="assets/js/slick.js"></script>
      <script src="assets/js/isotope.js"></script>
      <script src="assets/js/accordions.js"></script>
    </div>
  );
}

export default Catalogo;
