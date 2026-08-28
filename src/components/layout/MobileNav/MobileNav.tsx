"use client";

import { useState } from "react";
import type { NavLink } from "@/types";
import styles from "./MobileNav.module.css";

interface MobileNavProps {
  links: NavLink[];
}

export function MobileNav({ links }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.mobileNav}>
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="visually-hidden">
          {isOpen ? "Close menu" : "Open menu"}
        </span>
        <span className={styles.toggleIcon} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      <nav
        id="mobile-nav-panel"
        className={styles.panel}
        data-open={isOpen}
        aria-label="Mobile"
        hidden={!isOpen}
      >
        <ul className={styles.list}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.link} onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.actions}>
          <button type="button" className={styles.secondaryAction}>
            Sign In
          </button>
          <button type="button" className={styles.primaryAction}>
            Find a Teacher
          </button>
        </div>
      </nav>
    </div>
  );
}
