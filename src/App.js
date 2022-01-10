import { useState } from "react";
import classes from "./App.module.css";
import Carousel from "./components/Carousel/Carousel";
import ImageSlide from "./components/ImageSlide/ImageSlide";
import images from "./static/images";
import Backdrop from "./components/UI/Backdrop/Backdrop";

function App() {
  const [show, setShow] = useState(true);
  const toggleHandler = () => {
    setShow((prev) => !prev);
  };
  const slides = [];
  for (let image of images) {
    slides.push(<ImageSlide src={image.src} alt={image.alt} />);
  }
  slides.push(
    <div className={classes.test}>
      <h1>Hello this is testing slide.</h1>
      <a href="https://www.google.com" target="_blank">
        Google
      </a>
      <img
        src="https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="my favorite girl"
      />
    </div>
  );
  return (
    <div className={classes.App}>
      <button onClick={toggleHandler}>Toggle Carousel</button>
      {show && <Backdrop onClick={toggleHandler} />}
      {show && (
        <div className={classes.Carousel}>
          {/* <Carousel slides={slides} thumbs images={images} /> */}
          <Carousel slides={slides} />
        </div>
      )}
    </div>
  );
}

export default App;
