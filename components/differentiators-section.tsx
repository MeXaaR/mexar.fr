import { Building2, Layers, TrendingUp, MessageSquare } from 'lucide-react'

export function DifferentiatorsSection() {
  const items = [
    {
      icon: Building2,
      title: "Expérience Grands Comptes",
      description: "Nous avons travaillé avec Airbus, Carrier, l'Éducation Nationale.",
    },
    {
      icon: Layers,
      title: "Stack Moderne Maîtrisée",
      description: "React, Next.js, TypeScript, Node.js - Architecture scalable.",
    },
    {
      icon: TrendingUp,
      title: "Orienté Résultats Business",
      description: "Nous mesurons l'impact : réduction tickets, gains de temps, ROI.",
    },
    {
      icon: MessageSquare,
      title: "Transparence Totale",
      description: "Communication fluide, démos régulières, pas de surprises.",
    },
  ]

  return (
    <section className="py-24 bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Pourquoi choisir Mexar ?</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-[#2D2D2D] rounded-full flex items-center justify-center mx-auto mb-6 text-primary border border-white/5">
                <item.icon size={32} />
              </div>
              <h3 className="text-lg font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
