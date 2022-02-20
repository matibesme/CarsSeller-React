import React, { useState, useEffect } from "react";
import ListadoCards from "../../components/ListadoCards";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTh } from "@fortawesome/free-solid-svg-icons";

function Market() {
  const [result, setResult] = useState([]);
  const [resultArray, setResultArray] = useState([]);
  const [filterMarca, setFilterMarca] = useState("All Products");
  const [filterOrden, setFilterOrden] = useState("Ascendente");
  const [filterRango, setFilterRango] = useState(null);
  const [vista, setVista] = useState("Grilla");

  useEffect(() => {
    buscar();
  }, []);

  const buscar = async () => {
    const response = await fetch("./apiTest.json");
    const data = await response.json();
    setResult(data);
    setResultArray(data);
  };

  useEffect(() => {
    filtrarPorMarca();
  }, [filterMarca]);

  useEffect(() => {
    ordenarPorPrecio(filterOrden);
  }, [filterOrden]);

  useEffect(() => {
    ordenarPorRango(filterRango);
  }, [filterRango]);


  function ordenarPorRango(how) {
    var ordenados;
    
    const rangos = {
      "$500-$30000":(x) => x.precio >= 500 && x.precio <= 30000,
      "$35000-$2130000":(x) => x.precio >= 35000 && x.precio <= 21300000,
    }

    ordenados = result.filter((resultado) => {
      var res = false
      if (rangos[how](resultado) ) {
        res = true
      }
      return res
    })


    setResultArray(ordenados);
  }



  function ordenarPorPrecio(how) {
    var ordenados;
    function compareAsc(a, b) {
      if (a.precio < b.precio) {
        return -1;
      }
      if (a.precio > b.precio) {
        return 1;
      }
      return 0;
    }

    function compareDesc(a, b) {
      if (a.precio > b.precio) {
        return -1;
      }
      if (a.precio < b.precio) {
        return 1;
      }
      return 0;
    }

    if (how === "Ascendente") {
      ordenados = resultArray.sort(compareAsc).slice();
    } else if (how === "Descendente") {
      ordenados = resultArray.sort(compareDesc).slice();
    }
    setResultArray(ordenados);
  }

  function filtrarPorMarca() {
    setResultArray(
      result.filter(
        (auto) => auto.marca === filterMarca || filterMarca === "All Products"
      )
    );
  }

  const handleOrderChange = (e) => {
    setFilterOrden(e.target.innerHTML);
  };

  const handleFilterChange = (e) => {
    setFilterMarca(e.target.innerHTML);

  };

  const handleRangoChange = (e) => {
    setFilterRango(e.target.innerHTML);
  };

  return (
    <div className="products">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="filters">
              <ul>
                <li>
                  <FontAwesomeIcon
                    icon={faList}
                    onClick={() => setVista("Lista")}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faTh}
                    onClick={() => setVista("Grilla")}
                  />
                </li>
                <li onClick={handleOrderChange}>Descendente</li>
                <li onClick={handleOrderChange}>Ascendente</li>
                <li

                  data-filter="*"
                  onClick={handleFilterChange}
                >
                  All Products
                </li>
                <li name="Ferrari" onClick={handleFilterChange}>
                  Ferrari
                </li>
                <li name="Lamborghini" onClick={handleFilterChange}>
                  Lamborghini
                </li>
                <li name="Porsche" onClick={handleFilterChange}>
                  Porsche
                </li>
              </ul>
            </div>
            <div className="filters">
              <ul>
                <li onClick={handleRangoChange}>
                  $500-$30000
                </li>
                <li onClick={handleRangoChange}>
                  $35000-$2130000
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-12">
            <div className="filters-content">
              <div className="row grid">
                <ListadoCards result={resultArray} vista={vista} />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <ul className="pages">
              <li>
                <a href="#">1</a>
              </li>
              <li className="active">
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Market;
