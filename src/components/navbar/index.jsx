import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="navbar-logo">
          <NavLink to="/">KitchenKraft</NavLink>
        </h2>
        <form onSubmit={handleSubmit} className="navbar-search">
          <label htmlFor="search" className="sr-only">Search</label>
          <input
            id="search"
            type="text"
            name="search"
            value={searchParam}
            onChange={(event) => setSearchParam(event.target.value)}
            placeholder="Search for recipes..."
            className="navbar-input"
          />
        </form>
        <ul className="navbar-links">
          <li>
            <NavLink
              to="/"
              className="navbar-link"
              activeClassName="navbar-link-active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className="navbar-link"
              activeClassName="navbar-link-active"
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
