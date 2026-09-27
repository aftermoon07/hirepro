"use client";
import Link from "next/link";
import { useGlobalContext } from "@/context/globalContext";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Briefcase, Users, Mic, ArrowRight, Search, Star } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Find Work",
    description:
      "Browse open roles across industries. Filter by type, location, salary, and skills to find positions that match you.",
    href: "/findwork",
    cta: "Browse jobs",
  },
  {
    icon: Briefcase,
    title: "Post a Job",
    description:
      "List a role and reach candidates directly. Add skills, tags, location, and salary to attract the right applicants.",
    href: "/post",
    cta: "Post a role",
  },
  {
    icon: Mic,
    title: "Interview Prep",
    description:
      "Practice with AI-generated mock interviews tailored to the role. Record your answers and get instant feedback.",
    href: "/interview",
    cta: "Start preparing",
  },
];

export default function Home() {
  const { isAuthenticated } = useGlobalContext();

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              The job platform built for modern hiring.
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Browse open roles, post positions, and prepare for interviews —
              all in one place. HirePro keeps hiring straightforward.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/findwork"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Browse open roles
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/post"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-white px-5 py-2.5 text-sm font-medium text-foreground hover:bg-accent transition-colors"
              >
                Post a job
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h2 className="text-2xl font-bold text-foreground mb-10">
            Everything you need
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, description, href, cta }) => (
              <div
                key={title}
                className="bg-white rounded-lg border border-border p-6 flex flex-col gap-4 hover:shadow-sm transition-shadow"
              >
                <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center">
                  <Icon className="h-4.5 w-4.5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
                <Link
                  href={href}
                  className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  {cta}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-1">
              Ready to get started?
            </h2>
            <p className="text-sm text-muted-foreground">
              Find your next opportunity or hire the right candidate.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link
              href="/findwork"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Find work
            </Link>
            <Link
              href="/post"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors"
            >
              Post a job
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
