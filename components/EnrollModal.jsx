"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle2, AlertCircle, ArrowRight, Sparkles, BookOpen, Clock, Calendar } from "lucide-react";
import Button from "./Button";

export default function EnrollModal({ course, isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    goal: "Career Transition to Tech",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [enrollmentId, setEnrollmentId] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      setIsSubmitted(false);
      setErrors({});
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !course) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    const phoneRegex = /^[0-9+\s-]{10,14}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your contact phone number.";
    } else if (!phoneRegex.test(formData.phone.trim().replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const generatedId = `RAIVAT-${Math.floor(100000 + Math.random() * 900000)}`;
      setEnrollmentId(generatedId);
      setIsSubmitted(true);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enrollment-modal-title"
    >
      <div
        className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-yellow-400 flex items-center justify-center font-bold text-sm">
              <BookOpen className="w-4 h-4" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-yellow-400">
              Demo Cohort Enrollment
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!isSubmitted ? (
            <div>
              {/* Course Brief */}
              <div className="mb-6 p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1">
                  {course.title}
                </h4>
                <div className="flex items-center gap-3 mt-2 text-xs text-slate-600 dark:text-slate-300">
                  <span className="font-bold text-indigo-700 dark:text-yellow-400 text-sm">
                    ₹{course.price.toLocaleString("en-IN")}
                  </span>
                  <span>•</span>
                  <span>{course.duration}</span>
                  <span>•</span>
                  <span>By {course.instructor.name}</span>
                </div>
              </div>

              {/* Demo Mode Notice Banner */}
              <div className="mb-6 flex items-start gap-2.5 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 text-xs text-amber-800 dark:text-amber-300">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-600" />
                <p>
                  <strong>Demo Evaluation Mode:</strong> No real payment or credit card is required. Submitting this form tests frontend validation and simulates the confirmation workflow.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="e.g. Rushikesh Patil"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors focus:outline-none focus:ring-2 ${
                      errors.fullName
                        ? "border-rose-400 focus:ring-rose-200"
                        : "border-slate-300 dark:border-slate-700 focus:ring-indigo-200 dark:focus:ring-indigo-900 focus:border-indigo-600"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-rose-500 font-medium">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="e.g. rushikesh@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors focus:outline-none focus:ring-2 ${
                      errors.email
                        ? "border-rose-400 focus:ring-rose-200"
                        : "border-slate-300 dark:border-slate-700 focus:ring-indigo-200 dark:focus:ring-indigo-900 focus:border-indigo-600"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-500 font-medium">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Phone / WhatsApp Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="e.g. +91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors focus:outline-none focus:ring-2 ${
                      errors.phone
                        ? "border-rose-400 focus:ring-rose-200"
                        : "border-slate-300 dark:border-slate-700 focus:ring-indigo-200 dark:focus:ring-indigo-900 focus:border-indigo-600"
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-rose-500 font-medium">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="goal"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Primary Learning Goal
                  </label>
                  <select
                    id="goal"
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900 focus:border-indigo-600"
                  >
                    <option value="Career Transition to Tech">Career Transition to Tech</option>
                    <option value="Upskilling for Current Engineering Job">Upskilling for Current Engineering Job</option>
                    <option value="College Campus Placement Preparation">College Campus Placement Preparation</option>
                    <option value="Personal Project & Startup Building">Personal Project & Startup Building</option>
                  </select>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    icon={ArrowRight}
                  >
                    Confirm Demo Enrollment
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-yellow-400 text-slate-950 mb-2">
                  Demo Enrollment Successful
                </span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  Welcome to the Cohort!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-sm mx-auto">
                  Congratulations <strong>{formData.fullName}</strong>. Your test seat has been reserved for:
                </p>
                <p className="text-sm font-bold text-indigo-700 dark:text-yellow-400 mt-1">
                  {course.title}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-left space-y-2 text-slate-600 dark:text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Enrollment ID:</span>
                  <span className="font-mono font-bold text-slate-800 dark:text-slate-200">
                    {enrollmentId}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Registered Email:</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Next Live Cohort:</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">First Monday of Next Month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Status:</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">Verified (Simulated Demo)</span>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  onClick={onClose}
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Done & Return to Course
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
