"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Projects from "@/components/sections/Projects";
import Articles from "@/components/sections/Articles";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Decorative Rings */}
      <div 
        className="fixed top-20 right-20 w-[400px] h-[400px] ring-decoration pointer-events-none" 
      />
      <div 
        className="fixed bottom-40 left-10 w-[300px] h-[300px] ring-decoration pointer-events-none" 
      />
      <div 
        className="fixed top-1/2 right-1/4 w-[200px] h-[200px] ring-decoration pointer-events-none" 
      />

      <Navigation />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Work />
        <Projects />
        <Articles />
        <Contact />
      </div>
    </motion.main>
  );
}
