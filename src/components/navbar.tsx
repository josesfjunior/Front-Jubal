import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-cyan-500 to-red-500 text-white flex justify-end items-center w-full p-4 h-20 space-x-4 ">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/team">Equipe</Link>
      <Link to="/login" className="btn btn-primary">
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
