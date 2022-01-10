import React from "react";
import classes from "./Slide.module.css";
const Slide = (props) => {
  return (
    <div
      className={classes.Slide}
      style={{
        transform: `translateX(-${props.dx}%)`,
      }}
    >
      {props.children}
    </div>
  );
};
export default Slide;
