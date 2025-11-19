import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from 'lucide-react'

export function ProjectsSection() {
  const projects = [
    {
      title: "LabData Carrier",
      client: "Carrier",
      description:
        "Plateforme de gestion et visualisation de données d'essais laboratoire pour machines de climatisation. Gain de 40% de temps sur l'analyse.",
      image: "/data-visualization-dashboard-charts-graphs-laborat.jpg",
      tags: ["React", "Node.js", "PostgreSQL", "Recharts"],
      link: null,
    },
    {
      title: "Apps.education.fr",
      client: "Éducation Nationale",
      description: "Plateforme d'apps Open-Source pour 1M+ enseignants. Portail national de services numériques.",
      image: "/education-platform-government-tools-open-source-co.jpg",
      tags: ["React", "TypeScript", "Next.js"],
      link: "https://apps.education.fr",
    },
    {
      title: "Migration Make.org",
      client: "Make.org",
      description:
        "Migration complète React JS → TypeScript + refactoring monorepo. Code 100% typé, maintenable par toute l'équipe.",
      image: "/modern-web-platform-migration-technical-architectu.jpg",
      tags: ["TypeScript", "React", "Turborepo"],
      link: "https://make.org",
    },
    {
      title: "ActInSpace",
      client: "Aerospace Valley",
      description:
        "Plateforme événementielle mondiale + apps mobiles pour le hackathon spatial international.",
      image: "/space-event-platform-collaboration-tools-world-map.jpg",
      tags: ["React Native", "Next.js", "Real-time"],
      link: "https://actinspace.org",
    },
    {
      title: "Programme Phoenix",
      client: "Mexar",
      description:
        "Méthodologie de refonte d'outils legacy en 90 jours. Du Code Red au Code Clean.",
      image: "/programme-phoenix-modern-code-refactoring-architectu.jpg",
      tags: ["Refactoring", "Architecture", "Legacy"],
      link: "https://phoenix.mexar.fr",
    },
    {
      title: "Memixo",
      client: "SaaS",
      description: "SaaS de capsules temporelles numériques. Emotion delivered at the right moment.",
      image: "/digital-time-capsule-memories-photos-emotional-mom.jpg",
      tags: ["Next.js", "TypeScript", "Stripe"],
      link: "https://memixo.com",
    },
  ]

  return (
    <section className="py-24 bg-[#2D2D2D] text-white" id="projets">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Projets qui illustrent notre expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#1A1A1A] rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary border border-white/10">
                  {project.client}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed h-10 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link ? (
                  <Link
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                  >
                    Voir le projet <ExternalLink size={14} />
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 cursor-not-allowed">
                    Projet confidentiel
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
