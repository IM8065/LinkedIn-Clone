import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark, faPlus} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import CreatePost from "../CreatePost/CreatePost";
import Grid from "../Grid/Grid";
import NavItem from "../NavItem/NavItem";
import styles from "./Homepage.module.css";
import Post from "../Post/Post";
import SideMenu from "../SideMenu/SideMenu";
import Logo from "../../svgs/logo.svg";
import SearchIcon from "../../svgs/search.svg";
import HomeIcon from "../../svgs/home.svg";
import NetworkIcon from "../../svgs/network.svg";
import JobsIcon from "../../svgs/suitcase.svg";
import MessageIcon from "../../svgs/message.svg";
import BellIcon from "../../svgs/bell.svg";
import GridIcon from "../../svgs/grid.svg";
import Ellipsis from "../../svgs/ellipsis.svg";
import LogoTwo from "../../svgs/logotwo.svg";

import useToggle from "../../use-toggle";
import Modal from "../Modal/Modal";
import useMenuToggle from "../../use-menu-toggle";

let post = {
  id: Math.random(),
  profilePhoto: "./hexaware.jpeg",
  profileName: "Hexaware Technologies",
  profileFollowers: "770,716",
  postedDate: "1w",
  likes: 270,
  reposts: 3,
  textContent:
    "#HexAlert Hexaware will be at the #AWS re: Invent 2023! We look forward to seeing you at the most transformative #event in #tech, where you can elevate your #cloud #experience as you learn from AWS #leaders and discover game-changing technologies. http://bit.ly/3kduVfC",
  imageContent: "./hexaware_image.jpeg",
  videoContent: "./video_example.mp4",
  adContent: {
    mainImage: "./linead_grad.jpeg",
    caption:
      "Ramp ranked the #1 Most Innovative Company in North America by Fast Company",
    website: "ramp.com",
    readLength: 4,
  },
  slideContent: {
    images: [
      "https://www.pwmania.com/wp-content/uploads/2022/07/raw-1.jpg",
      "https://media.npr.org/assets/music/news/2010/06/eminem-52893634f7c035450a7b5ff2e040cacb4012395e-s600-c85.webp",
      "https://i.etsystatic.com/40354259/r/il/86bdbf/4545671332/il_1588xN.4545671332_92n4.jpg",
      "https://s1.ticketm.net/dam/a/412/83356a8d-1f34-4063-920f-90ec11a40412_SOURCE?width=900&height=510&fit=crop&auto=webp",
      "https://m.media-amazon.com/images/I/61aLrw8OEwL._AC_SX679_.jpg",
    ],
  },
};

function Homepage() {
  const [isModalOpen, toggleIsModalOpen] = useToggle(false);
  const [isSideMenuOpen, toggleIsSideMenuOpen] = useMenuToggle(false);

  return (
    <div>
      <header className={styles.header}>
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
              href="/"
              icon={HomeIcon}
              label="Home"
              alt="home icon"
            />
            <NavItem
              active={false}
              href="/"
              icon={NetworkIcon}
              label="My Network"
              alt="network icon"
            />
            <NavItem
              active={false}
              href="/"
              icon={JobsIcon}
              label="Jobs"
              alt="suitcase icon"
            />
            <NavItem
              active={false}
              href="/"
              icon={MessageIcon}
              label="Messaging"
              alt="message icon"
            />
            <NavItem
              active={false}
              href="/"
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
      <div className={styles.bodyWrapper}>
        <Grid>
          <aside>
            <div className={`${styles.profileAside} ${styles.objectStyles}`}>
              <div className={styles.profileAsideBackgroundImage}></div>
              <img src="/holder_pic.png" alt="profile" />
              <span>Isai Martinez</span>
              <p>Java Full Stack Engineer</p>
              <div className={styles.network}>
                <div className={styles.connections}>
                  <p>Connections</p>
                  <span>11</span>
                </div>
                <p>Grow your network</p>
              </div>
              <a href="#" className={styles.premium}>
                <p>Access exclusive tools & insights</p>
                <p className={styles.free}>Try premium for free</p>
              </a>
              <div className={styles.myItems}>
                <p>
                  <FontAwesomeIcon icon={faBookmark} /> My Items
                </p>
              </div>
            </div>

            <div
              className={`${styles.stickyGridItem} ${styles.objectStyles} ${styles.discoverSection}`}
            >
              <div className={styles.container}>
                <div className={styles.discoverTag}>
                  <a href="#">
                    <span>Groups</span>
                  </a>
                </div>
                <div className={`${styles.discoverTag} ${styles.plus}`}>
                  <a href="#">
                    <span>Events</span>
                  </a>{" "}
                  <button>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                <div className={styles.discoverTag}>
                  <a href="#">
                    <span>Followed Hashtags</span>
                  </a>
                </div>
              </div>
              <div className={styles.discoverMore}>
                <a href="#">Discover more</a>
              </div>
            </div>
          </aside>
          <main className={styles.main}>
            <CreatePost />
            <Post post={post} />
          </main>
          <aside className={` ${styles.asideRight}`}>
            <div className={styles.objectStyles}>
              <h2>LinkedIn News</h2>
              <ul>
                <li>
                  <a href="#">
                    <div className={styles.bulletContainer}>
                      <span className={styles.bullet}></span>
                      Delta pilots agree to 34% pay raise
                    </div>
                    <span className={styles.sideInfo}>
                      1h ago • 1,784 readers
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className={styles.bulletContainer}>
                      <span className={styles.bullet}></span>
                      Delta pilots agree to 34% pay raise
                    </div>
                    <span className={styles.sideInfo}>
                      1h ago • 1,784 readers
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className={styles.bulletContainer}>
                      <span className={styles.bullet}></span>
                      Delta pilots agree to 34% pay raise
                    </div>
                    <span className={styles.sideInfo}>
                      1h ago • 1,784 readers
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className={styles.bulletContainer}>
                      <span className={styles.bullet}></span>
                      Delta pilots agree to 34% pay raise
                    </div>
                    <span className={styles.sideInfo}>
                      1h ago • 1,784 readers
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className={styles.bulletContainer}>
                      <span className={styles.bullet}></span>
                      Delta pilots agree to 34% pay raise
                    </div>
                    <span className={styles.sideInfo}>
                      1h ago • 1,784 readers
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.stickyGridItem}>
              <div className={`${styles.advertisement} ${styles.objectStyles}`}>
                <div className={styles.advertisementHeading}>
                  <span>Ad</span>
                  <img src={Ellipsis} alt="ellipsis" />
                </div>
                <p>Isai, stay informed on industry news and trends</p>
                <section className={styles.imagesSectionAdvertisement}>
                  <img
                    className={styles.advertisementProfile}
                    src="/holder_pic.png"
                    alt="profile"
                  />
                  <a href="#" className={styles.advertisementLink}>
                    <img
                      className={styles.advertisementCompany}
                      src="/advertisement.jpeg"
                      alt="advertisement company "
                    />
                  </a>
                </section>
                <section className={styles.advertisementConclusion}>
                  <p>Isai, explore relevant opportunities with</p>
                  <span>NTT DATA Services</span>
                  <button>Follow</button>
                </section>
              </div>

              <footer className={styles.footer}>
                <ul>
                  <li>About</li>
                  <li>Accessibility</li>
                  <li>Help Center</li>
                  <li>Privacy & Terms</li>
                  <li>Ad Choices</li>
                  <li>Advertising</li>
                  <li>Business Services</li>
                  <li>Get the LinkedIn App</li>
                  <li>More</li>
                </ul>
                <div>
                  <p>
                    <img src={LogoTwo} alt="secondary logo" />
                    LinkedIn Corporation © 2023
                  </p>
                </div>
              </footer>
            </div>
          </aside>
        </Grid>
      </div>
    </div>
  );
}

export default Homepage;
