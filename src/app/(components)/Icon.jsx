import React from "react";
import Image from 'next/image';

function Icon(props) {
  return (
    <div className="bg-[#FFFFFF] rounded-full w-[45px] p-2 cursor-pointer">
      <Image src={props.iconSrc} width={68} height={68} />
    </div>
  );
}

export default Icon;
