"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ArrowUpRight, ExternalLink } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Nexus Nil Architect",
      description:
        "A modern and elegant architecture firm website featuring project showcases, team introductions, and contact functionality. Built with a focus on visual aesthetics and smooth user experience. The site includes a project gallery, about section, statistics display, and an integrated contact form with Google Maps.",
      tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
      github: "https://github.com/oznuryilmazz",
      demo: "https://nexusnilarch.com",
      desktopImage: "/images/nexus-desktop.jpeg",
      mobileImage: "/images/mobile-nexus.jpeg",
      hasRealImages: true,
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, shopping cart, payment integration, and admin dashboard. Built with modern technologies for optimal performance and user experience.",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
      github: "https://github.com/oznuryilmazz",
      demo: "#",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      hasRealImages: false,
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team workspaces, drag-and-drop functionality, and progress tracking. Designed for productivity and team collaboration.",
      tags: ["React", "Node.js", "Socket.io", "MongoDB", "Redux", "Material UI"],
      github: "https://github.com/oznuryilmazz",
      demo: "#",
      gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
      hasRealImages: false,
    },
    {
      title: "Social Media Dashboard",
      description:
        "An analytics dashboard for social media management with data visualization, scheduled posting, engagement metrics, and multi-platform support. Helps businesses track their online presence.",
      tags: ["Vue.js", "Express", "Chart.js", "Redis", "Docker", "AWS"],
      github: "https://github.com/oznuryilmazz",
      demo: "#",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      hasRealImages: false,
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-title text-sm" style={{ color: "var(--color-gray)" }}>
            ... /Projects ...
          </span>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.2 }}
            >
              {/* Project Info */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <h3 
                  className="font-mono text-2xl md:text-3xl mb-4"
                  style={{ color: "var(--color-foreground)" }}
                >
                  {project.title}
                </h3>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-mono rounded-full"
                      style={{ 
                        border: "1px solid var(--color-border)",
                        color: "var(--color-gray)"
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p 
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "var(--color-gray)" }}
                >
                  {project.description}
                </p>
                
                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all hover:opacity-80"
                    style={{ 
                      border: "1px solid var(--color-border)",
                      color: "var(--color-foreground)"
                    }}
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all hover:opacity-80"
                    style={{ 
                      backgroundColor: "var(--color-foreground)",
                      color: "var(--color-background)"
                    }}
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              {/* Project Images */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                {project.hasRealImages ? (
                  // Real Images Layout
                  <div className="grid grid-cols-3 gap-4">
                    {/* Desktop Image - Large */}
                    <motion.div
                      className="col-span-2 rounded-2xl overflow-hidden h-72 shadow-2xl"
                      style={{ border: "1px solid var(--color-border)" }}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={project.desktopImage} 
                        alt={`${project.title} Desktop`}
                        className="w-full h-full object-cover object-top"
                      />
                    </motion.div>
                    
                    {/* Mobile Image - Small */}
                    <motion.div
                      className="col-span-1 rounded-2xl overflow-hidden h-72 shadow-2xl"
                      style={{ border: "1px solid var(--color-border)" }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={project.mobileImage} 
                        alt={`${project.title} Mobile`}
                        className="w-full h-full object-cover object-top"
                      />
                    </motion.div>
                  </div>
                ) : (
                  // Gradient Placeholder Layout
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      className="rounded-2xl overflow-hidden h-64"
                      style={{ background: project.gradient }}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-full h-full bg-black/20 flex items-center justify-center p-4">
                        <div 
                          className="w-full h-full rounded-lg backdrop-blur-sm flex items-center justify-center"
                          style={{ 
                            backgroundColor: "rgba(0,0,0,0.3)",
                            border: "1px solid rgba(255,255,255,0.1)"
                          }}
                        >
                          <span className="font-mono text-white/50 text-sm">Desktop</span>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      className="rounded-2xl overflow-hidden h-48 mt-8"
                      style={{ background: project.gradient, filter: "hue-rotate(30deg)" }}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-full h-full bg-black/20 flex items-center justify-center p-4">
                        <div 
                          className="w-full h-full rounded-lg backdrop-blur-sm flex items-center justify-center"
                          style={{ 
                            backgroundColor: "rgba(0,0,0,0.3)",
                            border: "1px solid rgba(255,255,255,0.1)"
                          }}
                        >
                          <span className="font-mono text-white/50 text-sm">Mobile</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}
                
                {/* Decorative Ring */}
                <div className="absolute -top-8 -right-8 w-32 h-32 ring-decoration" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <a
            href="https://github.com/oznuryilmazz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all hover:opacity-80"
            style={{ 
              border: "1px solid var(--color-border)",
              color: "var(--color-foreground)"
            }}
          >
            <Github size={18} />
            <span>View more on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
