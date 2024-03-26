import React from "react";

function SubTopic(props) {
  return (
    <div className="flex justify-end w-full items-center py-2.5 text-[#9B9B9B]">
      {props.subTopic}
    </div>
  );
}

export default SubTopic;
