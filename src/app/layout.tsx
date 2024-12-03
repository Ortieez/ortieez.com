import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="w-full flex justify-center">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased  w-full"
        )}
      >
        {children}
      </body>
    </html>
  );
}
