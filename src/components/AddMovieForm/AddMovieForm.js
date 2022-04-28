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

  // Membuat State title dan Date
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [url,setUrl] = useState("");
  const [type,setType] = useState("Drama");

  // Membuat State untuk yang error
  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isTypeError, setIsTypeError] = useState(false);
  
  // Membuat Fungsi HandleTitle
  function handleTitle(e) {
    setTitle(e.target.value);
  }
  function handleDate (e) {
    setDate (e.target.value)
  }
  function handleUrl(e) {
    setUrl(e.target.value);
  }
  function handleChange(e) {
    setType(e.target.value);
  }
  // Handle Form ketika di submit
  function handleSubmit(e) {
    // mencegah auto refresh
    e.preventDefault();

    // Jika title kosong, set error title jadi true
    if (title === "") {
      setIsTitleError(true);
    } else if (date === "") {
      setIsDateError(true);
    } else if (type === "") {
      setIsTypeError(true);
    }
    // Jika tidak, tambah datanya
    else {
      const movie = {
        id: nanoid(),
        title: title,
        year: date,
        type: type,
        poster: url,
      };

      // Menjalankan fungsi setMovies
      setMovies([...movie, movies]);

      setIsTitleError(false);
      setIsDateError(false);
      setIsTypeError(false);
    }
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
              onChange= {handleTitle}
              id = "title" 
              type="text" 
              className={styles.form__input} 
              value ={title}>
              </input>
              { /* Menambahkan Alert dan infline if : operator &&*/}
              {isTitleError && <Alert>Title Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label className={styles.form__label}>Year</label>
              <input 
                onChange={handleDate}
                type="text" 
                className={styles.form__input} 
                value = {date}>
              </input>
              { /* Menambahkan Alert dan infline if : operator &&*/}
              {isDateError && <Alert>Date Wajib Diisi</Alert>}
            </div>
            <div>
            <label className={styles.form__label}>Image URL</label>
              <input
                className={styles.form__input}
                type="text"
                value={url}
                onChange={handleUrl}
              />
              {isTypeError && <Alert>Link Image Harus di Isi</Alert>}
              <select
                className={styles.form__select}
                id=""
                value={type}
                onChange={handleChange}
              >
                <option value="Horror">Horror</option>
                <option value="Drama">Drama</option>
                <option value="Thriller">Thriller</option>
                <option value="Action">Action</option>
                <option value="Comedy">Comedy</option>
              </select>
              <button className={styles.form__button}>Add Movie</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;