import Link from "next/link";
import { BookOpen, ArrowLeft, Home } from "lucide-react";
import Button from "@/components/Button";

export const metadata = {
  title: "Page Not Found — Raivatedu",
  description: "The page or course you are looking for does not exist or has been relocated.",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-yellow-400 flex items-center justify-center mx-auto shadow-sm">
          <BookOpen className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
            404 Error
          </span>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white">
            Course Not Found
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            We couldn’t locate the requested course or page. It may have been archived, renamed, or you might have entered an invalid URL.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            href="/courses"
            variant="primary"
            size="md"
            icon={ArrowLeft}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            Browse Catalog
          </Button>
          <Button
            href="/"
            variant="outline"
            size="md"
            icon={Home}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            Go to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
