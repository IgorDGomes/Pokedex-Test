import { NavLink } from "react-router";
import logo from "../assets/kinda-pokemon-logo.png";

export function Header() {
  return (
    <header className="max-w-xs md:max-w-2xl xl:max-w-5xl mx-auto flex items-center justify-between h-16">
      <NavLink to="/" className="flex items-center gap-4">
        <img src={logo} className="size-12" />
        <p className="font-semibold text-xl">Vite React Pokedex</p>
      </NavLink>
      <nav>
        <ul className="flex gap-10 text-lg font-medium">
          <li className="hover:text-white">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:text-white">
            <NavLink to="/more">More</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
