import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-bold text-balance">Prêt à lancer votre projet ?</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
          Discutons de vos besoins et voyons comment nous pouvons vous aider à concrétiser votre vision.
        </p>
        <div className="flex items-center justify-center pt-4">
          <Button size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
            <a href="https://calendar.app.google/UoevkaKLVYfB5wst7" target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 w-5 h-5" />
              Planifier un appel
            </a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground pt-4">
          Réponse garantie sous 24h • Premier échange gratuit et sans engagement
        </p>
      </div>
    </section>
  )
}
