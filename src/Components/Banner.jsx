import styles from "./Banner.module.css";

const Banner = (props) => {
  return (
    <section className={styles.mainSection}>
      <span className={styles.mainSectionShadow}></span>
      <div className={styles.mainSectionContentPosition}>
        <div className={styles.mainSectionContent}>
          <h1 className={styles.mainSectionContentH1}>{props.h1}</h1>
          <h2 className={styles.mainSectionContentH2}>{props.h2}</h2>
          <a className={styles.mainSectionBtn} title="oferta" href="#offers">
            oferta
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
