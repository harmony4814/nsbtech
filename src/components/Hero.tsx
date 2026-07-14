"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  LayoutDashboard,
  Code2,
  Cloud,
  BarChart3,
  PenTool,
  Users,
  Sparkles,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const floatingIconVariants = {
  animate: (i: number) => ({
    y: [0, -15, 0],
    transition: {
      duration: 4 + i * 0.5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      <div className="absolute inset-0 bg-hero-glow opacity-60" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-light/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary-blue/10 text-primary-blue text-xs sm:text-sm font-medium mb-6"
            >
              <Sparkles size={16} />
              Your Digital Transformation Partner
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-navy leading-tight"
            >
              Innovative Website
              <br />
              <span className="gradient-text">Development</span>
              <br />
              For Your Business
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg md:text-xl text-text-muted max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Crafting dynamic, responsive, and user-focused digital solutions
              that help businesses grow online.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#services" className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5">
                Our Services
              </a>
              <a href="#contact" className="btn-secondary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5">
                Start Your Project
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 sm:mt-12 flex items-center gap-4 sm:gap-6 lg:gap-8 justify-center lg:justify-start text-text-muted"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-primary-blue/20 to-primary-light/20 flex items-center justify-center text-xs font-bold text-primary-blue"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="font-semibold text-primary-navy">500+</p>
                <p className="text-sm">Projects Delivered</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <motion.div
                custom={0}
                variants={floatingIconVariants}
                animate="animate"
                className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-32 bg-white rounded-2xl shadow-2xl shadow-primary-blue/20 border border-gray-100 flex items-center justify-center p-4"
              >
                <Monitor className="text-primary-blue" size={60} />
              </motion.div>

              <motion.div
                custom={1}
                variants={floatingIconVariants}
                animate="animate"
                className="absolute top-1/4 right-0 w-40 h-28 bg-white rounded-2xl shadow-2xl shadow-primary-blue/20 border border-gray-100 flex items-center justify-center p-3"
              >
                <LayoutDashboard className="text-accent-cyan" size={48} />
              </motion.div>

              <motion.div
                custom={2}
                variants={floatingIconVariants}
                animate="animate"
                className="absolute top-1/2 left-0 w-36 h-28 bg-white rounded-2xl shadow-2xl shadow-primary-blue/20 border border-gray-100 flex items-center justify-center p-3"
              >
                <Code2 className="text-primary-blue" size={48} />
              </motion.div>

              <motion.div
                custom={3}
                variants={floatingIconVariants}
                animate="animate"
                className="absolute bottom-1/4 right-0 w-36 h-28 bg-white rounded-2xl shadow-2xl shadow-primary-blue/20 border border-gray-100 flex items-center justify-center p-3"
              >
                <Cloud className="text-primary-light" size={48} />
              </motion.div>

              <motion.div
                custom={4}
                variants={floatingIconVariants}
                animate="animate"
                className="absolute top-[60%] left-[10%] w-32 h-24 bg-white rounded-2xl shadow-2xl shadow-primary-blue/20 border border-gray-100 flex items-center justify-center p-3"
              >
                <BarChart3 className="text-accent-orange" size={40} />
              </motion.div>

              <motion.div
                custom={5}
                variants={floatingIconVariants}
                animate="animate"
                className="absolute bottom-0 left-1/3 w-32 h-24 bg-white rounded-2xl shadow-2xl shadow-primary-blue/20 border border-gray-100 flex items-center justify-center p-3"
              >
                <PenTool className="text-primary-blue" size={40} />
              </motion.div>

              <motion.div
                custom={6}
                variants={floatingIconVariants}
                animate="animate"
                className="absolute top-[15%] left-[8%] w-28 h-20 bg-white rounded-2xl shadow-xl shadow-primary-blue/10 border border-gray-100 flex items-center justify-center p-2"
              >
                <Users className="text-accent-cyan" size={36} />
              </motion.div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-blue/10 to-primary-light/10 blur-xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-alt to-transparent" />
    </section>
  );
}
