"use client";

import React, { useEffect, useState } from "react";
import { data } from "@/assets/data";
import Icon from "../(Icon)/Icon";
import next from "../../../assets/images/next-icon.svg";
import prev from "../../../assets/images/prev-icon.svg";
import Image from "next/image";

function AdsSlider() {
  const [activeImg, setActiveImg] = useState(0);
  const handlePrev = () => {
    if (activeImg <= 0) {
      setActiveImg(data.length - 1);
    } else {
      setActiveImg(activeImg - 1);
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      handleNext();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImg]);

  const handleNext = () => {
    setActiveImg((activeImg + 1) % data.length);
  };

  return (
    <>
      <div className="mx-[auto] my-[0]">
        <div className="w-full m-auto relative py-4 flex justify-center items-center">
          {data.map((item, i) => {
            return (
              <Image width={1000} height={1000}
                className={activeImg === i ? "block img rounded-md" : "hide"}
                src={item.url}
                alt={item.alt}
                key={item.id}
              />
            );
          })}

          <div className="flex w-full absolute justify-between items-center px-8">
            <button onClick={handlePrev}>
              <Icon
                iconSrc={prev}
                iconBg="bg-[#f4f4f494]"
                iconHover="hover:[box-shadow:0_10px_25px_rgba(0,0,0,0.1)]"
              />
            </button>
            <button onClick={handleNext}>
              <Icon
                iconSrc={next}
                iconBg="bg-[#f4f4f494]"
                iconHover="hover:[box-shadow:0_10px_25px_rgba(0,0,0,0.1)]"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdsSlider;
