import { NavLink } from "react-router-dom";

function Navbar() {
  return (
      <header className="header">
      <h2>Navbar</h2>
      <nav className="flex gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
