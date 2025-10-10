import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Phone } from "lucide-react"

const plans = [
  {
    name: "SaaS Simple",
    price: "7 500€",
    description: "Pour lancer votre SaaS rapidement",
    features: [
      "1 fonctionnalité principale",
      "1-2 intégrations tierces (hors Stripe)",
      "Site vitrine séparé",
      "Design responsive et moderne",
      "Base de données sécurisée",
      "14 jours de maintenance corrective",
    ],
  },
  {
    name: "SaaS Avancé",
    price: "12 000€",
    description: "Pour des applications plus complètes",
    features: [
      "2-5 fonctionnalités principales",
      "2-4 intégrations tierces",
      "Site vitrine séparé",
      "Authentification avancée",
      "Dashboard utilisateur et admin",
      "API REST/GraphQL",
      "2 mois de maintenance corrective",
    ],
    popular: true,
  },
  {
    name: "Sur Mesure",
    price: "Sur devis",
    description: "Solutions complexes et personnalisées",
    features: [
      "Architecture évolutive et scalable",
      "Intégrations multiples et complexes",
      "Fonctionnalités avancées illimitées",
      "Tests automatisés et CI/CD",
      "Performance et sécurité optimisées",
      "Documentation technique complète",
      "Maintenance et support étendus",
    ],
    custom: true,
  },
]

export function Pricing() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Tarifs transparents</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Des formules adaptées à vos besoins et votre budget
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`p-8 bg-card border-border relative ${
                plan.popular ? "border-primary shadow-lg shadow-primary/20" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                  Populaire
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2">{plan.price}</div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.custom ? (
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                  <a href="https://calendar.app.google/UoevkaKLVYfB5wst7" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-4 h-4 mr-2" />
                    Planifier un appel
                  </a>
                </Button>
              ) : (
                <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                  <a href="https://calendar.app.google/UoevkaKLVYfB5wst7" target="_blank" rel="noopener noreferrer">
                    Prendre rendez-vous
                  </a>
                </Button>
              )}
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          Tous nos tarifs sont HT. Paiement en plusieurs fois possible.
        </p>
      </div>
    </section>
  )
}
