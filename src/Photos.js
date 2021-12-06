import React from "react";

import "./photos.css";

export default function Photos(props) {
  if (props.results) {
    return (
      <div className="photos">
        <div className="row">
          {props.results.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    className="img-fluid"
                    src={photo.src.landscape}
                    alt="example photo"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
