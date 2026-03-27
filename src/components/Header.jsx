import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/apps", label: "Apps" },
  { to: "/installation", label: "Installation" }
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <NavLink to="/" className="brand">
          <img src="/assets/logo.png" alt="Hero IO" />
          <span>Hero IO</span>
        </NavLink>

        <nav className="main-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <a
          className="contribution-btn"
          href="https://github.com/root7"
          target="_blank"
          rel="noreferrer"
        >
          Contribution
        </a>
      </div>
    </header>
  );
}
