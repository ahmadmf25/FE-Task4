import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/endpoints";

function TopRatedMovie() {
  // dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    getTopRatedMovies();
  }, []);
  // Membuat Fungsi getTopRatedMovies
  async function getTopRatedMovies() {
    const response = await axios(ENDPOINTS.TOPRATED);

    // simpan data ke state movie
    dispatch(updateMovies(response.data.results));
  }

  return (
    <div>
      <Hero />
      <Movies title={"Top Rated"}/>
    </div>
  );
}

export default TopRatedMovie;