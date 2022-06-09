import Movie from "../Movie/Movie.js";
import styles from "./Movies.module.css";
import { nanoid } from "nanoid";

function Movies(props) {
  // destructing props
  const { title, movies, setMovies } = props ;

  // Membuat fungsi untuk handle click
  function handleClick() {
    const movie = {
      id: nanoid(),
      title: "Jigsaw",
      year: 2022,
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };

    // Menjalankan fungsi setMovies
    // Menambahkan movie ke dalam movies
    // spread operator : copy data array
    setMovies([...movies, movie]);
  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>{title}</h2>
        <div className={styles.movie__container}>
          {/*
           * looping map
           * Render Component Movie dan Mengirim Props Movie
           */}
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
        {/* Membuat event onClick */}
        <button onClick={handleClick}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;