import React from 'react'

function Input(props) {
  return (
    <input type={props.inputType} placeholder={props.inputPlaceholder} className={`${props.inputWidth} py-2 text-center bg-[#FFFFFF] rounded-full`}/>
  )
}

export default Input