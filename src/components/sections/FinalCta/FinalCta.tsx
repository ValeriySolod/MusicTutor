import { Container } from "@/components/ui/Container/Container";
import styles from "./FinalCta.module.css";

export function FinalCta() {
  return (
    <section
      id="final-cta"
      className={styles.section}
      aria-labelledby="final-cta-heading"
    >
      <Container className={styles.inner}>
        <h2 id="final-cta-heading" className={styles.heading}>
          Ready to start your musical journey?
        </h2>
        <p className={styles.subheading}>
          Join thousands of students learning with MusicTutor&apos;s
          verified teachers today.
        </p>
        <div className={styles.ctaRow}>
          <a href="#teacher-search" className={styles.primaryCta}>
            Find a Teacher
          </a>
          <a href="#" className={styles.secondaryCta}>
            Become a Teacher
          </a>
        </div>
      </Container>
    </section>
  );
}
