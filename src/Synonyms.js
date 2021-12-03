import React from "react";

export default function Synonyms(props) {
    console.log(props)
  if (props.synonyms) {
    return (
      <ul className="synonyms">
        {props.synonyms.map(function (synonym, index) {
          return (
            <div key={index}>
              <li>{synonym}</li>
            </div>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
