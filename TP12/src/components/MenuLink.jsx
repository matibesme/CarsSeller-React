import React from "react";
import { BrowserRouter as Router, Link, useRouteMatch } from "react-router-dom";

function MenuLink({ label, to, active, none }) {
  let match = useRouteMatch({
    path: to,
    exact: true,
  });

  return (
    <li className="nav-item " >
      <Link className={match ? "nav-item active " : "nav-link "} to={to}>
        {label}
      </Link>
    </li>
  );
}

export default MenuLink;
