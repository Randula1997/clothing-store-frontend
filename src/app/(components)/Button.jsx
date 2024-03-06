import React from 'react'

function Button(props) {
  return (
    <button type={props.btnType} className='w-[18em] py-2 text-center bg-[#000000] text-[#FFFFFF] rounded-full max-sm:w-full'>{props.btnName}</button>
  )
}

export default Button