import React, { useState, useEffect } from "react";
import ListadoCards from "../../components/ListadoCards";

function UltProductos() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    buscar();
  }, []);

  const buscar = async () => {
    const response = await fetch("./apiTest.json");
    const data = await response.json();
    setResult(data);
  };

  return (
    <div className="products">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="filters-content">
              <div className="row grid">
              <h2>Latest Products</h2>
                <ListadoCards result={result} vista={"Grilla"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UltProductos;
