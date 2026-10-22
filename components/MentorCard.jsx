import Image from "next/image";
import { Star, Award, Users } from "lucide-react";

export default function MentorCard({ mentor }) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-6 shadow-sm hover:shadow-xl hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 flex flex-col justify-between h-full group">
      <div>
        {/* Mentor Avatar & Company */}
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 border-2 border-indigo-100 dark:border-indigo-900 shadow-sm group-hover:scale-105 transition-transform">
            <Image
              src={mentor.avatar}
              alt={`Portrait of ${mentor.name}`}
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white truncate">
              {mentor.name}
            </h3>
            <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-yellow-400 border border-indigo-100 dark:border-indigo-900 mt-0.5">
              {mentor.company}
            </span>
          </div>
        </div>

        {/* Specialization */}
        <div className="mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
            Focus Area
          </span>
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
            {mentor.specialization}
          </p>
        </div>

        {/* Bio */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-4">
          {mentor.bio}
        </p>
      </div>

      {/* Experience & Sample Badge */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2.5">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 font-medium">
            <Award className="w-4 h-4 text-yellow-500 shrink-0" />
            <span>{mentor.experience}</span>
          </div>
          <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white">
            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            <span>{mentor.rating}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-1">
          <span className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            {mentor.studentsCount} students mentored
          </span>
          <span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-500">
            Sample Profile
          </span>
        </div>
      </div>
    </div>
  );
}
