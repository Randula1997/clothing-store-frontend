import React from "react";
import Image from 'next/image';
import videoIcon from '../../../assets/images/video_icon.png';

function CompanyInfoText() {
  return (
    <div className="flex bottom-0 items-center justify-center absolute text-center w-full py-5 px-10 gap-5">
      <Image src={videoIcon} width={28} height={28} className="max-sm:hidden" />
      <p className="text-[#9B9B9B] cursor-pointer">Learn about company.com</p>
    </div>
  );
}

export default CompanyInfoText;
