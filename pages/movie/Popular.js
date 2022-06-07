import axios from "axios";
import { useState,useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

function PopularMovie() {
  // Setting API KEY
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
  //Membuat state Movies
  const [movies, setMovies]= useState([]);

  useEffect(() => {
    //Memanggil function getPopularMovies
    getPopularMovies();
  },[]);
  // Membuat Fungsi getPopularMovies
  async function getPopularMovies() {
    const response = await axios(URL);
    // Simpan data ke state movies
    setMovies(response.data.results);
  }

  console.log(movies);
    return (
      <>
        <Hero />
        <Movies movies= {movies}/>
      </>
    );
  }
  
export default PopularMovie;