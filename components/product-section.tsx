"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { ArrowRight, Leaf, BookOpen, Heart, Sparkles, Palmtree, Fish, Recycle } from "lucide-react"

export default function ProductSection() {
  const [activeTab, setActiveTab] = useState("toys")
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const features = {
    toys: [
      "Handcrafted from sustainable walnut wood in Ladakh",
      "Traditional craftsmanship by local artisans",
      "Durable design that lasts through generations",
    ],
    stories: [
      "Comprehensive eco-parenting guides and resources",
      "Printable activities for environmental education",
      "Interactive learning materials for families",
    ],
    impact: [
      "Toy Swap/Return Program for circular economy",
      "Support for local artisans and communities",
      "Environmental education initiatives",
    ],
  }

  return (
    <section id="product" ref={sectionRef} className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      {/* Animated background elements with parallax */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ y }}
      >
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </motion.div>

      <motion.div 
        className="container mx-auto px-4 relative"
        style={{ opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-300 text-sm font-medium mb-6"
          >
            <Sparkles className="h-4 w-4 mr-2" />
            <span>Sustainable Products</span>
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-teal-600 via-emerald-500 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Sustainable Wooden Toys from Ladakh
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-600 dark:text-slate-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Discover our collection of handcrafted wooden toys that bring joy, learning, and environmental consciousness to every family.
          </motion.p>
        </motion.div>

        <Tabs defaultValue="toys" className="max-w-5xl mx-auto" onValueChange={setActiveTab}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-12">
              {[
                { value: "toys", icon: Leaf, label: "Toys" },
                { value: "stories", icon: BookOpen, label: "Stories" },
                { value: "impact", icon: Heart, label: "Impact" },
              ].map((tab) => (
                <motion.div
                  key={tab.value}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <TabsTrigger
                    value={tab.value}
                    className="data-[state=active]:bg-teal-100 data-[state=active]:text-teal-700 dark:data-[state=active]:bg-teal-900/30 dark:data-[state=active]:text-teal-300"
                  >
                    <tab.icon className="h-4 w-4 mr-2" />
                    {tab.label}
                  </TabsTrigger>
                </motion.div>
              ))}
            </TabsList>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              key={activeTab + "-content"}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              className="order-2 lg:order-1"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                >
                  <TabsContent value="toys" className="mt-0">
                    <motion.h3 
                      className="text-2xl font-bold mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      Handcrafted Wooden Toys
                    </motion.h3>
                    <motion.p 
                      className="text-slate-600 dark:text-slate-400 mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      Our toys are crafted by skilled artisans in Ladakh using sustainable walnut wood, 
                      creating lasting memories while supporting local communities.
                    </motion.p>
                    <ul className="space-y-3 mb-8">
                      {features.toys.map((feature, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start"
                          onHoverStart={() => setHoveredFeature(index)}
                          onHoverEnd={() => setHoveredFeature(null)}
                          whileHover={{ x: 10 }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                        >
                          <motion.div
                            className="mr-3 p-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                            animate={{
                              scale: hoveredFeature === index ? [1, 1.2, 1] : 1,
                              rotate: hoveredFeature === index ? [0, 180, 360] : 0,
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </motion.div>
                          <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <motion.div 
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                    >
                      <Button className="bg-gradient-to-r from-teal-600 to-emerald-500 hover:from-teal-700 hover:to-emerald-600 relative overflow-hidden group">
                        <span className="relative z-10 flex items-center">
                          Explore Our Toys
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </Button>
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="stories" className="mt-0">
                    <motion.h3 
                      className="text-2xl font-bold mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      Educational Resources
                    </motion.h3>
                    <motion.p 
                      className="text-slate-600 dark:text-slate-400 mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      Access our comprehensive library of eco-parenting guides, printable activities, 
                      and environmental education materials to enhance your family's learning journey.
                    </motion.p>
                    <ul className="space-y-3 mb-8">
                      {features.stories.map((feature, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start"
                          onHoverStart={() => setHoveredFeature(index)}
                          onHoverEnd={() => setHoveredFeature(null)}
                          whileHover={{ x: 10 }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                        >
                          <motion.div
                            className="mr-3 p-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                            animate={{
                              scale: hoveredFeature === index ? [1, 1.2, 1] : 1,
                              rotate: hoveredFeature === index ? [0, 180, 360] : 0,
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </motion.div>
                          <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <motion.div 
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                    >
                      <Button className="bg-gradient-to-r from-teal-600 to-emerald-500 hover:from-teal-700 hover:to-emerald-600 relative overflow-hidden group">
                        <span className="relative z-10 flex items-center">
                          Access Resources
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </Button>
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="impact" className="mt-0">
                    <motion.h3 
                      className="text-2xl font-bold mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      Circular Economy Initiatives
                    </motion.h3>
                    <motion.p 
                      className="text-slate-600 dark:text-slate-400 mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      Join our Toy Swap/Return Program to keep toys in circulation longer and reduce 
                      environmental impact while supporting sustainable practices.
                    </motion.p>
                    <ul className="space-y-3 mb-8">
                      {features.impact.map((feature, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start"
                          onHoverStart={() => setHoveredFeature(index)}
                          onHoverEnd={() => setHoveredFeature(null)}
                          whileHover={{ x: 10 }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                        >
                          <motion.div
                            className="mr-3 p-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                            animate={{
                              scale: hoveredFeature === index ? [1, 1.2, 1] : 1,
                              rotate: hoveredFeature === index ? [0, 180, 360] : 0,
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </motion.div>
                          <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <motion.div 
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                    >
                      <Button className="bg-gradient-to-r from-teal-600 to-emerald-500 hover:from-teal-700 hover:to-emerald-600 relative overflow-hidden group">
                        <span className="relative z-10 flex items-center">
                          Join Program
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </Button>
                    </motion.div>
                  </TabsContent>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              className="order-1 lg:order-2"
            >
              <motion.div 
                className="relative"
                whileInView={{ 
                  scale: 1.05,
                  transition: { duration: 0.5 }
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <motion.div 
                  className="aspect-square rounded-2xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/sargassum-product.jpg"
                    alt="Sargassum sustainable toys"
                    width={1500}
                    height={1500}
                    className="object-cover"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-tr from-teal-600/20 to-transparent mix-blend-overlay"
                    whileHover={{ opacity: 0.8 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                </motion.div>

                {/* Floating product elements with enhanced animations */}
                <motion.div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-lg shadow-lg overflow-hidden border-4 border-white dark:border-slate-800"
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.15, rotate: 15, zIndex: 10 }}
                >
                  <motion.div 
                    className="w-full h-full bg-gradient-to-br from-teal-400 to-emerald-600 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Palmtree className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-5 -left-5 w-24 h-24 rounded-lg shadow-lg overflow-hidden border-4 border-white dark:border-slate-800"
                  animate={{ 
                    y: [0, 15, 0],
                    rotate: [0, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 1,
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.15, rotate: -15, zIndex: 10 }}
                >
                  <motion.div 
                    className="w-full h-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Fish className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </Tabs>
      </motion.div>
    </section>
  )
}
