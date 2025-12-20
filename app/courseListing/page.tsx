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
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

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
      isFree: false,
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
      isFree: false,
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
      isFree: false,
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
      isFree: false,
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
      isFree: false,
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
      isFree: false,
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
      isFree: false,
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
      isFree: false,
      updated: "December 2024",
    },
    {
      id: 9,
      title: "Introduction to Programming - Free Course",
      instructor: "John Williams",
      instructorImage: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop",
      rating: 4.5,
      reviews: 8920,
      students: 125430,
      duration: "12 hours",
      level: "Beginner",
      price: 0,
      originalPrice: 0,
      category: "web",
      tags: ["Programming", "Basics", "Free"],
      bestseller: false,
      isFree: true,
      updated: "December 2024",
    },
    {
      id: 10,
      title: "Artificial Intelligence & Deep Learning",
      instructor: "Dr. Sophia Chen",
      instructorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      rating: 4.9,
      reviews: 3890,
      students: 28340,
      duration: "65 hours",
      level: "Advanced",
      price: 129.99,
      originalPrice: 299.99,
      category: "data",
      tags: ["AI", "Deep Learning", "Neural Networks"],
      bestseller: true,
      isFree: false,
      updated: "December 2024",
    },
    {
      id: 11,
      title: "Android Development with Kotlin",
      instructor: "Mark Peterson",
      instructorImage: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&h=600&fit=crop",
      rating: 4.7,
      reviews: 2670,
      students: 19840,
      duration: "48 hours",
      level: "Intermediate",
      price: 94.99,
      originalPrice: 199.99,
      category: "mobile",
      tags: ["Android", "Kotlin", "Mobile Dev"],
      bestseller: false,
      isFree: false,
      updated: "November 2024",
    },
    {
      id: 12,
      title: "Cloud Computing with AWS",
      instructor: "Rachel Green",
      instructorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      rating: 4.8,
      reviews: 4120,
      students: 32890,
      duration: "52 hours",
      level: "Intermediate",
      price: 109.99,
      originalPrice: 229.99,
      category: "web",
      tags: ["AWS", "Cloud", "DevOps"],
      bestseller: true,
      isFree: false,
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
    
    // Price filtering logic
    let matchesPrice = true;
    if (selectedPrice === "free") {
      matchesPrice = course.isFree;
    } else if (selectedPrice === "paid") {
      matchesPrice = !course.isFree;
    } else if (selectedPrice === "under50") {
      matchesPrice = !course.isFree && course.price < 50;
    } else if (selectedPrice === "under100") {
      matchesPrice = !course.isFree && course.price < 100;
    }
    
    return matchesSearch && matchesCategory && matchesLevel && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Spacer for fixed navbar - CRITICAL for proper spacing */}
      <div className="h-16"></div>

      {/* Hero Header Section */}
      <div className="relative overflow-hidden border-b border-slate-800/50 bg-linear-to-r from-slate-900/90 via-slate-900/50 to-slate-900/90 backdrop-blur-xl">
        {/* Animated background gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 top-0 h-96 w-96 animate-pulse rounded-full bg-blue-500/10 blur-3xl"></div>
          <div className="absolute -right-1/4 top-0 h-96 w-96 animate-pulse rounded-full bg-indigo-500/10 blur-3xl" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Explore Our{" "}
              <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Courses
              </span>
            </h1>
            <p className="text-lg text-slate-400 sm:text-xl">
              {filteredCourses.length} courses available to help you achieve your goals
            </p>
          </div>

          {/* Search and Filters Bar */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative flex-1 lg:max-w-xl">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-2xl border border-slate-700/50 bg-slate-900/50 py-4 pl-12 pr-4 text-white placeholder-slate-500 shadow-xl shadow-black/20 backdrop-blur-xl transition-all focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none rounded-xl border border-slate-700/50 bg-slate-900/50 py-3 pl-4 pr-10 text-sm font-medium text-slate-300 shadow-lg shadow-black/20 backdrop-blur-xl transition-all hover:border-slate-600/50 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
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
                className="flex items-center gap-2 rounded-xl border border-slate-700/50 bg-slate-900/50 px-4 py-3 text-sm font-medium text-slate-300 shadow-lg shadow-black/20 backdrop-blur-xl transition-all hover:border-slate-600/50 hover:bg-slate-800/50"
              >
                <Filter className="h-4 w-4" />
                Filters
                {(selectedCategory !== "all" || selectedLevel !== "all" || selectedPrice !== "all") && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-indigo-600 text-xs font-bold text-white">
                    {[selectedCategory !== "all", selectedLevel !== "all", selectedPrice !== "all"].filter(Boolean).length}
                  </span>
                )}
              </button>

              {/* View Mode Toggle */}
              <div className="flex gap-1 rounded-xl border border-slate-700/50 bg-slate-900/50 p-1 shadow-lg shadow-black/20 backdrop-blur-xl">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`rounded-lg p-2.5 transition-all ${
                    viewMode === "grid"
                      ? "bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                      : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-300"
                  }`}
                >
                  <Grid3x3 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`rounded-lg p-2.5 transition-all ${
                    viewMode === "list"
                      ? "bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                      : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-300"
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          {(selectedCategory !== "all" || selectedLevel !== "all" || selectedPrice !== "all") && (
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-slate-400">
                Active filters:
              </span>
              {selectedCategory !== "all" && (
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="group flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400 backdrop-blur-xl transition-all hover:bg-blue-500/20"
                >
                  {categories.find((c) => c.id === selectedCategory)?.name}
                  <X className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
                </button>
              )}
              {selectedLevel !== "all" && (
                <button
                  onClick={() => setSelectedLevel("all")}
                  className="group flex items-center gap-2 rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-400 backdrop-blur-xl transition-all hover:bg-indigo-500/20"
                >
                  {levels.find((l) => l.id === selectedLevel)?.name}
                  <X className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
                </button>
              )}
              {selectedPrice !== "all" && (
                <button
                  onClick={() => setSelectedPrice("all")}
                  className="group flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-400 backdrop-blur-xl transition-all hover:bg-purple-500/20"
                >
                  {priceFilters.find((p) => p.id === selectedPrice)?.name}
                  <X className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
                </button>
              )}
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedLevel("all");
                  setSelectedPrice("all");
                }}
                className="text-sm font-medium text-slate-400 underline decoration-slate-600 underline-offset-4 transition-colors hover:text-slate-300"
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
            <div className="sticky top-24 space-y-6">
              {/* Categories */}
              <div className="overflow-hidden rounded-2xl border border-slate-800/50 bg-slate-900/50 shadow-2xl shadow-black/20 backdrop-blur-xl">
                <div className="border-b border-slate-800/50 bg-linear-to-r from-slate-800/50 to-slate-900/50 px-6 py-4">
                  <h3 className="text-lg font-bold text-white">
                    Categories
                  </h3>
                </div>
                <div className="p-4">
                  <div className="space-y-1.5">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`group flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-all ${
                          selectedCategory === category.id
                            ? "bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20"
                            : "text-slate-300 hover:bg-slate-800/50"
                        }`}
                      >
                        <span className="font-medium">{category.name}</span>
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                            selectedCategory === category.id
                              ? "bg-white/20 text-white"
                              : "bg-slate-800 text-slate-400 group-hover:bg-slate-700"
                          }`}
                        >
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Level */}
              <div className="overflow-hidden rounded-2xl border border-slate-800/50 bg-slate-900/50 shadow-2xl shadow-black/20 backdrop-blur-xl">
                <div className="border-b border-slate-800/50 bg-linear-to-r from-slate-800/50 to-slate-900/50 px-6 py-4">
                  <h3 className="text-lg font-bold text-white">
                    Level
                  </h3>
                </div>
                <div className="p-4">
                  <div className="space-y-1.5">
                    {levels.map((level) => (
                      <button
                        key={level.id}
                        onClick={() => setSelectedLevel(level.id)}
                        className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all ${
                          selectedLevel === level.id
                            ? "bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20"
                            : "text-slate-300 hover:bg-slate-800/50"
                        }`}
                      >
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all ${
                            selectedLevel === level.id
                              ? "border-white bg-white"
                              : "border-slate-600"
                          }`}
                        >
                          {selectedLevel === level.id && (
                            <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                          )}
                        </div>
                        <span className="font-medium">{level.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="overflow-hidden rounded-2xl border border-slate-800/50 bg-slate-900/50 shadow-2xl shadow-black/20 backdrop-blur-xl">
                <div className="border-b border-slate-800/50 bg-linear-to-r from-slate-800/50 to-slate-900/50 px-6 py-4">
                  <h3 className="text-lg font-bold text-white">
                    Price
                  </h3>
                </div>
                <div className="p-4">
                  <div className="space-y-1.5">
                    {priceFilters.map((price) => (
                      <button
                        key={price.id}
                        onClick={() => setSelectedPrice(price.id)}
                        className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all ${
                          selectedPrice === price.id
                            ? "bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20"
                            : "text-slate-300 hover:bg-slate-800/50"
                        }`}
                      >
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all ${
                            selectedPrice === price.id
                              ? "border-white bg-white"
                              : "border-slate-600"
                          }`}
                        >
                          {selectedPrice === price.id && (
                            <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                          )}
                        </div>
                        <span className="font-medium">{price.name}</span>
                      </button>
                    ))}
                  </div>
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
                    className="group relative overflow-hidden rounded-2xl border border-slate-800/50 bg-slate-900/50 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all hover:scale-[1.02] hover:border-slate-700/50 hover:shadow-blue-500/10"
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-video overflow-hidden bg-slate-800">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80"></div>
                      
                      {/* Badges */}
                      <div className="absolute left-3 top-3 flex gap-2">
                        {course.bestseller && (
                          <span className="flex items-center gap-1.5 rounded-full bg-yellow-400 px-3 py-1.5 text-xs font-bold text-yellow-900 shadow-lg">
                            <Award className="h-3.5 w-3.5" />
                            Bestseller
                          </span>
                        )}
                        {course.isFree && (
                          <span className="flex items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                            FREE
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="absolute right-3 top-3 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleFavorite(course.id);
                          }}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 backdrop-blur-xl transition-all hover:scale-110 hover:bg-slate-900"
                        >
                          <Heart
                            className={`h-5 w-5 transition-all ${
                              favorites.includes(course.id)
                                ? "fill-red-500 text-red-500"
                                : "text-white"
                            }`}
                          />
                        </button>
                      </div>

                      {/* Play Overlay - Shows on Click */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setPlayingVideo(playingVideo === course.id ? null : course.id);
                        }}
                        className="absolute inset-0 flex items-center justify-center transition-opacity hover:bg-black/10"
                      >
                        <div className={`flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl transition-all hover:scale-110 hover:bg-white/20 ${
                          playingVideo === course.id ? 'opacity-100 scale-110' : 'opacity-0 group-hover:opacity-100'
                        }`}>
                          <Play className="h-8 w-8 text-white" fill={playingVideo === course.id ? "white" : "none"} />
                        </div>
                      </button>

                      {/* Video Playing Indicator */}
                      {/* {playingVideo === course.id && (
                        <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-10">
                          <div className="text-center"> */}
                            {/* <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full">
                              <Play className="h-10 w-10 text-white" fill="white" />
                            </div> */}
                            {/* <p className="text-white text-sm font-semibold mb-2">Playing Preview</p>
                            <p className="text-slate-300 text-xs">Click again to close</p> */}
                          {/* </div>
                        </div>
                      )} */}

                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="mb-3 line-clamp-2 text-lg font-bold text-white transition-colors group-hover:text-blue-400">
                        {course.title}
                      </h3>

                      <div className="mb-4 flex items-center gap-2">
                        <img
                          src={course.instructorImage}
                          alt={course.instructor}
                          className="h-8 w-8 rounded-full border-2 border-slate-700 object-cover"
                        />
                        <span className="text-sm text-slate-400">
                          {course.instructor}
                        </span>
                      </div>

                      <div className="mb-4 flex items-center gap-4 text-sm text-slate-400">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold text-white">
                            {course.rating}
                          </span>
                          <span>({course.reviews.toLocaleString()})</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{(course.students / 1000).toFixed(1)}k</span>
                        </div>
                      </div>

                      <div className="mb-4 flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1 text-slate-400">
                          <Clock className="h-4 w-4" />
                          {course.duration}
                        </div>
                        <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                          {course.level}
                        </span>
                      </div>

                      <div className="flex items-center justify-between border-t border-slate-800/50 pt-4">
                        {course.isFree ? (
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-green-400">FREE</span>
                            <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                              100% Off
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-white">
                              ${course.price}
                            </span>
                            <span className="text-sm text-slate-500 line-through">
                              ${course.originalPrice}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Hover CTA */}
                    <div className="absolute inset-x-0 bottom-0 translate-y-full p-5 transition-transform group-hover:translate-y-0">
                      <button className="w-full rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30">
                        {course.isFree ? "Enroll Free" : "Enroll Now"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800/50 bg-slate-900/50 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all hover:border-slate-700/50 hover:shadow-blue-500/10 sm:flex-row"
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-video overflow-hidden bg-slate-800 sm:w-80">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-r from-slate-900/80 to-transparent sm:from-transparent"></div>
                      {course.bestseller && (
                        <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-yellow-400 px-3 py-1.5 text-xs font-bold text-yellow-900 shadow-lg">
                          <Award className="h-3.5 w-3.5" />
                          Bestseller
                        </span>
                      )}
                      {course.isFree && (
                        <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-bold text-white shadow-lg" style={course.bestseller ? { top: '3.5rem' } : {}}>
                          FREE
                        </span>
                      )}

                      {/* Play Overlay - Shows on Click */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setPlayingVideo(playingVideo === course.id ? null : course.id);
                        }}
                        className="absolute inset-0 flex items-center justify-center transition-opacity hover:bg-black/10"
                      >
                        <div className={`flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl transition-all hover:scale-110 hover:bg-white/20 ${
                          playingVideo === course.id ? 'opacity-100 scale-110' : 'opacity-0 group-hover:opacity-100'
                        }`}>
                          <Play className="h-8 w-8 text-white" fill={playingVideo === course.id ? "white" : "none"} />
                        </div>
                      </button>

                      {/* Video Playing Indicator */}
                      {playingVideo === course.id && (
                        <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-10">
                          <div className="text-center">
                            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 mx-auto animate-pulse">
                              <Play className="h-10 w-10 text-white" fill="white" />
                            </div>
                            <p className="text-white text-sm font-semibold mb-2">Playing Preview</p>
                            <p className="text-slate-300 text-xs">Click again to close</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <div className="mb-3 flex items-start justify-between gap-4">
                          <h3 className="text-xl font-bold text-white transition-colors group-hover:text-blue-400">
                            {course.title}
                          </h3>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              toggleFavorite(course.id);
                            }}
                            className="shrink-0"
                          >
                            <Heart
                              className={`h-6 w-6 transition-all ${
                                favorites.includes(course.id)
                                  ? "fill-red-500 text-red-500"
                                  : "text-slate-400 hover:scale-110 hover:text-red-500"
                              }`}
                            />
                          </button>
                        </div>

                        <div className="mb-4 flex items-center gap-2">
                          <img
                            src={course.instructorImage}
                            alt={course.instructor}
                            className="h-8 w-8 rounded-full border-2 border-slate-700 object-cover"
                          />
                          <span className="text-sm text-slate-400">
                            {course.instructor}
                          </span>
                        </div>

                        <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-slate-400">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold text-white">
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
                          <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                            {course.level}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {course.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="rounded-full border border-slate-700/50 bg-slate-800/50 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur-xl"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-between border-t border-slate-800/50 pt-4">
                        {course.isFree ? (
                          <div className="flex items-center gap-2">
                            <span className="text-3xl font-bold text-green-400">FREE</span>
                            <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                              100% Off
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-white">
                              ${course.price}
                            </span>
                            <span className="text-sm text-slate-500 line-through">
                              ${course.originalPrice}
                            </span>
                          </div>
                        )}
                        <button className="rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30">
                          {course.isFree ? "Enroll Free" : "Enroll Now"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* No Results */}
            {filteredCourses.length === 0 && (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-800/50 bg-slate-900/50 p-16 text-center shadow-2xl shadow-black/20 backdrop-blur-xl">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-slate-800/50">
                  <BookOpen className="h-10 w-10 text-slate-600" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white">
                  No courses found
                </h3>
                <p className="max-w-md text-slate-400">
                  Try adjusting your filters or search query to find what you're looking for
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                    setSelectedLevel("all");
                    setSelectedPrice("all");
                  }}
                  className="mt-6 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}