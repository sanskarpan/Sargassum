import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, Github, Twitter, Instagram, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Sargassum
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Empowering storytellers with AI-driven tools for creating interactive comics and dynamic narratives.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="#"
                className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#features"
                  className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#product"
                  className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#blog"
                  className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">Stay updated with the latest news and features.</p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="border-slate-300 dark:border-slate-700" />
              <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 md:mb-0">
            © 2023 Sargassum. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="#"
              className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 text-sm"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 text-sm"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
