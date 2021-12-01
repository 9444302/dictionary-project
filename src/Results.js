import React from "react";

export default function Results(props) {

    if (props.define) {
      console.log(props.define)
return (
  <div className="results">
    <h2>{props.define.word}</h2>
    <div className="phonetic">({props.define.phonetic})</div>

  </div>
);} else{
    return null
}
}