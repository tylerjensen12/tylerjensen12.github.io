import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaAddressCard, FaCodeBranch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-between px-10 bg-emerald-900 h-24">
      <h2 className="flex justify-center">
        <Link
          to="/"
          className="flex items-center gap-2 text-3xl font-medium hover:underline text-white"
        >
          <FaHome />
          Tyler Jensen
        </Link>
      </h2>
      <nav className="flex justify-between gap-20">
        <Link
          to="/About"
          className="flex items-center gap-2 text-lg font-medium hover:underline text-white"
        >
          <FaAddressCard />
          About
        </Link>
        <Link
          to="/Projects"
          className="flex items-center gap-2 text-lg font-medium hover:underline text-white"
        >
          <FaCodeBranch />
          Projects
        </Link>
      </nav>
    </header>
  );
};

export default Header;
