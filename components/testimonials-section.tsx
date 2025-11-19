import { Quote } from 'lucide-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Mexar a su comprendre nos enjeux complexes et livrer une solution robuste qui a considérablement amélioré notre productivité.",
      author: "Directeur Technique",
      company: "Carrier",
    },
    {
      quote:
        "Une expertise technique indéniable et une capacité à s'intégrer rapidement dans nos équipes. Un partenaire de confiance.",
      author: "Chef de Projet",
      company: "Éducation Nationale",
    },
    {
      quote:
        "La migration de notre plateforme s'est faite sans douleur grâce à l'accompagnement précis et professionnel de l'équipe Mexar.",
      author: "CTO",
      company: "Make.org",
    },
  ]

  return (
    <section className="py-24 bg-[#F5F5F5] text-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Ce que disent nos clients</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
              <Quote className="absolute top-6 right-6 text-primary/20 w-10 h-10" />
              <p className="text-gray-600 italic mb-6 relative z-10">"{testimonial.quote}"</p>
              <div>
                <div className="font-bold">{testimonial.author}</div>
                <div className="text-sm text-primary font-medium">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
