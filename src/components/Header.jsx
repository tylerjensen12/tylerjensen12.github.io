import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaAddressCard, FaCodeBranch } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <h3>
        <Link to="/">
          <FaHome />
          Tyler Jensen
        </Link>
      </h3>
      <nav>
        <Link to="/About">
          <FaAddressCard />
          About
        </Link>
        <Link to="/Projects">
          <FaCodeBranch />
          Projects
        </Link>
      </nav>
    </header>
  );
};

export default Header;
