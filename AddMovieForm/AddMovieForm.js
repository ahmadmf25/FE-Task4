// import CSS module AddMovieForm
import styles from "./AddMovieForm.module.css";
/**
 * 
 * Membuat Components AddMovieFrom
 */
function AddMovieForm() {
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
          <h1 className={styles.form__title}>Add Movie</h1>
          <form className={styles.form__form}>
            <label className={styles.form__label}>Title</label>
            <br />
            <input type="text" className={styles.form__input}></input>
            <br />
            <label className={styles.form__label}>Year</label>
            <br />
            <input type="text" className={styles.form__input}></input> <br />
            <button className={styles.form__button}>Submit</button>
            <br />
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;