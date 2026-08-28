"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container/Container";
import { Icon } from "@/components/ui/Icon/Icon";
import { FOOTER_LINK_GROUPS, NEWSLETTER_COPY, SOCIAL_LINKS } from "@/data/footer";
import styles from "./Footer.module.css";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brandBlock}>
            <a href="#hero" className={styles.brand}>
              <Icon name="logo-music-note" size={33} alt="" color="var(--brand-purple)" />
              <span>MusicTutor</span>
            </a>
            <p className={styles.tagline}>
              Connecting students with amazing music teachers.
            </p>
            <ul className={styles.social}>
              {SOCIAL_LINKS.map((social) => (
                <li key={social.icon}>
                  <a href={social.href} aria-label={social.label}>
                    <Icon name={social.icon} size={16} alt="" />
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

            <div className={styles.newsletter}>
              <h3 className={styles.linkGroupTitle}>{NEWSLETTER_COPY.title}</h3>
              <p className={styles.newsletterDescription}>
                {NEWSLETTER_COPY.description}
              </p>
              <form className={styles.subscribeForm} onSubmit={handleSubscribe}>
                <label className="visually-hidden" htmlFor="newsletter-email">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder={NEWSLETTER_COPY.placeholder}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className={styles.subscribeInput}
                />
                <button type="submit" className={styles.subscribeButton}>
                  {NEWSLETTER_COPY.cta}
                </button>
              </form>
              {subscribed && (
                <p role="status" className={styles.subscribeConfirmation}>
                  Thanks for subscribing!
                </p>
              )}
            </div>
          </nav>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} MusicTutor. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
