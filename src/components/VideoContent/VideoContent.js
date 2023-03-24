import React from "react";
import styles from "./VideoContent.module.css";

function VideoContent({content, caption}) {
  return (
    <div className={styles.stretchedOut}>
      <video
        className={styles.postVideo}
        controls
        src={content}
        type="video/mp4"
      />
    </div>
  );
}

export default VideoContent;
