import { Container } from "@/components/ui/Container/Container";
import { Icon } from "@/components/ui/Icon/Icon";
import { PhotoFrame } from "@/components/ui/PhotoFrame/PhotoFrame";
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
          <span className={styles.eyebrow}>
            <Icon name="sparkles" size={20} alt="" color="var(--accent-gold-star)" />
            Explore by instrument
          </span>
          <h2 id="instruments-heading">What would you like to learn?</h2>
          <p>
            Choose an instrument and find the perfect teacher to guide you on
            your musical journey.
          </p>
        </div>

        <ul className={styles.grid}>
          {INSTRUMENT_CATEGORIES.map((instrument) => (
            <li key={instrument.id}>
              <a href="#teacher-search" className={styles.card}>
                <div className={styles.photoWrap}>
                  <PhotoFrame
                    src={instrument.photo}
                    alt=""
                    width={instrument.photoWidth}
                    height={instrument.photoHeight}
                    sizes="(min-width: 1024px) 208px, (min-width: 640px) 30vw, 45vw"
                    className={styles.photo}
                    cropAspectRatio="208 / 300"
                  />
                  <span className={styles.iconBubble}>
                    <Icon name={instrument.icon} size={32} alt="" color="var(--brand-purple)" />
                  </span>
                </div>
                <span className={styles.textBlock}>
                  <span className={styles.name}>{instrument.name}</span>
                  <span className={styles.tagline}>{instrument.tagline}</span>
                </span>
              </a>
            </li>
          ))}
          <li className={styles.moreItem}>
            <a href="#instruments" className={styles.moreBubble}>
              More
            </a>
          </li>
        </ul>

        <div className={styles.actions}>
          <a href="#instruments" className={styles.viewAll}>
            View all instruments
          </a>
        </div>
      </Container>
    </section>
  );
}
