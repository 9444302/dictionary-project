import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(){
    let [keyword, setKeyword] = useState(null);
    let [data, setData] = useState(null)
    
    function handleResponse(response) {
        setData(response.data[0])
    }

    function handleSubmit(event){
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        
        axios.get(apiUrl).then(handleResponse)
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
    <Results define={data} />
</div>
    );
}