import React from "react";
import styles from "./Post.module.css";
import LikeIcon from "../../svgs/like.svg";
import CommentIcon from "../../svgs/comment.svg";
import SendIcon from "../../svgs/send.svg";
import RepostIcon from "../../svgs/repost.svg";
import TextContent from "../TextContent/TextContent";
import ImageContent from "../ImageContent/ImageContent";
import VideoContent from "../VideoContent/VideoContent";

function Post({post}) {
  return (
    <div className={styles.postContainer}>
      <div className={styles.postHeader}>
        <div>
          <img
            src={post.profilePhoto}
            alt="hexaware logo"
            style={{width: "48px", height: "48px"}}
          />
        </div>
        <div>
          <h5 className={styles.postCreaterName}>{post.profileName}</h5>
          <p className={styles.followers}>{post.profileFollowers}</p>
          <span className={styles.timeElapsed}>{post.postedDate}</span>
        </div>
      </div>
      <div className={styles.contentArea}>
        {post.textContent ? <TextContent content={post.textContent} /> : ""}

        {post.imageContent ? <ImageContent content={post.imageContent} /> : ""}

        {post.videoContent ? (
          <VideoContent content={post.videoContent} caption="Earth" />
        ) : (
          ""
        )}

        {post.adContent ? (
          <div className={styles.adContainer}>
            <span>{post.adContent.caption}</span>
            <h3>
              {post.adContent.website} • {post.adContent.readLength} min read
            </h3>
          </div>
        ) : (
          ""
        )}
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
