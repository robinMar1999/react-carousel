import React from "react";
import classes from "./Thumb.module.css";
const Thumb = (props) => {
  return (
    <div
      className={[classes.Thumb, props.active ? classes.active : ""].join(" ")}
      onClick={props.onClick}
    >
      <img src={props.src} alt={props.alt} />
    </div>
  );
};
export default Thumb;
