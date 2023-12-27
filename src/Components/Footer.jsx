import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.footerMargins}>
        <div className={styles.footerContent}>
          <div>
            <p className={styles.footerText}>{props.footerText}</p>
          </div>
          <div className={styles.socialLinks}>
            <a
              className={styles.socialLinksItem}
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer noopener"
              title="instagram"
            >
              <FontAwesomeIcon icon={faInstagram} color="white" fontSize={45} />
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
                fontSize={45}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
