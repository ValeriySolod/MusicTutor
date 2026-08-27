import { Container } from "@/components/ui/Container/Container";
import { Icon } from "@/components/ui/Icon/Icon";
import { INSTRUMENT_CATEGORIES } from "@/data/instruments";
import styles from "./InstrumentCategories.module.css";

export function InstrumentCategories() {
  return (
    <section
      id="instruments"
      className={styles.section}
      aria-labelledby="instruments-heading"
    >
      <Container>
        <div className={styles.header}>
          <h2 id="instruments-heading">Browse by instrument</h2>
          <p>Find teachers across dozens of instruments and styles.</p>
        </div>

        <ul className={styles.grid}>
          {INSTRUMENT_CATEGORIES.map((instrument) => (
            <li key={instrument.id}>
              <a href="#teacher-search" className={styles.card}>
                <Icon name={instrument.icon} size={32} alt="" />
                <span className={styles.name}>{instrument.name}</span>
                <span className={styles.count}>{instrument.teacherCount}</span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
