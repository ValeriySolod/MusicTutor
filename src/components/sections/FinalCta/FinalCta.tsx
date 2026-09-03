import { Container } from "@/components/ui/Container/Container";
import { PhotoFrame } from "@/components/ui/PhotoFrame/PhotoFrame";
import styles from "./FinalCta.module.css";

export function FinalCta() {
  return (
    <section
      id="final-cta"
      className={styles.section}
      aria-labelledby="final-cta-heading"
    >
      <Container className={styles.container}>
        <div className={styles.card}>
          <div className={styles.text}>
            <h2 id="final-cta-heading" className={styles.heading}>
              Ready to start your
              <br />
              musical journey?
            </h2>
            <p className={styles.subheading}>
              Find a teacher who fits your goals,
              <br />
              schedule and budget.
            </p>
            <a href="#teacher-search" className={styles.primaryCta}>
              Find a Teacher
            </a>
          </div>
          <div className={styles.photoWrap}>
            <PhotoFrame
              src="/assets/photos/61a2ffcb87318c8c9e10a2e6a8b7171b1c63924f.png"
              alt="A woman smiling while playing acoustic guitar on a couch"
              width={824}
              height={568}
              sizes="(min-width: 1024px) 660px, 100vw"
              cropAspectRatio="660 / 340"
              className={styles.photo}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
