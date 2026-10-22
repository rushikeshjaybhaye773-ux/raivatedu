export default function SectionHeading({
  badge,
  title,
  highlight,
  description,
  align = "center",
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl mb-12 sm:mb-16 ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-3 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60 ${
            isCenter ? "justify-center" : ""
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
        {title}{" "}
        {highlight && (
          <span className="text-indigo-700 dark:text-indigo-400 relative inline-block">
            {highlight}
            <span className="absolute bottom-1 left-0 w-full h-2 bg-yellow-300/40 dark:bg-yellow-400/20 -z-10 rounded-sm"></span>
          </span>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
