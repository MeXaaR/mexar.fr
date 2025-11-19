import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail } from 'lucide-react'

export function FinalCtaSection() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
          Prêt à moderniser vos outils métiers ?
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
          Discutons de vos défis techniques et voyons comment nous pouvons vous aider à atteindre vos objectifs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 text-lg px-8 h-14">
            <Link href="https://calendar.app.google/UoevkaKLVYfB5wst7" target="_blank">
              Réserver un appel de 30 min
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10 text-lg px-8 h-14"
          >
            <Link href="mailto:contact@mexar.fr">
              <Mail className="mr-2 h-5 w-5" /> Envoyer un email
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
