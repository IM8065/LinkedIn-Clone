import React from "react";
import styles from "./NavItem.module.css";
import {Link, useLocation} from "react-router-dom";

function NavItem({active, icon, label, alt, path}) {
  const location = useLocation();

  console.log(location.pathname);
  let isActive = location.pathname == path;
  return (
    <li
      className={`${styles.listItem} `}
      style={
        isActive
          ? {
              color: "black",
              borderBottom: "2px solid black",
            }
          : {}
      }
    >
      <Link to={path} className={styles.navLink}>
        <img src={icon} alt={alt} />
        {label}
      </Link>
    </li>
  );
}

export default NavItem;
