import React from "react";


function NamesButton(props) {
    // console.log(props)

    return (

        <button
            onClick={props.cb} className="btn btn-danger">
            Sort by Name
        </button>

    );
}

export default NamesButton;

//