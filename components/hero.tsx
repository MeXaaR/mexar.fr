import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-[#1A1A1A] to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              2 places disponibles
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight tracking-tight">
              Nous transformons vos <span className="text-primary">outils métiers critiques</span> en applications
              modernes qui scallent
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Expert développement fullstack TypeScript • React • Next.js • Node.js pour ETI, PME+ et Grands Comptes
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 h-14">
                <Link href="https://calendar.app.google/UoevkaKLVYfB5wst7" target="_blank">
                  → Discuter de votre projet
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/20 hover:bg-primary/5 text-lg px-8 h-14"
              >
                <Link href="#projets">Voir nos réalisations</Link>
              </Button>
            </div>

            <div className="pt-8 border-t border-border/50 flex flex-wrap gap-6 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold">9+</span> ans d'expérience
              </div>
              <div className="w-1 h-1 rounded-full bg-border" />
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold">50+</span> projets livrés
              </div>
              <div className="w-1 h-1 rounded-full bg-border" />
              <div>Carrier, Airbus, Éducation Nationale</div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            {/* Abstract Architecture Illustration */}
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl opacity-30 animate-pulse" />
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-4 border-b border-border/50 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="ml-auto font-mono text-xs text-muted-foreground">dashboard.tsx</div>
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex gap-2">
                    <span className="text-purple-400">import</span>
                    <span className="text-yellow-300">{`{ useState, useEffect }`}</span>
                    <span className="text-purple-400">from</span>
                    <span className="text-green-300">'react'</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-purple-400">import</span>
                    <span className="text-yellow-300">{`{ DataGrid }`}</span>
                    <span className="text-purple-400">from</span>
                    <span className="text-green-300">'@mexar/ui'</span>
                  </div>
                  <div className="h-4" />
                  <div className="text-blue-400">export default function Dashboard() {`{`}</div>
                  <div className="pl-4 text-muted-foreground">// Optimized for performance</div>
                  <div className="pl-4">
                    <span className="text-purple-400">const</span>
                    <span className="text-yellow-300"> data</span>
                    <span className="text-white"> = </span>
                    <span className="text-blue-400">useRealtimeData</span>
                    <span className="text-yellow-300">()</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">return</span> (
                  </div>
                  <div className="pl-8 text-gray-400">
                    {`<DataGrid 
  data={data} 
  virtualized={true} 
  onSort={handleSort} 
/>`}
                  </div>
                  <div className="pl-4">)</div>
                  <div className="text-blue-400">{'}'}</div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-card border border-border p-4 rounded-xl shadow-xl animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                    <ArrowRight className="w-5 h-5 -rotate-45" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Performance</div>
                    <div className="font-bold text-lg">+40%</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-4 bg-card border border-border p-4 rounded-xl shadow-xl animate-bounce duration-[4000ms]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Sécurité</div>
                    <div className="font-bold text-lg">100%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
