import { users } from "../data/users";
import styles from "./About.module.css";

const About = (props) => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutMargin}>
        <div className={styles.aboutContent}>
          <h1 className={styles.aboutTitle}>{props.title}</h1>
          <div className={styles.aboutItems}>
            {users.slice(0, props.items).map((user) => (
              <div key={user.id} className={styles.aboutItemsUser}>
                <div
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}${user.imgUrl})`,
                  }}
                  className={styles.aboutItemPhoto}
                ></div>
                <div>
                  <h3>
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
};

export default About;
