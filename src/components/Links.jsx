import React from "react";
import s from "../styles/links.module.css";
import { GiDeliveryDrone } from "react-icons/gi";
function Links() {
  return (
    <div className={s.container}>
      <div className={s.logo}>
        <GiDeliveryDrone
          style={{
            position: "absolute",
            fontSize: "85px",
            marginTop: "40px",
            marginLeft: "300px",
            color: "white",
          }}
        />
        <p className={s.logo_text}>autodrone</p>
        <p className={s.logo_text2}>
          Look up the sky and beautiful <br />
          world easily.
        </p>
      </div>

      <div className={s.container_links}>
        <div className={s.links}>
          <ul>
            <h3>Explore</h3>
            <li>Our Services</li>
            <li>Specification</li>
            <li>Refund</li>
            <li>Playlist</li>
          </ul>
        </div>
        <div className={s.links}>
          <ul>
            <h3>Account</h3>
            <li>My Account</li>
            <li>Top Benefit</li>
            <li>How-to Tutorials</li>
            <li>Moment</li>
          </ul>
        </div>
        <div className={s.links}>
          <ul>
            <h3>Office</h3>
            <li>+021 2208 1996</li>
            <li>SCBD, Jakarta</li>
            <li>No.2 (Autodrone)</li>
            <li>support@autodrone.id</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Links;
