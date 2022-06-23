import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/endpoints";

function PopularMovie() {
  //Membuat dispatch untuk mentrigger reducer
  const dispatch = useDispatch();

  useEffect(() => {
    //Memanggil function getPopularMovies
    getPopularMovies();
  },[]);
  // Membuat Fungsi getPopularMovies
  async function getPopularMovies() {
    const response = await axios(ENDPOINTS.POPULAR);
    dispatch(updateMovies(response.data.results));
  }

    return (
      <>
        <Hero />
        <Movies title = "Popular Movies"/>
      </>
    );
}
  
export default PopularMovie;