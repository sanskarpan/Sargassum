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
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-[#0a0118] dark:from-slate-950 dark:to-[#0a0118] selection:bg-purple-500/20 selection:text-purple-400">
      <Navbar />

      <main className="relative overflow-hidden">
        {/* Floating animated characters with improved positioning */}
        {/* <div className="fixed top-32 right-[10%] md:right-[15%] lg:right-[20%] z-0 opacity-60 blur-sm">
          <AnimatedCharacter character="wizard" />
        </div> */}
        {/* <div className="fixed bottom-32 left-[5%] md:left-[10%] lg:left-[15%] z-0 opacity-60 blur-sm">
          <AnimatedCharacter character="explorer" />
        </div> */}

        {/* Background gradient effects */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/10 to-transparent blur-3xl" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-pink-500/10 to-transparent blur-3xl" />
        </div>

        {/* Content sections with consistent spacing */}
        <div className="relative z-10">
          <HeroSection />
          <div className="space-y-32">
            <FeaturesSection />
            <ProductSection />
            <AboutSection />
            <BlogSection />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
