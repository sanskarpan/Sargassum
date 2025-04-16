"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, BookOpen } from "lucide-react"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ rotate: -10 }}
              animate={{ rotate: 10 }}
              transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            >
              <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </motion.div>
            <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Sargassum
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="#features"
              className="text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#product"
              className="text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors"
            >
              Product
            </Link>
            <Link
              href="#about"
              className="text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="#blog"
              className="text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors"
            >
              Blog
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Button variant="outline" className="border-slate-300 dark:border-slate-700">
              Log in
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
              Get Started
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center space-x-3 md:hidden">
            <ThemeToggle />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-700 dark:text-slate-300">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 space-y-4"
          >
            <Link
              href="#features"
              className="block py-2 text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#product"
              className="block py-2 text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Product
            </Link>
            <Link
              href="#about"
              className="block py-2 text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#blog"
              className="block py-2 text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="pt-2 space-y-3">
              <Button variant="outline" className="w-full border-slate-300 dark:border-slate-700">
                Log in
              </Button>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
