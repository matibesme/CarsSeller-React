import React from "react";
import Masonry from "react-masonry-css";
import CardAuto from "./CardAuto";
import CardAutoList from "./CardAutoList"

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
  500: 1,
};

function ListadoCards({ result, vista }) {
  return vista === "Grilla" ? (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {result != null
        ? result.map((auto, i) => <CardAuto data={auto} key={i} />)
        : null}
    </Masonry>
  ) : (
    <Masonry
      breakpointCols={1}
      className="my-masonry-list"
      columnClassName="my-masonry-list_column"
    >
      {result != null
        ? result.map((auto, i) => <CardAutoList data={auto} key={i} />)
        : null}
    </Masonry>
  );
}

export default ListadoCards;
