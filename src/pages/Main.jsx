import React from "react";
import Header from "../components/Header.jsx";
import Description from "../components/Description.jsx";
import Feature from "../components/Feature.jsx";
import Slider from "../components/Slider.jsx";
import s from "../styles/slider.module.css";
import imgS1 from "../assets/S1.jfif";
import imgS2 from "../assets/S2.jfif";
import imgS3 from "../assets/S3.jfif";
import Reviews from "../components/Reviews.jsx";
import Links from "../components/Links.jsx";

const Main = () => {
  return (
    <div>
      <Header />
      <div>
        <Description />
        <Feature />
        <Slider>
          <div className={s.item}>
            <div className={s.slider_content}>
              <img src={imgS1} />
              <h1>Mini Drone</h1>
              <p>
                Powerful camera drone at an <br />
                affordable price range. Camera <br />
                up to 4K resolution, optimize shots <br />
                automatically.
              </p>
              <button>Get now</button>
            </div>
          </div>
          <div className={s.item}>
            <div className={s.slider_content}>
              <img src={imgS2} />
              <h1>Drone Light</h1>
              <p>
                Drone light is every creators dream. <br />
                Setting apperture manually and high <br />
                battery performance. Drone light is <br />
                everything you need.
              </p>
              <button>Get now</button>
            </div>
          </div>
          <div className={s.item}>
            <div className={s.slider_content}>
              <img src={imgS3} />
              <h1>Phantom Drone</h1>
              <p>
                Inspired by phantom, drone <br />
                can move faster and quickly like a ghost. <br />
                Focus on speed so you can investigate <br />
                environtment quickly.
              </p>
              <button>Get now</button>
            </div>
          </div>
        </Slider>
        <Reviews />
      </div>
      <Links />
    </div>
  );
};

export default Main;
