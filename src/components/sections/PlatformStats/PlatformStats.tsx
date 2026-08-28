import { Icon } from "@/components/ui/Icon/Icon";
import { PLATFORM_STATS } from "@/data/stats";
import styles from "./PlatformStats.module.css";

const STAT_ICON_STYLES: Record<string, { icon: string; color: string; background: string }> = {
  teachers: { icon: "people", color: "#6757b9", background: "#dbd0ed" },
  rating: { icon: "star-outline", color: "#edb748", background: "#fbeee0" },
  students: { icon: "music-notes", color: "#d88179", background: "#fcdddb" },
};

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
        {PLATFORM_STATS.map((stat) => {
          const iconStyle = STAT_ICON_STYLES[stat.id];
          return (
            <div key={stat.id} className={styles.item}>
              <span
                className={styles.iconWrap}
                style={{ backgroundColor: iconStyle.background }}
              >
                <Icon name={iconStyle.icon} size={18} alt="" color={iconStyle.color} />
              </span>
              <span className={styles.text}>
                <dd className={styles.value}>{stat.value}</dd>
                <dt className={styles.label}>{stat.label}</dt>
              </span>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
