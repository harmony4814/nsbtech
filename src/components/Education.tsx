"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const educationItems = [
  {
    degree: "Computer Engineering",
    school: "Ibadan City Polytechnic",
    period: "2018 - 2020",
    description:
      "Focused on software engineering and web technologies.",
    highlights: ["Certificate of Completion"],
  },
  {
    degree: "Full-Stack Web Development",
    period: "2020 - 2025",
    description:
      "Intensive training in modern web development including React, Node.js, and cloud deployment.",
    highlights: ["Certificate of Completion"],
  },
  {
    degree: "WAEC / Senior Secondary",
    school: "Olive Royal Academy, Ekiti State",
    period: "2016",
    description:
      "Science track with strong foundations in Mathematics and Physics.",
    highlights: ["5 Distinctions"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

export default function Education() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="education" className="relative py-20 md:py-28 bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-blue/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="section-heading">Education</span>
          <h2 className="section-title mt-2">My Qualifications</h2>
          <p className="mt-4 text-text-muted text-base md:text-lg max-w-2xl mx-auto">
            A summary of my academic background and the qualifications
            that shape my expertise in technology.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-blue/20 via-primary-light/40 to-primary-blue/20" />

          {educationItems.map((item, i) => (
            <motion.div
              key={item.degree}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className={`relative flex flex-col md:flex-row items-start gap-6 mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-primary-blue to-primary-light -translate-x-1.5 md:-translate-x-1.5 mt-2 ring-4 ring-white z-10`}
              />

              <div className={`w-full md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-14 md:pl-0`}>
                <div className="card card-hover p-4 sm:p-6">
                  <div className={`flex items-center gap-2 mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-blue to-primary-light flex items-center justify-center">
                      <GraduationCap className="text-white" size={20} />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-primary-navy">
                      {item.degree}
                    </h3>
                  </div>
                  <p className="text-primary-blue font-semibold text-sm mb-2">
                    {item.school}
                  </p>
                  <div className={`flex items-center gap-2 text-text-muted text-sm mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Calendar size={14} />
                    <span>{item.period}</span>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    {item.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-flex items-center gap-1 text-xs font-medium text-primary-blue bg-primary-blue/10 rounded-full px-3 py-1"
                      >
                        <Award size={12} />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
