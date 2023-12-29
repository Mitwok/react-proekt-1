import { users } from "../../data/users";
import styles from "./About.module.css";

const About = () => (
  <section id="about" className={styles.about}>
    <div className={styles.aboutMargin}>
      <div className={styles.aboutContent}>
        <h1 className={styles.aboutTitle}>Nasi specjaliści</h1>
        <div className={styles.aboutItems}>
          {users.map((user) => (
            <div key={user.id} className={styles.aboutItemsUser}>
              <div
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}${user.imgUrl})`,
                }}
                className={styles.aboutItemPhoto}
              ></div>
              <div className={styles.aboutItemContent}>
                <h3 className={styles.aboutItemName}>
                  {user.name} [{user.department}]
                </h3>
                <p>{user.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
