import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-light bg-light navi">
      <div class="container-fluid navv">
        <Link class="navbar-brand" to="/">
          Testify
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
