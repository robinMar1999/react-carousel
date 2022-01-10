import React from "react";
import classes from "./Bullets.module.css";
import Bullet from "./Bullet/Bullet";

const Bullets = (props) => {
  console.log("Bullets");
  const bullets = [];
  for (let i = 0; i < props.length; i++) {
    if (props.currentSlide === i) {
      bullets.push(
        <Bullet active onClick={() => props.changeSlide(i)} key={i} />
      );
    } else {
      bullets.push(<Bullet onClick={() => props.changeSlide(i)} key={i} />);
    }
  }
  return <div className={classes.Bullets}>{bullets}</div>;
};
export default Bullets;
