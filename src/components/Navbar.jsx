import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import useLogout from "../hooks/useLogout";


function Navbar() {
  const { user } = useGlobalContext()
  const { logout, error } = useLogout()
  return (
      <header className="header">
      <h2>Navbar</h2>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <p className="displayname">Hello, {user.displayName}</p>
        <button className="logout" onClick={logout}>Logout</button>
      </nav>
    </header>
  );
}

export default Navbar;
