import { useParams } from "react-router-dom";
import { useState } from "react";
import DetailMovie from "../../components/DetailMovie";
import { useEffect } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/endpoints";

function Detail () {
    const params = useParams();
    const [movies, setMovies] = useState([]);

    useEffect (() => {
        getRecommendationMovies();
    }, [params.id])

    async function getRecommendationMovies() {;
        const response = await axios(ENDPOINTS.RECOMENDATION(params.id));
        setMovies(response.data.results);
    }
    console.log(movies);
    return(
        <>
        <DetailMovie/>
        <Movies title = "Recomendations" movies = {movies}/>
        </>
    )
}
export default Detail;