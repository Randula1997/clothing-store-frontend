import React from 'react'

function Categorie(props) {
  return (
    <button type='button' className='relative w-fit px-10 py-2.5 text-center bg-[#f4f4f494] text-[#9B9B9B] rounded-full mr-2'>{props.btnCategoryName}</button>
  )
}

export default Categorie