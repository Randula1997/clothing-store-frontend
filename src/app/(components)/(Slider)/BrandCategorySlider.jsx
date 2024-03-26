import React from 'react'
import ImageCategory from '../(Category)/ImageCategory'
import adidas from '../../../assets/images/c_adidas.png';
import nike from '../../../assets/images/c_nike.png';
import puma from '../../../assets/images/c_puma.png';
import apple from '../../../assets/images/c_apple.png';
import fila from '../../../assets/images/c_fila.png';
import gucci from '../../../assets/images/c_gucci.png';

function BrandCategorySlider() {
  return (
    <div className="relative w-3/4 m-auto overflow-hidden h-fit pb-16 max-md:w-full">
        <div className="w-fit px-4 pt-3 flex justify-center items-center gap-x-10 m-auto animate-loop">
            <ImageCategory imgCategorySrc={adidas} imgCategoryLabel="Adidas"/>
            <ImageCategory imgCategorySrc={nike} imgCategoryLabel="Nike"/>
            <ImageCategory imgCategorySrc={puma} imgCategoryLabel="Puma"/>
            <ImageCategory imgCategorySrc={apple} imgCategoryLabel="Apple"/>
            <ImageCategory imgCategorySrc={fila} imgCategoryLabel="Fila"/>
            <ImageCategory imgCategorySrc={gucci} imgCategoryLabel="Gucci"/>
        </div>
        <div className="absolute bg-[linear-gradient(90deg,_#ffffff,_transparent_30%,_transparent_70%,_#ffffff)] inset-0 pointer-events-none"></div>
    </div>
  )
}

export default BrandCategorySlider