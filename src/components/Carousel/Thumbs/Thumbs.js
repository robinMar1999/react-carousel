import React from "react";
import classes from "./Thumbs.module.css";
import Thumb from "./Thumb/Thumb";

const Thumbs = (props) => {
  const thumbs = [];
  if (props.images) {
    for (let i = 0; i < props.images.length; i++) {
      const image = props.images[i];
      if (i === props.currentSlide) {
        thumbs.push(
          <Thumb
            key={image.id}
            active
            src={image.src}
            alt={image.alt}
            onClick={() => props.changeSlide(i)}
          />
        );
      } else {
        thumbs.push(
          <Thumb
            key={image.id}
            src={image.src}
            alt={image.alt}
            onClick={() => props.changeSlide(i)}
          />
        );
      }
    }
  }
  return (
    <div className={classes.Thumbs}>
      {!props.images || props.images.length === 0 ? (
        <div className={classes.error}>Images for thumbnails are missing!</div>
      ) : (
        thumbs
      )}
    </div>
  );
};
export default Thumbs;
