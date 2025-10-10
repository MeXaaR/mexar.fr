import { Zap, Shield, Rocket } from "lucide-react"
import { Card } from "@/components/ui/card"

const benefits = [
  {
    icon: Zap,
    title: "Performance optimale",
    description: "Code optimisé et architecture moderne pour des applications ultra-rapides qui convertissent.",
  },
  {
    icon: Shield,
    title: "Qualité garantie",
    description: "Tests rigoureux, code maintenable et bonnes pratiques pour une solution pérenne.",
  },
  {
    icon: Rocket,
    title: "Livraison rapide",
    description: "Méthodologie agile et communication transparente pour un déploiement dans les délais.",
  },
]

export function ValueProposition() {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Pourquoi choisir mexar ?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Une expertise technique au service de votre réussite
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="p-8 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
