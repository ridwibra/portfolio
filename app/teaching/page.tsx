import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teaching",
  description: "Explore lesson plans, teaching video, etc",
};

const TeachingPage = () => {
  return (
    <div className="px-2 flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900 text-black dark:text-white">
      <HeroSection />
      <AboutSection />
    </div>
  );
};

export default TeachingPage;
