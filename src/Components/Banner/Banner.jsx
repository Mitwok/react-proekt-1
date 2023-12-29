import styles from "./Banner.module.css";

const Banner = () => (
  <section className={styles.mainSection}>
    <span className={styles.mainSectionShadow}></span>
    <div className={styles.mainSectionContentPosition}>
      <div className={styles.mainSectionContent}>
        <h1 className={styles.mainSectionContentH1}>
          Nasza firma oferuje najwyższej jakości produkty.
        </h1>
        <h2 className={styles.mainSectionContentH2}>
          Nie wierz nam na słowo - sprawdź
        </h2>
        <a className={styles.mainSectionBtn} title="oferta" href="#offers">
          oferta
        </a>
      </div>
    </div>
  </section>
);

export default Banner;
