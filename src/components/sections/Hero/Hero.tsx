import { PhotoFrame } from "@/components/ui/PhotoFrame/PhotoFrame";
import { Icon } from "@/components/ui/Icon/Icon";
import { TeacherSearchPanel } from "@/components/sections/TeacherSearchPanel/TeacherSearchPanel";
import { PlatformStats } from "@/components/sections/PlatformStats/PlatformStats";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.photoLayer}>
        <PhotoFrame
          src="/assets/photos/1d9db912669ef67c1a58f7f62389bee4cc9868d2.png"
          alt="A smiling music student playing acoustic guitar at home"
          width={1280}
          height={853}
          priority
          sizes="100vw"
          cropAspectRatio="3 / 2"
          className={styles.photoFrame}
        />
        <div className={styles.overlay} aria-hidden="true" />
      </div>

      <div className={styles.stack}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>
            <Icon name="sparkles" size={16} alt="" />
            Online & In-Person Lessons
          </span>
          <h1 id="hero-heading" className={styles.heading}>
            Find the right music teacher for you
          </h1>
          <p className={styles.description}>
            Vocal, guitar, piano and more. Choose a teacher based on their
            specialty, price and schedule that works for you.
          </p>
        </div>

        <TeacherSearchPanel />
        <PlatformStats />
      </div>
    </section>
  );
}
