import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <footer id="footer" className={styles.footer}>
    <div className={styles.footerMargins}>
      <div className={styles.footerContent}>
        <div>
          <p className={styles.footerText}>
            Nazwa firmy - wszelkie prawa zastrzeżone, 2023
          </p>
        </div>
        <div className={styles.socialLinks}>
          <a
            className={styles.socialLinksItem}
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer noopener"
            title="instagram"
          >
            <FontAwesomeIcon icon={faInstagram} color="white" fontSize={35} />
          </a>
          <a
            className={styles.socialLinksItem}
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer noopener"
            title="facebook"
          >
            <FontAwesomeIcon
              icon={faSquareFacebook}
              color="white"
              fontSize={35}
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
