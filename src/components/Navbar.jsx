import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import useLogout from "../hooks/useLogout";

function Navbar() {
  const { user } = useGlobalContext();
  const { logout, error } = useLogout();
  return (
    <header className="sm:flex flex-col md:flex-row lg: flex justify-between items-center py-5">
      <h2 className="text-2xl">Navbar</h2>
      <nav className="flex items-center gap-5">
        <NavLink className='hover:text-[tomato]' to="/">Home</NavLink>
        <NavLink className='hover:text-[tomato]' to="/about">About</NavLink>
        <NavLink className='hover:text-[tomato]' to="/contact">Contact</NavLink>
        <p className="cursor-pointer py-2 px-3 bg-slate-300 rounded-lg">Hello, {user.displayName}</p>
        <button className='py-2 px-4 bg-red-400 rounded-lg' onClick={logout}>
          Logout
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
