import React from "react";
import s from "../styles/description.module.css";
import img1 from "../assets/1D.jfif";
import img2 from "../assets/2D.jfif";
const Description = () => {
  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <img src={img1} alt="" />
        <div className={s.text1}>
          <h1>Ultra Light</h1>
          Drone move faster with weighing <br />
          component <span>under 200 g</span>
        </div>
      </div>

      <div className={s.imageContainer}>
        <img src={img2} alt="" />
        <div className={s.text2}>
          <h1>Best Resolution</h1>
          Take a beautiful view with best camera <br />
          up to <span>4K Camera Resolution</span>
        </div>
      </div>
    </div>
  );
};

export default Description;
