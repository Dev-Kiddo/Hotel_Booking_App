import React from "react";
import { Link } from "react-router-dom";

const SHeader = () => {
  return (
    <header className="flex items-center justify-between max-w-7xl mx-auto">
      <Link to="/">
        <img src="/logo.png" className="w-14" alt="logo" />
      </Link>
    </header>
  );
};

export default SHeader;
