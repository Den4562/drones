import React from "react";
import s from "../styles/review.module.css";
import f1 from "../assets/1face.jpg";
import f2 from "../assets/2face.jpg";
import f3 from "../assets/3face.jpg";
function Reviews() {
  return (
    <div className={s.container}>
      <h1 className={s.text1}>
        What Our "Pilots" <br />
        Are Saying
      </h1>
      <div className={s.comment_container}>
        <p className={s.text_review}>
          With high resolution camera, <br />
          picture become clear and beautiful. <br />
          It’s so easy to operate drone.
        </p>
        <div className={s.avatar}>
          <img src={f1} />
          <div className={s.profile}>
            <h2>Hugo Adams</h2>
            <p>Content Creator</p>
          </div>
        </div>
      </div>
      <div className={s.comment_container}>
        <p className={s.text_review}>
          Taking high view video become <br />
          easy and faster. Battery performance <br />
          really helping for making film.
        </p>
        <div className={s.avatar}>
          <img src={f2} />
          <div className={s.profile}>
            <h2>Jennie Obrien</h2>
            <p>Director Film</p>
          </div>
        </div>
      </div>
      <div className={s.comment_container}>
        <p className={s.text_review}>
          Making video content for my trip <br />
          vlog so powerful and wonderful. <br />
          Love the video quality.
        </p>
        <div className={s.avatar}>
          <img src={f3} />
          <div className={s.profile}>
            <h2>Lisa Millz</h2>
            <p>Content WQCreator</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
