"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Users } from "lucide-react"

export default function BridgingGenerations() {
  return (
    <section id="bridging-generations" className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bridging Generations Through Play</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              Play is a universal language that connects all ages. Our sustainable wooden toys create meaningful opportunities for intergenerational bonding and learning.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 mr-4 mt-1">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Meaningful Connections</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Grandparents & aging adults often have more time to bond with children, but struggle to find meaningful ways to connect.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 mr-4 mt-1">
                  <Heart className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Mutual Benefits</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Intergenerational play reduces loneliness, enhances cognitive function in seniors, and nurtures empathy in children.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 mr-4 mt-1">
                  <ArrowRight className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Lasting Memories</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Our toys & puzzles bridge this gap, helping seniors stay mentally active while creating lasting memories with their grandchildren.
                  </p>
                </div>
              </div>
            </div>
            
            <Button className="bg-gradient-to-r from-teal-600 to-emerald-500 hover:from-teal-700 hover:to-emerald-600">
              Discover Intergenerational Toys
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/bridging.svg?height=800&width=800"
                  alt="Intergenerational play with Sargassum toys"
                  width={800}
                  height={800}
                  className="object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-teal-100 dark:bg-teal-900/30"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-emerald-100 dark:bg-emerald-900/30"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 