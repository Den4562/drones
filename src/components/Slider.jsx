import React, { useState, useEffect, Children, cloneElement } from "react";
import s from "../styles/slider.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const PAGE_WIDTH = 800;

export const Slider = ({ children }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  const handleLeftClick = () => {
    console.log("LeftActive");
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH;
      console.log(newOffset);
      return Math.min(newOffset, 0);
    });
  };

  const handleRightClick = () => {
    console.log("RightACtive");

    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH;
      const maxOffset = -(PAGE_WIDTH * (pages.length - 1));
      console.log(newOffset, maxOffset);
      return Math.max(newOffset, maxOffset);
    });
  };

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        });
      })
    );
  }, []);

  return (
    <div className={s.main_container}>
      <FaChevronLeft className={s.arrow} onClick={handleLeftClick} />
      <div className={s.window}>
        <div
          className={s.all_pages_container}
          style={{ transform: `translateX(${offset}px)` }}
        >
          {pages}
        </div>
      </div>
      <FaChevronRight className={s.arrow} onClick={handleRightClick} />
    </div>
  );
};

export default Slider;
