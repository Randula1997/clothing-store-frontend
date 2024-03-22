import React from 'react'
import Image from "next/image";

function ItemCard(props) {
  return (
    <div className='snap-start w-64'>
        <div>
            <Image src={props.itemImg} className='object-fit-cover h-full w-full pointer-events-none'/>
        </div>
        <div className='mt-3 user-select-none'>
            <p className='text-[#9B9B9B] overflow-ellipsis whitespace-nowrap overflow-hidden'>{props.itemName}</p>
            <label htmlFor="" className='text-black font-semibold'>{props.itemPrice}</label>    
        </div>    
    </div>
  )
}

export default ItemCard