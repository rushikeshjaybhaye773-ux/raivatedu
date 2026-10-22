import Image from "next/image";
import Link from "next/link";
import { Clock, Star, Users, ArrowRight, Sparkles } from "lucide-react";
import Button from "./Button";

export default function CourseCard({ course }) {
  const levelColorMap = {
    Beginner: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
    Intermediate: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800",
    Advanced: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800",
  };

  const discountPercent = Math.round(
    ((course.originalPrice - course.price) / course.originalPrice) * 100
  );

  return (
    <article className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 flex flex-col h-full">
      {/* Thumbnail Wrapper */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {course.badge && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-yellow-400 text-slate-950 shadow-sm">
              <Sparkles className="w-3 h-3" />
              {course.badge}
            </span>
          )}
          <span
            className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold border ${
              levelColorMap[course.level] || "bg-slate-100 text-slate-700"
            }`}
          >
            {course.level}
          </span>
        </div>

        {/* Category Pill on bottom edge */}
        <div className="absolute bottom-3 left-3">
          <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-900/80 backdrop-blur-md text-white border border-white/20">
            {course.category}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        {/* Rating and Reviews */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2.5">
          <div className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{course.rating.toFixed(1)}</span>
            <span className="text-slate-500 dark:text-slate-400 font-normal">
              ({course.reviewsCount.toLocaleString()} · Demo)
            </span>
          </div>
          <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
            <Clock className="w-3.5 h-3.5" />
            <span>{course.duration}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-yellow-400 transition-colors line-clamp-2 leading-snug mb-2">
          <Link href={`/courses/${course.id}`} className="focus:outline-none">
            {course.title}
          </Link>
        </h3>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4 leading-relaxed flex-1">
          {course.shortDescription}
        </p>

        {/* Instructor */}
        <div className="flex items-center gap-3 pt-3 pb-4 border-t border-slate-100 dark:border-slate-800/80">
          <div className="relative w-8 h-8 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700 shrink-0 border border-slate-200 dark:border-slate-600">
            <Image
              src={course.instructor.avatar}
              alt={course.instructor.name}
              fill
              sizes="32px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-semibold text-slate-900 dark:text-slate-200 truncate">
              {course.instructor.name}
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
              {course.instructor.company}
            </span>
          </div>
        </div>

        {/* Pricing and Action Button */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 mt-auto">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                ₹{course.price.toLocaleString("en-IN")}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 line-through">
                ₹{course.originalPrice.toLocaleString("en-IN")}
              </span>
            </div>
            <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
              Save {discountPercent}% today
            </span>
          </div>

          <Button
            href={`/courses/${course.id}`}
            variant="primary"
            size="sm"
            icon={ArrowRight}
            ariaLabel={`View course: ${course.title}`}
          >
            View Course
          </Button>
        </div>
      </div>
    </article>
  );
}
