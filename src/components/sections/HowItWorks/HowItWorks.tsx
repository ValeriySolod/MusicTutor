import { Container } from "@/components/ui/Container/Container";
import { Icon } from "@/components/ui/Icon/Icon";
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
          <span className={styles.eyebrow}>
            <Icon name="sparkles" size={20} alt="" color="var(--accent-gold-star)" />
            Simple and easy
          </span>
          <h2 id="how-it-works-heading">How it works</h2>
        </div>

        <ol className={styles.grid}>
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <li key={step.id} className={styles.step}>
              <div className={styles.circles}>
                <span className={styles.number} aria-hidden="true">
                  {String(step.step).padStart(2, "0")}
                </span>
                <span
                  className={styles.iconCircle}
                  data-variant={index === 0 ? "lavender" : "blush"}
                >
                  <Icon
                    name={step.icon}
                    size={32}
                    alt=""
                    color={index === 0 ? "var(--brand-purple)" : "var(--accent-coral)"}
                  />
                </span>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
              {index < HOW_IT_WORKS_STEPS.length - 1 && (
                <span className={styles.connector} aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
