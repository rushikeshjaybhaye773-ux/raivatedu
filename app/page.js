import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  Star,
  Trophy,
  Users,
  Video,
  ShieldCheck,
  Code2,
} from "lucide-react";

import { courses, courseCategories } from "@/data/courses";
import { mentors } from "@/data/mentors";
import { testimonials } from "@/data/testimonials";
import { faqs } from "@/data/faqs";
import { stats } from "@/data/stats";

import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import CourseCard from "@/components/CourseCard";
import CategoryCard from "@/components/CategoryCard";
import MentorCard from "@/components/MentorCard";
import FAQAccordion from "@/components/FAQAccordion";
import HeroSearch from "@/components/HeroSearch";

export const metadata = {
  title: "Learn Today. Lead Tomorrow — Raivatedu",
  description:
    "Discover practical courses, learn from experienced mentors, and build the skills that move your future forward with Raivatedu.",
};

export default function HomePage() {
  const featuredCourses = courses.filter((c) => c.featured);

  return (
    <div className="flex flex-col gap-20 sm:gap-28 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 sm:pt-16 pb-6 overflow-hidden">
        {/* Subtle Decorative Background Blobs */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-indigo-200/40 via-yellow-100/30 to-transparent dark:from-indigo-950/40 dark:via-yellow-950/20 rounded-full blur-3xl pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headlines & CTA */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              {/* Trust Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-950 shadow-sm text-xs font-bold text-slate-800 dark:text-slate-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-indigo-700 dark:text-yellow-400 font-extrabold">NEW</span>
                <span>Cohort Registrations Open for Next Month</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 dark:text-white tracking-tight leading-[1.12]">
                Learn Today.{" "}
                <span className="text-indigo-700 dark:text-indigo-400 relative inline-block">
                  Lead Tomorrow.
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-300/40 dark:bg-yellow-400/20 -z-10 rounded-sm"></span>
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Discover practical courses, learn from experienced mentors, and build the skills that move your future forward. Master in-demand technology through hands-on capstone engineering.
              </p>

              {/* Functional Search Bar */}
              <div className="flex justify-center lg:justify-start">
                <HeroSearch />
              </div>

              {/* Dual CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Button
                  href="/courses"
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                >
                  Explore Courses
                </Button>
                <Button
                  href="/#mentors"
                  variant="outline"
                  size="lg"
                  icon={Users}
                  iconPosition="left"
                >
                  Meet Our Mentors
                </Button>
              </div>

              {/* Micro-proofs */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>100% Project-Based Curriculum</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Verified Completion Certificates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>7-Day Money-Back Guarantee</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Card / Image Wrapper */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 aspect-[4/4.5] bg-gradient-to-br from-indigo-700 to-indigo-950">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                    alt="Students collaborating and learning with Raivatedu mentors"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Caption on image */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-yellow-400 text-slate-950 inline-block mb-2">
                      Live Cohort Community
                    </span>
                    <h3 className="text-xl font-bold leading-snug">
                      Collaborative problem-solving with senior engineering peers.
                    </h3>
                  </div>
                </div>

                {/* Floating Badge 1: Top Left */}
                <div className="absolute -top-4 -left-4 sm:-left-6 bg-white dark:bg-slate-900 rounded-2xl p-3.5 shadow-xl border border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-yellow-400 text-slate-950 flex items-center justify-center font-bold">
                    <Star className="w-5 h-5 fill-slate-950" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-900 dark:text-white">
                      4.9 / 5 Rating
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      8,500+ Student Reviews (Demo)
                    </div>
                  </div>
                </div>

                {/* Floating Badge 2: Bottom Right */}
                <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-xl border border-slate-200/80 dark:border-slate-800 flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-yellow-400 flex items-center justify-center font-bold">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
                      Student Success
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      94% Cohort Completion
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. POPULAR CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" id="categories">
        <SectionHeading
          badge="Curriculum Disciplines"
          title="Explore High-Impact"
          highlight="Subject Categories"
          description="Targeted learning pathways crafted by practicing tech leads to prepare you for high-growth careers."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseCategories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      {/* 3. FEATURED COURSES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" id="featured-courses">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-3 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
              Curated Bootcamps
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured <span className="text-indigo-700 dark:text-indigo-400">Courses</span>
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
              Immerse yourself in comprehensive, project-centered engineering tracks with direct mentor guidance.
            </p>
          </div>

          <Button
            href="/courses"
            variant="outline"
            size="md"
            icon={ArrowRight}
            className="self-start sm:self-auto"
          >
            View All Courses ({courses.length})
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* 4. STUDENT SUCCESS STATISTICS */}
      <section className="bg-indigo-900 dark:bg-slate-900/90 py-16 text-white border-y border-indigo-800 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-yellow-400 text-slate-950 inline-block mb-3">
              Illustrative Impact Metrics
            </span>
            <h2 className="text-3xl sm:text-4xl font-black">
              Proven Learning Momentum
            </h2>
            <p className="text-indigo-200 dark:text-slate-400 text-sm sm:text-base mt-2">
              Sample statistics illustrating student enrollment, mentorship standards, and educational satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-indigo-800/60 dark:bg-slate-800/60 border border-indigo-700/60 dark:border-slate-700 rounded-2xl p-6 text-center backdrop-blur-sm"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-yellow-400 mb-2 font-mono">
                  {stat.value}
                </div>
                <div className="text-base font-bold text-white mb-1">
                  {stat.label}
                </div>
                <p className="text-xs text-indigo-200 dark:text-slate-400">
                  {stat.subtext}
                </p>
                <span className="inline-block mt-3 text-[10px] uppercase font-semibold text-indigo-300 dark:text-slate-500 tracking-wider">
                  Sample Data
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MENTOR & FACULTY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" id="mentors">
        <SectionHeading
          badge="Faculty & Leadership"
          title="Learn Directly from"
          highlight="Senior Practitioners"
          description="Our instructors are active industry leaders who bring daily production architectural wisdom directly into your classroom."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.slice(0, 6).map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" id="testimonials">
        <SectionHeading
          badge="Learner Stories"
          title="Real Stories of"
          highlight="Career Transformations"
          description="Read how our hands-on curriculum, code reviews, and mentorship helped learners break into top tech companies (illustrative demo feedback)."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-7 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating & Demo Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-full">
                    Illustrative Story
                  </span>
                </div>

                {/* Quote */}
                <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed italic mb-6">
                  “{item.quote}”
                </p>
              </div>

              {/* Author & Transition */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700 shrink-0 border border-slate-200 dark:border-slate-700">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                    {item.name}
                  </h4>
                  <p className="text-xs font-semibold text-indigo-700 dark:text-yellow-400 truncate">
                    {item.role}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                    {item.course}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FAQ ACCORDION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" id="faq">
        <SectionHeading
          badge="Common Questions"
          title="Frequently Asked"
          highlight="Questions"
          description="Everything you need to know about our learning tracks, certificate validation, mentorship formats, and enrollment policies."
        />

        <FAQAccordion items={faqs} />
      </section>

      {/* 8. FINAL CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" id="about">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-indigo-700 via-indigo-800 to-indigo-950 text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl -z-0"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl space-y-6 text-center sm:text-left">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-yellow-400 text-slate-950 inline-block">
              Start Your Journey Today
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Ready to Accelerate Your Career in Tech?
            </h2>

            <p className="text-base sm:text-lg text-indigo-100 font-normal leading-relaxed">
              Join thousands of aspiring engineers and product leaders. Gain practical skills through real capstones, live weekly faculty reviews, and verified credentials.
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
              <Button
                href="/courses"
                variant="secondary"
                size="lg"
                icon={ArrowRight}
              >
                Browse All Courses
              </Button>
              <Button
                href="/#faq"
                variant="white"
                size="lg"
              >
                Have Questions? Read FAQs
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
