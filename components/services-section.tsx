import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Flame, Monitor, Users, Check } from 'lucide-react'

export function ServicesSection() {
  return (
    <section className="py-24 bg-[#F5F5F5] text-black" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Nos services</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Card 1 - Programme Phoenix */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-primary relative flex flex-col">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
              Offre Phare
            </div>
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
              <Flame size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Programme Phoenix</h3>
            <p className="text-primary font-medium mb-4">Du Code Red au Code Clean en 90 jours</p>
            <p className="text-gray-600 mb-8 text-sm leading-relaxed">
              Refonte accélérée d'outils métiers vieillissants avec garantie de réduction de 50% des tickets support.
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Audit complet de l'outil legacy",
                "Migration vers stack moderne",
                "Documentation & transfert d'équipe",
                "Garantie -30% tickets ou remboursé",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <div className="text-2xl font-bold mb-4">Sur éligibilité</div>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                <Link href="https://phoenix.mexar.fr" target="_blank">
                  → Découvrir le Programme
                </Link>
              </Button>
            </div>
          </div>

          {/* Card 2 - Sur Mesure */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col">
            <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6 text-gray-800">
              <Monitor size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Outils Métiers Sur-Mesure</h3>
            <p className="text-gray-500 font-medium mb-4">Applications web internes</p>
            <p className="text-gray-600 mb-8 text-sm leading-relaxed">
              Développement d'applications web internes adaptées à vos process spécifiques et intégrées à votre SI.
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Dashboards & CRUD avancés",
                "Intégrations API complexes",
                "Architecture scalable",
                "Stack moderne (React, Next.js)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <div className="text-2xl font-bold mb-4">Sur devis</div>
              <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                <Link href="https://calendar.app.google/UoevkaKLVYfB5wst7" target="_blank">
                  → Discuter de votre besoin
                </Link>
              </Button>
            </div>
          </div>

          {/* Card 3 - Staff Augmentation */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col">
            <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6 text-gray-800">
              <Users size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Renfort Technique Senior</h3>
            <p className="text-gray-500 font-medium mb-4">Staff Augmentation</p>
            <p className="text-gray-600 mb-8 text-sm leading-relaxed">
              Un développeur fullstack senior intégré à votre équipe pour accélérer vos projets critiques.
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Expert TypeScript / React / Node.js",
                "Autonome, bonnes pratiques",
                "Flexible (remote ou sur site)",
                "Communication fluide",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <div className="text-2xl font-bold mb-4">
                À partir de 600 € <span className="text-sm font-normal text-gray-500">/jour</span>
              </div>
              <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                <Link href="https://calendar.app.google/UoevkaKLVYfB5wst7" target="_blank">
                  → Prendre un appel
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
