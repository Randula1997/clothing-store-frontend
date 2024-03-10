import React from 'react'

function Button(props) {
  return (
    <button type={props.btnType} className={`${props.btnWidth} py-2 text-center bg-[#000000] text-[#FFFFFF] rounded-full`}>{props.btnName}</button>
    )
}

export default Button