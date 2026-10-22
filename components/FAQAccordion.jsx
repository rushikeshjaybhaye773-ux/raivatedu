"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQAccordion({ items }) {
  const [openIds, setOpenIds] = useState([items[0]?.id || "faq-1"]);

  const toggleItem = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto" role="region" aria-label="Frequently Asked Questions">
      {items.map((item, index) => {
        const isOpen = openIds.includes(item.id);
        const headingId = `faq-heading-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? "bg-white dark:bg-slate-900 border-indigo-200 dark:border-indigo-800 shadow-sm"
                : "bg-white/70 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
            }`}
          >
            <h3>
              <button
                type="button"
                id={headingId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus-visible:outline-2 focus-visible:outline-indigo-600 rounded-2xl"
              >
                <span className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                  {item.question}
                </span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen
                      ? "bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-yellow-400 rotate-180"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
            </h3>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={headingId}
                className="px-6 pb-6 pt-1 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-100 dark:border-slate-800/80 animate-fade-in"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
