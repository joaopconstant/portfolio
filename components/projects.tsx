import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Sistema de Gestão Empresarial",
    description:
      "Plataforma completa para gerenciamento de processos internos, controle de estoque e relatórios automatizados.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Node.js"],
    image: "/enterprise-management-dashboard-dark-theme.jpg",
  },
  {
    title: "E-commerce Premium",
    description: "Loja virtual com checkout integrado, painel administrativo e sistema de inventário em tempo real.",
    tags: ["React", "Express", "MongoDB", "Redux"],
    image: "/modern-ecommerce-dark.png",
  },
  {
    title: "Landing Page SaaS",
    description: "Página de alta conversão para produto digital, com animações e otimização para SEO.",
    tags: ["Next.js", "Tailwind", "Vercel"],
    image: "/saas-landing-page-dark-modern.jpg",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">Projetos</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
            Trabalhos selecionados que demonstram minha expertise
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Cada projeto é uma oportunidade de resolver problemas reais e entregar valor tangível. Confira alguns dos
            trabalhos que desenvolvi.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden bg-secondary">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-foreground font-semibold text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-1 bg-secondary text-secondary-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-2">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 text-sm"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 text-sm"
                  >
                    <Github size={16} />
                    Código
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
