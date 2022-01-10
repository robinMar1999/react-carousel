import React from "react";
import classes from "./ImageSlide.module.css";
const ImageSlide = (props) => {
  return (
    <div className={classes.ImageSlide}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
};
export default ImageSlide;
