"use client";

import { Mail, Phone, MapPin, Globe, MessageCircle, BookOpen, Play } from "lucide-react";

const footerLinks = {
  company: {
    title: "Company",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#" },
    ],
  },
  services: {
    title: "Services",
    links: [
      { name: "Web Design", href: "#services" },
      { name: "Web Development", href: "#services" },
      { name: "E-Commerce", href: "#services" },
      { name: "SEO", href: "#services" },
    ],
  },
  quickLinks: {
    title: "Quick Links",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Contact Us", href: "#contact" },
    ],
  },
};

const socialLinks = [
  { icon: Globe, href: "#", label: "LinkedIn" },
  { icon: MessageCircle, href: "#", label: "Twitter" },
  { icon: BookOpen, href: "#", label: "GitHub" },
  { icon: Play, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-primary-navy text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-navy to-[#041030]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
          <div>
            <a href="#home" className="flex items-center mb-5">
              <img
                src="/logo.jpeg"
                alt="NSB TECH"
                className="h-14 md:h-16 lg:h-20 w-auto"
              />
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Crafting dynamic, responsive, and user-focused digital solutions
              that help businesses grow online.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:nsbtech25@gmail.com"
                className="flex items-center gap-3 text-white/60 hover:text-primary-light transition-colors duration-300 text-sm"
              >
                <Mail size={16} />
                nsbtech25@gmail.com
              </a>
              <a
                href="tel:+2347015975922"
                className="flex items-center gap-3 text-white/60 hover:text-primary-light transition-colors duration-300 text-sm"
              >
                <Phone size={16} />
                +234 701 597 5922
              </a>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <MapPin size={16} />
                Ibadan, Nigeria
              </div>
            </div>
          </div>

          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold tracking-wider uppercase text-white/80 mb-5">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-primary-light transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} NSB TECH. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-primary-blue hover:text-white transition-all duration-300"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
