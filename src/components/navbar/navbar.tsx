import { ThemeToggle } from "@components";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-auto bg-auto justify-content-between">
      <div className="navbar-nav gap-4">
        <Link className="nav-item nav-link" to="/">Home</Link>
        <Link className="nav-item nav-link" to="/resume">Resume</Link>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </nav>
  )
}