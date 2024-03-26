import React from 'react'

function Topic(props) {
  return (
    <div className="flex justify-center w-full items-center flex-col gap-4 text-center px-4 py-1">
        <label className="text-[2rem] text-black font-bold">{props.topic}</label>
        <label className="text-[#9B9B9B] pb-3">{props.subTopic}</label>
    </div>
  )
}

export default Topic
