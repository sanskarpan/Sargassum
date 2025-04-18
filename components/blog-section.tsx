"use client"

import { motion } from "framer-motion"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BlogSection() {
  const blogPosts = [
    {
      title: "The Art of Sustainable Toy Making in Ladakh",
      description: "Discover how our skilled artisans in Ladakh craft sustainable wooden toys using traditional techniques.",
      image: "/placeholder.jpg?height=400&width=600",
      date: "May 15, 2023",
      author: "Rinzin Dorje",
    },
    {
      title: "Eco-Parenting: Raising Environmentally Conscious Children",
      description: "Learn practical tips and activities to help your children develop a deep connection with nature.",
      image: "/placeholder.jpg?height=400&width=600",
      date: "June 2, 2023",
      author: "Sarah Chen",
    },
    {
      title: "The Sargasso Sea: Nature's Classroom",
      description: "Explore how the mysteries of the Sargasso Sea inspire our educational toys and storytelling.",
      image: "/placeholder.jpg?height=400&width=600",
      date: "June 28, 2023",
      author: "Dr. James Wilson",
    },
  ]

  return (
    <section id="blog" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Learning & Inspiration</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Educational resources, eco-parenting tips, and stories from our community of sustainable toy makers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.jpg"}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    {post.date} • {post.author}
                  </div>
                  <Link href="#" className="text-purple-600 dark:text-purple-400 hover:underline text-sm">
                    Read more
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="border-slate-300 dark:border-slate-700">
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
