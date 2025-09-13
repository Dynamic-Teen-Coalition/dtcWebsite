import { homeContent } from "@/data/home";
import { motion } from "framer-motion";
import React from "react";  
import { ExternalLink, Globe, Youtube, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
        <footer className="py-12 px-4 bg-gray-900 dark:bg-black text-white relative">
          <div className="max-w-6xl mx-auto text-center">
            {/* Social Media Icons in Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="flex justify-center items-center gap-6">
                {homeContent.socialMedia.links.map((social, index) => {
                  const isImageIcon = social.icon.startsWith('/');
                  const IconComponent = !isImageIcon ? (
                    social.icon === "ExternalLink" ? ExternalLink :
                    social.icon === "Globe" ? Globe :
                    social.icon === "Youtube" ? Youtube :
                    social.icon === "Linkedin" ? Linkedin : ExternalLink
                  ) : null;
                  
                  return (
                    <motion.div
                      key={social.name}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 dark:border-gray-600 hover:border-un-blue dark:hover:border-un-blue hover:bg-gray-700 dark:hover:bg-gray-600"
                        aria-label={social.name}
                      >
                        {isImageIcon ? (
                          <Image
                            src={social.icon}
                            alt={social.name}
                            width={20}
                            height={20}
                            className="w-5 h-5 object-contain"
                          />
                        ) : (
                          IconComponent && <IconComponent className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
                        )}
                      </a>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.p
              className="text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              © 2025 Dynamic Teen Coalition. Building the future, systematically, collaboratively, and from the inside
              out.
            </motion.p>
          </div>
        </footer>
  );
}