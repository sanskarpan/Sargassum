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
    <nav className="sticky top-0 z-50 bg-transparent dark:bg-transparent backdrop-blur-none border-b border-slate-200/10 dark:border-slate-800/10">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              initial={{ rotate: -10 }}
              animate={{ rotate: 10 }}
              transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="relative"
            >
              <BookOpen className="h-7 w-7 text-purple-600 dark:text-purple-400" />
              <motion.div
                className="absolute inset-0 bg-purple-400/20 dark:bg-purple-400/10 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <span className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent tracking-tight group-hover:from-pink-500 group-hover:to-purple-600 transition-all duration-300">
              Sargassum
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: "#features", label: "Features" },
              { href: "#product", label: "Product" },
              { href: "#about", label: "About" },
              { href: "#blog", label: "Blog" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] font-medium text-slate-300 hover:text-purple-400 dark:text-slate-300 dark:hover:text-purple-400 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              variant="outline" 
              className="border-slate-700 dark:border-slate-700 text-slate-300 hover:bg-slate-800/50 font-medium px-6"
            >
              Log in
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 font-medium px-6">
              Get Started
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="p-2 text-slate-300 dark:text-slate-300 hover:text-purple-400 dark:hover:text-purple-400 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-6 space-y-6"
          >
            {[
              { href: "#features", label: "Features" },
              { href: "#product", label: "Product" },
              { href: "#about", label: "About" },
              { href: "#blog", label: "Blog" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-[15px] font-medium text-slate-300 hover:text-purple-400 dark:text-slate-300 dark:hover:text-purple-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 space-y-4">
              <Button 
                variant="outline" 
                className="w-full border-slate-700 dark:border-slate-700 text-slate-300 hover:bg-slate-800/50 font-medium"
              >
                Log in
              </Button>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 font-medium">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
