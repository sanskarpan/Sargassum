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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              We're creating sustainable, interactive toys that promote environmental awareness and reduce plastic consumption. Our mission is to foster a harmonious relationship between children and our planet through meaningful play.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              By combining eco-friendly materials with engaging storytelling and educational content, we're making it easier for environmentally-conscious parents to provide their children with toys that inspire creativity while teaching important lessons about sustainability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">100%</div>
                <div className="text-slate-600 dark:text-slate-400">Sustainable Materials</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">50+</div>
                <div className="text-slate-600 dark:text-slate-400">Educational Stories</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">0</div>
                <div className="text-slate-600 dark:text-slate-400">Plastic Waste</div>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-teal-600 to-emerald-500 hover:from-teal-700 hover:to-emerald-600">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
