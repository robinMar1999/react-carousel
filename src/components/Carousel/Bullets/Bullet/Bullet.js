import React from "react";
import classes from "./Bullet.module.css";
const Bullet = (props) => {
  return (
    <button
      className={[classes.Bullet, props.active ? classes.active : ""].join(" ")}
      onClick={props.onClick}
    ></button>
  );
};
export default Bullet;
