import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-auto bg-auto">
      <div className="navbar-nav">
        <Link className="nav-item nav-link" to="/">Home</Link>
        <Link className="nav-item nav-link" to="/resume">Resume</Link>
      </div>
    </nav>
  )
}