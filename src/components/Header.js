import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const data = useSelector((state) => state);

  return (
    <div>
      <Link to="/cart">
        <div>
          cart
          {" "}
          <h1>{data.length}</h1>
        </div>
      </Link>
    </div>
  );
}

export default Header;
