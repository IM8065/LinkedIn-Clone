import React from "react";
import styles from "./MyNetworkPage.module.css";

import ConnectionsIcon from "../../svgs/connections.svg";
import ContactsIcon from "../../svgs/contacts.svg";
import GroupsIcon from "../../svgs/group.svg";
import EventsIcon from "../../svgs/events.svg";
import PagesIcon from "../../svgs/pages.svg";
import NewesletterIcon from "../../svgs/newsletter.svg";
import HashtagsIcon from "../../svgs/hashtags.svg";

function MyNetworkPage() {
  return (
    <div className={styles.gridArea}>
      <div className={styles.manageNetwork}>
        <h3>Manage my network</h3>
        <ul className={styles.networkOptions}>
          <li>
            <a className={styles.links}>
              <img src={ConnectionsIcon} />
              <p>Connections</p>
              <span>20</span>
            </a>
          </li>
          <li>
            <a className={styles.links}>
              <img src={ContactsIcon} />
              <p>Contacts</p>
              <span>5</span>
            </a>
          </li>
          <li>
            <a className={styles.links}>
              <img src={GroupsIcon} />
              <p>Following & Followers</p>
              <span>10</span>
            </a>
          </li>
          <li>
            <a className={styles.links}>
              <img src={GroupsIcon} />
              <p>Groups</p>
              <span>2</span>
            </a>
          </li>
          <li>
            <a className={styles.links}>
              <img src={EventsIcon} />
              <p>Events</p>
              <span>1</span>
            </a>
          </li>
          <li>
            <a className={styles.links}>
              <img src={PagesIcon} />
              <p>Pages</p>
              <span>0</span>
            </a>
          </li>
          <li>
            <a className={styles.links}>
              <img src={NewesletterIcon} />
              <p>Newsletters</p>
              <span>0</span>
            </a>
          </li>
          <li>
            <a className={styles.links}>
              <img src={HashtagsIcon} />
              <p>Hashtags</p>
              <span>2</span>
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.youMayKnow}>Darkness</div>
    </div>
  );
}

export default MyNetworkPage;
