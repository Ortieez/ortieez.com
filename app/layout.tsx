import type { Metadata } from "next";
import { Russo_One } from "next/font/google";
import "./globals.css";

const russoOne = Russo_One({
    variable: "--font-russo-one",
    weight: "400"
});

export const metadata: Metadata = {
  title: "Adam \"ortieez\" Lipert",
  description: "Personal portfolio/showcase website about me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${russoOne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
