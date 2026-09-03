interface IconProps {
  name: string;
  size?: number;
  alt?: string;
  className?: string;
  /** Tint the icon to an exact color via CSS mask instead of rendering it as a raster image. */
  color?: string;
}

export function Icon({ name, size = 24, alt = "", className, color }: IconProps) {
  if (color) {
    const maskImage = `url(/assets/icons/${name}.svg)`;
    return (
      <span
        className={className}
        role={alt ? "img" : undefined}
        aria-label={alt || undefined}
        aria-hidden={alt === "" ? true : undefined}
        style={{
          display: "var(--icon-display, inline-block)",
          flexShrink: 0,
          width: `var(--icon-size, ${size}px)`,
          height: `var(--icon-size, ${size}px)`,
          backgroundColor: color,
          WebkitMaskImage: maskImage,
          maskImage,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskSize: "contain",
          maskSize: "contain",
        }}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- vector icon referenced by stable path, not a raster photo
    <img
      src={`/assets/icons/${name}.svg`}
      alt={alt}
      width={size}
      height={size}
      className={className}
      aria-hidden={alt === "" ? true : undefined}
      loading="lazy"
    />
  );
}
