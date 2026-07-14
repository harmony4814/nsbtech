"use client";

import { motion } from "framer-motion";
import { Sparkles, Calendar } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export default function CallToAction() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-navy via-[#0a2a6e] to-primary-navy" />

      <div className="absolute inset-0 bg-cta-glow opacity-40" />

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles size={16} />
            Let&apos;s Work Together
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
            Let&apos;s Build Your Next<br className="hidden sm:block" />
            <span className="text-primary-light"> Digital Product</span>
          </h2>

          <p className="mt-6 text-base md:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto">
            Ready to transform your business with cutting-edge web development?
            Let&apos;s create something extraordinary together.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-primary-light to-accent-cyan text-primary-navy font-semibold text-sm sm:text-base hover:shadow-xl hover:shadow-primary-light/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Started
              <Sparkles size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border-2 border-white/30 text-white font-semibold text-sm sm:text-base hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              <Calendar size={18} />
              Schedule Consultation
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
