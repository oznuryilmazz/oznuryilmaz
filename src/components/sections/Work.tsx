"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      period: "Şub 2024 - Halen",
      duration: "1 yıl 11 ay",
      company: "Alışgidiş.com",
      role: "Senior Frontend Developer",
      type: "Tam zamanlı · Hibrit",
      location: "Istanbul, Turkey",
      tech: "Next.js / TanStack Query / Tailwind CSS / shadcn/ui",
      responsibilities: [
        "Integrated Masterpass and payment infrastructure for secure and seamless checkout experiences.",
        "Developed and maintained three production-grade Next.js applications using TanStack Query, Tailwind CSS, and shadcn/ui.",
        "Built and delivered a complete analytics dashboard from scratch, implementing real-time data visualizations and reports.",
        "Implemented custom event tracking via Google Tag Manager (GTM) — responsible for defining the data layer and ensuring accurate analytics.",
        "Worked on a large-scale e-commerce platform as part of a 6-person frontend team, focusing on scalability and maintainability.",
        "Collaborated with UX/UI designers to translate Figma designs into responsive, accessible, and pixel-perfect components.",
        "Utilized TanStack Query for advanced caching and efficient data fetching strategies across multiple projects.",
        "Contributed to overall code quality through code reviews, consistent component architecture, and reusable design patterns.",
        "Followed Agile workflows, participating in daily stand-ups, sprint planning, and issue tracking via Jira.",
        "Optimized performance and accessibility, achieving high Lighthouse scores through continuous audits and best practices.",
      ],
      skills: ["React.js", "Next.js", "TanStack Query", "shadcn/ui", "Tailwind CSS", "Google Tag Manager", "Figma", "Jira"],
    },
    {
      period: "Tem 2022 - Şub 2024",
      duration: "1 yıl 8 ay",
      company: "Frostline Games",
      role: "Frontend Developer",
      type: "Tam zamanlı · Ofisten",
      location: "İstanbul, Türkiye",
      tech: "React.js / .NET / MSSQL",
      responsibilities: [
        "New game support ticket system (Dashboard & Website) has been developed with RESTful APIs, React Hooks, Context and React design patterns.",
        "Played a key role in modernising components of an React.js-based dashboard application using HTML, CSS, and JavaScript.",
        "Delivered an array of features leveraging React.js/Javascript, React Hooks, Context, and other React.js design patterns, enhancing the application's usability and efficiency.",
        "In the React.js project, Auth functions and pages were developed to log in to the system. While doing this, RESTful API's, Bearer and JWT Token were used.",
        "Started to develop MOBA game dashboard and website.",
        "Developed Game & Website Backend with .NET and database is MSSQL.",
        "Called RESTful API's with axios library in the frontend.",
        "Using Git in professional workspace, including branching and merging strategies.",
      ],
      skills: ["React.js", "JavaScript", "ASP.NET MVC", ".NET", "Microsoft SQL Server", "REST APIs", "CSS", "HTML"],
    },
    {
      period: "Oca 2021 - Tem 2022",
      duration: "1 yıl 7 ay",
      company: "Marmara Üniversitesi",
      role: "Software Engineer Intern",
      type: "Yarı zamanlı · Uzaktan",
      location: "İstanbul, Türkiye",
      tech: "JavaScript / ASP.NET MVC / HTML / CSS",
      responsibilities: [
        "New university website (Dashboard & Website) has been developed with using HTML, CSS, and JavaScript.",
        "Bugs are fixed in main website and javascript animations added to main website.",
        "Database design patterns is developed and documented with well code and clean structure.",
        "A system that scores how original the documentation prepared by students is after uploading it to the system was developed with ASP .NET MVC.",
        "Using Git in professional workspace, including branching and merging strategies.",
      ],
      skills: ["JavaScript", "CSS", "HTML", "Visual Studio", "ASP.NET MVC", "Git"],
    },
    {
      period: "Ara 2021 - Şub 2022",
      duration: "3 ay",
      company: "TrustFi Network",
      role: "UI Designer",
      type: "Tam zamanlı · Uzaktan",
      location: "Hong Kong SAR, China",
      tech: "UI/UX Design / Social Media",
      responsibilities: [
        "Created social media posts about crypto coins.",
        "Created UI design of one of crypto game website.",
        "Managed social media channels like Telegram.",
      ],
      skills: ["User Interface Design", "Team Management", "Social Media Graphic Design"],
    },
    {
      period: "May 2021 - Tem 2021",
      duration: "3 ay",
      company: "echonos",
      role: "Junior Software Developer",
      type: "Tam zamanlı",
      location: "",
      tech: "Angular / .NET / Azure",
      responsibilities: [
        "Played a key role in modernising components of an Angular-based dashboard application using HTML, CSS, and JavaScript.",
        "Bugs are fixed in dashboard written by Angular.",
        "Bugs are fixed in backend written by .NET.",
        "Created dashboard analyse documentation about new features and usability and efficiency.",
        "Using Git in professional workspace, including branching and merging strategies.",
      ],
      skills: ["AngularJS", "ASP.NET MVC", ".NET Core", "Azure DevOps", "Angular Material", "Front-End Design"],
    },
    {
      period: "Eyl 2019 - Oca 2021",
      duration: "1 yıl 5 ay",
      company: "El Yapım Reklam ve Danışmanlık Ajansı",
      role: "Web Designer",
      type: "Tam zamanlı",
      location: "",
      tech: "WordPress / PHP / MySQL",
      responsibilities: [
        "Have developed using PHP, WordPress, CSS, HTML 4 E-commerce website - 5 Software - 30+ Business website.",
        "Learning Adobe apps and done many social media posts.",
        "Used WordPress Elementor in most for editor.",
        "Connected website and database (MySQL).",
      ],
      skills: ["WordPress", "PHP", "MySQL", "Adobe Photoshop", "Adobe Illustrator", "cPanel", "UI/UX"],
    },
    {
      period: "Haz 2017 - Eyl 2017",
      duration: "4 ay",
      company: "Acarnet",
      role: "Web Designer",
      type: "Stajyer",
      location: "İstanbul, Türkiye",
      tech: "PHP / HTML / SQL / CSS",
      responsibilities: [
        "Have learned PHP, HTML, SQL, CSS scripting languages.",
        "First professional experience in web development.",
      ],
      skills: ["PHP", "HTML", "SQL", "CSS"],
    },
  ];

  // Calculate total experience
  const totalYears = "5+";

  return (
    <section className="py-24 px-6 md:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-right mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="font-mono text-5xl md:text-7xl"
            style={{ color: "var(--color-foreground)" }}
          >
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="py-8 transition-colors"
              style={{ borderTop: "1px solid var(--color-border)" }}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              {/* Header Row */}
              <div className="grid grid-cols-12 gap-4 mb-3">
                {/* Period */}
                <div className="col-span-12 md:col-span-2">
                  <p className="font-mono text-sm" style={{ color: "var(--color-foreground)" }}>
                    {exp.period}
                  </p>
                  <p className="text-xs" style={{ color: "var(--color-gray)" }}>
                    {exp.duration}
                  </p>
                </div>
                
                {/* Company */}
                <div className="col-span-12 md:col-span-3">
                  <p className="font-medium" style={{ color: "var(--color-foreground)" }}>
                    {exp.company}
                  </p>
                  <p className="text-xs" style={{ color: "var(--color-gray)" }}>
                    {exp.type}
                  </p>
                  {exp.location && (
                    <p className="text-xs" style={{ color: "var(--color-gray)" }}>
                      {exp.location}
                    </p>
                  )}
                </div>
                
                {/* Role & Tech */}
                <div className="col-span-12 md:col-span-7">
                  <p className="font-mono text-sm mb-1" style={{ color: "var(--color-foreground)" }}>
                    {exp.role}
                  </p>
                  <p className="text-xs" style={{ color: "var(--color-gray)" }}>
                    {exp.tech}
                  </p>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="md:ml-[16.666%] mb-4">
                <ul className="space-y-2">
                  {exp.responsibilities.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className="text-sm flex items-start gap-2"
                      style={{ color: "var(--color-gray)" }}
                    >
                      <span 
                        className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{ backgroundColor: "var(--color-foreground)" }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="md:ml-[16.666%] flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 text-xs font-mono rounded"
                    style={{ 
                      backgroundColor: "var(--color-card)",
                      color: "var(--color-gray)",
                      border: "1px solid var(--color-border)"
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total Experience */}
        <motion.div
          className="mt-12 text-right"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <p className="text-sm" style={{ color: "var(--color-gray)" }}>Toplam deneyim</p>
          <p className="font-mono text-2xl" style={{ color: "var(--color-foreground)" }}>
            <span className="italic">{totalYears} yıl</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
