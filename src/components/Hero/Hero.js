import { useEffect, useState } from "react";
import StyledHero from "./Hero.styled";
import Button from "../ui/Button";
import axios from "axios";
import ENDPOINTS from "../../utils/endpoints";

function Hero() {
  // Membuat state movie
  const [movie, setMovie] = useState("");
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  console.log(genres);
  const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  useEffect(getDetailMovie,[]);
  
  // Mendapatkan 1 data dari Trending Movie
  async function getTrendingMovies() {
    const response = await axios (ENDPOINTS.HERO);
    return response.data.results[1];
  }
  // Membuat fungsi detail movie
  async function getDetailMovie() {
    const trendingMovie = await getTrendingMovies();
    const id = trendingMovie.id;
    // fetch detail movie
    const response = await axios(ENDPOINTS.DETAIL(id));

    setMovie(response.data);
  }

  return (
    <StyledHero>
      <div>
        <section>
          <div>
            <h2>{movie.title}</h2>
            <h3>{genres}</h3>
            <p>{movie.overview}</p>
            <Button as = "a" href={trailer} target ="_blank">
              Watch
            </Button>
          </div>
          <div>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />
          </div>
        </section>
      </div>
    </StyledHero>
  );
}

export default Hero;