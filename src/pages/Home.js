import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";

/**
 * membuat components Main Agar Rapih untuk Hero dll
 */
function Home () {
    return (
        <><Hero />
        <Movies title = "Latest Movies"/>
        </>
    )
}

export default Home;