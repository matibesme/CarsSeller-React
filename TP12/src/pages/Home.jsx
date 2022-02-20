import React from "react";

import UltProductos from "../sections/HomeSections/UltProductos";
import Slider from "../components/Slider";
import MiniAbout from "../sections/HomeSections/MiniAbout";
import IrCatalogo from "../sections/HomeSections/IrCatalogo";
import Footer from "../components/Footer";
import Carrousle from "../sections/HomeSections/Carrousle";


function Home() {
  return (
    <div>
      {/* <div id="preloader">
        <div className="jumper">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div> */}

      
      <Carrousle/>
      <UltProductos />
      <MiniAbout />
      <IrCatalogo />
      <Footer/>

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

export default Home;
