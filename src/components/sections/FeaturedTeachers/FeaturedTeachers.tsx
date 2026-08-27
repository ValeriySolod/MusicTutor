import { Container } from "@/components/ui/Container/Container";
import { Icon } from "@/components/ui/Icon/Icon";
import { PhotoFrame } from "@/components/ui/PhotoFrame/PhotoFrame";
import { FEATURED_TEACHERS } from "@/data/teachers";
import styles from "./FeaturedTeachers.module.css";

export function FeaturedTeachers() {
  return (
    <section
      id="featured-teachers"
      className={styles.section}
      aria-labelledby="featured-teachers-heading"
    >
      <Container>
        <div className={styles.header}>
          <h2 id="featured-teachers-heading">Meet our featured teachers</h2>
          <p>A sample of the verified teachers you can find on MusicTutor.</p>
        </div>

        <ul className={styles.grid}>
          {FEATURED_TEACHERS.map((teacher) => (
            <li key={teacher.id} className={styles.card}>
              <PhotoFrame
                src={teacher.photo}
                alt={`Portrait of ${teacher.name}, ${teacher.instrument} teacher`}
                width={teacher.photoWidth}
                height={teacher.photoHeight}
                sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 90vw"
                className={styles.photo}
                cropAspectRatio="4 / 5"
              />
              <div className={styles.cardBody}>
                <h3 className={styles.name}>{teacher.name}</h3>
                <p className={styles.instrument}>{teacher.instrument}</p>
                <div className={styles.meta}>
                  <span className={styles.rating}>
                    <Icon name="star-rounded" size={16} alt="" />
                    {teacher.rating} ({teacher.reviewCount})
                  </span>
                  <span className={styles.location}>{teacher.location}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
