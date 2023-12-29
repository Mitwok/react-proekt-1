import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerMargin}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>moja firma</div>
        <nav className={styles.navBar}>
          <a className={styles.navItem} href="#about">
            o nas
          </a>
          <a className={styles.navItem} href="#offers">
            oferta
          </a>
          <a
            className={styles.navItemDisabled}
            onClick={(e) => e.preventDefault()}
            href="#footer"
          >
            kontakt
          </a>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
