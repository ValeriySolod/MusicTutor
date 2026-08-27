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
            <span id="search-instrument-label" className={styles.fieldLabel}>
              Instrument
            </span>
            <button
              type="button"
              className={styles.fieldValue}
              aria-labelledby="search-instrument-label search-instrument-value"
            >
              <span id="search-instrument-value">Singing</span>
              <Icon name="chevron-down" size={16} alt="" />
            </button>
          </div>

          <div className={styles.field}>
            <span id="search-format-label" className={styles.fieldLabel}>
              Format
            </span>
            <button
              type="button"
              className={styles.fieldValue}
              aria-labelledby="search-format-label search-format-value"
            >
              <span id="search-format-value">Online or In-Person</span>
              <Icon name="chevron-down" size={16} alt="" />
            </button>
          </div>

          <button type="button" className={styles.submit}>
            <Icon name="search" size={18} alt="" />
            Find a Teacher
          </button>
        </div>
      </div>
    </section>
  );
}
