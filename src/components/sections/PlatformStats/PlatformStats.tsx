import { Icon } from "@/components/ui/Icon/Icon";
import { PLATFORM_STATS } from "@/data/stats";
import styles from "./PlatformStats.module.css";

export function PlatformStats() {
  return (
    <section
      id="stats"
      className={styles.section}
      aria-labelledby="stats-heading"
    >
      <h2 id="stats-heading" className="visually-hidden">
        MusicTutor platform statistics
      </h2>
      <dl className={styles.list}>
        {PLATFORM_STATS.map((stat) => (
          <div key={stat.id} className={styles.item}>
            <span className={styles.iconWrap}>
              <Icon name={stat.icon} size={18} alt="" />
            </span>
            <span className={styles.text}>
              <dd className={styles.value}>{stat.value}</dd>
              <dt className={styles.label}>{stat.label}</dt>
            </span>
          </div>
        ))}
      </dl>
    </section>
  );
}
