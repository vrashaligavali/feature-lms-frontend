"use client";

import { useState } from "react";
import {
  PlayCircle,
  Clock,
  Users,
  Award,
  BookOpen,
  CheckCircle2,
  Star,
  Globe,
  Calendar,
  TrendingUp,
  Download,
  Share2,
  Heart,
  ChevronDown,
  ChevronRight,
  Video,
  FileText,
  Code,
  MessageSquare,
  BarChart3,
} from "lucide-react";

export default function CourseDetails() {
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedModule, setExpandedModule] = useState<number | null>(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const course = {
    title: "Advanced Web Development: From Zero to Full Stack",
    subtitle: "Master modern web technologies and build production-ready applications",
    instructor: {
      name: "Sarah Anderson",
      role: "Senior Full Stack Developer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      students: 45230,
      rating: 4.9,
    },
    rating: 4.8,
    reviews: 3420,
    students: 28459,
    duration: "42 hours",
    level: "Intermediate to Advanced",
    language: "English",
    lastUpdated: "December 2024",
    price: 89.99,
    originalPrice: 199.99,
    certificate: true,
    tags: ["Web Development", "React", "Node.js", "TypeScript", "Full Stack"],
  };

  const modules = [
    {
      title: "Introduction to Modern Web Development",
      duration: "2h 30m",
      lessons: 12,
      lessons_detail: [
        { title: "Course Overview & Setup", duration: "15:30", type: "video", locked: false },
        { title: "Modern Web Architecture", duration: "22:45", type: "video", locked: false },
        { title: "Development Environment Setup", duration: "18:20", type: "video", locked: false },
        { title: "Git & Version Control", duration: "25:10", type: "video", locked: true },
      ],
    },
    {
      title: "Frontend Fundamentals with React",
      duration: "8h 15m",
      lessons: 24,
      lessons_detail: [
        { title: "React Components & JSX", duration: "32:15", type: "video", locked: true },
        { title: "State Management with Hooks", duration: "45:30", type: "video", locked: true },
        { title: "Advanced Patterns", duration: "38:20", type: "video", locked: true },
      ],
    },
    {
      title: "Backend Development with Node.js",
      duration: "10h 45m",
      lessons: 28,
      lessons_detail: [
        { title: "Express.js Fundamentals", duration: "40:15", type: "video", locked: true },
        { title: "Database Design & SQL", duration: "55:30", type: "video", locked: true },
        { title: "RESTful API Development", duration: "48:20", type: "video", locked: true },
      ],
    },
    {
      title: "Full Stack Integration & Deployment",
      duration: "6h 30m",
      lessons: 18,
      lessons_detail: [
        { title: "Connecting Frontend & Backend", duration: "35:15", type: "video", locked: true },
        { title: "Authentication & Security", duration: "42:30", type: "video", locked: true },
        { title: "Deployment Strategies", duration: "28:45", type: "video", locked: true },
      ],
    },
  ];

  const stats = [
    { icon: Clock, label: "Duration", value: course.duration },
    { icon: Users, label: "Students", value: course.students.toLocaleString() },
    { icon: BarChart3, label: "Level", value: course.level.split(" ")[0] },
    { icon: Award, label: "Certificate", value: "Included" },
  ];

  const features = [
    "42 hours of on-demand video content",
    "120+ coding exercises and challenges",
    "15 real-world projects to build",
    "Lifetime access to course materials",
    "Certificate of completion",
    "Direct instructor support",
    "Access to exclusive community",
    "30-day money-back guarantee",
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-linear-to-br from-indigo-600 via-blue-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJjMC0xLjEtLjktMi0yLTJ6bTAgNGMxLjEgMCAyLS45IDItMnYtMmgtMnYyaC0ydjJoMnptLTItMnYtMmgydi0yaC0ydjJ6bS0yLTJ2MmgtMnYyaDJ2LTJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex flex-wrap gap-2">
                {course.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                {course.title}
              </h1>

              <p className="text-xl text-blue-100">
                {course.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold">{course.rating}</span>
                  <span className="text-blue-100">({course.reviews.toLocaleString()} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>{course.students.toLocaleString()} students enrolled</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  <span>{course.language}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={course.instructor.image}
                  alt={course.instructor.name}
                  className="h-12 w-12 rounded-full border-2 border-white/30"
                />
                <div>
                  <p className="font-semibold">{course.instructor.name}</p>
                  <p className="text-sm text-blue-100">{course.instructor.role}</p>
                </div>
              </div>
            </div>

            {/* Right Card - Preview */}
            <div className="lg:col-span-1">
              <div className="sticky top-4 rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-900">
                <div className="relative mb-6 aspect-video overflow-hidden rounded-xl bg-linear-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="group flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-xl transition-all hover:scale-110 hover:shadow-2xl dark:bg-slate-800">
                      <PlayCircle className="h-10 w-10 text-indigo-600 transition-transform group-hover:scale-110 dark:text-indigo-400" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 right-4 rounded-lg bg-black/50 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                    Preview
                  </div>
                </div>

                <div className="mb-6 space-y-3">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold text-slate-900 dark:text-white">
                      ${course.price}
                    </span>
                    <span className="text-lg text-slate-500 line-through dark:text-slate-400">
                      ${course.originalPrice}
                    </span>
                    <span className="rounded-full bg-green-100 px-2 py-1 text-sm font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      55% OFF
                    </span>
                  </div>
                  <p className="text-sm text-red-600 dark:text-red-400">
                    🔥 Sale ends in 2 days!
                  </p>
                </div>

                <div className="space-y-3">
                  <button className="w-full rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 px-6 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                    Enroll Now
                  </button>
                  <button className="w-full rounded-xl border-2 border-slate-300 px-6 py-3 font-semibold text-slate-700 transition-all hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800">
                    Add to Cart
                  </button>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-6 dark:border-slate-700">
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400"
                  >
                    <Heart
                      className={`h-5 w-5 transition-all ${
                        isFavorite ? "fill-red-500 text-red-500" : ""
                      }`}
                    />
                    Wishlist
                  </button>
                  <button className="flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400">
                    <Share2 className="h-5 w-5" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/30">
                    <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
                    <p className="font-bold text-slate-900 dark:text-white">{stat.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tabs */}
            <div className="rounded-2xl bg-white p-2 shadow-lg dark:bg-slate-900">
              <div className="flex gap-2 overflow-x-auto">
                {["overview", "curriculum", "instructor", "reviews"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 whitespace-nowrap rounded-xl px-6 py-3 text-sm font-semibold capitalize transition-all ${
                      activeTab === tab
                        ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                        : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-900">
              {activeTab === "overview" && (
                <div className="space-y-8">
                  <div>
                    <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
                      What you'll learn
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {features.map((feature, idx) => (
                        <div key={idx} className="flex gap-3">
                          <CheckCircle2 className="h-6 w-6 shrink-0 text-green-500" />
                          <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
                      Course Description
                    </h2>
                    <div className="space-y-4 text-slate-700 dark:text-slate-300">
                      <p>
                        Embark on a comprehensive journey through modern web development! This course is designed to take you from fundamental concepts to advanced full-stack development, equipping you with the skills needed to build professional, scalable web applications.
                      </p>
                      <p>
                        You'll start by mastering the fundamentals of React, learning how to build dynamic, responsive user interfaces with modern JavaScript. Then, dive deep into backend development with Node.js and Express, understanding how to create robust APIs and work with databases.
                      </p>
                      <p>
                        Throughout the course, you'll work on 15+ real-world projects, from simple components to complete full-stack applications. By the end, you'll have a portfolio of production-ready projects and the confidence to tackle any web development challenge.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
                      Requirements
                    </h2>
                    <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                      <li className="flex gap-3">
                        <ChevronRight className="h-6 w-6 shrink-0 text-indigo-600" />
                        Basic understanding of HTML, CSS, and JavaScript
                      </li>
                      <li className="flex gap-3">
                        <ChevronRight className="h-6 w-6 shrink-0 text-indigo-600" />
                        A computer with internet connection
                      </li>
                      <li className="flex gap-3">
                        <ChevronRight className="h-6 w-6 shrink-0 text-indigo-600" />
                        Eagerness to learn and build amazing projects
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "curriculum" && (
                <div className="space-y-4">
                  <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
                    Course Curriculum
                  </h2>
                  {modules.map((module, idx) => (
                    <div
                      key={idx}
                      className="overflow-hidden rounded-xl border border-slate-200 transition-all dark:border-slate-700"
                    >
                      <button
                        onClick={() => setExpandedModule(expandedModule === idx ? null : idx)}
                        className="flex w-full items-center justify-between bg-slate-50 p-6 text-left transition-colors hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-750"
                      >
                        <div className="flex-1">
                          <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                            Module {idx + 1}: {module.title}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                            <span className="flex items-center gap-1">
                              <Video className="h-4 w-4" />
                              {module.lessons} lessons
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {module.duration}
                            </span>
                          </div>
                        </div>
                        <ChevronDown
                          className={`h-6 w-6 text-slate-400 transition-transform ${
                            expandedModule === idx ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          expandedModule === idx ? "max-h-250" : "max-h-0"
                        }`}
                      >
                        <div className="border-t border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
                          {module.lessons_detail.map((lesson, lessonIdx) => (
                            <div
                              key={lessonIdx}
                              className="flex items-center justify-between border-b border-slate-100 p-4 last:border-b-0 dark:border-slate-800"
                            >
                              <div className="flex items-center gap-3">
                                {lesson.type === "video" ? (
                                  <PlayCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                                ) : (
                                  <FileText className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                                )}
                                <span className="text-slate-700 dark:text-slate-300">
                                  {lesson.title}
                                </span>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className="text-sm text-slate-500 dark:text-slate-400">
                                  {lesson.duration}
                                </span>
                                {lesson.locked && (
                                  <span className="rounded-full bg-slate-200 px-2 py-1 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-400">
                                    Locked
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "instructor" && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                    Your Instructor
                  </h2>
                  <div className="flex flex-col gap-6 sm:flex-row">
                    <img
                      src={course.instructor.image}
                      alt={course.instructor.name}
                      className="h-32 w-32 rounded-2xl object-cover shadow-lg"
                    />
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                          {course.instructor.name}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                          {course.instructor.role}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-6 text-sm">
                        <div className="flex items-center gap-2">
                          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold text-slate-900 dark:text-white">
                            {course.instructor.rating}
                          </span>
                          <span className="text-slate-600 dark:text-slate-400">
                            Instructor Rating
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                          <span className="font-semibold text-slate-900 dark:text-white">
                            {course.instructor.students.toLocaleString()}
                          </span>
                          <span className="text-slate-600 dark:text-slate-400">Students</span>
                        </div>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300">
                        Sarah is a seasoned full-stack developer with over 10 years of experience building web applications for Fortune 500 companies. She's passionate about teaching and has helped thousands of students launch their careers in tech. Her teaching style focuses on practical, hands-on learning with real-world projects.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                    Student Reviews
                  </h2>
                  <div className="grid gap-6">
                    {[1, 2, 3].map((review) => (
                      <div
                        key={review}
                        className="rounded-xl border border-slate-200 p-6 dark:border-slate-700"
                      >
                        <div className="mb-4 flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-12 w-12 rounded-full bg-linear-to-br from-indigo-400 to-purple-400"></div>
                            <div>
                              <p className="font-semibold text-slate-900 dark:text-white">
                                John Doe
                              </p>
                              <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star
                                    key={star}
                                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <span className="text-sm text-slate-500 dark:text-slate-400">
                            2 weeks ago
                          </span>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300">
                          Excellent course! The instructor explains complex concepts in a way that's easy to understand. The projects are challenging but rewarding. Highly recommended for anyone looking to become a full-stack developer.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              {/* Quick Info Card */}
              <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-900">
                <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
                  This course includes
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Video, text: "42 hours video" },
                    { icon: FileText, text: "50 articles" },
                    { icon: Download, text: "120 resources" },
                    { icon: Code, text: "Coding exercises" },
                    { icon: Award, text: "Certificate" },
                    { icon: TrendingUp, text: "Lifetime access" },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                        <span className="text-slate-700 dark:text-slate-300">{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Related Courses */}
              <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-900">
                <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
                  Related Courses
                </h3>
                <div className="space-y-4">
                  {[1, 2].map((course) => (
                    <div
                      key={course}
                      className="group cursor-pointer rounded-xl border border-slate-200 p-4 transition-all hover:border-indigo-300 hover:shadow-md dark:border-slate-700 dark:hover:border-indigo-600"
                    >
                      <div className="mb-2 aspect-video rounded-lg bg-linear-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700"></div>
                      <h4 className="mb-1 font-semibold text-slate-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                        Advanced React Patterns
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">$49.99</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}