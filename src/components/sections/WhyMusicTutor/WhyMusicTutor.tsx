import { Container } from "@/components/ui/Container/Container";
import { Icon } from "@/components/ui/Icon/Icon";
import { WHY_MUSICTUTOR_POINTS } from "@/data/whyPoints";
import styles from "./WhyMusicTutor.module.css";

export function WhyMusicTutor() {
  return (
    <section
      id="why-musictutor"
      className={styles.section}
      aria-labelledby="why-musictutor-heading"
    >
      <Container className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>
            <Icon name="sparkles" size={20} alt="" color="var(--accent-gold-star)" />
            Why MusicTutor?
          </span>
          <h2 id="why-musictutor-heading">
            Everything you need
            <br />
            to learn music
          </h2>
        </div>

        <ul className={styles.grid}>
          {WHY_MUSICTUTOR_POINTS.map((point, index) => (
            <li key={point.id} className={styles.item}>
              <div
                className={styles.iconWrap}
                data-variant={index === 0 ? "lavender" : "blush"}
              >
                <Icon
                  name={point.icon}
                  size={24}
                  alt=""
                  color={index === 0 ? "var(--brand-purple)" : "var(--accent-coral)"}
                />
              </div>
              <div>
                <h3 className={styles.itemTitle}>{point.title}</h3>
                <p className={styles.itemDescription}>{point.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
