import React from "react";

function Button(props) {
  return (
    <>
      <button
        type="button"
        onClick={() => {
          props.Sub;
        }}
        className="btn preet btn-primary button "
      >
        {props.title}
      </button>
    </>
  );
}
export default Button;
