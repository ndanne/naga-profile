import React from "react";
import styles from "./index.module.scss";
import type { SidebarProps } from "../types";
import CloseIcon from "./CloseIcon";
import { NavLink } from "react-router-dom";
const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
  { label: "Settings", path: "/settings" },
];

const Sidebar: React.FC<SidebarProps & { className?: string }> = ({
  onClose,
  className,
}) => {
  return (
    <nav className={className} aria-label='Sidebar Navigation'>
      <div className={styles.sidebarHeader}>
        <h2 className={styles.sidebarTitle}>Navigation</h2>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label='Close sidebar menu'>
          <CloseIcon />
        </button>
      </div>
      <ul className={styles.navList}>
        {navLinks.map(({ label, path }) => (
          <li key={label}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
              onClick={onClose}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
