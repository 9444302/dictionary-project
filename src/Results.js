import React from "react";
import Definition from "./Definition";
import Phonetics from "./Phonetics"

import "./results.css"

export default function Results(props) {
let results = props.define
    if (results) {
      console.log(results)
return (
  <div className="results">
    <section>
    <h2>{results.word}</h2>
    <Phonetics phonetics={results.phonetics} />
    </section>
    {results.meanings.map(function (meaning, index) {
      return (
        <section>
          <div key={index}>
            <Definition def={meaning} />
          </div>
        </section>
      );
    })}
  </div>
);} else{
    return null
}
}