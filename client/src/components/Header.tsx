import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between max-w-7xl mx-auto">
      <Link to="/">
        <img src="/logo.png" className="w-14" alt="logo" />
      </Link>

      <Link to="/sign-in" className="bg-blue-800 text-white font-semibold py-2 px-4 border border-blue-700 rounded cursor-pointer  hover:bg-blue-600">
        Sign in
      </Link>
    </header>
  );
};

export default Header;
