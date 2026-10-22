import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { courses } from "@/data/courses";
import CourseDetailClient from "@/components/CourseDetailClient";

export async function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const course = courses.find((c) => c.id === resolvedParams.id);

  if (!course) {
    return {
      title: "Course Not Found",
      description: "The requested course could not be located in our catalog.",
    };
  }

  return {
    title: `${course.title} — Raivatedu`,
    description: course.shortDescription,
    openGraph: {
      title: `${course.title} | Raivatedu`,
      description: course.shortDescription,
      images: [
        {
          url: course.thumbnail,
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
    },
  };
}

export default async function CourseDetailPage({ params }) {
  const resolvedParams = await params;
  const course = courses.find((c) => c.id === resolvedParams.id);

  if (!course) {
    notFound();
  }

  // Find related courses in the same category or level, excluding current course
  const relatedCourses = courses
    .filter((c) => c.id !== course.id && (c.category === course.category || c.level === course.level))
    .slice(0, 2);

  return (
    <div className="py-8 sm:py-12 pb-24 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 flex-wrap">
            <li className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
              <Link href="/">Home</Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <li className="hover:text-slate-900 dark:hover:text-white transition-colors">
              <Link href="/courses">Courses</Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <li className="text-slate-900 dark:text-white font-semibold truncate max-w-xs sm:max-w-md" aria-current="page">
              {course.title}
            </li>
          </ol>
        </nav>

        {/* Course Header Banner */}
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-yellow-400 border border-indigo-200 dark:border-indigo-800">
            <span>{course.category}</span>
            <span>•</span>
            <span>{course.level} Tier</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-tight">
            {course.title}
          </h1>

          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            {course.tagline}
          </p>
        </div>

        {/* Interactive Client Section */}
        <CourseDetailClient course={course} relatedCourses={relatedCourses} />
      </div>
    </div>
  );
}
