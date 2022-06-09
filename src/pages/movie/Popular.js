import axios from "axios";
import { useState,useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/endpoints";

function PopularMovie() {
  //Membuat state Movies
  const [movies, setMovies]= useState([]);

  useEffect(() => {
    //Memanggil function getPopularMovies
    getPopularMovies();
  },[]);
  // Membuat Fungsi getPopularMovies
  async function getPopularMovies() {
    const response = await axios(ENDPOINTS.POPULAR);
    // Simpan data ke state movies
    setMovies(response.data.results);
  }

  console.log(movies);
    return (
      <>
        <Hero />
        <Movies title = "Popular Movies" movies= {movies}/>
      </>
    );
  }
  
export default PopularMovie;