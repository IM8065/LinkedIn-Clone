import React from "react";
import styles from "./SideMenu.module.css";

import InsightsIcon from "../../svgs/insights.svg";
import JobPostIcon from "../../svgs/job-post.svg";
import AdvertiseIcon from "../../svgs/advertise.svg";
import SellIcon from "../../svgs/sell.svg";
import GroupsIcon from "../../svgs/groups.svg";
import ServicesIcon from "../../svgs/services.svg";

function SideMenu({handleDismiss, isOpen}) {
  return (
    <div className={`${styles.menuContainer} ${isOpen ? styles.open : ""}`}>
      <h2>Work</h2>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h3>Visit More LinkedIn Products</h3>
        </div>

        <ul>
          <li>
            <img src={InsightsIcon} />
          </li>
          <li>
            <img src={JobPostIcon} />
          </li>
          <li>
            <img src={AdvertiseIcon} />
          </li>
          <li>
            <img src={SellIcon} />
          </li>
          <li>
            <img src={GroupsIcon} />
          </li>
          <li>
            <img src={ServicesIcon} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
