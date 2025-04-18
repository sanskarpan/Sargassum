"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, BookOpen, Heart, Sparkles } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

export default function ToysSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  const toys = [
    {
      id: 1,
      name: "Stacking Stones - Stupa",
      type: "Wooden Puzzle",
      material: "Fine quality Walnut Wood from Ladakh",
      age: "3+ years",
      skills: ["Creativity", "Motor Skills", "Social and Emotional Skills", "Cognitive Skills", "Language Skills", "Self-Identity"],
      image: "/toys/toy1.svg"
    },
    {
      id: 2,
      name: "Birds of Ladakh Stacking Puzzle",
      type: "Stacking Puzzle",
      material: "Fine quality Walnut Wood from Ladakh",
      age: "2+ years",
      skills: ["Creativity", "Motor Skills", "Social and Emotional Skills", "Cognitive Skills", "Language Skills", "Self-Identity"],
      image: "/toys/toy2.svg"
    },
    {
      id: 3,
      name: "Animals of Ladakh Stacking Puzzle",
      type: "Stacking Puzzle",
      material: "Fine quality Walnut Wood from Ladakh",
      age: "2+ years",
      skills: ["Creativity", "Motor Skills", "Social and Emotional Skills", "Cognitive Skills", "Language Skills", "Self-Identity"],
      image: "/toys/toy3.svg"
    },
    {
      id: 4,
      name: "Dolls from Ladakh",
      type: "Dolls",
      material: "Fine quality Walnut Wood from Ladakh",
      age: "2+ Years",
      skills: ["Creativity", "Motor Skills", "Social and Emotional Skills", "Cognitive Skills", "Language Skills", "Self-Identity"],
      image: "/toys/toy4.svg"
    },
    {
      id: 5,
      name: "Grasping toys & teethers",
      type: "Infant Toys",
      material: "Fine quality Neem Wood from South India",
      age: "0 - 12 months",
      skills: ["Creativity", "Motor Skills", "Social and Emotional Skills", "Cognitive Skills", "Language Skills", "Self-Identity"],
      image: "/toys/toy5.svg"
    },
    {
      id: 6,
      name: "Geography & Animals Pretend Play set",
      type: "Pretend Play",
      material: "Fine quality Neem Wood from South India",
      age: "3-5 years",
      skills: ["Creativity", "Motor Skills", "Social and Emotional Skills", "Cognitive Skills", "Language Skills", "Self-Identity"],
      image: "/toys/toy6.svg"
    }
  ]

  return (
    <section ref={sectionRef} id="toys" className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
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
          style={{ opacity, scale }}
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
              <Sparkles className="h-4 w-4 mr-2" />
            </motion.div>
            <span>Handcrafted Toys</span>
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Our Collection
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-600 dark:text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Discover our range of sustainable wooden toys, each crafted with care and designed to inspire learning through play.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toys.map((toy, index) => (
            <motion.div
              key={toy.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full overflow-hidden border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300 dark:bg-slate-900/50">
                <motion.div 
                  className="aspect-square relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={toy.image}
                    alt={toy.name}
                    fill
                    className="object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <CardHeader>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CardTitle className="text-xl dark:text-slate-100">{toy.name}</CardTitle>
                    <CardDescription className="dark:text-slate-400">{toy.type}</CardDescription>
                  </motion.div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <motion.div 
                      className="flex items-center text-sm text-slate-600 dark:text-slate-300"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <Leaf className="h-4 w-4 mr-2" />
                      </motion.div>
                      <span>{toy.material}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center text-sm text-slate-600 dark:text-slate-300"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <BookOpen className="h-4 w-4 mr-2" />
                      </motion.div>
                      <span>Age: {toy.age}</span>
                    </motion.div>
                    <div className="flex flex-wrap gap-2">
                      {toy.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="px-2 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-300 rounded-full text-xs"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-gradient-to-r from-teal-600 to-emerald-500 hover:from-teal-700 hover:to-emerald-600 dark:from-teal-500 dark:to-emerald-400 dark:hover:from-teal-600 dark:hover:to-emerald-300">
              Explore All Toys
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
    </section>
  )
} 