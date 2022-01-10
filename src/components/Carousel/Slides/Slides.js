import React from "react";
import classes from "./Slides.module.css";
import Slide from "./Slide/Slide";
const Slides = (props) => {
  const slides = [];
  for (let i = 0; i < props.slides.length; i++) {
    const slide = props.slides[i];
    slides.push(
      <Slide key={i} dx={100 * parseFloat(props.currentSlide)}>
        {slide}
      </Slide>
    );
  }
  return <div className={classes.Slides}>{slides}</div>;
};
export default Slides;
