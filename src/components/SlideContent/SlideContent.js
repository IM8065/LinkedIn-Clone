import React from "react";
import styles from "./SlideContent.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

function SlideContent({content}) {
  const [index, setIndex] = React.useState(0);
  const [offset, setOffset] = React.useState(0);
  const [iniMovement, setInitialMovement] = React.useState(0);
  const [regMovement, setRegularMovement] = React.useState(0);
  const imageListRef = React.useRef(null);

  React.useEffect(() => {
    let containerSize = imageListRef.current.offsetWidth;
    let imageSize = containerSize * 0.806;
    let remainingSpace = containerSize - imageSize - 32;
    let dividedSpace = Math.round(remainingSpace) / 2;

    let initialMovement = Math.round(imageSize - dividedSpace);
    let initialMovementPercentage = Math.round(
      (initialMovement / containerSize) * 100
    );

    setInitialMovement(initialMovementPercentage);

    let regularMovement = Math.round(imageSize + 16);
    let regularMovementPercentage = Math.round(
      (regularMovement / containerSize) * 100
    );

    setRegularMovement(regularMovementPercentage);
  }, [imageListRef.current]);

  const min = 0;
  const max = content.length;

  function moveLeft() {
    if (index == min) {
      return;
    } else if (index == max - 1 || index == min + 1) {
      setOffset(offset + iniMovement);
    } else {
      setOffset(offset + regMovement);
    }

    setIndex(index - 1);
  }

  function moveRight() {
    if (index == max - 1) {
      return;
    } else if (index == 0 || index == max - 2) {
      setOffset(offset - iniMovement);
    } else {
      setOffset(offset - regMovement);
    }

    setIndex(index + 1);
  }

  return (
    <div ref={imageListRef} className={styles.slideCarousel}>
      <button
        className={`${styles.slideArrow} ${styles.slideLeft}`}
        onClick={moveLeft}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        className={`${styles.slideArrow} ${styles.slideRight}`}
        onClick={moveRight}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <div
        className={styles.imageList}
        style={{
          transform: `translate(${offset}%, 0)`,
        }}
      >
        {content.map((img, idx) => {
          return (
            <div key={idx} className={styles.imageContainer}>
              <img className={styles.slideImg} src={img} alt={idx} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SlideContent;

{
  /* <button class="carousel-button prev" data-carousel-button="prev">&#8656;</button>
<button class="carousel-button next" data-carousel-button="next">&#8658;</button>

<div class="slide-carousel">
  <div class="image-list">
    <div class="image-container">
      <img src="https://www.pwmania.com/wp-content/uploads/2022/07/raw-1.jpg" />
    </div>

    <div class="image-container">
      <img src="https://media.npr.org/assets/music/news/2010/06/eminem-52893634f7c035450a7b5ff2e040cacb4012395e-s600-c85.webp" />
    </div>

    <div class="image-container">
      <img src="https://i.etsystatic.com/40354259/r/il/86bdbf/4545671332/il_1588xN.4545671332_92n4.jpg" />
    </div>

    <div class="image-container">
      <img src="https://s1.ticketm.net/dam/a/412/83356a8d-1f34-4063-920f-90ec11a40412_SOURCE?width=900&height=510&fit=crop&auto=webp" />
    </div>

    <div class="image-container">
      <img src="https://m.media-amazon.com/images/I/61aLrw8OEwL._AC_SX679_.jpg" / </div>
    </div>

  </div> */
}
