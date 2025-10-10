import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Memixo",
    description:
      "Plateforme SaaS de capsules temporelles numériques permettant de créer, stocker et partager des souvenirs qui se déverrouillent automatiquement à une date choisie avec chiffrement et gestion des destinataires.",
    image: "/digital-time-capsule-memories-photos-emotional-mom.jpg",
    tags: ["Next.js", "TypeScript", "Scaleway", "Scalingo"],
    category: "Application Web",
    link: "https://memixo.com",
    date: "2024-2025",
  },
  {
    title: "Aurora Now",
    description:
      "Application mobile qui fournit des données en temps réel sur le vent solaire et les aurores boréales avec graphiques interactifs et cartes de couverture.",
    image: "/mobile-app-aurora-borealis-northern-lights-dark-in.jpg",
    tags: ["React Native", "Expo", "TypeScript", "Firebase", "Mapbox"],
    category: "Application Mobile",
    link: "https://auroranow.app",
    date: "Février 2025",
  },
  {
    title: "LabData Carrier",
    description:
      "Plateforme interne pour Carrier permettant de gérer et visualiser les données des essais en laboratoire sur des machines de climatisation avec graphiques en séries temporelles.",
    image: "/data-visualization-dashboard-charts-graphs-laborat.jpg",
    tags: ["React", "TypeScript", "Prisma", "GraphQL", "PostgreSQL"],
    category: "Application Web",
    client: "Carrier",
    date: "2022-2024",
  },
  {
    title: "ActInSpace Toulouse",
    description:
      "Plateforme web et applications mobiles pour l'événement mondial ActInSpace avec outil de discussion type Slack, interface d'administration multi-rôles et CMS custom.",
    image: "/space-event-platform-collaboration-tools-world-map.jpg",
    tags: ["Meteor", "React", "MongoDB"],
    category: "Application Mobile",
    client: "Aerospace Valley",
    link: "https://actinspace.org",
    date: "2017",
  },
  {
    title: "Apps.education.fr",
    description:
      "Plateforme d'applications Open-Source pour l'Éducation Nationale permettant aux enseignants de communiquer et travailler sans recourir aux GAFAM.",
    image: "/education-platform-government-tools-open-source-co.jpg",
    tags: ["Meteor", "React", "MongoDB"],
    category: "Application Web",
    client: "Éducation Nationale",
    link: "https://apps.education.fr",
    date: "2020-2021",
  },
  {
    title: "La Carto'Nomades",
    description:
      "Plateforme collaborative pour une communauté fermée de nomades et voyageurs avec cartes interactives, partage de ressources et géolocalisation personnalisée.",
    image: "/travel-map-community-platform-nomad-landscape-natu.jpg",
    tags: ["React Native", "Expo", "TypeScript", "Supabase"],
    category: "Application Mobile",
    date: "Septembre 2024",
  },
  {
    title: "Migration Make.org",
    description:
      "Migration d'une plateforme React JS vers TypeScript avec réorganisation complète en monorepo, transformation d'un code non documenté en codebase typée et maintenable.",
    image: "/modern-web-platform-typescript-code-architecture-t.jpg",
    tags: ["TypeScript", "React", "Yarn", "Lerna"],
    category: "Site Web",
    client: "Make.org",
    link: "https://make.org",
    date: "2021",
  },
  {
    title: "Marie-Aure",
    description:
      "Site web pour guide naturaliste, photographe et artiste avec galeries d'images interactives, sections dédiées aux services et blog intégré.",
    image: "/photography-portfolio-website-elegant-nature-photo.jpg",
    tags: ["Squarespace"],
    category: "Site Web",
    client: "Marie-Aure",
    link: "https://marie-aure.com",
    date: "2023-2024",
  },
]

export function Portfolio() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Nos projets récents</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Découvrez quelques réalisations qui illustrent notre expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden bg-card border-border group hover:border-primary/50 transition-colors"
            >
              <div className="relative h-48 bg-muted overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="px-2 py-1 text-xs rounded bg-primary/10 text-primary whitespace-nowrap">
                    {project.category}
                  </span>
                </div>
                {project.client && (
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Client:</span> {project.client}
                  </p>
                )}
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs rounded bg-secondary text-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link ? (
                  <Button variant="ghost" className="w-full group/btn" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Voir le projet
                      <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                ) : (
                  <Button variant="ghost" className="w-full" disabled>
                    Projet confidentiel
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
