import React from "react";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Pagination({ buscar, numero, total }) {
  return (
    <div classNameName="Pagination">
      <FontAwesomeIcon
        icon={faArrowLeft}
        onClick={() => buscar("atras")}
        color="white"
        size="lg"
      />
      <h6 style={{ marginLeft: 10, marginRight: 10, fontSize: 20 }}>
        {numero}-{total}
      </h6>
      <FontAwesomeIcon
        onClick={() => buscar("siguiente")}
        icon={faArrowRight}
        color="white"
        size="lg"
      />
    </div>
  );
}
