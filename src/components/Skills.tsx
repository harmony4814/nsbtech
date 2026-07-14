"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const skills = [
  {
    name: "HTML",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-10 h-10">
        <path fill="#E44D26" d="M6 4l3.5 38L24 44l14.5-2L42 4z" />
        <path fill="#F16529" d="M24 44V8h14l-1.5 16.5L24 28z" />
        <path fill="#EBEBEB" d="M24 28l-7.5-5L15 36l9 8v-9l6-4z" />
        <path fill="#fff" d="M24 8H10l.5 5h13.5v5H12l-1 10 13 4v-7l-6.5-4.5L19 14h14.5l.5-6z" />
      </svg>
    ),
    color: "from-orange-500 to-red-500",
    level: 95,
  },
  {
    name: "CSS",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-10 h-10">
        <path fill="#264DE4" d="M6 4l3.5 38L24 44l14.5-2L42 4z" />
        <path fill="#2965F1" d="M24 44V8h14l-1.5 16.5L24 28z" />
        <path fill="#fff" d="M24 28l-7.5-5L15 36l9 8v-9l6-4z" />
        <path fill="#EBEBEB" d="M24 8H10l.5 5h13.5v5H12l-1 10 13 4v-7l-6.5-4.5L19 14h14.5l.5-6z" />
      </svg>
    ),
    color: "from-blue-500 to-blue-600",
    level: 90,
  },
  {
    name: "JavaScript",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-10 h-10">
        <rect fill="#F7DF1E" width="48" height="48" rx="4" />
        <path d="M12.4 36.2c.9 1.5 2.1 2.6 4.2 2.6 1.8 0 2.9-.9 2.9-2.1 0-1.5-.9-2-2.7-2.9l-1-.4c-2.9-1.2-4.8-2.7-4.8-5.9 0-2.9 2.2-5.1 5.7-5.1 2.5 0 4.3.9 5.5 3.2l-3.1 2c-.6-1.1-1.2-1.5-2.4-1.5-1.1 0-1.8.7-1.8 1.5 0 1.1.7 1.5 2.3 2.2l1 .4c3.4 1.4 5.3 2.8 5.3 6.2 0 3.5-2.8 5.4-6.5 5.4-3.6 0-6-1.7-7.2-3.9zm19.8.1h3.5V20.8h3.2v15.5h3.5V20.2c0-2.2-.4-3.2-1.8-3.2-1 0-1.7.5-2 1.3V20h-3.5v16.3h-.1z" fill="#333" />
      </svg>
    ),
    color: "from-yellow-400 to-yellow-500",
    level: 85,
  },
  {
    name: "React",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-10 h-10">
        <circle cx="24" cy="24" r="4" fill="#61DAFB" />
        <ellipse cx="24" cy="24" rx="20" ry="8" fill="none" stroke="#61DAFB" strokeWidth="1.5" />
        <ellipse cx="24" cy="24" rx="20" ry="8" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="20" ry="8" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 24 24)" />
      </svg>
    ),
    color: "from-cyan-400 to-blue-500",
    level: 80,
  },
  {
    name: "Node.js",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-10 h-10">
        <path fill="#3C873A" d="M24 4L6 14v20l18 10 18-10V14z" />
        <path fill="#fff" d="M24 8l-12 7v14l12 7 12-7V15z" />
        <path fill="#3C873A" d="M24 12l-8 5v10l8 5 8-5V17z" />
        <path fill="#fff" d="M21 20h2v8h-2zm4-1h2v9h-2z" />
      </svg>
    ),
    color: "from-green-500 to-green-600",
    level: 75,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Skills() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="relative py-20 md:py-28 bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-blue/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="section-heading">Skills</span>
          <h2 className="section-title mt-2">My Technical Skills</h2>
          <p className="mt-4 text-text-muted text-base md:text-lg max-w-2xl mx-auto">
            Technologies I use to build modern, responsive, and high-performance web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 max-w-5xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="group card card-hover p-6 text-center"
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-primary-navy mb-3">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + i * 0.15 }}
                  className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
              <p className="text-xs text-text-muted font-medium">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
