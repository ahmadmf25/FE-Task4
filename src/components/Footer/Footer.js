/**
 * IMPORT FOOTER CSS
 */
import styles from "./Footer.module.css";

function Footer() {
    return(
        <div className={styles.container}>
            <footer className= {styles.footer}>
                <h2 className= {styles.footer__title}>Movie App</h2>
                <p className= {styles.footer__author}>Created by Maulana25</p>
            </footer>
        </div>
    );
}

/**
 * Export Footer
 */
export default Footer;