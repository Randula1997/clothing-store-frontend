'use client'

import React, { useRef } from "react";
import TextCategory from "../(Category)/TextCategory";
import CategoryBodyContent from "../(BodyContent)/CategoryBodyContent";

function TextCategorySlider() {

  return (
      <CategoryBodyContent>
        <div className="w-fit px-2 py-5 flex justify-start items-center gap-4">
          <TextCategory categoryName="Clothes" categoryBgColor="bg-[#ffffff]" categoryBoxShadow="[box-shadow:0_5px_15px_rgba(0,0,0,0.1)]" />
          <TextCategory categoryName="Shoes" categoryBgColor="bg-[#ffffff]" categoryBoxShadow="[box-shadow:0_5px_15px_rgba(0,0,0,0.1)]" />
          <TextCategory categoryName="Jewelry" categoryBgColor="bg-[#ffffff]" categoryBoxShadow="[box-shadow:0_5px_15px_rgba(0,0,0,0.1)]" />
          <TextCategory categoryName="Watch" categoryBgColor="bg-[#ffffff]" categoryBoxShadow="[box-shadow:0_5px_15px_rgba(0,0,0,0.1)]" />
          <TextCategory categoryName="Cosmetics" categoryBgColor="bg-[#ffffff]" categoryBoxShadow="[box-shadow:0_5px_15px_rgba(0,0,0,0.1)]" />
          <TextCategory categoryName="Clothes" categoryBgColor="bg-[#ffffff]" categoryBoxShadow="[box-shadow:0_5px_15px_rgba(0,0,0,0.1)]" />
          <TextCategory categoryName="Shoes" categoryBgColor="bg-[#ffffff]" categoryBoxShadow="[box-shadow:0_5px_15px_rgba(0,0,0,0.1)]" />
          <TextCategory categoryName="Jewelry" categoryBgColor="bg-[#ffffff]" categoryBoxShadow="[box-shadow:0_5px_15px_rgba(0,0,0,0.1)]" />
          <TextCategory categoryName="Watch" categoryBgColor="bg-[#ffffff]" categoryBoxShadow="[box-shadow:0_5px_15px_rgba(0,0,0,0.1)]" />
          <TextCategory categoryName="Cosmetics" categoryBgColor="bg-[#ffffff]" categoryBoxShadow="[box-shadow:0_5px_15px_rgba(0,0,0,0.1)]" />
        </div>        
      </CategoryBodyContent>
  );
}

export default TextCategorySlider;
