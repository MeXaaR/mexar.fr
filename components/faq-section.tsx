import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "Quels types de projets prenez-vous ?",
      answer:
        "Nous sommes spécialisés dans les applications web complexes, les outils métiers internes, les plateformes SaaS et les refontes d'applications legacy. Nous travaillons principalement avec des ETI et Grands Comptes.",
    },
    {
      question: "Quel est votre délai moyen de réalisation ?",
      answer:
        "Cela dépend de la complexité du projet. Une mission de Staff Augmentation peut démarrer en 48h. Un projet de refonte type Programme Phoenix dure 90 jours. Un développement sur-mesure varie généralement entre 2 et 6 mois.",
    },
    {
      question: "Travaillez-vous en remote ou sur site ?",
      answer:
        "Nous travaillons principalement en remote, ce qui nous permet d'être plus efficaces et flexibles. Nous nous déplaçons ponctuellement pour les ateliers de cadrage ou les lancements importants si nécessaire.",
    },
    {
      question: "Quelle est votre stack technique principale ?",
      answer:
        "Nous sommes experts sur l'écosystème JavaScript/TypeScript moderne : React, Next.js, Node.js. Nous utilisons également PostgreSQL, Supabase, et les architectures Serverless.",
    },
    {
      question: "Proposez-vous de la maintenance post-lancement ?",
      answer:
        "Oui, nous proposons des contrats de maintenance (TMA) pour assurer la pérennité, la sécurité et les évolutions de vos applications après leur mise en production.",
    },
    {
      question: "Le Programme Phoenix est-il adapté à mon outil ?",
      answer:
        "Si votre outil est lent, buggé, difficile à maintenir et génère de la frustration chez vos utilisateurs, le Programme Phoenix est fait pour vous. Nous commençons toujours par un audit pour confirmer la faisabilité.",
    },
  ]

  return (
    <section className="py-24 bg-[#F5F5F5] text-black">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Questions fréquentes</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-bold hover:text-primary hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
