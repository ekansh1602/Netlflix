import React, { useEffect, useState } from 'react';
//import ReactDOM from 'react-dom';
import axios from './axios';
import './Row.css';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

//rfce - SHORTCUT TO GET ALL THE BOILERPLATE INITIAL CODE


//IMAGE ADDRESS IS DIFFERENT FROM THE RESPONSE SO APPENDING IMAGE PATH TO THIS ADDRESS
const base_image_url = "https://image.tmdb.org/t/p/original/";

function Row(props){
    const [movies,setMovie] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");

    // SNIPPET OF CODE WHICH RUNS BASED ON A SPECIFIC CONDITION. 
    useEffect( ()=> {
        async function fetchData(){
            const request = await axios.get(props.fetchUrl);
            setMovie(request.data.results);
            //console.log(request);
            return request;
        }
        //CALLING THE FUNCTION
        fetchData();
    }
    ,
    //IF [] IS EMPTY , CODE WILL RUN ONCE -<ALSO-> NOTE!! - WHEN ANY OUTSIDE VARIABLE IS USED INSIDE USEEFFECT
    //FUNCTION ALWAYS PUT IT INSIDE THIS ARRAY PARAMENTER
    [props.fetchUrl]);

    //console.log(movie);

    const opts = {
        height: "390",
        width: "100%",
        playVars: {
            autoplay: 1
        },
    };

    const movieClicked = (moviename) => {
        console.log(moviename);
        if (trailerUrl != "") setTrailerUrl("");
        else {
          movieTrailer(moviename)
            .then((url) => {
              const urlParamV = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParamV.get("v"));
            })
            .catch((err) => console.log(err));
        }
      };
    

    return(
        <>
        <div className="row">
            <h2>{props.title}</h2>
            <div className="row_posters">
                {movies.map(movie => (
                <img 
                key={movie.id}
                onClick={() =>
                    movieClicked(movie.name || movie.title || movie.orginal_name)
                }
                className={`row_poster ${props.isLargeRow && "row_posterLarge"}`} 
                src ={`${base_image_url}${props.isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                alt={movie.name}/>
                ))}
            </div>
            {trailerUrl !=="" && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
        </>
    );
}

export default Row;