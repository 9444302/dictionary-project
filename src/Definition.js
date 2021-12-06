import React from "react";
import Synonyms from "./Synonyms"

import "./definition.css"

export default function Definition(props) {
  return (
    <div>
      <h3>{props.def.partOfSpeech}</h3>
      {props.def.definitions.map(function (definition, index) {
        if (definition.example) {
          return (
            <div key={index}>
              <p className="def">
                <strong>Definition: </strong>
                {definition.definition}
              </p>
              <p className="example">
                <strong>Example: </strong>{definition.example}
              </p>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        } else {
          return (
            <div key={index}>
              <p className="def">
                <strong>Definition: </strong>{definition.definition}
              </p>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        }
      })}
    </div>
  );
}
