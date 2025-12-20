"use client";

import { 
  Target, Users, Award, BookOpen, Globe, Heart, Zap, CheckCircle2,
  Linkedin, Twitter, Mail, ArrowRight, Sparkles, Star, Rocket, TrendingUp
} from "lucide-react";

export default function About() {
  const stats = [
    { icon: Users, label: "Active Students", value: "150,000+", color: "from-blue-500 to-cyan-400" },
    { icon: BookOpen, label: "Total Courses", value: "1,200+", color: "from-slate-600 to-slate-400" },
    { icon: Award, label: "Expert Instructors", value: "500+", color: "from-orange-500 to-amber-400" },
    { icon: Globe, label: "Countries Reached", value: "120+", color: "from-emerald-500 to-teal-400" },
  ];

  const values = [
    { icon: Target, title: "Our Mission", description: "To democratize education by making high-quality learning accessible to everyone, everywhere, at any time.", gradient: "from-blue-600 to-cyan-500" },
    { icon: Heart, title: "Our Vision", description: "A world where anyone can transform their life through learning, regardless of their background or location.", gradient: "from-slate-700 to-slate-500" },
    { icon: Zap, title: "Our Approach", description: "Combining cutting-edge technology with expert instruction to create engaging, effective learning experiences.", gradient: "from-orange-600 to-amber-500" },
  ];

  const team = [
    { name: "Sarah Anderson", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop", bio: "Former educator with 15+ years of experience in ed-tech innovation.", social: { linkedin: "#", twitter: "#", email: "sarah@edusphere.com" } },
    { name: "Michael Chen", role: "Chief Technology Officer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop", bio: "Tech veteran who led engineering teams at top Silicon Valley companies.", social: { linkedin: "#", twitter: "#", email: "michael@edusphere.com" } },
    { name: "Emily Rodriguez", role: "Head of Content", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop", bio: "Curriculum designer passionate about creating engaging learning experiences.", social: { linkedin: "#", twitter: "#", email: "emily@edusphere.com" } },
    { name: "David Kim", role: "Director of Student Success", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop", bio: "Dedicated to ensuring every student achieves their learning goals.", social: { linkedin: "#", twitter: "#", email: "david@edusphere.com" } },
  ];

  const achievements = [
    { text: "Awarded Best Online Learning Platform 2024", icon: Award },
    { text: "Featured in TechCrunch, Forbes, and Wired", icon: TrendingUp },
    { text: "98% student satisfaction rate", icon: Heart },
    { text: "Partnerships with 50+ leading universities", icon: Globe },
    { text: "Carbon-neutral operations since 2023", icon: Zap },
    { text: "Accessibility certified (WCAG 2.1 AAA)", icon: CheckCircle2 },
  ];

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-125 h-125 bg-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-125 h-125 bg-slate-600/30 rounded-full blur-3xl" style={{animation: 'pulse 4s ease-in-out infinite', animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-125 h-125 bg-orange-600/30 rounded-full blur-3xl" style={{animation: 'pulse 4s ease-in-out infinite', animationDelay: '2s'}}></div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="absolute inset-0 bg-linear-to-b from-blue-600/20 via-slate-600/10 to-transparent"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-600/30 to-slate-600/30 border border-blue-400/40 backdrop-blur-2xl mb-6 shadow-2xl shadow-blue-500/30 animate-pulse">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-semibold bg-linear-to-r from-blue-400 to-slate-400 bg-clip-text text-transparent">About EduSphere</span>
            </div>
            
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              <span className="block bg-linear-to-r from-white via-blue-100 to-slate-200 bg-clip-text text-transparent">Transforming Lives</span>
              <span className="block mt-2 bg-linear-to-r from-blue-500 via-cyan-400 to-orange-500 bg-clip-text text-transparent animate-pulse">Through Education</span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-base md:text-lg text-gray-300 leading-relaxed">
              We're on a mission to make learning <span className="text-blue-400 font-medium">accessible</span>, <span className="text-cyan-400 font-medium">engaging</span>, and <span className="text-orange-400 font-medium">effective</span> for everyone.
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-linear-to-r from-transparent to-blue-500"></div>
              <Rocket className="w-5 h-5 text-blue-400 animate-bounce" />
              <div className="h-px w-12 bg-linear-to-l from-transparent to-blue-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-gray-900 to-black border-2 border-gray-800 p-6 hover:border-gray-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className={`absolute inset-0 bg-linear-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className={`inline-flex mb-4 p-3 rounded-xl bg-linear-to-br ${stat.color} shadow-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <p className="mb-2 text-3xl md:text-4xl font-bold text-white tracking-tight">{stat.value}</p>
                  <p className="text-gray-400 font-medium text-sm">{stat.label}</p>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" style={{animation: 'spin 3s linear infinite'}} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Values Section */}
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">What Drives Us</h2>
          <p className="text-base text-gray-400">Our core values shape everything we do.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div key={idx} className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-gray-900 to-black border-2 border-gray-800 p-8 hover:border-gray-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
                <div className={`absolute inset-0 bg-linear-to-br ${value.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className={`inline-flex mb-5 p-4 rounded-xl bg-linear-to-br ${value.gradient} shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Story Section */}
      <div className="relative border-y border-gray-800">
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-3xl md:text-4xl font-bold bg-linear-to-r from-white to-gray-500 bg-clip-text text-transparent">Our Story</h2>
              <div className="space-y-4 text-base text-gray-400 leading-relaxed">
                <p>EduSphere was born in <span className="text-blue-400 font-medium">2018</span> from a simple observation: traditional education wasn't keeping pace with the rapidly changing world.</p>
                <p>Starting with just <span className="text-cyan-400 font-medium">10 courses</span> and <span className="text-cyan-400 font-medium">100 students</span>, we've grown into a global platform serving over <span className="text-orange-400 font-medium">150,000 learners</span> worldwide.</p>
                <p>Today, we partner with leading experts to offer practical, immediately applicable courses combining engaging content with hands-on projects.</p>
              </div>
            </div>
            <div className="relative group">
              <div className="relative aspect-square overflow-hidden rounded-2xl border-2 border-gray-800 shadow-2xl hover:border-gray-600 transition-all duration-500">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=800&fit=crop" alt="Team" className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 h-48 w-48 rounded-full bg-linear-to-br from-blue-600/40 to-cyan-600/40 blur-3xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-20 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">Meet Our Team</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-gray-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative overflow-hidden aspect-square">
                <img src={member.image} alt={member.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent"></div>
              </div>
              <div className="p-5">
                <h3 className="mb-1 text-lg font-bold text-white">{member.name}</h3>
                <p className="mb-3 text-xs font-semibold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{member.role}</p>
                <p className="mb-4 text-xs text-gray-400 leading-relaxed">{member.bio}</p>
                <div className="flex gap-2">
                  <a href={member.social.linkedin} className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-900 border border-gray-800 text-gray-400 transition-all hover:bg-blue-600 hover:text-white hover:scale-110 hover:rotate-12">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href={member.social.twitter} className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-900 border border-gray-800 text-gray-400 transition-all hover:bg-sky-500 hover:text-white hover:scale-110 hover:rotate-12">
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a href={`mailto:${member.social.email}`} className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-900 border border-gray-800 text-gray-400 transition-all hover:bg-slate-600 hover:text-white hover:scale-110 hover:rotate-12">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="relative border-y border-gray-800">
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-20 sm:px-6 lg:px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="mb-4 text-3xl md:text-4xl font-bold bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">Our Achievements</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, idx) => {
              const Icon = achievement.icon;
              return (
                <div key={idx} className="group flex items-start gap-4 rounded-xl bg-linear-to-br from-gray-900 to-black border-2 border-gray-800 p-5 hover:border-green-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-1">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-green-500 to-emerald-500 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm group-hover:text-white transition-colors">{achievement.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden py-20 md:py-24">
        <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-slate-800 to-orange-600"></div>
        
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-5 text-3xl md:text-4xl font-bold text-white leading-tight">Ready to Start Your<br />Learning Journey?</h2>
          <p className="mb-8 text-base md:text-lg text-white/90 max-w-2xl mx-auto">Join thousands of learners advancing their careers with EduSphere.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/courseListing" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-3 text-base font-semibold text-black shadow-2xl transition-all hover:scale-105 hover:shadow-white/40">
              Explore Courses
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
            </a>
            <a href="/contact" className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/10 backdrop-blur-xl px-8 py-3 text-base font-semibold text-white transition-all hover:bg-white hover:text-black">
              Get in Touch
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}