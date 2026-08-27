import { Container } from "@/components/ui/Container/Container";
import { HOW_IT_WORKS_STEPS } from "@/data/steps";
import styles from "./HowItWorks.module.css";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className={styles.section}
      aria-labelledby="how-it-works-heading"
    >
      <Container>
        <div className={styles.header}>
          <h2 id="how-it-works-heading">How MusicTutor works</h2>
          <p>Four simple steps from searching to your first lesson.</p>
        </div>

        <ol className={styles.grid}>
          {HOW_IT_WORKS_STEPS.map((step) => (
            <li key={step.id} className={styles.card}>
              <span className={styles.stepNumber} aria-hidden="true">
                {step.step}
              </span>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardDescription}>{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
