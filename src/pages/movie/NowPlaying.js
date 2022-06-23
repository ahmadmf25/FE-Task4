import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/endpoints";

function NowPlayingMovie() {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  // Membuat Fungsi getNowPlayingMovies
  async function getNowPlayingMovies() {
    const response = await axios(ENDPOINTS.NOWPLAYING);

    // Simpan data ke state movie
    dispatch(updateMovies(response.data.results));
  }

  return (
    <div>
      <Hero />
      <Movies title={"Now Playing"}/>
    </div>
  );
}

export default NowPlayingMovie;