// activity 23
// src/components/SearchForm

import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array


function SearchForm(props) {
  // console.log(props)
  return (
    <div className="card">
      
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Age:</strong> {props.age}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>  
      </div>
      
    </div>
  );
}

export default SearchForm;
