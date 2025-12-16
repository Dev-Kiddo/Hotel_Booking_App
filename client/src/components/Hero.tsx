import Header from "./Header";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="bg-primary py-16 relative">
      <Header />
      <div className="mx-auto max-w-7xl mt-25 px-6">
        <h1 className="text-6xl text-gray-100 font-semibold mb-5">Find your next stay</h1>
        <p className="text-2xl text-gray-100 "> Search low prices hotels for your dream vacation...</p>
      </div>

      <div>
        <div className="max-w-7xl w-full absolute -bottom-12 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Hero;
