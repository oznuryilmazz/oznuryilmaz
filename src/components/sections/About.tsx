"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, Code2, Database, BarChart3, CreditCard, Wrench, Gauge, Palette } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedCategory, setExpandedCategory] = useState<string | null>("Frontend Technologies");

  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: Code2,
      skills: [
        "Next.js, React, TypeScript, JavaScript (ES6+)",
        "TanStack Query (React Query)",
        "Tailwind CSS, shadcn/ui, Radix UI, Framer Motion",
        "HTML5, CSS3, Responsive & Accessible Design (A11y)",
      ],
    },
    {
      title: "State & Data Management",
      icon: Database,
      skills: [
        "TanStack Query",
        "Zustand",
        "React Context API",
        "Preact Signals",
      ],
    },
    {
      title: "Analytics & Tracking",
      icon: BarChart3,
      skills: [
        "Google Tag Manager (GTM) – Custom Event Tracking",
        "Google Analytics",
        "Microsoft Clarity",
      ],
    },
    {
      title: "Payments & Integrations",
      icon: CreditCard,
      skills: [
        "Masterpass",
        "Payment Gateway Integrations (iyzico, Stripe, etc.)",
        "RESTful APIs",
        "Webhook Integrations",
      ],
    },
    {
      title: "Backend Technologies",
      icon: Database,
      skills: [
        ".NET, C#",
        "ASP.NET MVC",
        "Microsoft SQL Server",
        "RESTful API Development",
      ],
    },
    {
      title: "Tooling & Workflow",
      icon: Wrench,
      skills: [
        "Git, GitHub",
        "Jira, Agile / Scrum Methodologies",
        "Vite, Webpack",
        "ESLint, Prettier",
      ],
    },
    {
      title: "Performance & Optimization",
      icon: Gauge,
      skills: [
        "Lighthouse Audits",
        "Core Web Vitals",
        "Code Splitting",
        "Lazy Loading",
      ],
    },
    {
      title: "UI/UX Collaboration",
      icon: Palette,
      skills: [
        "Figma to Frontend Implementation",
        "Pixel-Perfect UI Development",
        "Responsive Design",
        "Accessibility (A11y)",
      ],
    },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-title text-sm" style={{ color: "var(--color-gray)" }}>
            ... /About me ...
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Introduction */}
            <div className="mb-8">
              <h2 
                className="font-mono text-2xl md:text-3xl mb-6"
                style={{ color: "var(--color-foreground)" }}
              >
                💡 About Me
              </h2>
              
              <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--color-gray)" }}>
                <p>
                  I&apos;m a results-driven <span className="italic-highlight">Full-Stack Developer</span> with a strong focus on building modern, user-centric web applications.
                </p>
                
                <p>
                  I have hands-on experience developing <span className="italic-highlight">Next.js and React projects</span> using TanStack Query, Tailwind CSS, and shadcn/ui, delivering scalable and high-performance interfaces.
                </p>
                
                <p>
                  I&apos;ve integrated <span className="italic-highlight">Masterpass and other payment infrastructures</span> to create secure and seamless checkout experiences.
                </p>
                
                <p>
                  My expertise also includes building <span className="italic-highlight">real-time analytics dashboards</span>, implementing custom GTM event tracking, and optimizing application performance through Lighthouse audits.
                </p>
                
                <p>
                  On the backend side, I have experience with <span className="italic-highlight">.NET and C# MVC</span>, allowing me to work across the full stack when needed.
                </p>
                
                <p>
                  I value <span className="italic-highlight">clean, maintainable code</span>, effective teamwork, and continuous learning to deliver impactful digital experiences.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              {/* Profile Image */}
              <div 
                className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden"
                style={{ 
                  border: "4px solid var(--color-border)",
                  backgroundColor: "var(--color-card)"
                }}
              >
                <img 
                  src="/images/45763003.png" 
                  alt="Öznur Yılmaz"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 ring-decoration" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 ring-decoration" />
              <div className="absolute top-1/2 -right-8 w-12 h-12 ring-decoration" />
            </div>
          </motion.div>
        </div>

        {/* Technical Skills Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 
            className="font-mono text-2xl md:text-3xl mb-8"
            style={{ color: "var(--color-foreground)" }}
          >
            ⚙️ Technical Skills
          </h3>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="rounded-xl overflow-hidden"
                style={{ border: "1px solid var(--color-border)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.05 }}
              >
                <button
                  onClick={() =>
                    setExpandedCategory(
                      expandedCategory === category.title ? null : category.title
                    )
                  }
                  className="w-full p-4 flex items-center justify-between transition-colors"
                  style={{ 
                    color: "var(--color-foreground)",
                    backgroundColor: expandedCategory === category.title ? "var(--color-card)" : "transparent"
                  }}
                >
                  <div className="flex items-center gap-3">
                    <category.icon size={18} style={{ color: "var(--color-gray)" }} />
                    <span className="font-medium text-sm">{category.title}</span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      expandedCategory === category.title ? "rotate-180" : ""
                    }`}
                    style={{ color: "var(--color-gray)" }}
                  />
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedCategory === category.title ? "auto" : 0,
                    opacity: expandedCategory === category.title ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div 
                    className="px-4 pb-4"
                    style={{ backgroundColor: "var(--color-card)" }}
                  >
                    <ul className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <li 
                          key={skillIndex}
                          className="text-sm flex items-start gap-2"
                          style={{ color: "var(--color-gray)" }}
                        >
                          <span 
                            className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                            style={{ backgroundColor: "var(--color-foreground)" }}
                          />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Skills Tags */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
        >
          <p className="text-sm mb-4" style={{ color: "var(--color-gray)" }}>
            Primary Technologies:
          </p>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "React", "TypeScript", "TanStack Query", "Tailwind CSS", "shadcn/ui", ".NET", "C#", "Git", "Figma"].map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1.5 text-xs font-mono rounded-full"
                style={{ 
                  backgroundColor: "var(--color-foreground)",
                  color: "var(--color-background)"
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
