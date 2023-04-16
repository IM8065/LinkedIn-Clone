import React from "react";
import styles from "./NavItem.module.css";
import {Link, useLocation} from "react-router-dom";

function NavItem({icon, label, alt, path, button = false, children}) {
  const location = useLocation();

  console.log(location.pathname);
  let isActive = location.pathname == path;
  return (
    <>
      {button ? (
        <li className={`${styles.listItem}`}>{children}</li>
      ) : (
        <li className={`${styles.listItem}`}>
          <div className={`${isActive ? styles.activeLink : ""}`}></div>
          <Link to={path} className={styles.navLink}>
            <img src={icon} alt={alt} className={styles.icon} />
            <span className={styles.linkLabel}>{label}</span>
          </Link>
        </li>
      )}
    </>
  );
}

export default NavItem;
