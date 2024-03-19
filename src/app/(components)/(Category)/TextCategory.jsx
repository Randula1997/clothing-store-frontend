import React from 'react'

function TextCategorie(props) {
  return (
    <button type='button' className={`${props.btnCategoryBgColor} relative w-fit px-10 py-2.5 text-center text-[#9B9B9B] rounded-full mr-2 [box-shadow:0_5px_15px_rgba(0,0,0,0.1)]`}>{props.btnCategoryName}</button>
  )
}

export default TextCategorie