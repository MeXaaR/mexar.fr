"use client"

import { Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function Footer() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = mounted ? resolvedTheme : "light"
  const logoSrc = currentTheme === "dark" ? "/logo-dark.png" : "/logo-light.png"

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src={logoSrc || "/placeholder.svg"}
                alt="mexar logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <h3 className="text-lg font-bold">mexar</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Agence de développement web spécialisée dans la création d'applications SaaS modernes et performantes.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Applications Web
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Applications Mobiles
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Sites Vitrines
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Outils Professionnels
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-foreground transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-foreground transition-colors">
                  Tarifs
                </a>
              </li>
              <li>
                <a href="/mentions-legales" className="hover:text-foreground transition-colors">
                  Mentions légales
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/francois-aubeut/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@mexar.fr"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 mexar. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="/mentions-legales" className="hover:text-foreground transition-colors">
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
