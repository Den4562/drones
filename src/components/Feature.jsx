import React from "react";
import s from "../styles/feature.module.css";
import img_drone from "../assets/1.jfif";
const Feature = () => {
  return (
    <div className={s.container}>
      <div className={s.dron}>
        <img src={img_drone} alt="" />

        <div className={s.drone_text}>
          <h1>Why Drone Light?</h1>
          <p>
            We provide a best self drone easy to use and operate. With <br />
            auto pilot, the device will take a beautiful view for the <br />
            best of flying operation.
          </p>
        </div>
        <div className={s.characteristic_drone}>
          <div>
            <h1>4K</h1>
            <p>
              Camera <br /> Resolution
            </p>
          </div>
          <div>
            <h1>2TB</h1>
            <p>
              Storage <br /> Capacity
            </p>
          </div>
          <div>
            <h1>60 m/s</h1>
            <p>
              Super <br /> Max Speed
            </p>
          </div>
          <div>
            <h1>30 mins</h1>
            <p>
              Long Flight <br /> Time
            </p>
          </div>
        </div>
      </div>
      <div className={s.product_open}>
        <h1>New Products</h1>
        <p>
          New innovation, best quality than before. <br />
          Make every moment flying operation become unforgettable.
        </p>
      </div>
    </div>
  );
};

export default Feature;
