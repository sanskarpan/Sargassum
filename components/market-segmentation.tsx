"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Baby, BookOpen, Building2, Palette, Puzzle, Truck } from "lucide-react"

export default function MarketSegmentation() {
  return (
    <section id="market-segmentation" className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Market Focus</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            We create toys tailored to different developmental stages and interests, ensuring meaningful play experiences for every child.
          </p>
        </motion.div>

        <Tabs defaultValue="age" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 mb-12">
            <TabsTrigger value="age">Age Groups</TabsTrigger>
            <TabsTrigger value="product">Product Types</TabsTrigger>
          </TabsList>
          
          <TabsContent value="age">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <div className="p-2 w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-4">
                    <Baby className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <CardTitle>0-12 Months</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400">
                    Toys designed for infants, focusing on sensory development and safety. Our grasping toys and teethers are perfect for this stage.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <div className="p-2 w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <CardTitle>1-3 Years</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400">
                    Toys for toddlers that emphasize motor skills and early learning. Our stacking puzzles and dolls are ideal for this developmental stage.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <div className="p-2 w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-4">
                    <Palette className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <CardTitle>3-5 Years</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400">
                    Toys for preschoolers focusing on creativity and basic educational concepts. Our geography and animal pretend play sets are perfect for this age.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <div className="p-2 w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <CardTitle>5-12 Years</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400">
                    Toys that support more complex play and learning, such as construction sets and educational toys that challenge growing minds.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <div className="p-2 w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-4">
                    <Truck className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <CardTitle>12+ Years</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400">
                    Products for older children and adults, including more advanced playthings and collectibles that promote family bonding.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="product">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <div className="p-2 w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <CardTitle>Construction Sets</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400">
                    Our stacking stones and building blocks foster creativity and problem-solving skills while developing spatial awareness.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <div className="p-2 w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <CardTitle>Educational Toys</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400">
                    Toys that emphasize learning and development, including puzzles and games that teach about geography, animals, and nature.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <div className="p-2 w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-4">
                    <Palette className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <CardTitle>Dolls & Miniatures</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400">
                    Our dolls from Ladakh and miniature sets encourage imaginative play and storytelling while connecting children to cultural heritage.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <div className="p-2 w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-4">
                    <Puzzle className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <CardTitle>Puzzles</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400">
                    Our stacking puzzles featuring birds and animals of Ladakh promote cognitive skills and introduce children to biodiversity.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <div className="p-2 w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-4">
                    <Baby className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <CardTitle>Infant Toys</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400">
                    Our grasping toys and teethers are designed for the youngest children, focusing on sensory development and safety.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
} 