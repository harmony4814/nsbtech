"use client";

import { Mail, Phone, MapPin } from "lucide-react";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

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
  { icon: InstagramIcon, href: "https://www.instagram.com/nsb__tech?igsh=OTdmMTFmNGZtemZy&utm_source=qr", label: "Instagram" },
  { icon: FacebookIcon, href: "https://www.facebook.com/share/1Hjhpd1kzD/?mibextid=wwXIfr", label: "Facebook" },
  { icon: TikTokIcon, href: "https://www.tiktok.com/@nsb_tech?_r=1&_t=ZS-981wj07Ku0W", label: "TikTok" },
  { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
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
                No 48 Ishebo Street, Ibadan
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
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
