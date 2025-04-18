"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Leaf, Recycle, BookOpen, Sparkles, Heart, Globe, Users, Zap, Lightbulb, Palmtree, Fish } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeaturesSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  const features = [
    {
      icon: <Leaf className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
      title: "Sustainable Wooden Toys",
      description: "Handcrafted from sustainable walnut wood in Ladakh, our toys are eco-friendly and built to last generations.",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
      title: "Educational Resources",
      description: "Access our comprehensive library of eco-parenting guides, printable activities, and environmental education materials.",
    },
    {
      icon: <Heart className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
      title: "Family Bonding",
      description: "Our toys are designed to bring families together, creating meaningful connections through mindful play.",
    },
    {
      icon: <Recycle className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
      title: "Circular Economy",
      description: "Join our Toy Swap/Return Program to keep toys in circulation longer and reduce environmental impact.",
    },
    {
      icon: <Globe className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
      title: "Environmental Education",
      description: "Each toy comes with stories about nature, ecosystems, and our role in protecting the planet.",
    },
    {
      icon: <Users className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
      title: "Artisan Community",
      description: "Supporting over 50 local artisans in Ladakh, preserving traditional craftsmanship and cultural heritage.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Environmental pattern background with parallax effect */}
      <motion.div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ y }}
      >
        <div className="absolute top-0 left-0 w-full h-full" style={{ 
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </motion.div>
      
      <motion.div 
        className="container mx-auto px-4 relative"
        style={{ opacity }}
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
            <span>Sustainable Toys</span>
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-teal-600 via-emerald-500 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Crafting Sustainable Memories
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-600 dark:text-slate-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            From the pristine landscapes of Ladakh to your home, our sustainable wooden toys bring joy, learning, and environmental consciousness to every family.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group"
            >
              <Card className="h-full border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Environmental corner accent with animation */}
                <motion.div 
                  className="absolute top-0 right-0 w-8 h-8 bg-teal-100 dark:bg-teal-900/30 rounded-tr-lg"
                  whileHover={{ width: "100%", height: "100%", opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                
                <CardHeader>
                  <motion.div 
                    className="p-2 w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <CardTitle className="group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">{feature.title}</CardTitle>
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
        
        {/* Product showcase preview with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <motion.div 
            className="bg-slate-100 dark:bg-slate-900 rounded-xl p-6 shadow-xl"
            whileInView={{ 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              scale: 1.02
            }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((panel) => (
                <motion.div
                  key={panel}
                  className="aspect-square bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden relative"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                  whileInView={{ 
                    y: [0, -10, 0],
                    transition: { 
                      duration: 2, 
                      repeat: Infinity, 
                      repeatType: "reverse",
                      delay: panel * 0.2
                    }
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {panel === 1 ? <Palmtree className="w-8 h-8 text-white" /> :
                       panel === 2 ? <Fish className="w-8 h-8 text-white" /> :
                       <Recycle className="w-8 h-8 text-white" />}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div 
              className="mt-4 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-slate-600 dark:text-slate-400">
                Explore our collection of handcrafted wooden toys and educational resources
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
