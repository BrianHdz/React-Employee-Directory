import React from "react";


// Using the datalist element we can create autofill suggestions based on the props.breeds array


function AgesButton(props) {
    // console.log(props)
    return (

        <button
            onClick={props.sortAges} className="btn btn-success">
            Sort by Age
        </button>

    );
}

export default AgesButton;

//onClick={props.sortAges}