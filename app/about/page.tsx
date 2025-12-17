"use client";

import { 
  Target, 
  Users, 
  Award, 
  BookOpen, 
  TrendingUp, 
  Globe, 
  Heart, 
  Zap,
  CheckCircle2,
  Linkedin,
  Twitter,
  Mail
} from "lucide-react";

export default function About() {
  const stats = [
    { icon: Users, label: "Active Students", value: "150,000+" },
    { icon: BookOpen, label: "Total Courses", value: "1,200+" },
    { icon: Award, label: "Expert Instructors", value: "500+" },
    { icon: Globe, label: "Countries Reached", value: "120+" },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To democratize education by making high-quality learning accessible to everyone, everywhere, at any time.",
    },
    {
      icon: Heart,
      title: "Our Vision",
      description: "A world where anyone can transform their life through learning, regardless of their background or location.",
    },
    {
      icon: Zap,
      title: "Our Approach",
      description: "Combining cutting-edge technology with expert instruction to create engaging, effective learning experiences.",
    },
  ];

  const team = [
    {
      name: "Sarah Anderson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "Former educator with 15+ years of experience in ed-tech innovation.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@edusphere.com",
      },
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Tech veteran who led engineering teams at top Silicon Valley companies.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@edusphere.com",
      },
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Content",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Curriculum designer passionate about creating engaging learning experiences.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@edusphere.com",
      },
    },
    {
      name: "David Kim",
      role: "Director of Student Success",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      bio: "Dedicated to ensuring every student achieves their learning goals.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@edusphere.com",
      },
    },
  ];

  const achievements = [
    "Awarded Best Online Learning Platform 2024",
    "Featured in TechCrunch, Forbes, and Wired",
    "98% student satisfaction rate",
    "Partnerships with 50+ leading universities",
    "Carbon-neutral operations since 2023",
    "Accessibility certified (WCAG 2.1 AAA)",
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-linear-to-br from-indigo-600 via-blue-600 to-purple-700 py-20 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJjMC0xLjEtLjktMi0yLTJ6bTAgNGMxLjEgMCAyLS45IDItMnYtMmgtMnYyaC0ydjJoMnptLTItMnYtMmgydi0yaC0ydjJ6bS0yLTJ2MmgtMnYyaDJ2LTJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              About EduSphere
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-blue-100 sm:text-2xl">
              We're on a mission to transform lives through education, making learning accessible, engaging, and effective for everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="text-center"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-600 to-purple-600 shadow-lg">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <p className="mb-2 text-4xl font-bold text-slate-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mission, Vision, Approach */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
            What Drives Us
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Our core values shape everything we do and guide us in creating the best learning experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div
                key={idx}
                className="group rounded-2xl bg-white p-8 shadow-lg transition-all hover:scale-105 hover:shadow-xl dark:bg-slate-900"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-linear-to-br from-indigo-600 to-purple-600 shadow-lg transition-all group-hover:shadow-xl">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-white dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-slate-900 dark:text-white">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-slate-600 dark:text-slate-400">
                <p>
                  EduSphere was born from a simple observation: traditional education wasn't keeping pace with the rapidly changing world. In 2018, our founder Sarah Anderson, a veteran educator, noticed that many talented individuals were held back not by lack of ability, but by lack of access to quality education.
                </p>
                <p>
                  Starting with just 10 courses and 100 students, we've grown into a global platform serving over 150,000 learners worldwide. But our mission remains the same: to break down barriers to education and empower people to achieve their full potential.
                </p>
                <p>
                  Today, we partner with leading industry experts and universities to offer courses that are not just theoretical, but practical and immediately applicable. Every course is designed with the learner in mind, combining engaging content with hands-on projects and supportive community.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=800&fit=crop"
                  alt="Team collaboration"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-2xl bg-linear-to-br from-indigo-600 to-purple-600 opacity-20"></div>
              <div className="absolute -left-6 -top-6 h-32 w-32 rounded-2xl bg-linear-to-br from-blue-600 to-indigo-600 opacity-20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
            Meet Our Team
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Passionate educators, technologists, and innovators dedicated to transforming education.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-white p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl dark:bg-slate-900"
            >
              <div className="mb-4 overflow-hidden rounded-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold text-slate-900 dark:text-white">
                {member.name}
              </h3>
              <p className="mb-3 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                {member.role}
              </p>
              <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
                {member.bio}
              </p>
              <div className="flex gap-3">
                <a
                  href={member.social.linkedin}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors hover:bg-indigo-600 hover:text-white dark:bg-slate-800 dark:text-slate-400"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={member.social.twitter}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors hover:bg-indigo-600 hover:text-white dark:bg-slate-800 dark:text-slate-400"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${member.social.email}`}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors hover:bg-indigo-600 hover:text-white dark:bg-slate-800 dark:text-slate-400"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-white dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
              Our Achievements
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              Recognition and milestones that motivate us to keep improving.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 rounded-xl bg-slate-50 p-6 dark:bg-slate-800"
              >
                <CheckCircle2 className="h-6 w-6 shrink-0 text-green-500" />
                <p className="text-slate-700 dark:text-slate-300">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-linear-to-r from-indigo-600 to-purple-600 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Join Us in Transforming Education
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            Whether you're a learner, instructor, or partner, there's a place for you at EduSphere.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/CourseListing"
              className="inline-block rounded-xl bg-white px-8 py-4 font-semibold text-indigo-600 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
            >
              Explore Courses
            </a>
            <a
              href="/contact"
              className="inline-block rounded-xl border-2 border-white px-8 py-4 font-semibold text-white transition-all hover:bg-white hover:text-indigo-600"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}