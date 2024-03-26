import React from 'react'

function RectangleButton(props) {
  return (
    <div className="flex justify-center w-full items-center py-5 flex-col gap-4 text-center px-4">
      <button type="button" className="w-44 border-2 border-slate-600 py-2 text-center bg-transparent text-[black] rounded-md">View more</button>
    </div>
  )
}

export default RectangleButton