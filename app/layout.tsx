import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import HeaderComponent from "@/components/Header";
import FooterComponent from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Ridwan's Portfolio",
    template: "%s | Ridwan's Portfolio",
  },
  description: "Welcome to Ridwan's portfolio site.",
  keywords: ["Ridwan", "Teaching", "Education", "Portfolio"],
  authors: [{ name: "Ridwan" }],
  // openGraph: {
  //   title: "Ridwan's Portfolio",
  //   description: "Discover Ridwan's teaching, development, and research work.",
  //   url: "https://yourdomain.com",
  //   siteName: "Ridwan's Portfolio",
  //   images: [
  //     {
  //       url: "https://yourdomain.com/og-image.png",
  //       width: 1200,
  //       height: 630,
  //       alt: "Ridwan's Portfolio Preview",
  //     },
  //   ],
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Ridwan's Portfolio",
  //   description: "Explore Ridwan's teaching resources, projects, and research.",
  //   images: ["https://yourdomain.com/twitter-image.png"],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Toaster
          position="top-right"
          theme="system"
          duration={5000}
          richColors
          visibleToasts={1}
          closeButton
        />

        <ThemeProvider
          attribute="class"
          enableSystem
          defaultTheme="system"
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col justify-between ">
            <header className="">
              <HeaderComponent />
            </header>

            <main className="flex-1  pt-16">{children}</main>

            <footer>
              <FooterComponent />
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
