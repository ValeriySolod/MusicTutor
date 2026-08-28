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
      <Container>
        <div className={styles.card}>
          <div className={styles.text}>
            <h2 id="final-cta-heading" className={styles.heading}>
              Ready to start your musical journey?
            </h2>
            <p className={styles.subheading}>
              Find a teacher who fits your goals, schedule and budget.
            </p>
            <a href="#teacher-search" className={styles.primaryCta}>
              Find a Teacher
            </a>
          </div>
          <div className={styles.photoWrap}>
            <PhotoFrame
              src="/assets/photos/8150e7345cf944ffc7adb28bf9082d5e54cf4425.png"
              alt="A woman smiling while playing acoustic guitar on a couch"
              width={832}
              height={1152}
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
