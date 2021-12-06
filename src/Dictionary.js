import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(){
    let [keyword, setKeyword] = useState(null);
    let [data, setData] = useState(null)
    let [photos, setPhotos] = useState(null)
    
    function handleResponse(response) {
        setData(response.data[0])
    }
    function handelPicResponse(response) {
        setPhotos(response.data.photos)
    }

    function handleSubmit(event){
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        
        axios.get(apiUrl).then(handleResponse)

        let pexelsKey =
          "563492ad6f91700001000001fa9f3439849941bdb39f76c8857ce63b";
          let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
          axios.get(pexelsApiUrl, { headers: {"Authorization" : `Bearer ${pexelsKey}`}}).then(handelPicResponse)
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
    <Results define={data} photos={photos} />
</div>
    );
}