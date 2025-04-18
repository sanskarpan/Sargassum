"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, BookOpen, Heart } from "lucide-react"
import Image from "next/image"

export default function ClimateEducation() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-teal-100/20 dark:bg-teal-900/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100/20 dark:bg-emerald-900/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/20 text-teal-600 dark:text-teal-300 text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Leaf className="h-4 w-4 mr-2" />
            </motion.div>
            <span>Climate Education</span>
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 dark:text-slate-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Teaching Sustainability Through Play
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-600 dark:text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Our approach combines storytelling, eco-conscious toys, and interactive learning to instill environmental awareness in children.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden">
              <Image
                src="climate-education.svg"
                alt="Children learning about climate"
                fill
                className="object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-100 dark:bg-teal-900/30 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Card className="border-slate-200 dark:border-slate-800 dark:bg-slate-900/50">
              <CardHeader>
                <CardTitle className="dark:text-slate-100">The Challenge</CardTitle>
                <CardDescription className="dark:text-slate-400">
                  Children today are increasingly disconnected from nature, while parents and schools struggle to teach sustainability effectively.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800 dark:bg-slate-900/50">
              <CardHeader>
                <CardTitle className="dark:text-slate-100">Our Solution</CardTitle>
                <CardDescription className="dark:text-slate-400">
                  Sargassum Play merges play, storytelling, and eco-conscious toys to create an engaging learning experience that teaches sustainability.
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-4 rounded-lg bg-teal-100 dark:bg-teal-900/20"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Leaf className="h-6 w-6 text-teal-600 dark:text-teal-300 mb-2" />
                </motion.div>
                <h4 className="font-medium dark:text-slate-100">Eco-friendly Materials</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">Sustainable wood and natural materials</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="p-4 rounded-lg bg-emerald-100 dark:bg-emerald-900/20"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <BookOpen className="h-6 w-6 text-emerald-600 dark:text-emerald-300 mb-2" />
                </motion.div>
                <h4 className="font-medium dark:text-slate-100">Storytelling-driven</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">Engaging narratives that teach</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="p-4 rounded-lg bg-sky-100 dark:bg-sky-900/20"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Heart className="h-6 w-6 text-sky-600 dark:text-sky-300 mb-2" />
                </motion.div>
                <h4 className="font-medium dark:text-slate-100">Climate Awareness</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">Building environmental consciousness</p>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="w-full bg-gradient-to-r from-teal-600 to-emerald-500 hover:from-teal-700 hover:to-emerald-600 dark:from-teal-500 dark:to-emerald-400 dark:hover:from-teal-600 dark:hover:to-emerald-300">
                Learn More About Our Approach
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 