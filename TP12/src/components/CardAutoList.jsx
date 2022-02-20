import React from "react";

function CardAutoList({ data }) {
  return (
    <div className="card">
      <div className="product-item">
        <a href="#">
          <img className="auto" src={data.img} alt="Car" />
        </a>
        <div className="down-content">
          <a href="#">
            <p className="marcaName">{data.marca}</p>
            <p className="nombreAuto"> {data.nombre} </p>
          </a>
          <h6> ${data.precio} </h6>
          <p>{data.descrpicion}</p>
          <ul className="stars">
            <li>
              <i className="fa fa-star"></i>
            </li>
            <li>
              <i className="fa fa-star"></i>
            </li>
            <li>
              <i className="fa fa-star"></i>
            </li>
            <li>
              <i className="fa fa-star"></i>
            </li>
            <li>
              <i className="fa fa-star"></i>
            </li>
          </ul>
          <span>Reviews (12)</span>
        </div>
      </div>
    </div>
  );
}

export default CardAutoList;
