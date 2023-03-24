import React from "react";
import styles from "./TextContent.module.css";

function TextContent(content) {
  let htmlString = formatText(content.content);
  function formatText(stringToHtml) {
    let arr = stringToHtml.split(" ");

    for (let index = 0; index < arr.length; index++) {
      if (arr[index].includes("#")) {
        arr[index] = "<span>" + arr[index] + "</span>";
      }
      if (isValidURL(arr[index])) {
        arr[index] = `<a href=${arr[index]}>${arr[index]}</a>`;
      }
    }

    return arr.join(" ");
  }

  function isValidURL(string) {
    var res = string.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    return res !== null;
  }

  return (
    <p
      className={styles.postParagraph}
      dangerouslySetInnerHTML={{__html: htmlString}}
    ></p>
  );
}

export default TextContent;
