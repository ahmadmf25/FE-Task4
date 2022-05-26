// Import State
import { useState } from "react";
// import CSS module AddMovieForm
import styles from "./AddMovieForm.module.css";
// import Nanoid
import { nanoid } from "nanoid";
// Import Alert
import Alert from "../Alert/Alert";
/**
 * 
 * Membuat Components AddMovieFrom
 */
function AddMovieForm(props) {
  // destructing props
  const  { movies, setMovies } = props;

  // Membuat Object
  const [formData, setFormData] = useState({
    title :"",
    date :"",
    poster :"",
    type :"",
  });

  // Membuat State title,Date,poster,type
  // Destructing
  const { title, date, poster, type } = formData;

  // Membuat State untuk yang error
  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isPosterError, setIsPosterError] = useState(false);
  
  // Membuat Fungsi HandleTitle
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData ({
      ...FormData,[name] : value,
    })
  }
  function validate () {
    if (title === "") {
      setIsTitleError(true);
      return false;
    } else if (date === "") {
      setIsDateError(true);
      setIsTitleError(false);
      return false;
    } else if (poster === "") {
      setIsPosterError(true);
      setIsDateError(false);
      return false;
    } else {
      setIsTitleError(false);
      setIsDateError(false);
      return true;
    }
  }

  function addMovie() {
    const movie = {
      id : nanoid(),
      title: title,
      year : date,
      type : type,
      poster : poster,
    };

    setMovies ([...movies, movie]);
  }
  // Handle Form ketika di submit
  function handleSubmit(e) {
    // mencegah auto refresh
    e.preventDefault();

    validate() && addMovie();
  }

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__img}
            src="https://picsum.photos/300/400"
            alt=""
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movie Form</h2>
          <form onSubmit = {handleSubmit}>
            <div className={styles.form__group}>
              <label htmlFor = "title" className={styles.form__label}>Title</label>
              <input 
              onChange= {handleChange}
              id = "title" 
              type="text" 
              name ="title"
              className={styles.form__input}
              // Memberikan Value Input 
              value ={title}>
              </input>
              { /* Menambahkan Alert dan infline if : operator &&*/}
              {isTitleError && <Alert>Title Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label className={styles.form__label}>Year</label>
              <input 
                onChange={handleChange}
                type="text"
                name = "date" 
                className={styles.form__input} 
                value = {date}>
              </input>
              { /* Menambahkan Alert dan infline if : operator &&*/}
              {isDateError && <Alert>Date Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label className={styles.form__label}>Poster</label>
                <input
                className={styles.form__input}
                type="text"
                name = "poster"
                value={poster}
                onChange={handleChange}
              />
              {isPosterError && <Alert>Link Image Harus di Isi</Alert>}
              <div className={styles.form__group}>
                <select
                className={styles.form__select}
                id=""
                name = "type"
                value={type}
                onChange={handleChange}
                >
                <option value="Horror">Horror</option>
                <option value="Drama">Drama</option>
                <option value="Thriller">Thriller</option>
                <option value="Action">Action</option>
                <option value="Comedy">Comedy</option>
                </select>
              </div>
              <button className={styles.form__button}>Add Movie</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;