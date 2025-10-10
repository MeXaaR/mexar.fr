import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Philipe",
    role: "Make.org",
    content:
      "François est intervenu chez nous dans le cadre d'une migration d'application. Professionnel et impliqué, il a su comprendre et prendre en main une application complexe en peu de temps. Avec son expérience et ses compétences techniques, il nous a aidés à migrer l'un de nos produits vers une architecture robuste.",
    rating: 5,
  },
  {
    name: "Olivier Heintz",
    role: "Chef de projet, DINUM",
    content:
      "François est un bâtisseur d'équipe. Il communique clairement pour faire avancer le projet et résoudre les problèmes. Il est rapide en termes de développement et de déploiement. Il est impliqué dans le projet, tant sur les aspects techniques, fonctionnels qu'éthiques.",
    rating: 5,
  },
  {
    name: "Sylvain Chauffaille",
    role: "PDG, Tech Ex Machina",
    content:
      "François est très professionnel, à l'écoute des besoins du client. Il travaille rapidement tout en s'efforçant constamment de livrer des résultats de qualité. Des récapitulatifs et des commits réguliers sont effectués pour assurer un suivi rigoureux du projet.",
    rating: 5,
  },
  {
    name: "Fabien Doliveux",
    role: "PDG, Partitio",
    content:
      "François travaille avec une grande réactivité et professionnalisme. En plus de ses solides compétences techniques, nous apprécions également qu'il soit toujours proactif, impliqué pour assurer le succès des différents projets. C'est un véritable partenariat... Je recommande sans hésitation !",
    rating: 5,
  },
  {
    name: "Quentin Binot",
    role: "Chef de projet, Carrier",
    content:
      "Je recommande vivement François, avec qui nous avons travaillé pendant plus d'un an sur un logiciel métier. François a rapidement saisi les complexités de notre secteur et a su prendre du recul pour proposer des solutions techniques souvent plus efficaces. Disponible, agile et réactif.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Ce que disent nos clients</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            La satisfaction client au cœur de chaque projet
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="p-8 bg-card border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
