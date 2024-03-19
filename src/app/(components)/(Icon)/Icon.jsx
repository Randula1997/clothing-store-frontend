import React from "react";
import Image from 'next/image';

function Icon(props) {
  return (
    <div className={`${props.iconBg} rounded-full w-[45px] p-2 cursor-pointer transition-all ${props.iconHover}`}>
      <Image src={props.iconSrc} width={68} height={68}/>
    </div>
  );
}

export default Icon;
