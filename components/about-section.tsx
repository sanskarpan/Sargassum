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
              <div className="aspect-square rounded-full overflow-hidden border-8 border-teal-100 dark:border-teal-900/30 shadow-xl">
                <Image
                  src="/sargassum-team.jpg"
                  alt="Sargassum team"
                  width={1050}
                  height={1000}
                  className="object-cover"
                />
              </div>

              {/* Circular design elements */}
              <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-emerald-100 dark:bg-emerald-900/20"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-teal-100 dark:bg-teal-900/20"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">From the Himalayas to Your Home</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              At Sargassum Play, we believe that every playtime is an opportunity to spark curiosity, foster connections, and inspire care for our planet. Our story begins in the pristine landscapes of Ladakh, where skilled artisans craft sustainable wooden toys using traditional techniques.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Each toy carries a piece of nature's wisdom, whether it's a puzzle inspired by the currents of the Sargasso Sea or a game that mimics the flow of Himalayan rivers. Through play, we help children and families explore the wonders of the Earth and become stewards of its future.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">50+</div>
                <div className="text-slate-600 dark:text-slate-400">Local Artisans</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">100%</div>
                <div className="text-slate-600 dark:text-slate-400">Sustainable Wood</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">∞</div>
                <div className="text-slate-600 dark:text-slate-400">Family Memories</div>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-teal-600 to-emerald-500 hover:from-teal-700 hover:to-emerald-600">
              Discover Our Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
