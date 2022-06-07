import { useEffect, useState } from "react";
import StyledHero, { Container } from "./Hero.styled";
import Button from "../ui/Button";
import axios from "axios";

function Hero() {
  // Membuat state movie
  const [movie, setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  console.log(genres);
  const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  useEffect(getDetailMovie,[]);
  
  // Mendapatkan 1 data dari Trending Movie
  async function getTrendingMovies() {
    const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const response = await axios (URL);
    return response.data.results[1];
  }
  // Membuat fungsi detail movie
  async function getDetailMovie() {
    const trendingMovie = await getTrendingMovies();
    const id = trendingMovie.id;
    // fetch detail movie
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(URL);

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