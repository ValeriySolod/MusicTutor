import { Icon } from "@/components/ui/Icon/Icon";
import { Container } from "@/components/ui/Container/Container";
import { MobileNav } from "@/components/layout/MobileNav/MobileNav";
import { NAV_LINKS } from "@/data/navigation";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <a href="#hero" className={styles.brand}>
          <Icon name="logo-music-note" size={22} alt="" color="var(--brand-purple)" />
          <span>MusicTutor</span>
        </a>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actionsGroup}>
          <div className={styles.desktopActions}>
            <button type="button" className={styles.secondaryAction}>
              Sign In
            </button>
            <button type="button" className={styles.primaryAction}>
              Find a Teacher
            </button>
          </div>

          <div className={styles.tabletActions}>
            <button type="button" className={styles.primaryAction}>
              Find a Teacher
            </button>
          </div>

          <MobileNav links={NAV_LINKS} />
        </div>
      </Container>
    </header>
  );
}
