import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import data from "../utils/data.js"
import { useState } from "react";
import Counter from "../components/Counter";

/**
 * membuat components Main Agar Rapih untuk Hero dll
 */
function Home () {
    const [movies, setMovies] = useState(data);
    
    return (
        <><Hero />
        <Movies movies={movies} setMovies={setMovies}/>
        <AddMovieForm movies={movies} setMovies={setMovies}/></>
    )
    // return(
    //     <Counter/>
    // )
}

export default Home;