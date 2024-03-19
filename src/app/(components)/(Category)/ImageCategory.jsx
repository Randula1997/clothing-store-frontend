import Image from 'next/image'
import React from 'react'

function ImageCategory(props) {
  return (
    <>
    <div className={`bg-white relative w-[90px] h-[90px] rounded-full p-2.5 text-center text-[#9B9B9B] [box-shadow:0_5px_15px_rgba(0,0,0,0.1)]`}>
        <Image src={props.imgCategorySrc} className='w-[70px] pointer-events-none'/>
        <label htmlFor="Image" className='absolute left-0 right-0 top-28 z-50'>{props.imgCategoryLabel}</label>
    </div>
    </>
)
}

export default ImageCategory