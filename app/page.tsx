import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import ProductSection from "@/components/product-section"
import AboutSection from "@/components/about-section"
import BlogSection from "@/components/blog-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedCharacter from "@/components/animated-character"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Navbar />

      <main className="relative overflow-hidden">
        {/* Floating animated characters */}
        <div className="absolute top-20 right-10 md:right-20 lg:right-40 z-0 opacity-70">
          <AnimatedCharacter character="wizard" />
        </div>
        <div className="absolute bottom-40 left-5 md:left-10 lg:left-20 z-0 opacity-70">
          <AnimatedCharacter character="explorer" />
        </div>

        <HeroSection />
        <FeaturesSection />
        <ProductSection />
        <AboutSection />
        <BlogSection />
      </main>

      <Footer />
    </div>
  )
}
