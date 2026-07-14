"use client";

import { motion } from "framer-motion";
import {
  Users,
  Smartphone,
  Cpu,
  HeadphonesIcon,
  Rocket,
  Shield,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";

const features = [
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Seasoned professionals with deep expertise across modern web technologies and frameworks.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Pixel-perfect responsive layouts that deliver exceptional experiences across all devices.",
  },
  {
    icon: Cpu,
    title: "Latest Technologies",
    description:
      "We leverage cutting-edge tools and frameworks to build future-proof digital solutions.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description:
      "Round-the-clock technical support and maintenance to keep your digital products running smoothly.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description:
      "Agile development methodology ensures timely delivery without compromising on quality.",
  },
  {
    icon: Shield,
    title: "Secure Development",
    description:
      "Enterprise-grade security practices embedded throughout the development lifecycle.",
  },
];

const featureVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function WhyChooseUs() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="why-us" className="relative py-20 md:py-28 bg-background-alt">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-blue/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="section-heading">Why Choose NSB TECH</span>
          <h2 className="section-title mt-2">
            What Sets Us Apart
          </h2>
          <p className="mt-4 text-text-muted text-base md:text-lg max-w-2xl mx-auto">
            We don&apos;t just build websites — we create digital experiences that
            drive measurable business results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/10 to-primary-light/10 rounded-3xl" />
              <div className="absolute inset-4 bg-gradient-to-br from-primary-blue/20 to-primary-light/20 rounded-2xl" />
              <div className="absolute inset-8 bg-gradient-to-br from-primary-blue/30 to-primary-light/30 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-2">10+</div>
                  <div className="text-white/80 text-lg">Years Experience</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                custom={i}
                variants={featureVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="card card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-blue to-primary-light/20 flex items-center justify-center mb-4">
                  <feature.icon className="text-primary-blue" size={24} />
                </div>
                <h3 className="text-lg font-bold text-primary-navy mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
