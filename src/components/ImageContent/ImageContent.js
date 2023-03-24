import React from "react";
import styles from "./ImageContent.module.css";

function ImageContent({content}) {
  console.log(content);
  return (
    <div className={styles.stretchedOut}>
      <img className={styles.postImage} src={content} alt="post display" />
    </div>
  );
}

export default ImageContent;
