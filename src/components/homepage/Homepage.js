import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark, faPlus} from "@fortawesome/free-solid-svg-icons";
import React from "react";

import Ellipsis from "../../svgs/ellipsis.svg";
import LogoTwo from "../../svgs/logotwo.svg";

import CreatePost from "../CreatePost/CreatePost";
import styles from "./Homepage.module.css";
import Post from "../Post/Post";

let post = {};

function Homepage() {
  return (
    <div className={`${styles.bodyWrapper} ${styles.mainGrid}`}>
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
                <span className={styles.sideInfo}>1h ago • 1,784 readers</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div className={styles.bulletContainer}>
                  <span className={styles.bullet}></span>
                  Delta pilots agree to 34% pay raise
                </div>
                <span className={styles.sideInfo}>1h ago • 1,784 readers</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div className={styles.bulletContainer}>
                  <span className={styles.bullet}></span>
                  Delta pilots agree to 34% pay raise
                </div>
                <span className={styles.sideInfo}>1h ago • 1,784 readers</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div className={styles.bulletContainer}>
                  <span className={styles.bullet}></span>
                  Delta pilots agree to 34% pay raise
                </div>
                <span className={styles.sideInfo}>1h ago • 1,784 readers</span>
              </a>
            </li>
            <li>
              <a href="#">
                <div className={styles.bulletContainer}>
                  <span className={styles.bullet}></span>
                  Delta pilots agree to 34% pay raise
                </div>
                <span className={styles.sideInfo}>1h ago • 1,784 readers</span>
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
    </div>
  );
}

export default Homepage;
