import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import { useEffect } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";

function Detail () {
    const params = useParams();
    const dispatch = useDispatch();

    useEffect (() => {
        getRecommendationMovies();
    }, [params.id])

    async function getRecommendationMovies() {;
        const response = await axios(ENDPOINTS.RECOMENDATION(params.id));
        dispatch(updateMovies(response.data.results));
    }
    return(
        <>
        <DetailMovie/>
        <Movies title = "Recomendations"/>
        </>
    )
}
export default Detail;