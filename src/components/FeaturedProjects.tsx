"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const projects = [
  {
    category: "E-Commerce",
    name: "ShopFlow",
    description:
      "A high-performance e-commerce platform with real-time inventory management and AI-powered recommendations.",
    gradient: "from-blue-600 to-cyan-400",
    emoji: "🛒",
    link: "https://www.pmsoriginal.com",
  },
  {
    category: "SaaS",
    name: "CloudSync Pro",
    description:
      "Enterprise-grade cloud collaboration suite featuring end-to-end encryption and seamless team workflows.",
    gradient: "from-purple-600 to-pink-400",
    emoji: "☁️",
  },
  {
    category: "Fintech",
    name: "PayStream",
    description:
      "Next-generation payment processing platform with blockchain integration and instant cross-border transfers.",
    gradient: "from-emerald-600 to-teal-400",
    emoji: "💰",
  },
  {
    category: "Healthcare",
    name: "MediConnect",
    description:
      "Telemedicine platform connecting patients with healthcare providers through secure video consultations.",
    gradient: "from-rose-600 to-orange-400",
    emoji: "🏥",
  },
  {
    category: "Education",
    name: "LearnHub",
    description:
      "Interactive learning management system with AI-driven personalization and real-time progress tracking.",
    gradient: "from-amber-600 to-yellow-400",
    emoji: "📚",
  },
  {
    category: "Analytics",
    name: "DataViz Pro",
    description:
      "Advanced business intelligence dashboard with real-time data visualization and predictive analytics.",
    gradient: "from-sky-600 to-indigo-400",
    emoji: "📊",
  },
];

const projectVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function FeaturedProjects() {
  const { ref, isInView } = useInView({ threshold: 0.05 });

  return (
    <section id="portfolio" className="relative py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="section-heading">Featured Projects</span>
          <h2 className="section-title mt-2">
            Our Recent Work
          </h2>
          <p className="mt-4 text-text-muted text-base md:text-lg max-w-2xl mx-auto">
            Each project represents our commitment to excellence and innovation
            in digital product development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              custom={i}
              variants={projectVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-primary-blue/10 transition-all duration-500"
            >
              <div
                className={`relative h-40 sm:h-48 md:h-52 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
              >
                <span className="text-6xl transition-transform duration-500 group-hover:scale-110">
                  {project.emoji}
                </span>
                <div className="absolute inset-0 bg-primary-navy/0 group-hover:bg-primary-navy/40 transition-all duration-500 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <ExternalLink size={32} />
                  </span>
                </div>
              </div>

              <div className="p-6">
                <span className="text-xs font-semibold tracking-wider uppercase text-primary-blue">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-primary-navy mt-2 mb-2">
                  {project.name}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <a
                  href={project.link || "#"}
                  {...(project.link ? { target: "_blank", rel: "noopener noreferrer" } : { onClick: (e: React.MouseEvent) => e.preventDefault() })}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-blue hover:text-primary-light transition-colors duration-300 group/link"
                >
                  View Project
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
