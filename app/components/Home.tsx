import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Award, Users, BookOpen, TrendingUp, Star, Sparkles, Zap, Target, Play, Globe, Shield, Headphones, Code, Briefcase, Rocket } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Users,
      title: "Expert Instructors",
      desc: "Learn from industry professionals with 10+ years of real-world experience and proven teaching methodologies.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      desc: "Self-paced courses with lifetime access. Learn on your schedule, on any device, anywhere in the world.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "Industry Certifications",
      desc: "Earn recognized certificates that validate your skills and boost your professional credibility.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Globe,
      title: "Global Community",
      desc: "Connect with learners worldwide, collaborate on projects, and build your professional network.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      desc: "All courses are rigorously reviewed and updated regularly to ensure the highest learning standards.",
      gradient: "from-indigo-500 to-violet-500",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "Get help whenever you need it with our dedicated support team and active community forums.",
      gradient: "from-rose-500 to-pink-500",
    },
  ];

  const stats = [
    { label: "Active Learners", value: "50K+", desc: "worldwide", icon: Users, color: "blue" },
    { label: "Expert Courses", value: "1,200+", desc: "available", icon: BookOpen, color: "purple" },
    { label: "Success Rate", value: "94%", desc: "completion", icon: TrendingUp, color: "green" },
    { label: "Satisfaction", value: "4.9/5", desc: "avg rating", icon: Star, color: "yellow" },
  ];

  const benefits = [
    "Lifetime access to all course materials and updates",
    "Industry-recognized certificates upon completion",
    "Interactive projects and hands-on assignments",
    "24/7 community support and peer collaboration",
    "Mobile and desktop apps for seamless learning",
    "30-day money-back guarantee on all courses",
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      content: "EduSphere transformed my career. The courses are practical, engaging, and taught by real experts. Highly recommended!",
      avatar: "SJ",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Product Manager at Amazon",
      content: "The flexibility and quality of content are unmatched. I was able to learn at my own pace while working full-time.",
      avatar: "MC",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer at Microsoft",
      content: "Best investment in my professional development. The instructors are incredible and the community is so supportive.",
      avatar: "ER",
      rating: 5,
    },
  ];

  const categories = [
    { name: "Web Development", icon: Code, courses: 180, color: "from-blue-500 to-cyan-500" },
    { name: "Business & Marketing", icon: Briefcase, courses: 150, color: "from-purple-500 to-pink-500" },
    { name: "Data Science", icon: TrendingUp, courses: 120, color: "from-green-500 to-emerald-500" },
    { name: "Design", icon: Sparkles, courses: 95, color: "from-orange-500 to-red-500" },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { gradient: string; shadow: string }> = {
      blue: { gradient: "from-blue-500 to-cyan-500", shadow: "shadow-blue-500/50" },
      purple: { gradient: "from-purple-500 to-pink-500", shadow: "shadow-purple-500/50" },
      green: { gradient: "from-green-500 to-emerald-500", shadow: "shadow-green-500/50" },
      yellow: { gradient: "from-yellow-500 to-orange-500", shadow: "shadow-yellow-500/50" },
    };
    return colors[color] || colors.blue;
  };

  return (
    <main className="min-h-screen bg-slate-950 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-12 sm:pt-24 sm:pb-16 md:pt-32 md:pb-20 lg:pt-32 lg:pb-24">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-size:[4rem_4rem] [mask-:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          <div className="absolute top-0 left-1/4 h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-full bg-purple-500/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-full bg-indigo-500/10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-500/10 to-indigo-500/10 px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-semibold text-blue-400 border border-blue-500/20 backdrop-blur-sm">
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="whitespace-nowrap">Trusted by 50,000+ Professionals</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-tight px-2 sm:px-0">
                Transform Your Career with{" "}
                <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Expert-Led Learning
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-400 max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0">
                Master in-demand skills with world-class courses designed by industry experts. 
                Get certified, build projects, and advance your career with EduSphere's comprehensive learning platform.
              </p>

              <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row lg:justify-start justify-center items-stretch sm:items-center px-2 sm:px-0">
                <Link
                  href="/auth/Register"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-xl shadow-blue-500/30 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
                >
                  Start Learning Free
                  <ArrowRight 
                  className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/courseListing"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-700 bg-slate-800/50 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-slate-200 backdrop-blur-sm transition-all hover:border-slate-600 hover:bg-slate-800 hover:scale-105"
                >
                  <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                  Browse Courses
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:justify-start pt-4 sm:pt-6 border-t border-slate-800">
                <div className="flex items-center gap-1 sm:gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-300">
                  4.9/5 from 15,000+ reviews
                </span>
              </div>
            </div>

            {/* Right Content - Enhanced Stats Grid */}
            <div className="relative px-2 sm:px-0">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  const colors = getColorClasses(stat.color);
                  return (
                    <div
                      key={stat.label}
                      className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-slate-900/50 backdrop-blur-sm p-4 sm:p-5 md:p-6 shadow-xl border border-slate-800 transition-all hover:scale-105 hover:shadow-2xl hover:border-slate-700"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <div className={`absolute -right-8 -top-8 h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-linear-to-br ${colors.gradient} opacity-10 blur-2xl transition-all group-hover:scale-150 group-hover:opacity-20`}></div>
                      
                      <div className="relative space-y-2 sm:space-y-3">
                        <div className={`inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-linear-to-br ${colors.gradient} shadow-lg ${colors.shadow}`}>
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-2xl sm:text-3xl font-bold text-white">
                            {stat.value}
                          </p>
                          <p className="text-xs sm:text-sm font-semibold text-slate-400">
                            {stat.label}
                          </p>
                          <p className="text-xs text-slate-500 hidden sm:block">
                            {stat.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Floating Badge with Professional Animations */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 hidden md:block">
                <div className="relative animate-bounce" style={{ animationDuration: '3s' }}>
                  {/* Pulsing glow effect */}
                  <div className="absolute inset-0 rounded-full bg-linear-to-br from-green-500 to-emerald-600 blur-xl opacity-60 animate-pulse"></div>
                  {/* Ping/ripple effect */}
                  <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping"></div>
                  {/* Main badge with slow rotation */}
                  <div className="relative rounded-full bg-linear-to-br from-green-500 to-emerald-600 p-3 sm:p-4 shadow-2xl shadow-green-500/50 animate-spin" style={{ animationDuration: '10s' }}>
                    {/* Icon with counter-rotation to keep it upright */}
                    <Target className="h-6 w-6 sm:h-8 sm:w-8 text-white" style={{ animation: 'spin 10s linear infinite reverse' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative">
        <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-500/10 to-indigo-500/10 px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-semibold text-blue-400 border border-blue-500/20">
              <Rocket className="h-3 w-3 sm:h-4 sm:w-4" />
              Popular Categories
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white px-4 sm:px-0">
              Explore Top{" "}
              <span className="bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Learning Paths
              </span>
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, i) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.name}
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-slate-900/50 backdrop-blur-sm p-6 sm:p-7 md:p-8 border border-slate-800 transition-all hover:scale-105 hover:shadow-2xl hover:border-slate-700"
                >
                  <div className={`absolute -right-12 -top-12 h-28 w-28 sm:h-32 sm:w-32 rounded-full bg-linear-to-br ${category.color} opacity-10 blur-2xl transition-all group-hover:scale-150 group-hover:opacity-20`}></div>
                  
                  <div className="relative space-y-3 sm:space-y-4">
                    <div className={`inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-linear-to-br ${category.color} shadow-lg`}>
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                        {category.name}
                      </h3>
                      <p className="text-sm text-slate-400">
                        {category.courses} courses available
                      </p>
                    </div>
                    <div className="pt-1 sm:pt-2">
                      <Link href="/courseListing" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                        Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative">
        <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-500/10 to-indigo-500/10 px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-semibold text-blue-400 border border-blue-500/20">
              <Zap className="h-3 w-3 sm:h-4 sm:w-4" />
              Why Choose EduSphere
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white px-4 sm:px-0">
              Everything You Need to{" "}
              <span className="bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Succeed
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-400 px-4 sm:px-0">
              Our platform is built with one goal: to help you achieve your professional aspirations through world-class education.
            </p>
          </div>

          <div className="grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-slate-900/50 backdrop-blur-sm p-6 sm:p-7 md:p-8 border border-slate-800 transition-all hover:-translate-y-2 hover:shadow-2xl hover:border-slate-700"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className={`absolute -right-16 -top-16 h-36 w-36 sm:h-40 sm:w-40 rounded-full bg-linear-to-br ${feature.gradient} opacity-5 blur-3xl transition-all group-hover:scale-150 group-hover:opacity-10`}></div>
                  
                  <div className="relative space-y-3 sm:space-y-4">
                    <div className={`inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-linear-to-br ${feature.gradient} shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed text-slate-400 text-sm">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative">
        <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-500/10 to-indigo-500/10 px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-semibold text-blue-400 border border-blue-500/20">
              <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
              Student Success Stories
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white px-4 sm:px-0">
              Loved by Professionals{" "}
              <span className="bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Worldwide
              </span>
            </h2>
          </div>

          <div className="grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <div
                key={testimonial.name}
                className="rounded-xl sm:rounded-2xl bg-slate-900/50 backdrop-blur-sm p-6 sm:p-7 md:p-8 border border-slate-800 transition-all hover:-translate-y-2 hover:shadow-2xl hover:border-slate-700"
              >
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-slate-800">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-indigo-600 text-white text-sm sm:text-base font-bold shadow-lg shrink-0">
                      {testimonial.avatar}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-white text-sm sm:text-base truncate">
                        {testimonial.name}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-400 truncate">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative">
        <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
            {/* Left - Premium Card */}
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-linear-to-br from-blue-600 via-indigo-600 to-purple-600 p-8 sm:p-10 md:p-12 shadow-2xl">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
                
                <div className="relative space-y-4 sm:space-y-6 text-white">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-semibold border border-white/30">
                    <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
                    Premium Features
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                    Comprehensive Learning Experience
                  </h3>
                  <p className="text-base sm:text-lg text-blue-50 leading-relaxed">
                    Join thousands of professionals who have accelerated their careers with our comprehensive platform.
                  </p>
                  <div className="flex items-center gap-4 pt-4 sm:pt-6">
                    <div className="h-px flex-1 bg-white/30"></div>
                    <Award className="h-8 w-8 sm:h-10 sm:w-10" />
                    <div className="h-px flex-1 bg-white/30"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
                    <div className="rounded-xl bg-white/10 backdrop-blur-sm p-3 sm:p-4 border border-white/20">
                      <p className="text-xl sm:text-2xl font-bold">1,200+</p>
                      <p className="text-xs sm:text-sm text-blue-100">Courses</p>
                    </div>
                    <div className="rounded-xl bg-white/10 backdrop-blur-sm p-3 sm:p-4 border border-white/20">
                      <p className="text-xl sm:text-2xl font-bold">50K+</p>
                      <p className="text-xs sm:text-sm text-blue-100">Students</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Benefits List */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  What's Included
                </h3>
                <p className="text-slate-400 text-sm sm:text-base">
                  Everything you need for a successful learning journey
                </p>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {benefits.map((benefit, i) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 sm:gap-4 rounded-xl bg-slate-900/50 backdrop-blur-sm p-4 sm:p-5 border border-slate-800 transition-all hover:bg-slate-800/50 hover:border-slate-700"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <div className="shrink-0 mt-0.5 sm:mt-1">
                      <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-linear-to-br from-green-500 to-emerald-600 shadow-lg">
                        <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                      </div>
                    </div>
                    <p className="text-slate-300 font-medium leading-relaxed text-sm sm:text-base">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative">
        <div className="absolute inset-0 bg-linear-to-b from-slate-950 to-slate-900"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-linear-to-br from-blue-600 via-indigo-600 to-purple-600 px-6 py-12 sm:px-12 sm:py-16 md:px-16 md:py-20 lg:px-24 shadow-2xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
            
            <div className="relative text-center space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-semibold text-white border border-white/30">
                <Zap className="h-3 w-3 sm:h-4 sm:w-4" />
                Limited Time Offer
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight px-2 sm:px-0">
                Start Your Learning Journey Today
              </h2>
              <p className="mx-auto max-w-2xl text-base sm:text-lg text-blue-50 leading-relaxed px-2 sm:px-0">
                Join 50,000+ professionals who are already advancing their careers. Get unlimited access to 1,200+ courses with a 7-day free trial.
              </p>
              <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:justify-center pt-2 sm:pt-4 px-2 sm:px-0">
                <Link
                  href="/auth/Register"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-blue-600 shadow-2xl transition-all hover:scale-105 hover:shadow-3xl"
                >
                  Start Free Trial
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
                <Link
                  href="/courseListing"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/50"
                >
                  <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                  Explore Courses
                </Link>
              </div>
              <p className="text-xs sm:text-sm text-blue-100 px-2 sm:px-0">
                No credit card required • Cancel anytime • 30-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}