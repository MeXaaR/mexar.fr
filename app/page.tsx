import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProblemSection } from "@/components/problem-section"
import { ApproachSection } from "@/components/approach-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { DifferentiatorsSection } from "@/components/differentiators-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProblemSection />
      <ApproachSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <DifferentiatorsSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}
