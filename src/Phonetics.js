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
                    <a
                      href={phonetic.audio}
                      target="_blank"
                      rel="noreferrer"
                    >listen</a>
                    <span>{`(${phonetic.text})`}</span>
                  </div>
                );} else {
                    return (
                      <div key={index}>
                        <span>{`(${phonetic.text})`}</span>
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