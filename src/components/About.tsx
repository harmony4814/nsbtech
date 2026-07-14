"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Briefcase,
  MessageCircle,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";

const infoItems = [
  { icon: Phone, label: "Phone", value: "+234 816 262 0628", href: "tel:+2348162620628" },
  { icon: MessageCircle, label: "WhatsApp", value: "+234 701 597 5922", href: "https://wa.me/2347015975922" },
  { icon: MapPin, label: "Address", value: "No 48 Ishebo Street, Ibadan", href: "#" },
  { icon: Globe, label: "Nationality", value: "Nigerian", href: "#" },
  { icon: Mail, label: "Email", value: "nsbtech25@gmail.com", href: "mailto:nsbtech25@gmail.com" },
  { icon: Briefcase, label: "Freelancer", value: "Available", href: "#" },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

export default function About() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="relative py-20 md:py-28 bg-background-alt">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-blue/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="section-heading">About Me</span>
          <h2 className="section-title mt-2">Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full aspect-square max-w-sm mx-auto md:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/10 to-primary-light/10 rounded-3xl" />
              <div className="absolute inset-4 bg-gradient-to-br from-primary-blue/20 to-primary-light/20 rounded-2xl" />
              <div className="absolute inset-8 bg-gradient-to-br from-primary-blue to-primary-light rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src="/TEC.jpg"
                  alt="Babalola Oladayo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl font-bold text-primary-navy mb-6"
            >
              Hello, I&apos;m <span className="gradient-text">Babalola Oladayo</span>, Based in Nigeria
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-text-muted leading-relaxed mb-8"
            >
              I&apos;m a passionate website developer specializing in creating
              modern, responsive, and user-friendly websites. I help businesses
              and individuals build a strong online presence through clean
              design, fast performance, and reliable web solutions.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-4">
              {infoItems.map((item, i) => {
                const Tag = item.href === "#" ? motion.div : motion.a;
                return (
                  <Tag
                    key={item.label}
                    {...(item.href === "#" ? {} : { href: item.href })}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white card-hover group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-blue to-primary-light/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="text-primary-blue" size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold text-primary-navy">
                        {item.value}
                      </p>
                    </div>
                  </Tag>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
