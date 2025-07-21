import { ThemeToggle } from "@components";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-auto bg-auto justify-content-between">
      <div className="navbar-nav gap-4" style={{ flexDirection: "unset" }}>
        <Link className="nav-item nav-link grow-btn" to="/">Home</Link>
        <Link className="nav-item nav-link grow-btn" to="/resume">Resume</Link>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </nav>
  )
}