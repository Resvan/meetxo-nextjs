import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Roboto, Poppins } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ['400','500','600','700', '800']
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  subsets: ['latin']
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        style={{marginRight: 'auto !important'}}
        className={`${plusJakartaSans.variable} ${inter.variable} ${roboto.variable} ${poppins.variable}  antialiased font-plus-jakarta-sans 2xl:container !mx-auto`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
