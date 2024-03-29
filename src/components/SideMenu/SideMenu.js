import React from "react";
import styles from "./SideMenu.module.css";

import InsightsIcon from "../../svgs/insights.svg";
import JobPostIcon from "../../svgs/job-post.svg";
import AdvertiseIcon from "../../svgs/advertise.svg";
import SellIcon from "../../svgs/sell.svg";
import GroupsIcon from "../../svgs/groups.svg";
import ServicesIcon from "../../svgs/services.svg";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX, faPlus} from "@fortawesome/free-solid-svg-icons";

function SideMenu({handleDismiss, isOpen, isClosing}) {
  return (
    <div
      className={`${styles.menuContainer} ${isOpen ? styles.open : ""} ${
        isClosing ? styles.closing : ""
      }`}
    >
      <div className={`${!isOpen ? styles.hider : ""}`}>
        <div className={styles.containerHeader}>
          <h2>Work</h2>
          <FontAwesomeIcon
            icon={faX}
            className={styles.closeButton}
            onClick={handleDismiss}
          />
        </div>

        <div>
          <div className={styles.sectionHeader}>
            <h3>Visit More LinkedIn Products</h3>
          </div>

          <div className={styles.sectionBody}>
            <ul className={styles.iconList}>
              <li>
                <a href="#" className={styles.iconLink}>
                  <img src={InsightsIcon} /> <span>Insights</span>
                </a>
              </li>
              <li>
                <a href="#" className={styles.iconLink}>
                  <img src={JobPostIcon} /> <span>Post a job</span>
                </a>
              </li>
              <li>
                <a href="#" className={styles.iconLink}>
                  <img src={AdvertiseIcon} /> <span>Advertise</span>
                </a>
              </li>
              <li>
                <a href="#" className={styles.iconLink}>
                  <img src={SellIcon} /> <span>Sell</span>
                </a>
              </li>
              <li>
                <a href="#" className={styles.iconLink}>
                  <img src={GroupsIcon} /> <span>Groups</span>
                </a>
              </li>
              <li>
                <a href="#" className={styles.iconLink}>
                  <img src={ServicesIcon} /> <span>Services Marketplace</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className={styles.sectionHeader}>
            <h3>LinkedIn Business Services</h3>
          </div>

          <div className={`${styles.sectionBody} ${styles.sectionBodyBottom}`}>
            <ul>
              <li>
                <a href="#">
                  <h4>Talent Solutions</h4>
                  <p>Find, attract and recruit talent</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <h4>Sales Solutions</h4>
                  <p>Unlock sales opportunities</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <h4>Post a job for free</h4>
                  <p>Get your job in front of quality candidates</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <h4>Marketing Solutions</h4>
                  <p>Aquire customers and grow your business</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <h4>Learning Solutions</h4>
                  <p>Develop talent across your organization</p>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.sectionFooter}>
            <a href="#">
              Create a Company Page <FontAwesomeIcon icon={faPlus} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
