import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './request';
import './Banner.css';
//import ReactDOM from 'react-dom';

//rfce - SHORTCUT TO GET ALL THE BOILERPLATE INITIAL CODE


//IMAGE ADDRESS IS DIFFERENT FROM THE RESPONSE SO APPENDING IMAGE PATH TO THIS ADDRESS
const base_image_url = "https://image.tmdb.org/t/p/original/";

function Banner(){
    const [movie,setMovie] =  useState([]);

    // SNIPPET OF CODE WHICH RUNS BASED ON A SPECIFIC CONDITION. 
    useEffect( () => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            //console.log(request);
            setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)]);
            return request;
            //GETTING RANDOM MOVIE FUNCTION - Math.floor(Math.random()*request.data.results.length-1);
        }
        //CALLING THE FUNCTION
        fetchData();
    }
    ,
    //IF [] IS EMPTY , CODE WILL RUN ONCE -<ALSO-> NOTE!! - WHEN ANY OUTSIDE VARIABLE IS USED INSIDE USEEFFECT
    //FUNCTION ALWAYS PUT IT INSIDE THIS ARRAY PARAMENTER
    []);
    console.log(movie);

    /*
    //TRUNCATE A STRING AFTER n CHARACTERS
    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }
    */

    return(
        <>
        <header className="banner"
        style = {
            {
                backgroundSize: "cover",
                backgroundImage: `url(
                    ${base_image_url}${movie?.backdrop_path}
                )`,
                backgroundPosition: "center center"
            }
        }
         
        >
            <div className="banner_contents">
                {/* ? IS USED AS AN OPTIONAL SO THAT THE APPLICATION DOESN'T CRASHES */}
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">
                    {/*OPTIONAL TO USE -  {truncate(movie?.overview, 150)} */}
                    {movie?.overview}
                </h1>
            </div>
            <div class="banner_fadeBottom"/>
        </header>
        </>
    );
}

export default Banner;