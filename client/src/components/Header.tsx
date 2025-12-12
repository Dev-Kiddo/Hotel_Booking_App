import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between max-w-7xl mx-auto">
      <Link to="/">
        <img src="/logo.png" className="w-14" alt="logo" />
      </Link>

      <Link to="/sign-in" className="bg-white text-primary font-medium py-2 px-4 border border-blue-900 rounded cursor-pointer  hover:bg-gray-200">
        Sign in
      </Link>
    </header>
  );
};

export default Header;
