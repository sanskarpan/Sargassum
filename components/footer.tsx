import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, Github, Twitter, Instagram, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Sargassum Play
              </span>
            </Link>
            <p className="text-foreground/70 mb-6">
              Crafting eco-friendly wooden toys from the heart of Ladakh, designed for mindful play and environmental education.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="#"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Construction Sets
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Educational Toys
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Dolls & Miniatures
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Puzzles
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Infant Toys
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Artisan Stories
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Connected</h3>
            <p className="text-foreground/70 mb-4">
              Subscribe to our newsletter for updates on new products and sustainability tips.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-background border-border"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/60 text-sm">
              © {new Date().getFullYear()} Sargassum Play. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
