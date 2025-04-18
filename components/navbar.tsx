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
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              initial={{ rotate: -10 }}
              animate={{ rotate: 10 }}
              transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="relative"
            >
              <BookOpen className="h-7 w-7 text-primary" />
              <motion.div
                className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <span className="font-bold text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-tight group-hover:from-accent group-hover:to-primary transition-all duration-300">
              Sargassum
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: "#about", label: "About" },
              { href: "#why-play-matters", label: "Why Play Matters" },
              { href: "#market-segmentation", label: "Our Products" },
              { href: "#toys", label: "Toys" },
              { href: "#bridging-generations", label: "Bridging Generations" },
              { href: "#climate-education", label: "Climate Education" },
              { href: "#blog", label: "Blog" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] font-medium text-foreground/80 hover:text-primary dark:text-foreground/80 dark:hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-4 py-4 border-t border-border"
          >
            {[
              { href: "#about", label: "About" },
              { href: "#why-play-matters", label: "Why Play Matters" },
              { href: "#market-segmentation", label: "Our Products" },
              { href: "#toys", label: "Toys" },
              { href: "#bridging-generations", label: "Bridging Generations" },
              { href: "#climate-education", label: "Climate Education" },
              { href: "#blog", label: "Blog" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-foreground/80 hover:text-primary dark:text-foreground/80 dark:hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}
