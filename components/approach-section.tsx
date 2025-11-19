export function ApproachSection() {
  const steps = [
    {
      number: "01",
      title: "Découverte",
      duration: "2-5 jours",
      items: ["Audit de l'existant", "Cartographie des irritants", "Définition des objectifs mesurables"],
    },
    {
      number: "02",
      title: "Conception",
      duration: "5-10 jours",
      items: ["Architecture technique", "Prototypes validés", "Roadmap précise"],
    },
    {
      number: "03",
      title: "Développement",
      duration: "Itératif",
      items: ["Sprints de 2 semaines", "Démos régulières", "Ajustements en temps réel"],
    },
    {
      number: "04",
      title: "Déploiement",
      duration: "Finalisation",
      items: ["Migration sécurisée", "Documentation complète", "Formation équipe interne"],
    },
  ]

  return (
    <section className="py-24 bg-[#1A1A1A] text-white" id="expertise">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Une méthode éprouvée sur 50+ projets</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-white/10 -z-10" />

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="w-24 h-24 bg-[#2D2D2D] border-4 border-[#1A1A1A] rounded-full flex items-center justify-center text-3xl font-bold text-primary mx-auto mb-6 z-10 relative">
                {step.number}
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 mb-4">
                  {step.duration}
                </span>
                <ul className="text-sm text-gray-400 space-y-2">
                  {step.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
