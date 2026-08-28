import { Icon } from "@/components/ui/Icon/Icon";
import { KEY_BENEFITS } from "@/data/benefits";
import styles from "./KeyBenefits.module.css";

export function KeyBenefits() {
  return (
    <section
      id="benefits"
      className={styles.section}
      aria-labelledby="benefits-heading"
    >
      <div className={styles.frame}>
        <div className={styles.card}>
          <h2 id="benefits-heading" className="visually-hidden">
            Why learn with MusicTutor
          </h2>

          <ul className={styles.grid}>
            {KEY_BENEFITS.map((benefit) => (
              <li key={benefit.id} className={styles.item}>
                <div className={styles.iconWrap}>
                  <Icon name={benefit.icon} size={28} alt="" color="var(--brand-purple)" />
                </div>
                <h3 className={styles.itemTitle}>{benefit.title}</h3>
                <p className={styles.itemDescription}>{benefit.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
