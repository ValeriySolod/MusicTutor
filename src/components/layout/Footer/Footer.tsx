import { Container } from "@/components/ui/Container/Container";
import { Icon } from "@/components/ui/Icon/Icon";
import { FOOTER_LINK_GROUPS, SOCIAL_LINKS } from "@/data/footer";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brandBlock}>
            <a href="#hero" className={styles.brand}>
              <Icon name="logo-music-note" size={26} alt="" />
              <span>MusicTutor</span>
            </a>
            <p className={styles.tagline}>
              Connecting students with verified music teachers, online and
              in person.
            </p>
            <ul className={styles.social}>
              {SOCIAL_LINKS.map((social) => (
                <li key={social.icon}>
                  <a href={social.href} aria-label={social.label}>
                    <Icon name={social.icon} size={20} alt="" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className={styles.linkGroups} aria-label="Footer">
            {FOOTER_LINK_GROUPS.map((group) => (
              <div key={group.title} className={styles.linkGroup}>
                <h3 className={styles.linkGroupTitle}>{group.title}</h3>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} MusicTutor. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
