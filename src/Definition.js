import React from "react";

export default function Definition(props) {
    console.log (props)
    return(
        <div>
    <h3>{props.def.partOfSpeech}</h3>
    {props.def.definitions.map(function(definition, index) {
       return(
       <div key={index}>
    <p className="def">{`Definition: ${definition.definition}`}</p>
    <p className="example">{`Example: ${definition.example}`}</p>
    </div>
    )})}
    </div>
    )}
