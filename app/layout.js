import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://raivatedu.vercel.app"),
  title: {
    default: "Raivatedu — Premium Education & Cohort Learning Platform",
    template: "%s | Raivatedu",
  },
  description:
    "Discover industry-designed courses, learn from experienced tech mentors, and master in-demand skills in Web Development, AI, Data Science, and UI/UX.",
  keywords: [
    "education platform",
    "software engineering courses",
    "web development bootcamp",
    "data science",
    "generative ai",
    "ui ux design figma",
    "online cohort learning",
    "tech mentors",
  ],
  authors: [{ name: "Raivatedu" }],
  creator: "Raivatedu",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://raivatedu.vercel.app",
    siteName: "Raivatedu",
    title: "Raivatedu — Learn Today. Lead Tomorrow.",
    description:
      "Bridge the gap between theory and industry with practical courses and seasoned engineering mentors.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Raivatedu Learning Platform Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raivatedu — Learn Today. Lead Tomorrow.",
    description:
      "Practical tech courses, cohort mentorship, and career-accelerating projects.",
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plusJakarta.variable} suppressHydrationWarning>
      <body className="font-sans antialiased bg-[#FAFAF5] dark:bg-[#090D16] text-slate-900 dark:text-slate-100 flex flex-col min-h-screen">
        {/* Skip to Main Content Link for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-indigo-700 text-white rounded-lg shadow-lg font-bold"
        >
          Skip to main content
        </a>

        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
