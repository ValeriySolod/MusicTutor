import type { ElementType, ReactNode } from "react";
import styles from "./Container.module.css";

interface ContainerProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

export function Container({ as: Tag = "div", children, className }: ContainerProps) {
  const combinedClassName = className ? `${styles.container} ${className}` : styles.container;
  return <Tag className={combinedClassName}>{children}</Tag>;
}
