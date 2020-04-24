import React from "react";


function AgesButton(props) {
    // console.log(props)
    
    return (

        <button
            onClick={props.cb} className="btn btn-success">
            Sort by Age
        </button>

    );
}

export default AgesButton;

//onClick={props.sortAges}