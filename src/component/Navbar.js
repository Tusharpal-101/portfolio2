import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom"; 
import styles from "../component/css/navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* Left - Logo */}
        <div className={styles.logo}>MyLogo</div>

        {/* Center - Links (Desktop) */}
        <div className={`${styles.links} ${styles.desktopOnly}`}>
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
              end
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right - Signup (Desktop) */}
        <div className={styles.desktopOnly}>
          <NavLink to="/login" className={styles.signup}>
            Sign Up
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        <div className={styles.mobileOnly}>
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <X size={28} className={styles.icon} />
            ) : (
              <Menu size={28} className={styles.icon} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className={styles.mobileMenu}>
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
              end
            >
              {link.name}
            </NavLink>
          ))}

          {/* Mobile Signup */}
          <NavLink 
            to="/login" 
            className={styles.signupMobile} 
            onClick={() => setOpen(false)}
          >
            Sign Up
          </NavLink>
        </div>
      )}
    </nav>
  );
}
