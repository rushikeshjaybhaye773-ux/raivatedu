import { Suspense } from "react";
import CoursesExplorer from "@/components/CoursesExplorer";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Explore Courses & Tech Bootcamps",
  description:
    "Browse industry-vetted courses in Web Development, Python, Machine Learning, Generative AI, UI/UX Design, and Cloud DevOps.",
  openGraph: {
    title: "Courses & Curricula | Raivatedu",
    description:
      "Explore comprehensive engineering bootcamps with practical capstones, live faculty mentors, and verified certifications.",
  },
};

export default function CoursesPage() {
  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-3 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
            Curriculum Catalog
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Explore Cohort <span className="text-indigo-700 dark:text-indigo-400">Courses</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Gain job-ready skills through intensive, hands-on tracks designed and taught by senior software architects and tech leaders. Filter by specialization, experience level, or search by keyword.
          </p>
        </div>

        {/* Suspense Boundary for SearchParams */}
        <Suspense
          fallback={
            <div className="w-full py-20 text-center">
              <div className="inline-block w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
              <p className="mt-3 text-sm text-slate-500">Loading courses catalog...</p>
            </div>
          }
        >
          <CoursesExplorer />
        </Suspense>
      </div>
    </div>
  );
}
