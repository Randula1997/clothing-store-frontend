import React from 'react'

function NavItem(props) {
  return (
    <a className='hover:z-50 block text-black hover:bg-[#f4f4f494] hover:text-black rounded-lg p-2 cursor-pointer'>{props.itemName} {props.children} </a>
  )
}

export default NavItem