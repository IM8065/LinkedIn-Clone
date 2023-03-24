import React from "react";
import styles from "./NavItem.module.css";

function NavItem({active, href, icon, label, alt}) {
  return (
    <li className={`${styles.listItem} ${active ? styles.active : ""}`}>
      <a
        href={href}
        className={`${styles.navLink} ${active ? styles.activeLink : ""}`}
      >
        <img src={icon} alt={alt} />
        {label}
      </a>
    </li>
  );
}

export default NavItem;
