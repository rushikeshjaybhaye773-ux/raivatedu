import Link from "next/link";
import {
  Code2,
  Terminal,
  BarChart3,
  Cpu,
  Layout,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const iconMap = {
  Code2: Code2,
  Terminal: Terminal,
  BarChart3: BarChart3,
  Cpu: Cpu,
  Layout: Layout,
  Briefcase: Briefcase,
};

export default function CategoryCard({ category }) {
  const IconComponent = iconMap[category.icon] || Code2;
  const encodedCategory = encodeURIComponent(category.name);

  return (
    <Link
      href={`/courses?category=${encodedCategory}`}
      className="group relative bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-indigo-400 dark:hover:border-indigo-600 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Icon & Count Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-13 h-13 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-800/60 flex items-center justify-center text-indigo-700 dark:text-yellow-400 group-hover:bg-indigo-700 group-hover:text-yellow-300 group-hover:scale-110 transition-all duration-300 shadow-sm">
            <IconComponent className="w-6 h-6 transition-colors" />
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
            {category.count} {category.count === 1 ? "Course" : "Courses"}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-yellow-400 transition-colors mb-2">
          {category.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {category.description}
        </p>
      </div>

      {/* Footer Link Prompt */}
      <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-indigo-700 dark:text-yellow-400">
        <span>Explore Track</span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
      </div>
    </Link>
  );
}
