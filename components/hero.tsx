import { Button } from "@/components/ui/button"
import { ArrowRight, Code2 } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

      <div className="relative max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border text-sm text-muted-foreground mb-4">
          <Code2 className="w-4 h-4" />
          <span>Développeur TypeScript Fullstack</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
          Transformez vos idées en <span className="text-primary">applications web performantes</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
          Experts en développement fullstack TypeScript, nous créons des solutions web modernes, scalables et optimisées
          pour votre croissance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button size="lg" className="text-lg px-8 py-6 group" asChild>
            <Link href="https://calendar.app.google/UoevkaKLVYfB5wst7" target="_blank" rel="noopener noreferrer">
              Démarrer votre projet
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent" asChild>
            <Link href="#portfolio">Voir nos réalisations</Link>
          </Button>
        </div>

        <div className="pt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span>Disponible pour nouveaux projets</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-border" />
          <div className="hidden sm:flex items-center gap-2">
            <span>Réponse sous 24h</span>
          </div>
        </div>
      </div>
    </section>
  )
}
