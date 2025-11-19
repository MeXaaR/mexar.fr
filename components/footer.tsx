import Link from "next/link"
import Image from "next/image"
import { Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-8 h-8">
                <Image src="/logo-dark.png" alt="Mexar Logo" fill className="object-contain" />
              </div>
              <span className="text-xl font-bold font-heading">MEXAR</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Expert développement fullstack TypeScript. Nous transformons vos outils métiers critiques en applications
              modernes.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/in/francois-aubeut/"
                target="_blank"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:contact@mexar.fr" className="text-gray-400 hover:text-primary transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link href="https://phoenix.mexar.fr" className="hover:text-primary transition-colors">
                  Programme Phoenix
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  Développement sur-mesure
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  Staff augmentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Entreprise</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link href="#apropos" className="hover:text-primary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#projets" className="hover:text-primary transition-colors">
                  Projets
                </Link>
              </li>
              <li>
                <Link href="mailto:contact@mexar.fr" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Légal</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link href="/mentions-legales" className="hover:text-primary transition-colors">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} MEXAR SARL - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  )
}
