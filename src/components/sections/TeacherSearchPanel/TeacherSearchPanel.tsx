import { Icon } from "@/components/ui/Icon/Icon";
import styles from "./TeacherSearchPanel.module.css";

export function TeacherSearchPanel() {
  return (
    <section
      id="teacher-search"
      className={styles.section}
      aria-labelledby="teacher-search-heading"
    >
      <div className={styles.panel}>
        <h2 id="teacher-search-heading" className={styles.heading}>
          What do you want to learn?
        </h2>

        <div className={styles.row}>
          <div className={styles.field}>
            <button
              type="button"
              className={styles.fieldValue}
              aria-label="Instrument: Singing"
            >
              <span className={styles.iconCircle}>
                <Icon name="microphone" size={18} alt="" color="var(--brand-purple)" />
              </span>
              <span className={styles.fieldText}>
                <span className={styles.fieldCaption}>Instrument</span>
                <span className={styles.fieldSelected}>Singing</span>
              </span>
              <Icon name="chevron-down" size={16} alt="" color="var(--brand-purple)" />
            </button>
          </div>

          <div className={styles.field}>
            <button
              type="button"
              className={styles.fieldValue}
              aria-label="Format: Online or In-Person"
            >
              <span className={styles.iconCircle}>
                <Icon name="internet" size={18} alt="" color="var(--brand-purple)" />
              </span>
              <span className={styles.fieldText}>
                <span className={styles.fieldCaption}>Format</span>
                <span className={styles.fieldSelected}>Online or In-Person</span>
              </span>
              <Icon name="chevron-down" size={16} alt="" color="var(--brand-purple)" />
            </button>
          </div>

          <button type="button" className={styles.submit}>
            <Icon name="search" size={18} alt="" color="#ffffff" />
            Find a Teacher
          </button>
        </div>
      </div>
    </section>
  );
}
