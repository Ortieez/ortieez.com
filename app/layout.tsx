import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adam Pavel Lipert | Software Developer",
  description: "Personal portfolio of Adam Pavel Lipert, Software Developer and Head of Electronics at FS TUL Racing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
