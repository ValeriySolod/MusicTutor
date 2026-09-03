import Image from "next/image";
import styles from "./PhotoFrame.module.css";

interface PhotoFrameProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** Crop to a fixed aspect ratio instead of the image's natural ratio. */
  cropAspectRatio?: string;
}

export function PhotoFrame({
  src,
  alt,
  width,
  height,
  priority,
  sizes,
  className,
  cropAspectRatio,
}: PhotoFrameProps) {
  const combinedClassName = className ? `${styles.frame} ${className}` : styles.frame;

  if (cropAspectRatio) {
    return (
      <div
        className={combinedClassName}
        style={{ aspectRatio: `var(--photo-aspect-ratio, ${cropAspectRatio})`, position: "relative" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={styles.imageCover}
        />
      </div>
    );
  }

  return (
    <div className={combinedClassName}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className={styles.image}
      />
    </div>
  );
}
