import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="m-2">
        <span className="link-anime">
          <NavLink to="/about">About</NavLink>
        </span>

        <span className="link-anime">
          <NavLink to="/contact">Contact</NavLink>
        </span>
      </div>
      <div className="flex bg-slate-500">
        <img src="/pearls3.png" alt="pearls" className="w-20" />
        <h1 className="m-4 text-6xl font-bold text-orange-300">Dictionary</h1>
        <img src="/open_book.png" alt="book" className="h-48" />
      </div>
    </header>
  );
}

export default Header;
