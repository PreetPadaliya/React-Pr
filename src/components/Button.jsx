import React from "react";

function Button(props) {
  return (
    <>
      <button
        type="button"
        onClick={props.Sub}
        className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        {props.title}
      </button>
    </>
  );
}
export default Button;
