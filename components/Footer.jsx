import Link from "next/link";
import {
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Browse Courses", href: "/courses" },
    { name: "Faculty & Mentors", href: "/#mentors" },
    { name: "Student Reviews", href: "/#testimonials" },
    { name: "Frequently Asked Questions", href: "/#faq" },
  ];

  const courseCategories = [
    { name: "Full-Stack Web Development", href: "/courses?category=Web+Development" },
    { name: "Python & Backend Systems", href: "/courses?category=Programming" },
    { name: "Data Science & Machine Learning", href: "/courses?category=Data+Science" },
    { name: "Generative AI Engineering", href: "/courses?category=Artificial+Intelligence" },
    { name: "UI/UX & Figma Design Systems", href: "/courses?category=UI%2FUX+Design" },
    { name: "Tech Product Management", href: "/courses?category=Business+%26+Management" },
  ];

  const trustHighlights = [
    "Practical Project-Based Learning",
    "Verified Digital Certificates",
    "Weekly Live Faculty Q&A",
    "7-Day No-Questions Refund Guarantee",
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 focus-visible:outline-indigo-500 rounded-lg"
              aria-label="Raivatedu Home"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/30">
                <GraduationCap className="w-6 h-6 text-yellow-300" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                Raivat<span className="text-yellow-400">edu</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-sm">
              Premium cohort-based technical education designed to bridge the gap between academic theory and high-growth industry engineering.
            </p>

            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
                Learning Guarantees
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {trustHighlights.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              {[
                { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
                { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
                { icon: Github, label: "GitHub", href: "https://github.com" },
                { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-yellow-400 hover:border-slate-700 transition-colors focus-visible:outline-yellow-400"
                  aria-label={`Visit Raivatedu on ${label}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-yellow-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Curriculum Tracks
            </h3>
            <ul className="space-y-2.5 text-sm">
              {courseCategories.map((course) => (
                <li key={course.name}>
                  <Link
                    href={course.href}
                    className="text-slate-400 hover:text-white transition-colors line-clamp-1"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Placeholder */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Contact & Support
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>Pune IT Park, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-yellow-400 shrink-0" />
                <span className="text-slate-300">admissions@raivatedu.example.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
                <span className="text-slate-300">+91 (020) 2555-0199</span>
              </div>
              <p className="text-xs text-slate-400 pt-2 italic">
                * Note: Sample educational platform demonstration. Contact details are illustrative.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Raivatedu. All rights reserved. Designed for excellence in modern education.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-300 cursor-pointer">Honor Code</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
