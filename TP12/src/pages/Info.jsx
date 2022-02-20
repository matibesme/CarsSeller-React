import React from "react";
import Footer from "../components/Footer";
import Header from "../sections/SobreNsSections/Header";
import Miembros from "../sections/SobreNsSections/Miembros";
import Servicios from "../sections/SobreNsSections/Servicios";

function Info() {
  return (
    <div>
      {/*    <div id="preloader">
        <div className="jumper">
            <div></div>
            <div></div>
            <div></div>
        </div>
        </div>   */}

      <Header />
      <Miembros />
      <Servicios />
     
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

export default Info;
