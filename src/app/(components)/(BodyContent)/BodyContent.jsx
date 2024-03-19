import React from "react";

function BodyContent(props) {
  return (
    <div className="max-w-7xl m-auto bg-cover bg-center h-screen w-[90%]">
      {props.children}
    </div>
  );
}

export default BodyContent;
