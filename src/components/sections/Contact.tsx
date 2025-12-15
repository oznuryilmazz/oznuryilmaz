"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Articles", href: "#articles" },
  ];

  const socialLinks = [
    { icon: Github, label: "Github", href: "https://github.com/oznuryilmazz" },
    { icon: Linkedin, label: "Linkedin", href: "https://www.linkedin.com/in/oznuryilmazz/" },
    { icon: Mail, label: "E-mail", href: "mailto:yilmazoznur53@gmail.com" },
    { icon: Phone, label: "Phone", href: "tel:+905308827753" },
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "yilmazoznur53@gmail.com", href: "mailto:yilmazoznur53@gmail.com" },
    { icon: Phone, label: "Phone", value: "+90 530 882 77 53", href: "tel:+905308827753" },
    { icon: MapPin, label: "Location", value: "Istanbul, Turkey", href: null },
  ];

  return (
    <section 
      id="contact" 
      className="py-24 px-6 md:px-12" 
      style={{ borderTop: "1px solid var(--color-border)" }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-title text-sm" style={{ color: "var(--color-gray)" }}>
            ... /Contacts ...
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Navigation & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Navigation */}
            <div className="flex gap-6 mb-12">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm underline-animation transition-colors"
                  style={{ color: "var(--color-gray)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mb-12 space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <info.icon size={18} style={{ color: "var(--color-gray)" }} />
                  {info.href ? (
                    <a 
                      href={info.href}
                      className="transition-colors hover:opacity-80"
                      style={{ color: "var(--color-foreground)" }}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span style={{ color: "var(--color-foreground)" }}>{info.value}</span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Site Info */}
            <div className="mb-12">
              <h3 
                className="font-mono text-lg mb-4"
                style={{ color: "var(--color-foreground)" }}
              >
                Site
              </h3>
              <p className="text-sm" style={{ color: "var(--color-gray)" }}>
                Designed & Built by <span style={{ color: "var(--color-foreground)" }}>Öznur Yılmaz</span>
              </p>
              <p className="text-sm" style={{ color: "var(--color-gray)" }}>
                Powered by <span style={{ color: "var(--color-foreground)" }}>Next.js</span> &{" "}
                <span style={{ color: "var(--color-foreground)" }}>Tailwind CSS</span>
              </p>
            </div>

            {/* CTA */}

            {/* <div 
              className="p-6 rounded-2xl"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <p className="text-sm mb-4" style={{ color: "var(--color-gray)" }}>
                Interested in working together? Let&apos;s connect!
              </p>
              <a
                href="mailto:yilmazoznur53@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all hover:opacity-80"
                style={{ 
                  backgroundColor: "var(--color-foreground)",
                  color: "var(--color-background)"
                }}
              >
                <Mail size={16} />
                <span>Get in Touch</span>
              </a>
            </div> */}
          </motion.div>

          {/* Right Side - Name & Social */}
          <motion.div
            className="text-right"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Big Name */}
            <div className="mb-8">
              <p className="text-sm mb-2" style={{ color: "var(--color-gray)" }}>
                Full-Stack Developer
              </p>
              <h2 
                className="font-mono text-5xl md:text-7xl lg:text-8xl leading-tight"
                style={{ color: "var(--color-foreground)" }}
              >
                <span className="block">Öznur</span>
                <span className="block italic">Yılmaz</span>
              </h2>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-end gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-button"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <social.icon size={16} />
                  <span>{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-16 pt-8 text-center"
          style={{ borderTop: "1px solid var(--color-border)" }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <p className="text-sm" style={{ color: "var(--color-gray)" }}>
            © {new Date().getFullYear()} Öznur Yılmaz. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
