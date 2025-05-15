import React from 'react';

function Button(props){
    return(
        <>
         <button type="button" className="btn preet btn-primary button " >{props.title}</button>
        </>
    );
}
export default Button;