import React from "react";


// Using the datalist element we can create autofill suggestions based on the props.breeds array


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