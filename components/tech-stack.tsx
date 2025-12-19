"use client";

import type React from "react";
import { GrMysql } from "react-icons/gr";
import { GoDatabase } from "react-icons/go";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/motion";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiMariadb,
  SiGit,
  SiGithub,
  SiVercel,
  SiVite,
  SiDigitalocean,
} from "react-icons/si";

const technologies = {
  frontend: [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Vite", icon: SiVite },
    { name: "Redux", icon: SiRedux },
  ],
  backend: [
    { name: "TypeScript", icon: SiTypescript },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "REST APIs", icon: GoDatabase },
  ],
  database: [
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MySQL", icon: GrMysql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "MariaDB", icon: SiMariadb },
  ],
  dev: [
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "DigitalOcean", icon: SiDigitalocean },
    { name: "Vercel", icon: SiVercel },
  ],
};

function TechItem({
  name,
  icon: Icon,
}: {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group">
      <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
      <span className="text-sm text-foreground font-medium">{name}</span>
    </div>
  );
}

export function TechStack() {
  return (
    <section id="stack" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeInUp className="max-w-2xl mb-16">
          <p className="text-primary font-mono text-sm tracking-wider mb-4">
            Tech Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
            Tecnologias que domino para entregar seu projeto
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Stack moderna e robusta, focada em TypeScript e no ecossistema
            JavaScript para garantir performance, escalabilidade e
            manutenibilidade.
          </p>
        </FadeInUp>

        {/* Tech Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Frontend */}
          <StaggerItem className="space-y-4">
            <h3 className="text-foreground font-semibold text-lg border-b border-border pb-2">
              Frontend
            </h3>
            <div className="flex flex-col gap-2">
              {technologies.frontend.map((tech) => (
                <TechItem key={tech.name} {...tech} />
              ))}
            </div>
          </StaggerItem>

          {/* Backend */}
          <StaggerItem className="space-y-4">
            <h3 className="text-foreground font-semibold text-lg border-b border-border pb-2">
              Backend
            </h3>
            <div className="flex flex-col gap-2">
              {technologies.backend.map((tech) => (
                <TechItem key={tech.name} {...tech} />
              ))}
            </div>
          </StaggerItem>

          {/* Database */}
          <StaggerItem className="space-y-4">
            <h3 className="text-foreground font-semibold text-lg border-b border-border pb-2">
              Databases
            </h3>
            <div className="flex flex-col gap-2">
              {technologies.database.map((tech) => (
                <TechItem key={tech.name} {...tech} />
              ))}
            </div>
          </StaggerItem>

          {/* Tools */}
          <StaggerItem className="space-y-4">
            <h3 className="text-foreground font-semibold text-lg border-b border-border pb-2">
              Dev & Cloud
            </h3>
            <div className="flex flex-col gap-2">
              {technologies.dev.map((tech) => (
                <TechItem key={tech.name} {...tech} />
              ))}
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
