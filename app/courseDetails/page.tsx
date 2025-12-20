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
  Lock,
  Sparkles,
  Target,
  Zap,
  Trophy,
  Infinity,
  Shield,
  Headphones,
} from "lucide-react";

export default function CourseDetails() {
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedModule, setExpandedModule] = useState<number | null>(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const course = {
    title: "Advanced Web Development: From Zero to Full Stack",
    subtitle: "Master modern web technologies and build production-ready applications",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=675&fit=crop",
    instructor: {
      name: "Sarah Anderson",
      role: "Senior Full Stack Developer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      students: 45230,
      rating: 4.9,
      courses: 12,
    },
    rating: 4.8,
    reviews: 3420,
    students: 28459,
    duration: "42 hours",
    level: "Intermediate",
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
        { title: "Git & Version Control Basics", duration: "25:10", type: "video", locked: true },
        { title: "Introduction to Package Managers", duration: "20:15", type: "video", locked: true },
      ],
    },
    {
      title: "Frontend Fundamentals with React",
      duration: "8h 15m",
      lessons: 24,
      lessons_detail: [
        { title: "React Components & JSX", duration: "32:15", type: "video", locked: true },
        { title: "State Management with Hooks", duration: "45:30", type: "video", locked: true },
        { title: "Advanced React Patterns", duration: "38:20", type: "video", locked: true },
        { title: "Performance Optimization", duration: "42:10", type: "video", locked: true },
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
        { title: "Authentication & Authorization", duration: "52:40", type: "video", locked: true },
      ],
    },
    {
      title: "Full Stack Integration & Deployment",
      duration: "6h 30m",
      lessons: 18,
      lessons_detail: [
        { title: "Connecting Frontend & Backend", duration: "35:15", type: "video", locked: true },
        { title: "Security Best Practices", duration: "42:30", type: "video", locked: true },
        { title: "Cloud Deployment Strategies", duration: "28:45", type: "video", locked: true },
      ],
    },
  ];

  const stats = [
    { icon: Clock, label: "Duration", value: course.duration, gradient: "from-cyan-500 to-blue-500" },
    { icon: Users, label: "Students", value: course.students.toLocaleString(), gradient: "from-violet-500 to-purple-500" },
    { icon: BarChart3, label: "Level", value: course.level, gradient: "from-amber-500 to-orange-500" },
    { icon: Award, label: "Certificate", value: "Included", gradient: "from-emerald-500 to-teal-500" },
  ];

  const features = [
    { icon: Video, text: "42 hours of on-demand video content", color: "text-cyan-400" },
    { icon: Code, text: "120+ coding exercises and challenges", color: "text-violet-400" },
    { icon: Target, text: "15 real-world projects to build", color: "text-amber-400" },
    { icon: Infinity, text: "Lifetime access to course materials", color: "text-emerald-400" },
    { icon: Award, text: "Certificate of completion", color: "text-pink-400" },
    { icon: Headphones, text: "Direct instructor support", color: "text-blue-400" },
    { icon: Users, text: "Access to exclusive community", color: "text-purple-400" },
    { icon: Shield, text: "30-day money-back guarantee", color: "text-green-400" },
  ];

  const requirements = [
    "Basic understanding of HTML, CSS, and JavaScript",
    "A computer with internet connection",
    "Eagerness to learn and build amazing projects",
    "No prior React or Node.js experience required",
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Gradient Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navbar Spacer */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-6 lg:space-y-8">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {course.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1.5 text-xs font-bold bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-500/30 rounded-full text-blue-300 hover:border-blue-400/50 hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <div className="space-y-5">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-50 drop-shadow-2xl">
                    {course.title}
                  </span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed font-light">
                  {course.subtitle}
                </p>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-sm">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-white">{course.rating}</span>
                  <span className="text-slate-400">({course.reviews.toLocaleString()})</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Users className="h-5 w-5 text-violet-400" />
                  <span className="font-medium">{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Globe className="h-5 w-5 text-cyan-400" />
                  <span className="font-medium">{course.language}</span>
                </div>
              </div>

              {/* Instructor */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative flex items-center gap-4 p-5 bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-50"></div>
                    <img
                      src={course.instructor.image}
                      alt={course.instructor.name}
                      className="relative h-14 w-14 lg:h-16 lg:w-16 rounded-full border-2 border-blue-400/50 object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-white text-base lg:text-lg">{course.instructor.name}</p>
                    <p className="text-sm text-slate-400">{course.instructor.role}</p>
                  </div>
                </div>
              </div>

              {/* Last Updated */}
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Calendar className="h-4 w-4" />
                <span>Last updated {course.lastUpdated}</span>
              </div>
            </div>

            {/* Right Card - Enrollment (Sticky on Desktop) */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="relative group">
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
                  
                  <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl">
                    {/* Course Image Preview */}
                    <div className="relative aspect-video overflow-hidden group/preview cursor-pointer">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/preview:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-2xl transition-all duration-300 group-hover/preview:scale-110 group-hover/preview:bg-blue-500">
                          <PlayCircle className="h-8 w-8 text-blue-600 group-hover/preview:text-white transition-colors" />
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 px-3 py-1.5 text-xs font-bold bg-blue-500 text-white rounded-full shadow-lg backdrop-blur-sm">
                        Preview Course
                      </div>
                    </div>

                    <div className="p-6 space-y-6">
                      {/* Pricing */}
                      <div className="space-y-3">
                        <div className="flex items-baseline gap-3 flex-wrap">
                          <span className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                            ${course.price}
                          </span>
                          <span className="text-xl text-slate-500 line-through">
                            ${course.originalPrice}
                          </span>
                          <span className="px-3 py-1 text-sm font-black bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full shadow-lg">
                            55% OFF
                          </span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-xl">
                          <Zap className="h-4 w-4 text-red-400 animate-pulse" />
                          <span className="text-sm font-bold text-red-400">Sale ends in 2 days!</span>
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="space-y-3">
                        <button className="relative w-full group/btn overflow-hidden rounded-xl">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-all duration-300"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-all duration-300"></div>
                          <div className="relative py-4 px-6 font-black text-white text-base flex items-center justify-center gap-2">
                            <Sparkles className="h-5 w-5" />
                            Enroll Now
                          </div>
                        </button>
                        <button className="w-full py-3.5 px-6 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                          Add to Cart
                        </button>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <button
                          onClick={() => setIsFavorite(!isFavorite)}
                          className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-pink-400 transition-all duration-300 group/fav"
                        >
                          <Heart
                            className={`h-5 w-5 transition-all duration-300 ${
                              isFavorite ? "fill-pink-500 text-pink-500 scale-110" : "group-hover/fav:scale-110"
                            }`}
                          />
                          Wishlist
                        </button>
                        <button className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-blue-400 transition-all duration-300 group/share">
                          <Share2 className="h-5 w-5 group-hover/share:scale-110 transition-transform" />
                          Share
                        </button>
                      </div>

                      {/* Money Back Guarantee */}
                      <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
                        <div className="flex items-center justify-center gap-2">
                          <Shield className="h-5 w-5 text-green-400" />
                          <p className="text-sm text-center text-green-400 font-bold">
                            30-Day Money-Back Guarantee
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-y border-white/5 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 my-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative flex flex-col sm:flex-row items-center gap-3 p-4 lg:p-5 bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                    <div className={`flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-xl bg-gradient-to-br ${stat.gradient} shadow-lg`}>
                      <Icon className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
                    </div>
                    <div className="text-center sm:text-left">
                      <p className="text-xs lg:text-sm text-slate-400 mb-1">{stat.label}</p>
                      <p className="font-black text-white text-sm lg:text-base">{stat.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-20">
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-6 lg:space-y-8">
            {/* Tabs */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-white/10 p-2 shadow-2xl">
                <div className="grid grid-cols-2 lg:flex gap-2">
                  {["overview", "curriculum", "instructor", "reviews"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 lg:px-6 py-3 text-sm font-bold capitalize rounded-xl transition-all duration-300 ${
                        activeTab === tab
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                          : "text-slate-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tab Content */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl">
                {activeTab === "overview" && (
                  <div className="space-y-10 lg:space-y-12">
                    {/* What You'll Learn */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        <h2 className="text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                          What you'll learn
                        </h2>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        {features.map((feature, idx) => {
                          const Icon = feature.icon;
                          return (
                            <div key={idx} className="flex gap-4 items-start group/item p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                              <div className="flex-shrink-0 p-2.5 bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-xl group-hover/item:scale-110 group-hover/item:border-white/20 transition-all duration-300">
                                <Icon className={`h-5 w-5 ${feature.color}`} />
                              </div>
                              <span className="text-sm lg:text-base text-slate-300 group-hover/item:text-white transition-colors leading-relaxed">
                                {feature.text}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                        <h2 className="text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                          Course Description
                        </h2>
                      </div>
                      <div className="space-y-4 text-sm lg:text-base text-slate-300 leading-relaxed">
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

                    {/* Requirements */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                        <h2 className="text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                          Requirements
                        </h2>
                      </div>
                      <ul className="space-y-3">
                        {requirements.map((req, idx) => (
                          <li key={idx} className="flex gap-3 items-start group/req p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                            <ChevronRight className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5 group-hover/req:translate-x-1 transition-transform" />
                            <span className="text-sm lg:text-base text-slate-300 group-hover/req:text-white transition-colors">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === "curriculum" && (
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        <h2 className="text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                          Course Curriculum
                        </h2>
                      </div>
                      <div className="text-sm text-slate-400 font-medium">
                        {modules.length} modules • {modules.reduce((acc, m) => acc + m.lessons, 0)} lessons
                      </div>
                    </div>

                    {modules.map((module, idx) => (
                      <div
                        key={idx}
                        className="relative group/module overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-xl"
                      >
                        <button
                          onClick={() => setExpandedModule(expandedModule === idx ? null : idx)}
                          className="flex w-full items-center justify-between p-5 lg:p-6 text-left transition-colors hover:bg-white/5"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="flex items-center justify-center h-10 w-10 lg:h-12 lg:w-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white text-sm lg:text-base font-black shadow-lg">
                                {idx + 1}
                              </span>
                              <h3 className="text-base lg:text-lg font-black text-white group-hover/module:text-transparent group-hover/module:bg-clip-text group-hover/module:bg-gradient-to-r group-hover/module:from-blue-400 group-hover/module:to-purple-400 transition-all">
                                {module.title}
                              </h3>
                            </div>
                            <div className="flex flex-wrap gap-4 text-xs lg:text-sm text-slate-400 ml-13 lg:ml-15">
                              <span className="flex items-center gap-1.5">
                                <Video className="h-4 w-4" />
                                {module.lessons} lessons
                              </span>
                              <span className="flex items-center gap-1.5">
                                <Clock className="h-4 w-4" />
                                {module.duration}
                              </span>
                            </div>
                          </div>
                          <ChevronDown
                            className={`h-6 w-6 text-slate-400 transition-all duration-300 flex-shrink-0 ml-4 ${
                              expandedModule === idx ? "rotate-180 text-blue-400" : ""
                            }`}
                          />
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-500 ${
                            expandedModule === idx ? "max-h-[500px]" : "max-h-0"
                          }`}
                        >
                          <div className="border-t border-white/10 bg-black/20">
                            {module.lessons_detail.map((lesson, lessonIdx) => (
                              <div
                                key={lessonIdx}
                                className="flex items-center justify-between p-4 lg:p-5 border-b border-white/5 last:border-b-0 hover:bg-white/5 transition-all duration-300 group/lesson"
                              >
                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                  <div className={`flex-shrink-0 p-2 rounded-lg transition-all duration-300 ${
                                    lesson.locked 
                                      ? 'bg-slate-800/50' 
                                      : 'bg-blue-500/10 group-hover/lesson:bg-blue-500/20'
                                  }`}>
                                    {lesson.locked ? (
                                      <Lock className="h-4 w-4 text-slate-600" />
                                    ) : (
                                      <PlayCircle className="h-4 w-4 text-blue-400" />
                                    )}
                                  </div>
                                  <span className={`text-sm lg:text-base truncate ${
                                    lesson.locked 
                                      ? 'text-slate-600' 
                                      : 'text-slate-300 group-hover/lesson:text-white'
                                  } transition-colors`}>
                                    {lesson.title}
                                  </span>
                                </div>
                                <div className="flex items-center gap-3 flex-shrink-0 ml-4">
                                  <span className="text-xs lg:text-sm text-slate-500 font-medium">
                                    {lesson.duration}
                                  </span>
                                  {lesson.locked && (
                                    <span className="hidden sm:inline px-2 py-1 text-xs font-bold bg-slate-800 text-slate-600 rounded-full">
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
                  <div className="space-y-8">
                    <div className="flex items-center gap-3">
                      <div className="h-1 w-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"></div>
                      <h2 className="text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                        Your Instructor
                      </h2>
                    </div>
                    
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      <div className="relative flex flex-col sm:flex-row gap-6 p-6 lg:p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                        <div className="relative flex-shrink-0 mx-auto sm:mx-0">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-50"></div>
                          <img
                            src={course.instructor.image}
                            alt={course.instructor.name}
                            className="relative h-32 w-32 lg:h-40 lg:w-40 rounded-2xl object-cover shadow-2xl border-2 border-blue-400/50"
                          />
                        </div>
                        <div className="flex-1 space-y-4 text-center sm:text-left">
                          <div>
                            <h3 className="text-xl lg:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                              {course.instructor.name}
                            </h3>
                            <p className="text-slate-400 text-sm lg:text-base mt-1">
                              {course.instructor.role}
                            </p>
                          </div>
                          
                          <div className="flex flex-wrap justify-center sm:justify-start gap-4 lg:gap-6 text-sm">
                            <div className="flex items-center gap-2 px-3 py-2 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                              <span className="font-bold text-white">
                                {course.instructor.rating}
                              </span>
                              <span className="text-slate-400">Rating</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 bg-violet-500/10 border border-violet-500/20 rounded-xl">
                              <Users className="h-4 w-4 text-violet-400" />
                              <span className="font-bold text-white">
                                {course.instructor.students.toLocaleString()}
                              </span>
                              <span className="text-slate-400">Students</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                              <BookOpen className="h-4 w-4 text-cyan-400" />
                              <span className="font-bold text-white">
                                {course.instructor.courses}
                              </span>
                              <span className="text-slate-400">Courses</span>
                            </div>
                          </div>
                          
                          <p className="text-sm lg:text-base text-slate-300 leading-relaxed">
                            Sarah is a seasoned full-stack developer with over 10 years of experience building web applications for Fortune 500 companies. She's passionate about teaching and has helped thousands of students launch their careers in tech. Her teaching style focuses on practical, hands-on learning with real-world projects.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "reviews" && (
                  <div className="space-y-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                        <h2 className="text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                          Student Reviews
                        </h2>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                        <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                        <span className="text-xl font-black text-white">{course.rating}</span>
                        <span className="text-slate-400 text-sm">({course.reviews.toLocaleString()})</span>
                      </div>
                    </div>

                    <div className="space-y-4 lg:space-y-6">
                      {[
                        {
                          name: "John Doe",
                          rating: 5,
                          date: "2 weeks ago",
                          comment: "Excellent course! The instructor explains complex concepts in a way that's easy to understand. The projects are challenging but rewarding. Highly recommended for anyone looking to become a full-stack developer."
                        },
                        {
                          name: "Jane Smith",
                          rating: 5,
                          date: "1 month ago",
                          comment: "This is hands down the best web development course I've taken. The curriculum is well-structured, and the real-world projects really helped solidify my understanding. Worth every penny!"
                        },
                        {
                          name: "Mike Johnson",
                          rating: 4,
                          date: "1 month ago",
                          comment: "Great content and very comprehensive. The instructor is knowledgeable and engaging. My only wish is that there were more advanced topics covered, but overall an excellent course."
                        }
                      ].map((review, idx) => (
                        <div
                          key={idx}
                          className="relative group"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                          <div className="relative p-6 lg:p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                              <div className="flex items-center gap-3">
                                <div className="h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-black text-base lg:text-lg shadow-lg">
                                  {review.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                  <p className="font-bold text-white text-base lg:text-lg">
                                    {review.name}
                                  </p>
                                  <div className="flex items-center gap-1 mt-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <Star
                                        key={star}
                                        className={`h-4 w-4 ${star <= review.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-700'}`}
                                      />
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <span className="text-xs lg:text-sm text-slate-500 font-medium">
                                {review.date}
                              </span>
                            </div>
                            <p className="text-sm lg:text-base text-slate-300 leading-relaxed">
                              {review.comment}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6 lg:space-y-8">
              {/* Course Includes */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-white/10 p-6 shadow-2xl">
                  <h3 className="mb-6 text-lg lg:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                    This course includes
                  </h3>
                  <div className="space-y-3">
                    {[
                      { icon: Video, text: "42 hours video", color: "text-cyan-400" },
                      { icon: FileText, text: "50 articles", color: "text-violet-400" },
                      { icon: Download, text: "120 resources", color: "text-amber-400" },
                      { icon: Code, text: "Coding exercises", color: "text-emerald-400" },
                      { icon: Award, text: "Certificate", color: "text-pink-400" },
                      { icon: Infinity, text: "Lifetime access", color: "text-blue-400" },
                    ].map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div key={idx} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group/item">
                          <div className="p-2 bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-lg group-hover/item:scale-110 group-hover/item:border-white/20 transition-all duration-300">
                            <Icon className={`h-4 w-4 ${item.color}`} />
                          </div>
                          <span className="text-sm text-slate-300 group-hover/item:text-white transition-colors font-medium">
                            {item.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Related Courses */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-white/10 p-6 shadow-2xl">
                  <h3 className="mb-6 text-lg lg:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                    Related Courses
                  </h3>
                  <div className="space-y-4">
                    {[
                      { 
                        title: "Advanced React Patterns", 
                        price: 49.99, 
                        rating: 4.7,
                        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop"
                      },
                      { 
                        title: "Node.js Masterclass", 
                        price: 59.99, 
                        rating: 4.8,
                        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=225&fit=crop"
                      }
                    ].map((relatedCourse, idx) => (
                      <div
                        key={idx}
                        className="group/related cursor-pointer rounded-xl border border-white/10 overflow-hidden hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 hover:scale-105"
                      >
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={relatedCourse.image} 
                            alt={relatedCourse.title}
                            className="w-full h-full object-cover group-hover/related:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4 bg-gradient-to-br from-slate-900/80 to-slate-800/80">
                          <h4 className="mb-2 font-bold text-white group-hover/related:text-transparent group-hover/related:bg-clip-text group-hover/related:bg-gradient-to-r group-hover/related:from-blue-400 group-hover/related:to-purple-400 transition-all text-sm lg:text-base">
                            {relatedCourse.title}
                          </h4>
                          <div className="flex items-center justify-between">
                            <span className="text-sm lg:text-base font-black text-white">${relatedCourse.price}</span>
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 lg:h-4 lg:w-4 fill-amber-400 text-amber-400" />
                              <span className="text-sm text-slate-400 font-medium">{relatedCourse.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add animation keyframes */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}