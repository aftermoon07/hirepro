"use client";
import React, { useEffect } from "react";
import Header from "@/components/header";
import JobForm from "../../components/PostJob/jobForm";
import { useGlobalContext } from "../../context/globalContext";
import { useRouter } from "next/navigation";
import Footer from "@/components/footer";

const PostJobs = () => {
  const { isAuthenticated, loading } = useGlobalContext();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("http://localhost:7895/login");
    }
  }, [isAuthenticated, loading]);

  if (loading) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground">Post a Job</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Fill in the details below to list a new role.
            </p>
          </div>
          <div className="bg-white rounded-lg border border-border p-6 md:p-8">
            <JobForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostJobs;