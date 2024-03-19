import React from "react";
import TextCategory from "../(Category)/TextCategory";

function TextCategorySlider() {
  return (
    <div className="w-full m-auto relative overflow-hidden">
      <div className="w-fit px-2 py-5 flex justify-start items-center gap-4 cursor-grab">
        <TextCategory
          btnCategoryName="Clothes"
          btnCategoryBgColor="bg-[#ffffff]"
        />
        <TextCategory
          btnCategoryName="Shoes"
          btnCategoryBgColor="bg-[#ffffff]"
        />
        <TextCategory
          btnCategoryName="Jewelry"
          btnCategoryBgColor="bg-[#ffffff]"
        />
        <TextCategory
          btnCategoryName="Watch"
          btnCategoryBgColor="bg-[#ffffff]"
        />
        <TextCategory
          btnCategoryName="Cosmetics"
          btnCategoryBgColor="bg-[#ffffff]"
        />
        <TextCategory
          btnCategoryName="Clothes"
          btnCategoryBgColor="bg-[#ffffff]"
        />
        <TextCategory
          btnCategoryName="Shoes"
          btnCategoryBgColor="bg-[#ffffff]"
        />
        <TextCategory
          btnCategoryName="Jewelry"
          btnCategoryBgColor="bg-[#ffffff]"
        />
        <TextCategory
          btnCategoryName="Watch"
          btnCategoryBgColor="bg-[#ffffff]"
        />
        <TextCategory
          btnCategoryName="Cosmetics"
          btnCategoryBgColor="bg-[#ffffff]"
        />
      </div>
      {/* <div className="absolute bg-[linear-gradient(90deg,_#ffffff,_transparent_30%,_transparent_70%,_#ffffff)] inset-0 pointer-events-none"></div> */}
    </div>
  );
}

export default TextCategorySlider;
