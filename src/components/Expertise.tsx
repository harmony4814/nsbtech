"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Code2,
  ShoppingCart,
  PenTool,
  TrendingUp,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";

const expertiseItems = [
  {
    icon: Palette,
    title: "Web Design",
    description:
      "Stunning, user-centric designs that captivate audiences and reflect your brand identity across every pixel.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Code2,
    title: "Custom Development",
    description:
      "Tailored web applications built with cutting-edge technologies to solve your unique business challenges.",
    color: "from-indigo-500 to-purple-400",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Powerful online stores with seamless checkout experiences that drive conversions and revenue growth.",
    color: "from-emerald-500 to-teal-400",
  },
  {
    icon: TrendingUp,
    title: "SEO & Digital Marketing",
    description:
      "Comprehensive strategies to boost your online visibility, attract qualified traffic, and dominate search rankings.",
    color: "from-rose-500 to-pink-400",
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

export default function Expertise() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="services" className="relative py-20 md:py-28 bg-background-alt">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-blue/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="section-heading">Our Expertise</span>
          <h2 className="section-title mt-2">
            What We Do Best
          </h2>
          <p className="mt-4 text-text-muted text-base md:text-lg max-w-2xl mx-auto">
            We combine creativity with technical excellence to deliver solutions
            that make a real impact on your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {expertiseItems.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="group card card-hover cursor-default"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} bg-opacity-10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-primary-navy mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
