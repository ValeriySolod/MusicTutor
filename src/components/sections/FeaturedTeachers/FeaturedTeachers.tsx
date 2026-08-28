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
          <span className={styles.eyebrow}>
            <Icon name="sparkles" size={20} alt="" color="var(--accent-gold-star)" />
            Handpicked for you
          </span>
          <h2 id="featured-teachers-heading">Meet our top teachers</h2>
          <p>Experienced, passionate and ready to help you grow.</p>
        </div>

        <ul className={styles.grid}>
          {FEATURED_TEACHERS.map((teacher) => (
            <li key={teacher.id} className={styles.card}>
              <div className={styles.photoWrap}>
                <PhotoFrame
                  src={teacher.photo}
                  alt={`Portrait of ${teacher.name}, ${teacher.role}`}
                  width={teacher.photoWidth}
                  height={teacher.photoHeight}
                  sizes="(min-width: 1024px) 316px, (min-width: 640px) 45vw, 90vw"
                  className={styles.photo}
                  cropAspectRatio="316 / 256"
                />
                <span className={styles.ratingBadge}>
                  <Icon name="star-rounded" size={20} alt="" color="var(--accent-gold-star)" />
                  {teacher.rating}
                </span>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.nameRole}>
                  <h3 className={styles.name}>{teacher.name}</h3>
                  <p className={styles.role}>
                    <Icon name={teacher.roleIcon} size={20} alt="" color="var(--icon-gray)" />
                    {teacher.role}
                  </p>
                </div>
                <p className={styles.description}>{teacher.description}</p>
                <p className={styles.price}>{teacher.price}</p>

                <div className={styles.footer}>
                  <span className={styles.formatChip}>{teacher.format}</span>
                  <Icon
                    name={teacher.isFavorite ? "heart-filled" : "heart-outline"}
                    size={24}
                    alt={
                      teacher.isFavorite
                        ? `Remove ${teacher.name} from favorites`
                        : `Add ${teacher.name} to favorites`
                    }
                    color={teacher.isFavorite ? "var(--brand-purple)" : "var(--icon-gray)"}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <a href="#featured-teachers" className={styles.viewAll}>
            View all teachers
          </a>
        </div>
      </Container>
    </section>
  );
}
