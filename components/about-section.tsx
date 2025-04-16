"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden border-8 border-purple-100 dark:border-purple-900/30 shadow-xl">
                <Image
                  src="/placeholder.jpg"
                  alt="Our team"
                  width={1050}
                  height={1000}
                  className="object-cover"
                />
              </div>

              {/* Circular design elements */}
              <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-pink-100 dark:bg-pink-900/20"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-purple-100 dark:bg-purple-900/20"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              We're a team of storytellers, artists, and AI researchers passionate about democratizing creativity. Our
              mission is to empower everyone to create engaging stories through the power of artificial intelligence.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              We believe that storytelling is a fundamental human experience that connects us across cultures and
              generations. By combining cutting-edge AI with intuitive design, we're making it easier than ever to craft
              compelling narratives that resonate with audiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">50K+</div>
                <div className="text-slate-600 dark:text-slate-400">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">100K+</div>
                <div className="text-slate-600 dark:text-slate-400">Stories Created</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">25+</div>
                <div className="text-slate-600 dark:text-slate-400">Countries</div>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
              Meet Our Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
