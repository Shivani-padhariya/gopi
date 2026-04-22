// "use client"

import { LoadingScreen } from "@/components/loading-screen"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { BlogSection } from "@/components/blog-section"

import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <SkillsSection />
        <ContactSection />
        <BlogSection />
      </main>
      <Footer />
    </>
  )
}

