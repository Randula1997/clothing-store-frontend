import React from 'react'
import ImageCategory from '../(Category)/ImageCategory'
import shoes from '../../../assets/images/c_shoes.png';
import watch from '../../../assets/images/c_watch.png';
import cloths from '../../../assets/images/c_cloths.png';
import jewelry from '../../../assets/images/c_jewelry.png';
import cosmetics from '../../../assets/images/c_cosmetics.png';

function ImageCategorySlider() {
  return (
    <div className="relative w-3/5 right-0 m-auto overflow-hidden h-fit pb-10 mr-0 max-md:w-full max-md:left-0">
        <div className="w-fit px-4 py-2 flex justify-center items-center gap-x-10 m-auto animate-loop">
            <ImageCategory imgCategorySrc={shoes} imgCategoryLabel="Shoes"/>
            <ImageCategory imgCategorySrc={watch} imgCategoryLabel="Watch"/>
            <ImageCategory imgCategorySrc={cloths} imgCategoryLabel="Cloths"/>
            <ImageCategory imgCategorySrc={jewelry} imgCategoryLabel="Jewelry"/>
            <ImageCategory imgCategorySrc={cosmetics} imgCategoryLabel="Cosmetics"/>
        </div>
        <div className="absolute bg-[linear-gradient(90deg,_#ffffff,_transparent_30%,_transparent_70%,_#ffffff)] inset-0 pointer-events-none"></div>
    </div>
  )
}

export default ImageCategorySlider
