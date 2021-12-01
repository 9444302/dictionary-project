import React from "react";
import Definition from "./Definition";

export default function Results(props) {
let results = props.define
    if (results) {
      console.log(results)
return (
  <div className="results">
    <h2>{results.word}</h2>
    <div className="phonetic">({results.phonetic})</div>
{results.meanings.map(function(meaning, index) {
 return (
 <div key={index}>
  <Definition def={meaning}/>
  </div>
)})}
  </div>
);} else{
    return null
}
}