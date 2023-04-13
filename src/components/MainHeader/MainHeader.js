import React from "react";
import styles from "./MainHeader.module.css";

import Logo from "../../svgs/logo.svg";
import SearchIcon from "../../svgs/search.svg";
import GridIcon from "../../svgs/grid.svg";
import HomeIcon from "../../svgs/home.svg";
import NetworkIcon from "../../svgs/network.svg";
import JobsIcon from "../../svgs/suitcase.svg";
import MessageIcon from "../../svgs/message.svg";
import BellIcon from "../../svgs/bell.svg";

import useToggle from "../../use-toggle";
import useMenuToggle from "../../use-menu-toggle";

import NavItem from "../NavItem/NavItem";
import SideMenu from "../SideMenu/SideMenu";
import Modal from "../Modal/Modal";

function MainHeader() {
  const [isModalOpen, toggleIsModalOpen] = useToggle(false);
  const [isSideMenuOpen, toggleIsSideMenuOpen] = useMenuToggle(false);

  return (
    <>
      <header
        // style={isSideMenuOpen || isModalOpen ? {} : {overflowX: "hidden"}}
        className={`${styles.header} ${
          !isSideMenuOpen && !isModalOpen ? styles.hide : ""
        }`}
      >
        <div className={styles.logo}>
          <img src={Logo} alt="logo" />
          <div className={styles.searchArea}>
            <img src={SearchIcon} alt="search icon" />
            <input
              placeholder="Search"
              className={styles.search}
              type="search"
            />
          </div>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <NavItem
              active={true}
              path="/"
              icon={HomeIcon}
              label="Home"
              alt="home icon"
            />
            <NavItem
              active={false}
              path="/mynetwork"
              icon={NetworkIcon}
              label="My Network"
              alt="network icon"
            />
            <NavItem
              active={false}
              path="/jobs"
              icon={JobsIcon}
              label="Jobs"
              alt="suitcase icon"
            />
            <NavItem
              active={false}
              path="/messaging"
              icon={MessageIcon}
              label="Messaging"
              alt="message icon"
            />
            <NavItem
              active={false}
              path="/notifications"
              icon={BellIcon}
              label="Notifications"
              alt="bell icon"
            />
            <li className={styles.profilePicture}>
              <button
                className={`${styles.button} ${styles.profileModal}`}
                onClick={toggleIsModalOpen}
              >
                <Modal handleDismiss={toggleIsModalOpen} isOpen={isModalOpen} />
                <img src="/holder_pic.png" alt="profile" />
              </button>
            </li>
            <li>
              <button className={styles.button} onClick={toggleIsSideMenuOpen}>
                <img src={GridIcon} alt="grid icon" />
              </button>
            </li>
            {/* <NavItem active={false} href="/" icon={} label="Learning" /> */}
          </ul>
        </nav>

        <SideMenu
          handleDismiss={toggleIsSideMenuOpen}
          isOpen={isSideMenuOpen}
        />
      </header>
      <div
        className={`${styles.overlay} ${isSideMenuOpen ? styles.open : ""}`}
        onClick={toggleIsSideMenuOpen}
      ></div>
    </>
  );
}

export default MainHeader;
