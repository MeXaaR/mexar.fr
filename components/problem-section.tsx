import { AlertTriangle, Users, BarChart3 } from 'lucide-react'

export function ProblemSection() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Outils métiers vieillissants",
      description: "Votre app legacy accumule de la dette technique, ralentit vos équipes et devient impossible à maintenir.",
    },
    {
      icon: Users,
      title: "Dépendance technique dangereuse",
      description: "Vous dépendez d'une seule personne qui connaît le code historique (Bus Factor critique).",
    },
    {
      icon: BarChart3,
      title: "Support débordé",
      description: "Vos équipes sont étouffées par des tickets répétitifs dus aux bugs et à l'instabilité de l'outil.",
    },
  ]

  return (
    <section className="py-24 bg-[#F5F5F5] text-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Les défis que vous rencontrez</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                <problem.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl font-bold max-w-3xl mx-auto">
            Nous avons résolu ces problèmes pour <span className="text-primary">Carrier</span>,{" "}
            <span className="text-primary">l'Éducation Nationale</span> et <span className="text-primary">Airbus</span>.
          </p>
        </div>
      </div>
    </section>
  )
}
