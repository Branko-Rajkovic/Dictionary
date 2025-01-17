import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <span className="copyright">© 2025 B™ . All Rights Reserved.</span>
        <ul>
          <li className="mx-2">
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}
