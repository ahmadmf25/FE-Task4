import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";

/**
 * membuat components Main Agar Rapih untuk Hero dll
 */
function Main () {
    return (
        <><Hero /><Movies /><AddMovieForm /></>
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