import React, { Fragment, useEffect, useRef, useState } from "react";
import classes from "./Carousel.module.css";
import Slides from "./Slides/Slides";
import Bullets from "./Bullets/Bullets";
import Thumbs from "./Thumbs/Thumbs";

let interval;

const Carousel = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef();

  useEffect(() => {
    carouselRef.current.focus();
    resetInterval();
    return () => {
      clearInterval(interval);
    };
  }, []);
  const resetInterval = () => {
    clearInterval(interval);
    interval = setInterval(() => {
      nextSlideHandler();
    }, 1500);
  };
  const length = props.slides.length;

  const nextSlideHandler = () => {
    setCurrentSlide((prev) => {
      return (prev + 1) % length;
    });
  };
  const prevSlideHandler = () => {
    setCurrentSlide((prev) => {
      return (prev - 1 + length) % length;
    });
  };

  const keyListener = (e) => {
    clearInterval(interval);
    if (e.key === "ArrowRight") {
      nextSlideHandler();
    } else if (e.key === "ArrowLeft") {
      prevSlideHandler();
    }
  };

  const nextClickHandler = () => {
    clearInterval(interval);
    nextSlideHandler();
  };

  const prevClickHandler = () => {
    clearInterval(interval);
    prevSlideHandler();
  };

  const switchSlideHandler = (index) => {
    clearInterval(interval);
    carouselRef.current.focus();
    setCurrentSlide(index);
  };
  return (
    <Fragment>
      <div
        className={classes.Carousel}
        ref={carouselRef}
        tabIndex={-1}
        onKeyDown={keyListener}
      >
        <button
          className={[classes.prev, classes.button].join(" ")}
          onClick={prevClickHandler}
        >
          &#8656;
        </button>
        <button
          className={[classes.next, classes.button].join(" ")}
          onClick={nextClickHandler}
        >
          &#8658;
        </button>
        <Slides currentSlide={currentSlide} slides={props.slides} />
        {props.children}
      </div>
      {props.thumbs ? (
        <Thumbs
          images={props.images}
          changeSlide={switchSlideHandler}
          currentSlide={currentSlide}
        />
      ) : (
        <Bullets
          length={length}
          changeSlide={switchSlideHandler}
          currentSlide={currentSlide}
        />
      )}
    </Fragment>
  );
};
export default Carousel;
