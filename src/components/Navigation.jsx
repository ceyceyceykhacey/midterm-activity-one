import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar">
      <h2>Student App</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/students">Students</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navigation;
