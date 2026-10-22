"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Star,
  Users,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  ChevronDown,
  ArrowRight,
  BookOpen,
  Award,
  Video,
  FileText,
  Lock,
  PlayCircle,
  HelpCircle,
} from "lucide-react";
import Button from "./Button";
import EnrollModal from "./EnrollModal";
import CourseCard from "./CourseCard";

export default function CourseDetailClient({ course, relatedCourses }) {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [openModuleIds, setOpenModuleIds] = useState([1]); // First module open by default

  const toggleModule = (moduleNum) => {
    setOpenModuleIds((prev) =>
      prev.includes(moduleNum)
        ? prev.filter((id) => id !== moduleNum)
        : [...prev, moduleNum]
    );
  };

  const discountPercent = Math.round(
    ((course.originalPrice - course.price) / course.originalPrice) * 100
  );

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Main Left Content: 8 columns */}
        <div className="lg:col-span-8 space-y-12">
          {/* Hero Banner / Course Image */}
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-900">
            <Image
              src={course.thumbnail}
              alt={course.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-yellow-400 text-slate-950">
                  {course.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/30">
                  {course.level} Level
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200 bg-slate-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <Clock className="w-3.5 h-3.5 text-yellow-400" />
                <span>{course.duration}</span>
              </div>
            </div>
          </div>

          {/* About / Full Description */}
          <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Course Overview
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
              {course.fullDescription}
            </p>
          </section>

          {/* What You Will Learn */}
          <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-yellow-400 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                What You Will Learn
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.whatYouWillLearn.map((outcome, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 dark:text-slate-300 leading-snug">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Interactive Syllabus Accordion */}
          <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Curriculum & Syllabus
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {course.syllabus.length} structured modules • Hands-on capstones & code walkthroughs
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setOpenModuleIds(course.syllabus.map((m) => m.moduleNumber))
                  }
                  className="text-xs font-bold text-indigo-700 dark:text-yellow-400 hover:underline"
                >
                  Expand All
                </button>
                <span className="text-slate-300 dark:text-slate-700">|</span>
                <button
                  type="button"
                  onClick={() => setOpenModuleIds([])}
                  className="text-xs font-bold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                >
                  Collapse All
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {course.syllabus.map((module) => {
                const isOpen = openModuleIds.includes(module.moduleNumber);

                return (
                  <div
                    key={module.moduleNumber}
                    className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleModule(module.moduleNumber)}
                      aria-expanded={isOpen}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 bg-slate-50/80 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="w-7 h-7 rounded-lg bg-indigo-700 text-white font-bold text-xs flex items-center justify-center shrink-0">
                          {module.moduleNumber}
                        </span>
                        <div className="min-w-0">
                          <h3 className="text-base font-bold text-slate-900 dark:text-white truncate">
                            {module.title}
                          </h3>
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            {module.duration} • {module.lessons.length} Lessons
                          </span>
                        </div>
                      </div>

                      <ChevronDown
                        className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-indigo-600" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="p-5 bg-white dark:bg-slate-900 space-y-3 border-t border-slate-200 dark:border-slate-800">
                        {module.lessons.map((lesson, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between text-sm py-2 px-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 text-slate-700 dark:text-slate-300"
                          >
                            <div className="flex items-center gap-3">
                              <PlayCircle className="w-4 h-4 text-indigo-600 dark:text-yellow-400 shrink-0" />
                              <span className="font-medium">{lesson.title}</span>
                            </div>
                            <span className="text-xs text-slate-500 dark:text-slate-400 shrink-0">
                              {lesson.duration}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Instructor Box */}
          <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Meet Your Instructor
            </h2>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 border-2 border-indigo-100 dark:border-indigo-900 shadow-md">
                <Image
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {course.instructor.name}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-yellow-400 border border-indigo-100 dark:border-indigo-900">
                    {course.instructor.company}
                  </span>
                </div>
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                  {course.instructor.role} • {course.instructor.experience}
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-1">
                  <div className="flex items-center gap-1 font-semibold text-slate-800 dark:text-slate-200">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    <span>{course.instructor.rating} Instructor Rating</span>
                  </div>
                  <span>•</span>
                  <span>{course.instructor.coursesCount} Active Tracks</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
              {course.instructor.bio}
            </p>
          </section>

          {/* Requirements & Target Audience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Requirements */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600 dark:text-yellow-400" />
                Prerequisites & Requirements
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
                {course.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-yellow-400 mt-2 shrink-0"></span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Audience */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-600 dark:text-yellow-400" />
                Who Should Take This Course
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
                {course.targetAudience.map((aud, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 shrink-0"></span>
                    <span>{aud}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Student Reviews Section */}
          <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Student Reviews
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Real feedback from alumni (clearly identified as illustrative demo content).
                </p>
              </div>

              <div className="flex items-center gap-3 bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 px-4 py-2 rounded-2xl">
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                <div>
                  <div className="text-lg font-black text-slate-900 dark:text-white leading-none">
                    {course.rating} / 5
                  </div>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    {course.reviewsCount.toLocaleString()} ratings
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {course.reviews.map((rev, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {rev.name}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {rev.role} • {rev.date}
                      </p>
                    </div>

                    <div className="flex items-center text-yellow-400">
                      {[...Array(Math.floor(rev.rating))].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                    “{rev.comment}”
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Courses Section */}
          {relatedCourses.length > 0 && (
            <section className="space-y-6 pt-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Related Cohort Tracks
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedCourses.map((rel) => (
                  <CourseCard key={rel.id} course={rel} />
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column: Sticky Enrollment Card on Desktop (4 columns) */}
        <aside className="lg:col-span-4 lg:sticky lg:top-24 w-full">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-xl space-y-6">
            {/* Price Box */}
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Course Tuition Fee
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
                  ₹{course.price.toLocaleString("en-IN")}
                </span>
                <span className="text-sm text-slate-400 line-through">
                  ₹{course.originalPrice.toLocaleString("en-IN")}
                </span>
                <span className="px-2 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  {discountPercent}% OFF
                </span>
              </div>
              <p className="text-xs text-slate-500 pt-1">
                One-time tuition fee. Includes taxes & lifetime access.
              </p>
            </div>

            {/* Action Button */}
            <div className="space-y-2">
              <Button
                onClick={() => setIsEnrollModalOpen(true)}
                variant="primary"
                size="lg"
                className="w-full text-base py-4"
                icon={ArrowRight}
              >
                Enroll Now in Cohort
              </Button>
              <p className="text-[11px] text-center text-slate-500 dark:text-slate-400">
                🔒 Demo enrollment • No payment card needed
              </p>
            </div>

            {/* What's Included */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                This Course Includes:
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2.5">
                  <Video className="w-4 h-4 text-indigo-600 dark:text-yellow-400 shrink-0" />
                  <span>{course.duration} of live & recorded sessions</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-indigo-600 dark:text-yellow-400 shrink-0" />
                  <span>Curated project repositories & starter kits</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-indigo-600 dark:text-yellow-400 shrink-0" />
                  <span>Verifiable digital graduation credential</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-indigo-600 dark:text-yellow-400 shrink-0" />
                  <span>Private student Discord / Slack cohort channel</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>7-Day No-Questions Money Back Guarantee</span>
                </li>
              </ul>
            </div>

            {/* Cohort Schedule Box */}
            <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60 text-xs space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-indigo-900 dark:text-yellow-400">
                <Calendar className="w-4 h-4" />
                <span>Upcoming Batch Schedule</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                Batches start on the 1st and 15th of every month. Limited to 35 seats per mentor group.
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* Floating Bottom Bar on Mobile for Instant Enrollment */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-4 lg:hidden flex items-center justify-between shadow-2xl">
        <div>
          <span className="text-xs text-slate-500 dark:text-slate-400">Total Tuition</span>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-black text-slate-900 dark:text-white">
              ₹{course.price.toLocaleString("en-IN")}
            </span>
            <span className="text-xs text-slate-400 line-through">
              ₹{course.originalPrice.toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        <Button
          onClick={() => setIsEnrollModalOpen(true)}
          variant="primary"
          size="md"
          icon={ArrowRight}
        >
          Enroll Now
        </Button>
      </div>

      {/* Enrollment Demo Dialog */}
      <EnrollModal
        course={course}
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
      />
    </>
  );
}
