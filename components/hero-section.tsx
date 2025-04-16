"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight, MousePointerClick, BookOpen, PenTool, PlayCircle } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  const [currentStory, setCurrentStory] = useState(0)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, 100])
  const springY = useSpring(y, { stiffness: 100, damping: 30 })
  
  const stories = [
    "Sustainable toys for a better tomorrow",
    "Promoting environmental awareness through play",
    "Interactive storytelling for young minds",
    "Building connections with our planet",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % stories.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <motion.div 
              className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-300 text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen className="h-4 w-4 mr-2" />
              <span>Sustainable Toy Brand</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-600 via-emerald-500 to-blue-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Play, Learn, and Protect Our Planet
            </motion.h1>

            <div className="h-12 mb-6">
              <motion.p
                key={currentStory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-xl text-slate-600 dark:text-slate-300"
              >
                {stories[currentStory]}
              </motion.p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-600 to-emerald-500 hover:from-teal-700 hover:to-emerald-600 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    Explore Our Toys
                    <PenTool className="ml-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-slate-300 dark:border-slate-700">
                  <PlayCircle className="mr-2 h-4 w-4" />
                  Watch Our Story
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            style={{ y: springY }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/sargassum-hero.jpg"
                alt="Sustainable toys promoting environmental awareness"
                width={800}
                height={600}
                className="object-cover w-full h-full"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/20 to-transparent mix-blend-overlay"></div>
              
              {/* Environmental elements overlay */}
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-2 p-4 opacity-30">
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="border-2 border-white/50 rounded-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.5, 0.3] }}
                    transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, repeatType: "reverse" }}
                  />
                ))}
              </div>
              
              {/* Interactive cursor effect */}
              <motion.div
                className="absolute w-8 h-8 pointer-events-none"
                animate={{
                  x: [0, 100, 0],
                  y: [0, 50, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <MousePointerClick className="w-8 h-8 text-white/80" />
              </motion.div>
            </div>

            {/* Floating toy elements with enhanced animations */}
            <motion.div
              className="absolute -top-10 -right-10 w-32 h-32 rounded-lg shadow-lg overflow-hidden border-4 border-white dark:border-slate-800"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-teal-400 to-emerald-600 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">🌊</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-5 -left-5 w-24 h-24 rounded-lg shadow-lg overflow-hidden border-4 border-white dark:border-slate-800"
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: 1,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.1, rotate: -10 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">🌱</span>
              </div>
            </motion.div>
            
            {/* Brand message bubble */}
            <motion.div
              className="absolute top-1/4 right-1/4 w-32 h-20 bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-3 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="absolute -bottom-3 right-4 w-6 h-6 bg-white dark:bg-slate-800 transform rotate-45"></div>
              <p className="text-xs font-medium text-slate-800 dark:text-slate-200">Join our eco-friendly journey!</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced background elements */}
      <motion.div 
        className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-gradient-to-r from-teal-600/10 to-emerald-500/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-gradient-to-r from-emerald-400/10 to-teal-500/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      {/* Environmental pattern overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ 
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>
    </section>
  )
}
