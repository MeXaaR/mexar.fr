import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Quels sont vos délais de livraison ?",
    answer:
      "Les délais varient selon la complexité du projet. Un site vitrine prend généralement 2-3 semaines, une application web complète 6-12 semaines. Nous fournissons toujours un planning détaillé avant de commencer.",
  },
  {
    question: "Proposez-vous de la maintenance après livraison ?",
    answer:
      "Oui, tous nos projets incluent une période de support gratuit (30 à 90 jours selon la formule). Nous proposons également des contrats de maintenance mensuelle pour les mises à jour et évolutions.",
  },
  {
    question: "Travaillez-vous avec des designers ?",
    answer:
      "Nous pouvons gérer le design nous-mêmes pour des projets simples, ou collaborer avec votre designer. Nous travaillons aussi avec un réseau de designers freelance si besoin.",
  },
  {
    question: "Quelles technologies utilisez-vous ?",
    answer:
      "Nous nous spécialisons dans l'écosystème TypeScript moderne : Next.js, React, Node.js, PostgreSQL, Prisma, Tailwind CSS. Nous choisissons toujours les technologies les plus adaptées à votre projet.",
  },
  {
    question: "Comment se déroule la communication pendant le projet ?",
    answer:
      "Communication régulière via Slack/email, points hebdomadaires en visio, et accès à un espace projet partagé. Vous suivez l'avancement en temps réel et pouvez donner votre feedback à chaque étape.",
  },
  {
    question: "Puis-je modifier le projet en cours de route ?",
    answer:
      "Oui, la méthodologie agile permet des ajustements. Les modifications mineures sont incluses, les changements majeurs peuvent impacter le planning et le budget (discuté en amont).",
  },
]

export function FAQ() {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Questions fréquentes</h2>
          <p className="text-lg text-muted-foreground text-pretty">Tout ce que vous devez savoir avant de démarrer</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
