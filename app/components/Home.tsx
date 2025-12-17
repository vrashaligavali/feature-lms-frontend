import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Award, Users, BookOpen, TrendingUp, Star, Sparkles, Zap, Target } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Users,
      title: "Expert Instructors",
      desc: "Learn from industry leaders with proven experience and live mentorship sessions.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      desc: "On-demand modules, mobile-friendly access, and schedules that fit your lifestyle.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "Verified Certificates",
      desc: "Earn credentials backed by rigorous assessments to showcase your achievements.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const stats = [
    { label: "Active Learners", value: "18k+", desc: "engaged monthly", icon: Users },
    { label: "Course Library", value: "650+", desc: "expert modules", icon: BookOpen },
    { label: "Success Rate", value: "92%", desc: "career growth", icon: TrendingUp },
    { label: "Avg Rating", value: "4.8", desc: "from learners", icon: Star },
  ];

  const benefits = [
    "Lifetime access to all course materials",
    "Certificate of completion for every course",
    "24/7 community support and mentorship",
    "Mobile app for learning on the go",
    "Regular content updates and new courses",
    "Money-back satisfaction guarantee",
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        {/* Background Decorations */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-linear-to-br from-blue-400/20 to-indigo-400/20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-linear-to-tr from-purple-400/20 to-pink-400/20 blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-50 to-indigo-50 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm dark:from-blue-900/30 dark:to-indigo-900/30 dark:text-blue-400">
                <Sparkles className="h-4 w-4" />
                <span>Learn Without Limits</span>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
                Build Skills with a{" "}
                <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Modern LMS
                </span>
              </h1>

              <p className="text-lg leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
                EduSphere empowers teams and individuals to master new skills with expert-led courses, 
                flexible schedules, and industry-recognized credentials designed for real career growth.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 lg:justify-start justify-center">
                <Link
                  href="/CourseDetails"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-blue-500/30 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40"
                >
                  Explore Courses
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/auth/register"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-800 shadow-lg transition-all hover:border-slate-300 hover:bg-slate-50 hover:scale-105 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-700"
                >
                  Get Started Free
                  <Zap className="h-5 w-5 transition-transform group-hover:scale-110" />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 lg:justify-start pt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  4.8/5 from 12,000+ reviews
                </span>
              </div>
            </div>

            {/* Right Content - Stats Cards */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className={`group relative overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all hover:scale-105 hover:shadow-2xl dark:bg-slate-800 ${
                        i === 2 ? 'col-span-2' : ''
                      }`}
                    >
                      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-linear-to-br from-blue-500/10 to-indigo-500/10 blur-2xl transition-all group-hover:scale-150"></div>
                      
                      <div className="relative space-y-3">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 shadow-lg">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                            {stat.label}
                          </p>
                          <p className="text-3xl font-bold text-slate-900 dark:text-white">
                            {stat.value}
                          </p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            {stat.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 animate-bounce">
                <div className="rounded-full bg-linear-to-br from-green-500 to-emerald-600 p-3 shadow-2xl shadow-green-500/50">
                  <Target className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-linear-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              Why Learners Choose{" "}
              <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                EduSphere
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              Designed for professionals seeking credibility, flexibility, and measurable impact on their careers.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-linear-to-br ${feature.gradient} opacity-10 blur-2xl transition-all group-hover:scale-150 group-hover:opacity-20`}></div>
                  
                  <div className="relative space-y-4">
                    <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br ${feature.gradient} shadow-lg`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left - Image/Visual */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-500 to-indigo-600 p-12 shadow-2xl">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
                
                <div className="relative space-y-6 text-white">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold">
                    <Sparkles className="h-4 w-4" />
                    Premium Features
                  </div>
                  <h3 className="text-3xl font-bold">
                    Everything You Need to Succeed
                  </h3>
                  <p className="text-lg text-blue-50">
                    Join thousands of learners who have transformed their careers with our comprehensive learning platform.
                  </p>
                  <div className="flex items-center gap-4 pt-4">
                    <div className="h-px flex-1 bg-white/30"></div>
                    <Award className="h-8 w-8" />
                    <div className="h-px flex-1 bg-white/30"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Benefits List */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                What's Included
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md dark:bg-slate-800"
                  >
                    <div className="shrink-0">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-br from-green-500 to-emerald-600">
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 font-medium">
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
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-600 via-indigo-600 to-purple-600 px-8 py-16 shadow-2xl sm:px-16 lg:px-24">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
            
            <div className="relative text-center space-y-8">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                Ready to Start Your Learning Journey?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-blue-50">
                Join 18,000+ active learners and start building the skills that matter. Get started today with a 7-day free trial.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/auth/register"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
                >
                  Start Free Trial
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/courseDetails"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  Browse Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}