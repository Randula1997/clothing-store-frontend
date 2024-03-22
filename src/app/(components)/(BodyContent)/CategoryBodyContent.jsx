"use client";

import React, { useRef } from "react";

function CategoryBodyContent(props) {
  const textCategoryContainerRef = useRef(null);

  let initialPosition = 0;
  let pressedInside = false;

  const handleMouseDown = (e) => {
    if (textCategoryContainerRef.current) {
      textCategoryContainerRef.current.style.cursor = "grabbing";
      initialPosition = e.clientX;
      pressedInside = true;

      document.body.style.userSelect = "none";
    }
  };

  const handleMouseUp = () => {
    if (textCategoryContainerRef.current) {
      textCategoryContainerRef.current.style.cursor = "grab";
      pressedInside = false;

      document.body.style.userSelect = "";
    }
  };

  const handleMouseLeave = () => {
    pressedInside = false;

    document.body.style.userSelect = "";
  };

  const handleMouseMove = (e) => {
    if (!pressedInside) {
      return;
    }
    if (textCategoryContainerRef.current) {
      textCategoryContainerRef.current.scrollLeft +=
        initialPosition - e.clientX;
    }
  };

  return (
    <div
      ref={textCategoryContainerRef}
      id="TextCategoryContainer"
      className="w-full cursor-grab m-auto relative overflow-x-scroll scroll-smooth snap-x [scrollbar-width:none]"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {props.children}
    </div>
  );
}

export default CategoryBodyContent;
