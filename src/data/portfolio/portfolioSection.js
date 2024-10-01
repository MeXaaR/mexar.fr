import { actinspace } from "./actinspace";
import { appsEducation } from "./appeducation";
import { carrierWebApp } from "./labdata";
import { lacartonomades } from "./lacartonomades"
import { makeOrgMigration } from "./makeorg";
import { marieAure } from "./marie";

export const portfolioSection = {
  title: "Mon travail",
  tabBtns: [
    {
      id: 1,
      name: "Tous",
      tab: "all",
    },
    {
      id: 2,
      name: "Application Mobile",
      tab: "mobileapp",
    },
    {
      id: 3,
      name: "Application Web",
      tab: "webapp",
    },
    {
      id: 4,
      name: "Site Web",
      tab: "website",
    },
    {
      id: 5,
      name: "Solutions",
      tab: "solutions",
    },
  ],
  items: [
    {
      id: 1,
      image: "lacartonomades-icon.png",
      title: "La Carto'Nomades",
      slug: "lacartonomades",
      tagline: "Projet Communautaire",
      filter: ["all", "mobileapp"],
      details: lacartonomades
    },
    {
      id: 2,
      image: "labdata.jpg",
      title: "LabData Carrier",
      slug: "carrier",
      tagline: "Visualisation de données",
      filter: ["all", "webapp", "solutions"],
      details: carrierWebApp
    },
    {
      id: 3,
      image: "marie.jpg",
      title: "Marie-Aure",
      slug: "marie-aure",
      tagline: "Photographe",
      filter: ["all", "website"],
      details: marieAure
    },
    {
      id: 4,
      image: "actinspace.jpg",
      title: "ActInSpace",
      slug: "actinspace",
      tagline: "Hackathon Mondial",
      filter: ["all", "webapp", "mobileapp", "solutions"],
      details: actinspace
    },
    {
      id: 5,
      image: "appseducation.jpg",
      title: "Apps Education",
      slug: "apps-education",
      tagline: "Plateforme d'Outils Gouvernementaux",
      filter: ["all", "webapp", "solutions"],
      details: appsEducation
    },
    {
      id: 6,
      image: "make.jpg",
      title: "Make.org",
      slug: "makeorg",
      tagline: "Migration Technique",
      filter: ["all", "website", "webapp"],
      details: makeOrgMigration
    },
  ],
};
