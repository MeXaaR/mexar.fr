import { Card } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    title: "Découverte",
    description: "Analyse de vos besoins, objectifs et contraintes pour définir la solution idéale.",
  },
  {
    number: "02",
    title: "Conception",
    description: "Architecture technique, maquettes et validation du périmètre fonctionnel.",
  },
  {
    number: "03",
    title: "Développement",
    description: "Itérations agiles avec démos régulières et ajustements en temps réel.",
  },
  {
    number: "04",
    title: "Déploiement",
    description: "Mise en production sécurisée, formation et accompagnement post-lancement.",
  },
]

export function Methodology() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Une méthodologie éprouvée</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Un processus structuré pour garantir le succès de votre projet
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={step.number} className="p-6 bg-card border-border relative">
              <div className="text-6xl font-bold text-primary/10 mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
