import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { pageContent } from "@/data/certificates";
import { Shield, MessageCircle } from "lucide-react";
import { DISCORD_INVITE_LINK } from "@/data/discord";

export default function CTA({ ctaRef }: { ctaRef: React.RefObject<HTMLElement | null> }) {
  return (
    <>
      {/* Call to Action */}
      <section
        ref={ctaRef}
        className="py-16 sm:py-20 px-4 bg-gradient-to-br from-un-blue-50 to-indigo-100 dark:from-gray-900 dark:to-un-blue-950 relative"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent px-2">
              {pageContent.cta.title}
            </h2>

            <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed text-gray-600 dark:text-gray-300 px-2">
              {pageContent.cta.description}
            </p>

            <div className="flex flex-col gap-4 sm:gap-6 justify-center max-w-lg sm:max-w-none mx-auto px-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-un-blue hover:bg-un-blue/90 dark:bg-un-blue dark:hover:bg-un-blue/90 text-white px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeEUShrJS6WMk6MZgkUD6tZGlUe4pRVeEN8lNgHinYReiIjdw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2" aria-hidden="true" />
                    <span className="hidden sm:inline">Apply for Leadership Position</span>
                    <span className="sm:hidden">Apply for Leadership</span>
                  </a>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-un-blue dark:border-un-blue text-un-blue dark:text-un-blue hover:bg-un-blue/5 dark:hover:bg-un-blue/10 px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                >
                  <a href={DISCORD_INVITE_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" aria-hidden="true" />
                    {pageContent.cta.discordButton}
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
