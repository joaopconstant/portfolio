"use client";

import { ExternalLink, Github } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/motion";

const projects = [
  {
    title: "Budget Manager",
    description:
      "Sistema de gestão de gastos pessoais, com controle de gastos e receitas, e relatórios de gastos.",
    tags: ["Next.js", "Tailwind", "Vercel"],
    image: "/budget-manager.png",
    link: "budget-manager-coral.vercel.app",
    github: "https://github.com/joaopconstant/budget_manager",
  },
  {
    title: "MRX Rodas e Rodízios",
    description:
      "Site institucional para a empresa MRX Rodas e Rodízios, com informações sobre a empresa, produtos e serviços.",
    tags: ["Vite", "Tailwind", "Vercel"],
    image: "/mrx-website.png",
    link: "https://mrxrodaserodizios.com.br",
    github: null,
  },
  {
    title: "Sistema de Gestão Empresarial",
    description:
      "Plataforma  para gerenciamento de processos internos, controle de estoque e relatórios para a empresa Avizz.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Node.js"],
    image: "/maquininhas-avizz.png",
    link: "https://avizz.com.br",
    github: null,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeInUp className="max-w-2xl mb-16">
          <p className="text-primary text-sm tracking-wider mb-4">Projetos</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
            Projetos que desenvolvi recentemente
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Cada projeto é uma oportunidade de resolver problemas reais e
            entregar valor tangível. Confira alguns dos trabalhos que
            desenvolvi.
          </p>
        </FadeInUp>

        {/* Projects Grid */}
        <StaggerContainer className="grid lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <article className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 h-full">
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
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-2">
                    <a
                      href={project.link}
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 text-sm"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 text-sm"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
