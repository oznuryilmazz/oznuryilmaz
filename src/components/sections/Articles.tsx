"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const Articles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const articles = [
    {
      number: "1",
      title: "Modern React Patterns You Should Know",
      description:
        "Discover the latest React patterns including compound components, render props, custom hooks, and more to write cleaner, more maintainable code.",
      date: "2024",
    },
    {
      number: "2",
      title: "Building Scalable APIs with Node.js",
      description:
        "A comprehensive guide to designing RESTful APIs that can handle thousands of requests with proper error handling, validation, and security.",
      date: "2024",
    },
    {
      number: "3",
      title: "TypeScript Best Practices for Large Projects",
      description:
        "Essential TypeScript patterns and configurations for maintaining type safety and developer productivity in enterprise applications.",
      date: "2023",
    },
    {
      number: "4",
      title: "Optimizing Next.js Applications",
      description:
        "Learn advanced techniques for improving performance in Next.js apps including image optimization, code splitting, and caching strategies.",
      date: "2023",
    },
  ];

  return (
    <section id="articles" className="py-24 px-6 md:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="font-mono text-5xl md:text-7xl italic"
            style={{ color: "var(--color-foreground)" }}
          >
            Articles
          </h2>
          <p className="mt-4 text-sm" style={{ color: "var(--color-gray)" }}>
            Thoughts, tutorials, and insights about web development
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl transition-colors group cursor-pointer"
              style={{ 
                border: "1px solid var(--color-border)",
                backgroundColor: "transparent"
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-sm"
                  style={{ 
                    border: "1px solid var(--color-border)",
                    color: "var(--color-gray)"
                  }}
                >
                  {article.number}
                </div>
                <span className="text-xs font-mono" style={{ color: "var(--color-gray)" }}>
                  {article.date}
                </span>
              </div>

              <h3 
                className="font-mono text-lg mb-3 transition-colors"
                style={{ color: "var(--color-foreground)" }}
              >
                {article.title}
              </h3>
              <p 
                className="text-sm mb-6 leading-relaxed"
                style={{ color: "var(--color-gray)" }}
              >
                {article.description}
              </p>
              
              <div className="flex items-center gap-3">
                <span
                  className="px-4 py-2 rounded-full text-sm transition-all"
                  style={{ 
                    border: "1px solid var(--color-border)",
                    color: "var(--color-foreground)"
                  }}
                >
                  Read more
                </span>
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
                  style={{ 
                    backgroundColor: "var(--color-foreground)",
                    color: "var(--color-background)"
                  }}
                >
                  <ArrowRight size={14} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
