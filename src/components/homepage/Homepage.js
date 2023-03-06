import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark, faPlus} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import CreatePost from "../CreatePost/CreatePost";
import Grid from "../Grid/Grid";
import NavItem from "../NavItem/NavItem";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="#0a66c2"
            class="mercado-match"
            width="41"
            height="41"
            focusable="false"
          >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
          <div className={styles.searchArea}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              class="mercado-match"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
            </svg>
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
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
                </svg>
              }
              label="Home"
            />
            <NavItem
              active={false}
              href="/"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                </svg>
              }
              label="My Network"
            />
            <NavItem
              active={false}
              href="/"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                </svg>
              }
              label="Jobs"
            />
            <NavItem
              active={false}
              href="/"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
                </svg>
              }
              label="Messaging"
            />

            <NavItem
              active={false}
              href="/"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
                </svg>
              }
              label="Notifications"
            />

            <li className={styles.profilePicture}>
              <button className={styles.button}>
                <img src="/holder_pic.png" alt="profile picture" />
              </button>
            </li>
            <li>
              <button className={styles.button}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                </svg>
              </button>
            </li>
            {/* <NavItem active={false} href="/" icon={} label="Learning" /> */}
          </ul>
        </nav>
      </header>
      <div className={styles.wrapper}>
        <Grid>
          <aside>
            <div className={`${styles.profileAside} ${styles.objectStyles}`}>
              <div className={styles.asideBackgroundImage}></div>
              <img src="/holder_pic.png" alt="Profile Picture" />
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
                  {" "}
                  <span>Ad</span>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <title>overflow-web-small</title>{" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M3,9.5A1.5,1.5,0,1,1,4.5,8,1.5,1.5,0,0,1,3,9.5ZM11.5,8A1.5,1.5,0,1,0,13,6.5,1.5,1.5,0,0,0,11.5,8Zm-5,0A1.5,1.5,0,1,0,8,6.5,1.5,1.5,0,0,0,6.5,8Z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </svg>
                </div>
                <p>Isai, stay informed on industry news and trends</p>
                <section className={styles.imagesSectionAdvertisement}>
                  <img
                    className={styles.advertisementProfile}
                    src="/holder_pic.png"
                    alt="Profile Picture"
                  />
                  <a href="#" className={styles.advertisementLink}>
                    <img
                      className={styles.advertisementCompany}
                      src="/advertisement.jpeg"
                      alt="advertisement company picture"
                    />
                  </a>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 56 14"
                      data-supported-dps="56x14"
                      fill="#0A66C2"
                      class="mercado-match"
                      width="56"
                      height="14"
                      focusable="false"
                    >
                      <g>
                        <path
                          class="background-mercado"
                          d="M22.1 8.2l3.09 3.8h-2.44L20 8.51V12h-2V2h2v5.88L22.54 5h2.55zm-8-3.4A2.71 2.71 0 0011.89 6V5H10v7h2V8.73a1.74 1.74 0 011.66-1.93C14.82 6.8 15 7.94 15 8.73V12h2V8.29c0-2.2-.73-3.49-2.86-3.49zM32 8.66a4.22 4.22 0 010 .44h-5.25v.07a1.79 1.79 0 001.83 1.43 2.51 2.51 0 001.84-.69l1.33 1a4.31 4.31 0 01-3.25 1.29 3.49 3.49 0 01-3.7-3.75 3.58 3.58 0 013.76-3.65C30.44 4.8 32 6.13 32 8.66zm-1.86-.86a1.46 1.46 0 00-1.59-1.4 1.64 1.64 0 00-1.8 1.4zM2 2H0v10h6v-2H2zm36 0h2v10h-1.89v-.7a2.44 2.44 0 01-2 .9 3.41 3.41 0 01-3.31-3.7 3.36 3.36 0 013.3-3.7 2.62 2.62 0 011.9.7zm.15 6.5a1.63 1.63 0 00-1.62-1.85A1.76 1.76 0 0034.9 8.5a1.76 1.76 0 001.63 1.85 1.63 1.63 0 001.62-1.85zM8 1.8A1.27 1.27 0 006.75 3a1.25 1.25 0 002.5 0A1.27 1.27 0 008 1.8zM7 12h2V5H7zM56 1v12a1 1 0 01-1 1H43a1 1 0 01-1-1V1a1 1 0 011-1h12a1 1 0 011 1zM46 5h-2v7h2zm.25-2a1.25 1.25 0 00-2.5 0 1.25 1.25 0 002.5 0zM54 8.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 0048.89 6V5H47v7h2V8.73a1.74 1.74 0 011.66-1.93C51.82 6.8 52 7.94 52 8.73V12h2z"
                        ></path>
                      </g>
                    </svg>{" "}
                    LinkedIn Corporation © 2023
                  </p>
                </div>
              </footer>
            </div>
          </aside>
        </Grid>
      </div>
    </>
  );
}

export default Homepage;
