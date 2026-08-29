import { Icon } from "@/components/ui/Icon/Icon";
import { PLATFORM_STATS } from "@/data/stats";
import styles from "./PlatformStats.module.css";

const STAT_ICON_STYLES: Record<string, { color: string; background: string }> = {
  teachers: { color: "#6757b9", background: "#dbd0ed" },
  rating: { color: "#edb748", background: "#fbeee0" },
  students: { color: "#d88179", background: "#fcdddb" },
};

const DEFAULT_STAT_ICON_STYLE = { color: "var(--brand-purple)", background: "var(--brand-lavender)" };

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
          const iconStyle = STAT_ICON_STYLES[stat.id] ?? DEFAULT_STAT_ICON_STYLE;
          return (
            <div key={stat.id} className={styles.item}>
              <span
                className={styles.iconWrap}
                style={{ backgroundColor: iconStyle.background }}
              >
                <Icon name={stat.icon} size={18} alt="" color={iconStyle.color} />
              </span>
              <dt className={styles.label}>{stat.label}</dt>
              <dd className={styles.value}>{stat.value}</dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
