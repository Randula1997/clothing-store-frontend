import React from 'react'

function Input(props) {
  return (
    <input type={props.inputType} placeholder={props.inputPlaceholder} className='w-[18em] py-2 text-center bg-[#FFFFFF] rounded-full max-sm:w-full'/>
  )
}

export default Input