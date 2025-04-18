import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import WhyPlayMatters from "@/components/why-play-matters"
import MarketSegmentation from "@/components/market-segmentation"
import ToysSection from "@/components/toys-section"
import BridgingGenerations from "@/components/bridging-generations"
import ClimateEducation from "@/components/climate-education"
import BlogSection from "@/components/blog-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      <main className="relative">
        {/* Background decorative elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl" />
        </div>

        {/* Content sections with enhanced spacing */}
        <div className="relative z-10">
          <HeroSection />
          <div className="space-y-32 md:space-y-40">
            <AboutSection />
            <WhyPlayMatters />
            <MarketSegmentation />
            <ToysSection />
            <BridgingGenerations />
            <ClimateEducation />
            <BlogSection />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
