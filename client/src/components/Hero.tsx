import React from "react";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="bg-blue-500 py-16">
      <Header />
      <div className="mx-auto max-w-7xl mt-25">
        <h1 className="text-6xl text-gray-100 font-semibold mb-5">Find your next stay</h1>
        <p className="text-2xl text-gray-100"> Search low prices hotels for your dream vacation...</p>
      </div>
    </div>
  );
};

export default Hero;
