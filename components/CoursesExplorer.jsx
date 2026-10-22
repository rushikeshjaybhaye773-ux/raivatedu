"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Search,
  SlidersHorizontal,
  X,
  RotateCcw,
  BookOpen,
  ArrowUpDown,
  Filter,
} from "lucide-react";
import { courses, courseCategories } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import Button from "@/components/Button";

export default function CoursesExplorer() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Initialize from URL search parameters if available
  const initialSearch = searchParams.get("search") || "";
  const initialCategory = searchParams.get("category") || "All";
  const initialLevel = searchParams.get("level") || "All";
  const initialSort = searchParams.get("sort") || "featured";

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState(initialLevel);
  const [sortBy, setSortBy] = useState(initialSort);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Sync state when URL params change (e.g., navigating from home page search or category link)
  useEffect(() => {
    const urlSearch = searchParams.get("search");
    const urlCategory = searchParams.get("category");
    const urlLevel = searchParams.get("level");
    const urlSort = searchParams.get("sort");

    if (urlSearch !== null) setSearchTerm(urlSearch);
    if (urlCategory !== null) setSelectedCategory(urlCategory);
    if (urlLevel !== null) setSelectedLevel(urlLevel);
    if (urlSort !== null) setSortBy(urlSort);
  }, [searchParams]);

  // Update URL search parameters when filters change
  const updateUrlParams = (newSearch, newCategory, newLevel, newSort) => {
    const params = new URLSearchParams();
    if (newSearch) params.set("search", newSearch);
    if (newCategory && newCategory !== "All") params.set("category", newCategory);
    if (newLevel && newLevel !== "All") params.set("level", newLevel);
    if (newSort && newSort !== "featured") params.set("sort", newSort);

    const queryString = params.toString();
    router.replace(`/courses${queryString ? `?${queryString}` : ""}`, { scroll: false });
  };

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    updateUrlParams(searchTerm, cat, selectedLevel, sortBy);
  };

  const handleLevelChange = (lvl) => {
    setSelectedLevel(lvl);
    updateUrlParams(searchTerm, selectedCategory, lvl, sortBy);
  };

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
    updateUrlParams(searchTerm, selectedCategory, selectedLevel, sortOption);
  };

  const handleSearchChange = (val) => {
    setSearchTerm(val);
    updateUrlParams(val, selectedCategory, selectedLevel, sortBy);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSelectedLevel("All");
    setSortBy("featured");
    router.replace("/courses", { scroll: false });
  };

  const hasActiveFilters =
    searchTerm.trim() !== "" ||
    selectedCategory !== "All" ||
    selectedLevel !== "All" ||
    sortBy !== "featured";

  // Filter & Sort Logic
  const filteredCourses = useMemo(() => {
    return courses
      .filter((course) => {
        // Search term matching title, description, instructor, or category
        const matchesSearch =
          searchTerm.trim() === "" ||
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.instructor.name.toLowerCase().includes(searchTerm.toLowerCase());

        // Category filter
        const matchesCategory =
          selectedCategory === "All" || course.category === selectedCategory;

        // Level filter
        const matchesLevel =
          selectedLevel === "All" || course.level === selectedLevel;

        return matchesSearch && matchesCategory && matchesLevel;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        // Default: featured
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
      });
  }, [searchTerm, selectedCategory, selectedLevel, sortBy]);

  const levels = ["All", "Beginner", "Intermediate", "Advanced"];
  const categoriesList = ["All", ...courseCategories.map((c) => c.name)];

  return (
    <div className="space-y-8">
      {/* Top Filter and Search Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
        {/* Search & Sort Controls Row */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search by course name, topic, or instructor..."
              className="w-full pl-11 pr-10 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm sm:text-base text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white dark:focus:bg-slate-800 transition-all"
              aria-label="Search courses"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => handleSearchChange("")}
                aria-label="Clear search text"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort Dropdown & Mobile Filter Toggle */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-56">
              <label htmlFor="course-sort" className="sr-only">
                Sort courses by
              </label>
              <select
                id="course-sort"
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="w-full appearance-none pl-4 pr-10 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 cursor-pointer"
              >
                <option value="featured">Sort by: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rating</option>
              </select>
              <ArrowUpDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>

            <button
              type="button"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="lg:hidden p-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 flex items-center gap-2 text-sm font-semibold"
              aria-label="Toggle filters"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Categories Pills */}
        <div
          className={`space-y-4 ${
            showMobileFilters ? "block" : "hidden lg:block"
          }`}
        >
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
              Categories
            </div>
            <div className="flex items-center flex-wrap gap-2">
              {categoriesList.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                      isSelected
                        ? "bg-indigo-700 text-white shadow-sm shadow-indigo-700/20"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Level Filter Pills & Active State Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-slate-100 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mr-3 inline-block mb-1 sm:mb-0">
                Experience Level:
              </span>
              <div className="inline-flex flex-wrap gap-1.5">
                {levels.map((lvl) => {
                  const isSelected = selectedLevel === lvl;
                  return (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => handleLevelChange(lvl)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                        isSelected
                          ? "bg-yellow-400 text-slate-950 font-bold shadow-sm"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                      }`}
                    >
                      {lvl}
                    </button>
                  );
                })}
              </div>
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={handleClearFilters}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline self-start sm:self-auto"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between px-2">
        <div className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300">
          Showing{" "}
          <span className="font-extrabold text-indigo-700 dark:text-yellow-400">
            {filteredCourses.length}
          </span>{" "}
          {filteredCourses.length === 1 ? "course" : "courses"}
          {selectedCategory !== "All" && ` in ${selectedCategory}`}
          {selectedLevel !== "All" && ` (${selectedLevel} level)`}
          {searchTerm && ` matching "${searchTerm}"`}
        </div>

        {hasActiveFilters && (
          <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
            Filters applied
          </span>
        )}
      </div>

      {/* Course Card Grid or Empty State */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-200 dark:border-slate-800 shadow-sm max-w-xl mx-auto my-8 space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-yellow-400 flex items-center justify-center mx-auto">
            <BookOpen className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            No courses found
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            We couldn’t find any courses matching your specific search query or filter combination. Try adjusting your keywords or clearing the category and level filters.
          </p>
          <div className="pt-2">
            <Button
              onClick={handleClearFilters}
              variant="primary"
              size="md"
              icon={RotateCcw}
              iconPosition="left"
            >
              Reset All Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
