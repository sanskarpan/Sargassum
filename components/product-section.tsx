"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { ArrowRight, BookOpen, ImageIcon, Music, Sparkles } from "lucide-react"

export default function ProductSection() {
  const [activeTab, setActiveTab] = useState("text")
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  const features = {
    text: [
      "Branching storylines that adapt to reader choices",
      "Character development and dialogue generation",
      "Plot suggestions and story structure assistance",
    ],
    image: [
      "Character design and customization",
      "Scene generation with consistent style",
      "Comic panel layout and composition",
    ],
    audio: [
      "Character voice generation with emotion",
      "Ambient sound effects for scene setting",
      "Thematic music that adapts to the narrative",
    ],
  }

  return (
    <section id="product" className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </motion.div>

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
            className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-sm font-medium mb-6"
          >
            <Sparkles className="h-4 w-4 mr-2" />
            <span>Powerful Features</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            Multi-Modal Storytelling
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Create immersive stories that combine text, images, and audio for a truly engaging experience.
          </p>
        </motion.div>

        <Tabs defaultValue="text" className="max-w-5xl mx-auto" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-12">
            {[
              { value: "text", icon: BookOpen, label: "Text" },
              { value: "image", icon: ImageIcon, label: "Image" },
              { value: "audio", icon: Music, label: "Audio" },
            ].map((tab) => (
              <motion.div
                key={tab.value}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <TabsTrigger
                  value={tab.value}
                  className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700 dark:data-[state=active]:bg-purple-900/30 dark:data-[state=active]:text-purple-300"
                >
                  <tab.icon className="h-4 w-4 mr-2" />
                  {tab.label}
                </TabsTrigger>
              </motion.div>
            ))}
          </TabsList>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              key={activeTab + "-content"}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <TabsContent value="text" className="mt-0">
                    <h3 className="text-2xl font-bold mb-4">Dynamic Narrative Generation</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                      Our AI can generate compelling narratives based on your input, helping you overcome writer's block and
                      explore new creative directions.
                    </p>
                    <ul className="space-y-3 mb-8">
                      {features.text.map((feature, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start"
                          onHoverStart={() => setHoveredFeature(index)}
                          onHoverEnd={() => setHoveredFeature(null)}
                          whileHover={{ x: 10 }}
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
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 relative overflow-hidden group">
                        <span className="relative z-10 flex items-center">
                          Try Text Generation
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </Button>
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="image" className="mt-0">
                    <h3 className="text-2xl font-bold mb-4">Visual Storytelling</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                      Transform your ideas into stunning visuals with our AI image generation. Create characters, scenes,
                      and entire comic panels with simple text prompts.
                    </p>
                    <ul className="space-y-3 mb-8">
                      {features.image.map((feature, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start"
                          onHoverStart={() => setHoveredFeature(index)}
                          onHoverEnd={() => setHoveredFeature(null)}
                          whileHover={{ x: 10 }}
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
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 relative overflow-hidden group">
                        <span className="relative z-10 flex items-center">
                          Try Image Generation
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </Button>
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="audio" className="mt-0">
                    <h3 className="text-2xl font-bold mb-4">Immersive Audio</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                      Add another dimension to your stories with AI-generated audio. Create character voices, ambient
                      sounds, and background music that enhance the storytelling experience.
                    </p>
                    <ul className="space-y-3 mb-8">
                      {features.audio.map((feature, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start"
                          onHoverStart={() => setHoveredFeature(index)}
                          onHoverEnd={() => setHoveredFeature(null)}
                          whileHover={{ x: 10 }}
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
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 relative overflow-hidden group">
                        <span className="relative z-10 flex items-center">
                          Try Audio Generation
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700"
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
              key={activeTab + "-image"}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={`/placeholder.jpg?height=600&width=800&type=${activeTab}`}
                      alt={`${activeTab} generation`}
                      width={800}
                      height={600}
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent"></div>
                
                {/* Interactive elements overlay */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    background: [
                      "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                      "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                      "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                    ],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </Tabs>
      </div>
    </section>
  )
}
