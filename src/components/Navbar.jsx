import { NavLink } from 'react-router-dom';
import './Navbar.css';

const links = [
  { to: 'HOME', label: 'HOME' },
  { to: 'ABOUT', label: 'ABOUT' },
  { to: 'PROJECTS', label: 'PROJECTS' },
  { to: 'CONTACT', label: 'CONTACT' },
];

export default function Navbar() {


  return (
    <header className="nav">
      <div className="nav-inner container">
        <NavLink to="" className="nav-brand" end>
          <span className="nav-brand-dot" aria-hidden="true" />
          Jhonpaul<span className="nav-brand-accent"></span>
        </NavLink>

        <nav aria-label="Primary">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === ''}
                  className={({ isActive }) => 'nav-link' + (isActive ? ' is-active' : '')}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}