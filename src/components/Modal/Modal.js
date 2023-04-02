import React from "react";
import styles from "./Modal.module.css";

function Modal({handleDismiss, isOpen}) {
  return (
    <div
      className={`${styles.wrapper} ${isOpen ? styles.open : ""}`}
      onClick={handleDismiss}
    >
      <div className={styles.modalHeading}>
        <div className={styles.modalFlex}>
          <img src="/holder_pic.png" alt="profile" />
          <div>
            <h2>Isai Martinez</h2>
            <p>Java Full Stack Engineer</p>
          </div>
        </div>
        <button>View Profile</button>
      </div>

      <div className={styles.border}>
        <h2>Account</h2>
        <a href="#">Settings & Privacy</a>
        <a href="#">Help</a>
        <a href="#">Language</a>
      </div>

      <div className={styles.border}>
        <h2>Manage</h2>
        <a href="#">Posts & Activity</a>
        <a href="#">Job Posting Account</a>
      </div>
      <div className={styles.border}>
        <a href="#">Sign Out</a>
      </div>
    </div>
  );
}

export default Modal;
