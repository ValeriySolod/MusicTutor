interface IconProps {
  name: string;
  size?: number;
  alt?: string;
  className?: string;
}

export function Icon({ name, size = 24, alt = "", className }: IconProps) {
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
