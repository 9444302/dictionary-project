import React from "react";

export default function Phonetics (props) {
    console.log (props.phonetics)
    if (props.phonetics){
    return (
        <div className="phonetics">
            {props.phonetics.map(function(phonetic, index){
                if (phonetic.audio){
                return (
                  <div key={index}>
                    <p>{`(${phonetic.text})`}</p>
                    <a
                      href={phonetic.audio}
                      target="_blank"
                      rel="noreferrer"
                      className="btn listen"
                    >
                      listen
                    </a>
                  </div>
                );} else {
                    return (
                      <div key={index}>
                        <p>{`(${phonetic.text})`}</p>
                      
                      </div>
                    );
                }
            })}
        </div>
    )
    ;} else {
        return null
    }
}