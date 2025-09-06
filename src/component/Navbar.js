import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "../component/css/navbar.module.css";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        
        {/* Left - Logo */}
        <div className={styles.logo}>MyLogo</div>

        {/* Center - Links (Desktop) */}
        <div className={`${styles.links} ${styles.desktopOnly}`}>
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => setActive(link.id)}
              className={`${styles.link} ${active === link.id ? styles.active : ""}`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Right - Signup (Desktop) */}
        <div className={styles.desktopOnly}>
          <button className={styles.signup}>Sign Up</button>
        </div>

        {/* Mobile Hamburger */}
        <div className={styles.mobileOnly}>
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} className={styles.icon} /> : <Menu size={28} className={styles.icon} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className={styles.mobileMenu}>
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setActive(link.id);
                setOpen(false);
              }}
              className={`${styles.link} ${active === link.id ? styles.active : ""}`}
            >
              {link.name}
            </button>
          ))}

          <button className={styles.signupMobile}>Sign Up</button>
        </div>
      )}
    </nav>
  );
}
