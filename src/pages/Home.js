import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import data from "../utils/data.js"
import { useState } from "react";

/**
 * membuat components Main Agar Rapih untuk Hero dll
 */
function Main () {
    const [movies, setMovies] = useState(data);
    return (
        <><Hero />
        <Movies movies={movies} setMovies={setMovies}/>
        <AddMovieForm movies={movies} setMovies={setMovies}/></>
    )
}
/**
 * Membuat Components Home
 */
function Home (){
    return (
        <div>
            <Navbar />
            <Main />
            <Footer />
        </div>
    );
}

export default Home;