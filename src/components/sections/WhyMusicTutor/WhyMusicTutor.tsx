import { Container } from "@/components/ui/Container/Container";
import { Icon } from "@/components/ui/Icon/Icon";
import { PhotoFrame } from "@/components/ui/PhotoFrame/PhotoFrame";
import { WHY_MUSICTUTOR_POINTS } from "@/data/whyPoints";
import styles from "./WhyMusicTutor.module.css";

export function WhyMusicTutor() {
  return (
    <section
      id="why-musictutor"
      className={styles.section}
      aria-labelledby="why-musictutor-heading"
    >
      <Container className={styles.inner}>
        <div className={styles.media}>
          <PhotoFrame
            src="/assets/photos/8150e7345cf944ffc7adb28bf9082d5e54cf4425.png"
            alt="A music teacher guiding a student through a lesson"
            width={832}
            height={1152}
            sizes="(min-width: 1024px) 480px, 100vw"
          />
        </div>

        <div className={styles.content}>
          <h2 id="why-musictutor-heading">Why choose MusicTutor</h2>
          <p className={styles.intro}>
            We built MusicTutor to make finding the right teacher simple,
            safe, and personal.
          </p>

          <ul className={styles.list}>
            {WHY_MUSICTUTOR_POINTS.map((point) => (
              <li key={point.id} className={styles.item}>
                <div className={styles.iconWrap}>
                  <Icon name={point.icon} size={22} alt="" />
                </div>
                <div>
                  <h3 className={styles.itemTitle}>{point.title}</h3>
                  <p className={styles.itemDescription}>{point.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
