"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ArrowRight, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "/images/hero-image-1.png",
    "/images/hero-image-2.png",
    "/images/hero-image-3.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const socialLinks = [
    { icon: Github, label: "Github", href: "https://github.com/oznuryilmazz" },
    { icon: Linkedin, label: "Linkedin", href: "https://www.linkedin.com/in/oznuryilmazz/" },
    { icon: Mail, label: "E-mail", href: "mailto:yilmazoznur53@gmail.com" },
    { icon: Phone, label: "Phone", href: "tel:+905308827753" },
  ];

  const articles = [
    {
      title: "Modern React Patterns & Best Practices",
      description: "A comprehensive guide to writing clean, maintainable React code using modern patterns like hooks, context, and composition.",
    },
    {
      title: "Building Scalable APIs with Node.js",
      description: "Learn how to design and implement RESTful APIs that can handle high traffic and complex business logic.",
    },
    {
      title: "TypeScript Tips for Better Code Quality",
      description: "Essential TypeScript techniques to catch bugs early and improve your development experience.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + articles.length) % articles.length);
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left Side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 
              className="font-mono text-5xl md:text-7xl lg:text-8xl font-normal leading-tight mb-8"
              style={{ color: "var(--color-foreground)" }}
            >
              <span className="block">Full-Stack</span>
              <span className="block text-right lg:text-left lg:ml-16">Developer</span>
            </h1>
            
            <p className="text-lg max-w-md mb-4" style={{ color: "var(--color-gray)" }}>
              I&apos;m a results-driven <span className="italic-highlight">Full-Stack Developer</span> with a strong focus on building{" "}
              <span className="italic-highlight">modern, user-centric web applications</span>.
            </p>
            
            <p className="text-sm max-w-md mb-8" style={{ color: "var(--color-gray)" }}>
              Frontend-focused with expertise in Next.js, React, and TypeScript. Backend experience with .NET and C#.
            </p>

            {/* CTA Button */}
            <motion.a
              href="#projects"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full transition-all group"
              style={{ 
                border: "1px solid var(--color-border)",
                color: "var(--color-foreground)"
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Projects</span>
              <span 
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
                style={{ 
                  backgroundColor: "var(--color-foreground)",
                  color: "var(--color-background)"
                }}
              >
                <ArrowRight size={16} />
              </span>
            </motion.a>
          </motion.div>

          {/* Right Side - Animated Images */}
          <motion.div
            className="hidden lg:flex justify-center items-center relative"
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-[400px] h-[400px]">
              {heroImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{
                    opacity: index === currentImageIndex ? 1 : 0,
                    scale: index === currentImageIndex ? 1 : 0.8,
                    rotate: index === currentImageIndex ? 0 : -10,
                    y: index === currentImageIndex ? [0, -10, 0] : 0,
                    zIndex: index === currentImageIndex ? 10 : 1,
                  }}
                  transition={{
                    opacity: { duration: 0.6, ease: "easeInOut" },
                    scale: { duration: 0.6, ease: "easeInOut" },
                    rotate: { duration: 0.6, ease: "easeInOut" },
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <motion.div
                    className="relative w-full h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={image}
                      alt={`Hero image ${index + 1}`}
                      fill
                      className="object-contain"
                      priority={index === 0}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          className="flex flex-wrap gap-3 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="pill-button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <social.icon size={16} />
              <span>{social.label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Articles Carousel */}

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="relative">
            <div className="flex gap-6 overflow-hidden">
              {articles.map((article, index) => (
                <motion.div
                  key={index}
                  className={`min-w-[300px] md:min-w-[400px] p-6 rounded-2xl transition-all ${
                    index === currentSlide ? "opacity-100" : "opacity-40"
                  }`}
                  style={{
                    backgroundColor: "var(--color-card)",
                    border: "1px solid var(--color-border)"
                  }}
                  animate={{
                    x: -currentSlide * 420,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div 
                    className="w-full h-48 rounded-xl mb-4 overflow-hidden"
                    style={{ backgroundColor: "var(--color-gray-dark)" }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-blue-600/50 to-purple-600/50" />
                  </div>
                  
                  <h3 className="font-mono text-lg mb-2" style={{ color: "var(--color-foreground)" }}>
                    {article.title}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: "var(--color-gray)" }}>
                    {article.description}
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <a
                      href="#"
                      className="px-4 py-2 rounded-full text-sm transition-all"
                      style={{ 
                        border: "1px solid var(--color-border)",
                        color: "var(--color-foreground)"
                      }}
                    >
                      Read more
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
                      style={{ 
                        backgroundColor: "var(--color-foreground)",
                        color: "var(--color-background)"
                      }}
                    >
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                style={{ 
                  border: "1px solid var(--color-border)",
                  color: "var(--color-foreground)"
                }}
              >
                <ArrowLeft size={16} />
              </button>
              
              <div className="flex gap-2">
                {articles.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide ? "w-6" : "w-2"
                    }`}
                    style={{
                      backgroundColor: index === currentSlide 
                        ? "var(--color-foreground)" 
                        : "var(--color-gray-dark)"
                    }}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                style={{ 
                  border: "1px solid var(--color-border)",
                  color: "var(--color-foreground)"
                }}
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;
