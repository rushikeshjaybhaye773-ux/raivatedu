"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Sparkles } from "lucide-react";
import Button from "./Button";

export default function HeroSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchTerm.trim();
    if (query) {
      router.push(`/courses?search=${encodeURIComponent(query)}`);
    } else {
      router.push("/courses");
    }
  };

  const quickPills = [
    { label: "Next.js", query: "Next.js" },
    { label: "Python", query: "Python" },
    { label: "Generative AI", query: "AI" },
    { label: "Figma UI/UX", query: "UI/UX" },
  ];

  return (
    <div className="w-full max-w-2xl">
      <form
        onSubmit={handleSearch}
        className="relative flex items-center p-2 rounded-2xl bg-white dark:bg-slate-900 border-2 border-indigo-100 dark:border-indigo-950/80 shadow-xl shadow-indigo-700/5 focus-within:border-indigo-600 focus-within:ring-4 focus-within:ring-indigo-100 dark:focus-within:ring-indigo-950/50 transition-all duration-300"
      >
        <div className="pl-3 text-slate-400">
          <Search className="w-5 h-5 text-indigo-600 dark:text-yellow-400" />
        </div>
        <label htmlFor="hero-course-search" className="sr-only">
          Search courses or skills
        </label>
        <input
          id="hero-course-search"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="What do you want to master today? (e.g. Next.js, AI, Python)"
          className="w-full px-3 py-2 text-sm sm:text-base bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
        />
        <Button
          type="submit"
          variant="primary"
          size="md"
          className="shrink-0"
        >
          Search
        </Button>
      </form>

      {/* Suggested Quick Search Tags */}
      <div className="flex items-center flex-wrap gap-2 mt-3 text-xs text-slate-500 dark:text-slate-400">
        <span className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
          <Sparkles className="w-3.5 h-3.5 text-yellow-500" /> Popular Searches:
        </span>
        {quickPills.map((pill) => (
          <button
            key={pill.label}
            type="button"
            onClick={() => router.push(`/courses?search=${encodeURIComponent(pill.query)}`)}
            className="px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 text-slate-600 dark:text-slate-300 hover:text-indigo-700 dark:hover:text-yellow-400 transition-colors"
          >
            {pill.label}
          </button>
        ))}
      </div>
    </div>
  );
}
