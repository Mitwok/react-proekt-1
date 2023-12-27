import { offers } from "../data/offers";
import styles from "./Offers.module.css";

const Offers = (props) => {
  return (
    <section id="offers" className={styles.offersBackground}>
      <div className={styles.offersMargin}>
        <div className={styles.offersContent}>
          <h1 className={styles.offersH1}>{props.title}</h1>
          <div className={styles.offers}>
            {offers.slice(0, props.items).map((offer) => (
              <div key={offer.id} className={styles.offerBox}>
                {offer.title}{" "}
                {offer.isNew ? (
                  <>
                    <p style={{ margin: 0 }}>(nowość)</p>
                    <div className={styles.isNew}></div>
                  </>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
