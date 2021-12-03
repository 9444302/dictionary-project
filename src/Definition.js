import React from "react";
import Synonyms from "./Synonyms"

export default function Definition(props) {
  console.log(props);
  return (
    <div>
      <h3>{props.def.partOfSpeech}</h3>
      {props.def.definitions.map(function (definition, index) {
        if (definition.example) {
          return (
            <div key={index}>
              <p className="def">{`Definition: ${definition.definition}`}</p>
              <p className="example">{`Example: ${definition.example}`}</p>
              <Synonyms synonyms={definition.synonyms}/>
            </div>
          );
        } else {
          return (
              <div key={index}>
            <p className="def">{`Definition: ${definition.definition}`}</p>
            <Synonyms synonyms={definition.synonyms}/>
            </div>
          );
        }
      })}
    </div>
  );
}
