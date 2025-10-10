import { Card } from "@/components/ui/card"
import { Globe, Database, Smartphone, Cog, Zap, Shield, Rocket } from "lucide-react"

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

const services = [
  {
    icon: Globe,
    title: "Applications Web",
    description: "Sites vitrines, plateformes SaaS, dashboards admin avec React, Next.js et TypeScript.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "APIs & Backend",
    description: "APIs REST/GraphQL robustes, architecture serverless et intégrations tierces.",
    technologies: ["Node.js", "PostgreSQL", "Prisma", "tRPC"],
  },
  {
    icon: Smartphone,
    title: "Progressive Web Apps",
    description: "Expériences mobiles natives avec les technologies web modernes.",
    technologies: ["PWA", "Service Workers", "Offline-first"],
  },
  {
    icon: Cog,
    title: "Optimisation & Refactoring",
    description: "Amélioration de performances, migration technique et modernisation de code legacy.",
    technologies: ["Performance", "SEO", "Accessibility"],
  },
]

export function Services() {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Pourquoi choisir mexar ?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Une expertise technique au service de votre réussite
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
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

        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Nos services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Des solutions complètes pour tous vos besoins en développement web
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="p-8 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-foreground border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
