"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Heart, MessageSquare, Palette, Users, Zap } from "lucide-react"

export default function WhyPlayMatters() {
  const benefits = [
    {
      icon: <Zap className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
      title: "Motor Skills",
      description: "Builds coordination & movement through physical play activities.",
    },
    {
      icon: <Brain className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
      title: "Cognitive Skills",
      description: "Sparks problem-solving & critical thinking through interactive challenges.",
    },
    {
      icon: <Heart className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
      title: "Social & Emotional Skills",
      description: "Encourages empathy & resilience through collaborative play experiences.",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
      title: "Language Skills",
      description: "Boosts communication & storytelling through imaginative play scenarios.",
    },
    {
      icon: <Palette className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
      title: "Creativity",
      description: "Fuels imagination & innovation through open-ended play opportunities.",
    },
    {
      icon: <Users className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
      title: "Self-Identity",
      description: "Strengthens confidence & cultural awareness through meaningful play experiences.",
    },
  ]

  return (
    <section id="why-play-matters" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Power of Play</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Between 0-5 years, play shapes how a child thinks, moves, and connects with the world. Our sustainable wooden toys nurture these essential developmental skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="p-2 w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 