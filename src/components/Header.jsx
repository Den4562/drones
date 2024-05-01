import React from "react";
import s from "../styles/header.module.css";
import { GiDeliveryDrone } from "react-icons/gi";
import present_drone from "../assets/2.png";

const Header = () => {
  return (
    <div className={s.container}>
      <GiDeliveryDrone
        style={{
          position: "absolute",
          fontSize: "55px",
          marginTop: "10px",
          marginLeft: "180px",
        }}
      />
      <div className={s.nav_text}>
        <p>HOME</p>
        <p>GALLERY</p>
        <p>PRODUCTS</p>
        <p>REVIEW</p>
        <p>SUPPORT</p>
      </div>

      <div className={s.present_text}>
        <h2>Representing Drone Light </h2>
        <div className={s.present_text_drone}>
          Look up the sky and beautiful world with simple navigation. <br />
          Just record anmd get a lot memories to share, lighlty and fast like a
          lightning
        </div>
        <button>Get now</button>
        <div>
          <img
            style={{
              marginTop: "20px",
              width: "500px",
              height: "auto",
            }}
            src={present_drone}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
