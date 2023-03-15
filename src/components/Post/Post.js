import React from "react";
import styles from "./Post.module.css";
import LikeIcon from "../../svgs/like.svg";
import CommentIcon from "../../svgs/comment.svg";
import SendIcon from "../../svgs/send.svg";
import RepostIcon from "../../svgs/repost.svg";

function Post() {
  return (
    <div className={styles.postContainer}>
      <div className={styles.postHeader}>
        <div>
          <img
            src="./hexaware.jpeg"
            alt="hexaware logo"
            style={{width: "48px", height: "48px"}}
          />
        </div>
        <div>
          <h5 className={styles.postCreaterName}>Hexaware Technologies</h5>
          <p className={styles.followers}>770,716 followers</p>
          <span className={styles.timeElapsed}>1w</span>
        </div>
      </div>
      <div className={styles.contentArea}>
        <p className={styles.postParagraph}>
          <span>#HexAlert</span> Hexaware will be at the <span>#AWS</span> re:
          Invent 2023! We look forward to seeing you at the most transformative{" "}
          <span>#event</span> in <span>#tech</span>, where you can elevate your{" "}
          <span>#cloud</span>
          <span>#experience</span> as you learn from AWS <span>#leaders</span>{" "}
          and discover game-changing technologies.{" "}
          <a href="#">http://bit.ly/3kduVfC</a>
        </p>
      </div>
      <div className={styles.iconGroup}>
        <img src={LikeIcon} alt="like icon" />
        <img src={CommentIcon} alt="comment icon" />
        <img src={RepostIcon} alt="respost icon" />
        <img src={SendIcon} alt="send icon" />
      </div>
    </div>
  );
}

export default Post;
