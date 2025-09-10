import { useEffect } from "react";
import Navbar from "@/components/ui/navbar";
import Hero from "@/components/ui/hero";
import Features from "@/components/ui/features";
import About from "@/components/ui/about";
import Footer from "@/components/ui/footer";

export default function Home() {
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = "AgriAI - Predict Crop Yields with AI Precision | Agricultural Intelligence Platform";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Leverage AI and data-driven insights to forecast crop yields using soil health, weather patterns, and agricultural data. Empower your farming decisions with AgriAI.');
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = 'Leverage AI and data-driven insights to forecast crop yields using soil health, weather patterns, and agricultural data. Empower your farming decisions with AgriAI.';
      document.head.appendChild(newMeta);
    }

    // Add Open Graph tags for social media sharing
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = 'AgriAI - Predict Crop Yields with AI Precision';
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.content = 'Leverage AI and data-driven insights to forecast crop yields using soil health, weather patterns, and agricultural data.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Footer />
    </div>
  );
}
