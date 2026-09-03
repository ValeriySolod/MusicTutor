import { Container } from "@/components/ui/Container/Container";
import { Icon } from "@/components/ui/Icon/Icon";
import { PhotoFrame } from "@/components/ui/PhotoFrame/PhotoFrame";
import { INSTRUMENT_CATEGORIES } from "@/data/instruments";
import styles from "./InstrumentCategories.module.css";

const CATEGORY_ICON_COLORS: Record<string, { bg: string; icon: string }> = {
  singing: { bg: "var(--brand-lavender)", icon: "var(--brand-purple)" },
  guitar: { bg: "var(--accent-warm-tint)", icon: "var(--accent-gold-star)" },
  piano: { bg: "var(--accent-green-tint)", icon: "var(--accent-green)" },
  drums: { bg: "var(--accent-blue-tint)", icon: "var(--accent-blue)" },
  violin: { bg: "var(--accent-blush-pink)", icon: "var(--accent-coral)" },
};

export function InstrumentCategories() {
  return (
    <section
      id="instruments"
      className={styles.section}
      aria-labelledby="instruments-heading"
    >
      <div className={styles.decor} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element -- decorative background art, not a content photo */}
        <img
          src="/assets/backgrounds/music-waves-combined.svg"
          alt=""
          className={styles.wave}
        />
        {/* eslint-disable @next/next/no-img-element -- decorative tablet background art, not content photos */}
        {["24", "26", "28", "25", "27", "29"].map((wave) => (
          <img
            key={wave}
            src={`/assets/backgrounds/music-wave-${wave}.svg`}
            alt=""
            className={`${styles.tabletWave} ${styles[`tabletWave${wave}`]}`}
          />
        ))}
        {/* eslint-enable @next/next/no-img-element */}
        <Icon
          name="music-note-outline"
          size={85}
          color="var(--brand-lavender)"
          className={`${styles.note} ${styles.noteTopOne}`}
        />
        <Icon
          name="music-note-bold"
          size={92}
          color="var(--brand-lavender)"
          className={`${styles.note} ${styles.noteTopTwo}`}
        />
        <Icon
          name="music-note-outline"
          size={22}
          color="var(--brand-lavender)"
          className={`${styles.note} ${styles.noteOne}`}
        />
        <Icon
          name="music-note-bold"
          size={18}
          color="var(--accent-blush-pink)"
          className={`${styles.note} ${styles.noteTwo}`}
        />
        <Icon
          name="music-note-outline"
          size={14}
          color="var(--brand-lavender)"
          className={`${styles.note} ${styles.noteThree}`}
        />
        <span className={`${styles.accentLine} ${styles.accentHeading}`} />
        <span className={`${styles.accentLine} ${styles.accentActionTop}`} />
        <span className={`${styles.accentLine} ${styles.accentActionBottom}`} />
      </div>

      <Container className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.header}>
            <span className={styles.eyebrow}>
              <Icon name="sparkles" size={20} alt="" color="var(--accent-gold-star)" />
              Explore by instrument
            </span>
            <div className={styles.headingBlock}>
              <h2 id="instruments-heading">What would you like to learn?</h2>
              <p>
                Choose an instrument and find the perfect teacher to guide you on
                your musical journey.
              </p>
            </div>
          </div>

          <ul className={styles.grid}>
            {INSTRUMENT_CATEGORIES.map((instrument) => {
              const colors = CATEGORY_ICON_COLORS[instrument.id] ?? {
                bg: "var(--brand-lavender)",
                icon: "var(--brand-purple)",
              };

              return (
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
                      <span
                        className={styles.iconBubble}
                        style={{ backgroundColor: colors.bg }}
                      >
                        <Icon name={instrument.icon} size={32} alt="" color={colors.icon} />
                      </span>
                    </div>
                    <span className={styles.textBlock}>
                      <span className={styles.name}>{instrument.name}</span>
                      <span className={styles.tagline}>{instrument.tagline}</span>
                    </span>
                  </a>
                </li>
              );
            })}
            <li className={styles.moreItem}>
              <button type="button" className={styles.moreBubble} disabled aria-disabled="true">
                More
              </button>
            </li>
          </ul>

          <div className={styles.actions}>
            <button type="button" className={styles.viewAll} disabled aria-disabled="true">
              View all instruments
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
