import React from "react";
import "./synonyms.css"

export default function Synonyms(props) {
    console.log(props)
  if (props.synonyms) {
    return (
      <ul className="synonyms">
        {props.synonyms.map(function (synonym, index) {
          return (
              <li key={index}>{synonym}</li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
