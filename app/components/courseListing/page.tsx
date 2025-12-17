"use client";

import { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Grid3x3,
  List,
  Star,
  Clock,
  Users,
  TrendingUp,
  Award,
  BookOpen,
  Play,
  ChevronDown,
  X,
  Filter,
  ArrowUpDown,
  Heart,
  Share2,
} from "lucide-react";

export default function CourseListing() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);

  const categories = [
    { id: "all", name: "All Courses", count: 156 },
    { id: "web", name: "Web Development", count: 45 },
    { id: "mobile", name: "Mobile Development", count: 28 },
    { id: "data", name: "Data Science", count: 32 },
    { id: "design", name: "Design", count: 24 },
    { id: "business", name: "Business", count: 27 },
  ];

  const levels = [
    { id: "all", name: "All Levels" },
    { id: "beginner", name: "Beginner" },
    { id: "intermediate", name: "Intermediate" },
    { id: "advanced", name: "Advanced" },
  ];

  const priceFilters = [
    { id: "all", name: "All Prices" },
    { id: "free", name: "Free" },
    { id: "paid", name: "Paid" },
    { id: "under50", name: "Under $50" },
    { id: "under100", name: "Under $100" },
  ];

  const sortOptions = [
    { id: "popular", name: "Most Popular" },
    { id: "rating", name: "Highest Rated" },
    { id: "newest", name: "Newest" },
    { id: "price-low", name: "Price: Low to High" },
    { id: "price-high", name: "Price: High to Low" },
  ];

  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp 2024",
      instructor: "Sarah Anderson",
      instructorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      rating: 4.8,
      reviews: 3420,
      students: 28459,
      duration: "42 hours",
      level: "Intermediate",
      price: 89.99,
      originalPrice: 199.99,
      category: "web",
      tags: ["Web Development", "React", "Node.js"],
      bestseller: true,
      updated: "December 2024",
    },
    {
      id: 2,
      title: "iOS App Development with Swift",
      instructor: "Michael Chen",
      instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      rating: 4.9,
      reviews: 2156,
      students: 15320,
      duration: "35 hours",
      level: "Advanced",
      price: 99.99,
      originalPrice: 179.99,
      category: "mobile",
      tags: ["iOS", "Swift", "Mobile"],
      bestseller: false,
      updated: "November 2024",
    },
    {
      id: 3,
      title: "Data Science and Machine Learning Masterclass",
      instructor: "Dr. Emily Rodriguez",
      instructorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      rating: 4.7,
      reviews: 4890,
      students: 42130,
      duration: "58 hours",
      level: "Intermediate",
      price: 94.99,
      originalPrice: 249.99,
      category: "data",
      tags: ["Python", "Machine Learning", "AI"],
      bestseller: true,
      updated: "December 2024",
    },
    {
      id: 4,
      title: "UI/UX Design Fundamentals",
      instructor: "Jessica Thompson",
      instructorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      rating: 4.9,
      reviews: 1823,
      students: 19450,
      duration: "28 hours",
      level: "Beginner",
      price: 79.99,
      originalPrice: 159.99,
      category: "design",
      tags: ["UI/UX", "Figma", "Design"],
      bestseller: false,
      updated: "December 2024",
    },
    {
      id: 5,
      title: "Advanced React and TypeScript",
      instructor: "David Kumar",
      instructorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
      rating: 4.8,
      reviews: 2945,
      students: 23678,
      duration: "32 hours",
      level: "Advanced",
      price: 89.99,
      originalPrice: 189.99,
      category: "web",
      tags: ["React", "TypeScript", "Advanced"],
      bestseller: true,
      updated: "November 2024",
    },
    {
      id: 6,
      title: "Digital Marketing Complete Course",
      instructor: "Amanda White",
      instructorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      rating: 4.6,
      reviews: 3567,
      students: 31240,
      duration: "40 hours",
      level: "Beginner",
      price: 69.99,
      originalPrice: 149.99,
      category: "business",
      tags: ["Marketing", "SEO", "Social Media"],
      bestseller: false,
      updated: "December 2024",
    },
    {
      id: 7,
      title: "Python for Data Analysis",
      instructor: "Robert Martinez",
      instructorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
      rating: 4.7,
      reviews: 2134,
      students: 18920,
      duration: "36 hours",
      level: "Intermediate",
      price: 84.99,
      originalPrice: 169.99,
      category: "data",
      tags: ["Python", "Data Analysis", "Pandas"],
      bestseller: false,
      updated: "November 2024",
    },
    {
      id: 8,
      title: "Flutter & Dart - Mobile App Development",
      instructor: "Lisa Johnson",
      instructorImage: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      rating: 4.8,
      reviews: 1876,
      students: 14590,
      duration: "38 hours",
      level: "Intermediate",
      price: 94.99,
      originalPrice: 179.99,
      category: "mobile",
      tags: ["Flutter", "Dart", "Cross-platform"],
      bestseller: true,
      updated: "December 2024",
    },
  ];

  const toggleFavorite = (courseId: number) => {
    setFavorites((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || course.level.toLowerCase() === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Header */}
      <div className="border-b border-slate-200 bg-white/80 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-900/80">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h1 className="mb-2 text-4xl font-bold text-slate-900 dark:text-white">
              Explore Our Courses
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {filteredCourses.length} courses available to help you achieve your goals
            </p>
          </div>

          {/* Search and Filters Bar */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative flex-1 lg:max-w-md">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 text-slate-900 placeholder-slate-400 transition-all focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500"
              />
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none rounded-xl border border-slate-300 bg-white py-3 pl-4 pr-10 text-sm font-medium text-slate-700 transition-all hover:border-indigo-300 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
                <ArrowUpDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              </div>

              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition-all hover:border-indigo-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-750"
              >
                <Filter className="h-4 w-4" />
                Filters
                {(selectedCategory !== "all" || selectedLevel !== "all" || selectedPrice !== "all") && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs text-white">
                    {[selectedCategory !== "all", selectedLevel !== "all", selectedPrice !== "all"].filter(Boolean).length}
                  </span>
                )}
              </button>

              {/* View Mode Toggle */}
              <div className="flex rounded-xl border border-slate-300 bg-white p-1 dark:border-slate-700 dark:bg-slate-800">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`rounded-lg p-2 transition-all ${
                    viewMode === "grid"
                      ? "bg-indigo-600 text-white"
                      : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700"
                  }`}
                >
                  <Grid3x3 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`rounded-lg p-2 transition-all ${
                    viewMode === "list"
                      ? "bg-indigo-600 text-white"
                      : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700"
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          {(selectedCategory !== "all" || selectedLevel !== "all" || selectedPrice !== "all") && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Active filters:
              </span>
              {selectedCategory !== "all" && (
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700 transition-all hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-400"
                >
                  {categories.find((c) => c.id === selectedCategory)?.name}
                  <X className="h-3 w-3" />
                </button>
              )}
              {selectedLevel !== "all" && (
                <button
                  onClick={() => setSelectedLevel("all")}
                  className="flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700 transition-all hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-400"
                >
                  {levels.find((l) => l.id === selectedLevel)?.name}
                  <X className="h-3 w-3" />
                </button>
              )}
              {selectedPrice !== "all" && (
                <button
                  onClick={() => setSelectedPrice("all")}
                  className="flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700 transition-all hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-400"
                >
                  {priceFilters.find((p) => p.id === selectedPrice)?.name}
                  <X className="h-3 w-3" />
                </button>
              )}
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedLevel("all");
                  setSelectedPrice("all");
                }}
                className="text-sm font-medium text-slate-600 underline hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar Filters */}
          <div
            className={`lg:col-span-1 ${
              showFilters ? "block" : "hidden lg:block"
            }`}
          >
            <div className="sticky top-4 space-y-6">
              {/* Categories */}
              <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-900">
                <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-left transition-all ${
                        selectedCategory === category.id
                          ? "bg-indigo-600 text-white"
                          : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                      }`}
                    >
                      <span className="font-medium">{category.name}</span>
                      <span
                        className={`text-sm ${
                          selectedCategory === category.id
                            ? "text-indigo-200"
                            : "text-slate-500 dark:text-slate-400"
                        }`}
                      >
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Level */}
              <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-900">
                <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
                  Level
                </h3>
                <div className="space-y-2">
                  {levels.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setSelectedLevel(level.id)}
                      className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-all ${
                        selectedLevel === level.id
                          ? "bg-indigo-600 text-white"
                          : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                      }`}
                    >
                      <div
                        className={`h-4 w-4 rounded-full border-2 ${
                          selectedLevel === level.id
                            ? "border-white bg-white"
                            : "border-slate-300 dark:border-slate-600"
                        }`}
                      />
                      <span className="font-medium">{level.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-slate-900">
                <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
                  Price
                </h3>
                <div className="space-y-2">
                  {priceFilters.map((price) => (
                    <button
                      key={price.id}
                      onClick={() => setSelectedPrice(price.id)}
                      className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-all ${
                        selectedPrice === price.id
                          ? "bg-indigo-600 text-white"
                          : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                      }`}
                    >
                      <div
                        className={`h-4 w-4 rounded-full border-2 ${
                          selectedPrice === price.id
                            ? "border-white bg-white"
                            : "border-slate-300 dark:border-slate-600"
                        }`}
                      />
                      <span className="font-medium">{price.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Courses Grid/List */}
          <div className="lg:col-span-3">
            {viewMode === "grid" ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-2xl dark:bg-slate-900"
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                      
                      {/* Badges */}
                      <div className="absolute left-3 top-3 flex gap-2">
                        {course.bestseller && (
                          <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-yellow-900">
                            Bestseller
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="absolute right-3 top-3 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                        <button
                          onClick={() => toggleFavorite(course.id)}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-all hover:bg-white"
                        >
                          <Heart
                            className={`h-5 w-5 transition-all ${
                              favorites.includes(course.id)
                                ? "fill-red-500 text-red-500"
                                : "text-slate-700"
                            }`}
                          />
                        </button>
                      </div>

                      {/* Play Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-all hover:scale-110">
                          <Play className="h-8 w-8 text-indigo-600" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="mb-3 flex items-start justify-between gap-2">
                        <h3 className="line-clamp-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                          {course.title}
                        </h3>
                      </div>

                      <div className="mb-4 flex items-center gap-2">
                        <img
                          src={course.instructorImage}
                          alt={course.instructor}
                          className="h-8 w-8 rounded-full object-cover"
                        />
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          {course.instructor}
                        </span>
                      </div>

                      <div className="mb-4 flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold text-slate-900 dark:text-white">
                            {course.rating}
                          </span>
                          <span>({course.reviews.toLocaleString()})</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{(course.students / 1000).toFixed(1)}k</span>
                        </div>
                      </div>

                      <div className="mb-4 flex items-center gap-3 text-sm">
                        <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                          <Clock className="h-4 w-4" />
                          {course.duration}
                        </div>
                        <span className="rounded-full bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
                          {course.level}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-slate-900 dark:text-white">
                            ${course.price}
                          </span>
                          <span className="text-sm text-slate-500 line-through dark:text-slate-400">
                            ${course.originalPrice}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-2xl dark:bg-slate-900 sm:flex-row"
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-video overflow-hidden sm:w-80">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      {course.bestseller && (
                        <span className="absolute left-3 top-3 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-yellow-900">
                          Bestseller
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <div className="mb-3 flex items-start justify-between gap-4">
                          <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                            {course.title}
                          </h3>
                          <button
                            onClick={() => toggleFavorite(course.id)}
                            className="shrink-0"
                          >
                            <Heart
                              className={`h-6 w-6 transition-all ${
                                favorites.includes(course.id)
                                  ? "fill-red-500 text-red-500"
                                  : "text-slate-400 hover:text-red-500"
                              }`}
                            />
                          </button>
                        </div>

                        <div className="mb-4 flex items-center gap-2">
                          <img
                            src={course.instructorImage}
                            alt={course.instructor}
                            className="h-8 w-8 rounded-full object-cover"
                          />
                          <span className="text-sm text-slate-600 dark:text-slate-400">
                            {course.instructor}
                          </span>
                        </div>

                        <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold text-slate-900 dark:text-white">
                              {course.rating}
                            </span>
                            <span>({course.reviews.toLocaleString()} reviews)</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{course.students.toLocaleString()} students</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {course.duration}
                          </div>
                          <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
                            {course.level}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {course.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-700">
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold text-slate-900 dark:text-white">
                            ${course.price}
                          </span>
                          <span className="text-sm text-slate-500 line-through dark:text-slate-400">
                            ${course.originalPrice}
                          </span>
                        </div>
                        <button className="rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* No Results */}
            {filteredCourses.length === 0 && (
              <div className="rounded-2xl bg-white p-12 text-center shadow-lg dark:bg-slate-900">
                <BookOpen className="mx-auto mb-4 h-16 w-16 text-slate-400" />
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  No courses found
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Try adjusting your filters or search query
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}