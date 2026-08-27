import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MusicTutor — Find Your Perfect Music Teacher",
  description:
    "MusicTutor connects students with verified music teachers for online and in-person lessons across guitar, piano, violin, drums, vocals, and more.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
