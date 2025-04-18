"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight, MousePointerClick, BookOpen, PenTool, PlayCircle } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  const [currentStory, setCurrentStory] = useState(0)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, 100])
  const springY = useSpring(y, { stiffness: 100, damping: 30 })
  const opacity = useTransform(scrollY, [0, 200], [1, 0])
  
  const stories = [
    "Crafting sustainable wooden toys from the heart of Ladakh",
    "Connecting families through mindful play and environmental education",
    "From the Sargasso Sea to the Himalayas: Nature-inspired learning",
    "Building a greener future, one toy at a time",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % stories.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-24 md:py-32 overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-background/50 to-background pointer-events-none"
        style={{ opacity }}
      />
      
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-accent/10"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
          >
            <motion.div 
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 tracking-wide"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 0.15)" }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <BookOpen className="h-4 w-4 mr-2.5" />
              </motion.div>
              <span className="text-[15px]">Eco-Friendly Wooden Toys for Mindful Play</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Sustainable Toys for a Sustainable Future
            </motion.h1>

            <AnimatePresence mode="wait">
              <motion.p 
                key={currentStory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-xl mx-auto lg:mx-0"
              >
                {stories[currentStory]}
              </motion.p>
            </AnimatePresence>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 text-lg rounded-full shadow-lg shadow-primary/20">
                  Explore Our Toys
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="border-2 border-primary/20 hover:bg-primary/10 text-foreground font-medium px-8 py-6 text-lg rounded-full">
                  Learn About Our Mission
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
            style={{ y: springY }}
          >
            <motion.div 
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-primary/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/sargassum-hero.svg?height=1500&width=1500"
                alt="Sargassum Play wooden toys"
                width={800}
                height={800}
                className="object-cover"
              />
            </motion.div>
            
            {/* Animated decorative elements */}
            <motion.div 
              className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-accent/20 blur-xl"
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
            <motion.div 
              className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-primary/20 blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
