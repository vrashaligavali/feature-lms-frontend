"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, BookOpen, GraduationCap, Users, Mail, ChevronDown, List, FileText } from "lucide-react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showCoursesDropdown, setShowCoursesDropdown] = useState(false);
  const [showMobileCoursesDropdown, setShowMobileCoursesDropdown] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (prefersDark) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg border-b border-slate-200/50 dark:border-slate-700/50" 
          : "bg-white/60 dark:bg-slate-900/60 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="/"
              className="group flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 transition-all hover:scale-105 dark:text-white"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/30 transition-all group-hover:shadow-xl group-hover:shadow-blue-500/40">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                EduSphere
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {/* Home Link */}
            <a
              href="/"
              className="group relative flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <BookOpen className="h-4 w-4 transition-transform group-hover:scale-110" />
              Home
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-linear-to-r from-blue-600 to-indigo-600 transition-all group-hover:w-3/4"></span>
            </a>

            {/* Courses Dropdown */}
            <div 
              id="courses-dropdown"
              className="relative"
            >
              <button
                type="button"
                onClick={() => setShowCoursesDropdown(!showCoursesDropdown)}
                className="group relative flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <GraduationCap className="h-4 w-4 transition-transform group-hover:scale-110" />
                Courses
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${showCoursesDropdown ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-linear-to-r from-blue-600 to-indigo-600 transition-all group-hover:w-3/4"></span>
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 mt-2 w-56 origin-top-left transition-all duration-200 ${
                  showCoursesDropdown 
                    ? 'scale-100 opacity-100' 
                    : 'scale-95 opacity-0 pointer-events-none'
                }`}
              >
                <div className="rounded-xl bg-white/95 backdrop-blur-xl shadow-xl ring-1 ring-slate-200/50 dark:bg-slate-900/95 dark:ring-slate-700/50">
                  <div className="p-2">
                    <a
                      href="/courseListing"
                      className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-all hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                    >
                      <List className="h-4 w-4" />
                      Course Listing
                    </a>
                    <a
                      href="/courseDetails"
                      className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-all hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                    >
                      <FileText className="h-4 w-4" />
                      Course Details
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* About Link */}
            <a
              href="/about"
              className="group relative flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <Users className="h-4 w-4 transition-transform group-hover:scale-110" />
              About
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-linear-to-r from-blue-600 to-indigo-600 transition-all group-hover:w-3/4"></span>
            </a>

            {/* Contact Link */}
            <a
              href="/contact"
              className="group relative flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
              Contact
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-linear-to-r from-blue-600 to-indigo-600 transition-all group-hover:w-3/4"></span>
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="group relative rounded-lg p-2 text-slate-700 transition-all hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="Toggle theme"
            >
              <div className="relative h-5 w-5">
                <Sun className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
                <Moon className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`} />
              </div>
            </button>

            {/* Desktop Auth Buttons */}
            <div className="hidden items-center gap-2 lg:flex">
              <a
                href="/auth/Login"
                className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                Login
              </a>
              <a
                href="/auth/register"
                className="group relative overflow-hidden rounded-lg bg-linear-to-r from-blue-600 to-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 z-0 bg-linear-to-r from-blue-700 to-indigo-700 opacity-0 transition-opacity group-hover:opacity-100"></div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 transition-all hover:bg-slate-100 hover:text-slate-900 lg:hidden dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-150 border-t border-slate-200 dark:border-slate-700" : "max-h-0"
        }`}
      >
        <div className="space-y-1 bg-white/95 px-4 pb-4 pt-2 backdrop-blur-xl dark:bg-slate-900/95">
          {/* Home Link */}
          <a
            href="/"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition-all hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <BookOpen className="h-5 w-5" />
            Home
          </a>

          {/* Courses Dropdown */}
          <div>
            <button
              type="button"
              onClick={() => setShowMobileCoursesDropdown(!showMobileCoursesDropdown)}
              className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition-all hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5" />
                Courses
              </div>
              <ChevronDown className={`h-4 w-4 transition-transform ${showMobileCoursesDropdown ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Mobile Dropdown Items */}
            <div 
              className={`overflow-hidden transition-all duration-200 ${
                showMobileCoursesDropdown ? 'max-h-96 mt-1' : 'max-h-0'
              }`}
            >
              <div className="ml-4 space-y-1 border-l-2 border-slate-200 pl-4 dark:border-slate-700">
                <a
                  href="/CourseListing"
                  className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 transition-all hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                >
                  <List className="h-4 w-4" />
                  Course Listing
                </a>
                <a
                  href="/CourseDetails"
                  className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 transition-all hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                >
                  <FileText className="h-4 w-4" />
                  Course Details
                </a>
              </div>
            </div>
          </div>

          {/* About Link */}
          <a
            href="/about"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition-all hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <Users className="h-5 w-5" />
            About
          </a>

          {/* Contact Link */}
          <a
            href="/contact"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition-all hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <Mail className="h-5 w-5" />
            Contact
          </a>

          <div className="mt-4 flex flex-col gap-2 pt-4 border-t border-slate-200 dark:border-slate-700">
            <a
              href="/auth/login"
              className="rounded-lg px-4 py-3 text-center text-base font-medium text-slate-700 transition-all hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              Login
            </a>
            <a
              href="/auth/register"
              className="rounded-lg bg-linear-to-r from-blue-600 to-indigo-600 px-4 py-3 text-center text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}