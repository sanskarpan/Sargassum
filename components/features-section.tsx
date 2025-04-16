"use client"

import { motion } from "framer-motion"
import { Wand2, Layers, Users, Sparkles, BookOpen, Palette, PenTool, PlayCircle, Share2, Zap, Lightbulb } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeaturesSection() {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      title: "Comic Strip Creation",
      description: "Design beautiful comic strips with our intuitive panel-based editor and AI-powered tools.",
    },
    {
      icon: <PenTool className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      title: "Interactive Storytelling",
      description: "Create branching narratives where readers can choose their own adventure paths.",
    },
    {
      icon: <Palette className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      title: "Character Design",
      description: "Design and customize unique characters with our AI-assisted character creation tools.",
    },
    {
      icon: <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      title: "AI-Powered Generation",
      description: "Generate scenes, dialogue, and story elements with our advanced AI models.",
    },
    {
      icon: <Share2 className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      title: "Community Sharing",
      description: "Share your comics with a vibrant community of creators and readers.",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      title: "Educational Resources",
      description: "Learn comic creation techniques through tutorials and interactive guides.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Comic strip background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
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
            <span>Comic Creation Tools</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            Everything You Need to Create Amazing Comics
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Our platform combines intuitive design with powerful AI to help you create engaging comic strips
            that captivate your audience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow relative overflow-hidden">
                {/* Comic panel corner */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-tr-lg"></div>
                
                <CardHeader>
                  <div className="p-2 w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Comic strip preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-slate-100 dark:bg-slate-900 rounded-xl p-6 shadow-xl">
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((panel) => (
                <motion.div
                  key={panel}
                  className="aspect-square bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden relative"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">{panel}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <p className="text-slate-600 dark:text-slate-400">
                Create your comic strip with our panel-based editor
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
