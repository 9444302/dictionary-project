import React, { useState } from "react";

export default function Dictionary(){
    let [keyword, setKeyword] = useState(null);
    function handleSubmit(event){
        event.preventDefault();
        alert(`Searching for ${keyword}`)
    }
    function getKeyword(event){
        setKeyword(event.target.value)
    }
    return (
<div className="dictionary">
    <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Search word" onChange={getKeyword} />
        <input type="submit" value="Search" />
    </form>
</div>
    );
}