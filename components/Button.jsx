import Link from "next/link";

export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  ariaLabel,
  icon: Icon,
  iconPosition = "right",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs font-semibold gap-1.5",
    md: "px-5 py-2.5 text-sm font-semibold gap-2",
    lg: "px-6 py-3.5 text-base font-semibold gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-indigo-700 hover:bg-indigo-800 text-white shadow-sm shadow-indigo-700/20 hover:shadow-md hover:shadow-indigo-700/30 focus-visible:outline-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700",
    secondary:
      "bg-yellow-400 hover:bg-yellow-500 text-slate-900 shadow-sm shadow-yellow-400/25 font-bold focus-visible:outline-yellow-400",
    outline:
      "border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/80 focus-visible:outline-indigo-600",
    ghost:
      "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-700 dark:hover:text-yellow-400 focus-visible:outline-indigo-600",
    white:
      "bg-white text-indigo-900 hover:bg-slate-50 shadow-md font-bold focus-visible:outline-white",
  };

  const classes = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel} {...props}>
        {Icon && iconPosition === "left" && <Icon className="w-4 h-4 shrink-0" />}
        <span>{children}</span>
        {Icon && iconPosition === "right" && <Icon className="w-4 h-4 shrink-0" />}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
      {...props}
    >
      {Icon && iconPosition === "left" && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon className="w-4 h-4 shrink-0" />}
    </button>
  );
}
