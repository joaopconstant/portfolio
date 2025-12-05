"use client";

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "@/components/motion";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20 pb-12 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text */}
        <div className="space-y-8">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="py-2 px-4 bg-primary/10 rounded-full w-fit flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <p className="text-primary font-mono text-sm tracking-wider">
                Disponível para novos projetos
              </p>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance"
            >
              João Pedro Constant
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl sm:text-2xl text-primary font-medium"
            >
              Full Stack Developer
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted-foreground text-lg leading-relaxed max-w-lg"
          >
            Desenvolvo sistemas e aplicações web que transformam ideias em
            soluções digitais. Especializado em criar experiências que conectam
            pessoas e impulsionam negócios.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <a href="#contact">
                Iniciar projeto
                <Mail className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border hover:bg-secondary bg-transparent"
            >
              <a href="#projects">Ver projetos</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-6 pt-4"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:contato@joaopedro.dev"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </motion.div>
        </div>

        {/* Right Column - Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden lg:flex justify-center items-center"
        >
          <div className="relative">
            {/* Code Block Visual */}
            <div className="bg-card border border-border rounded-lg p-6 font-mono text-sm shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <pre className="text-muted-foreground">
                <code>
                  {`const developer = {
  name: "João Pedro Constant",
  role: "Full Stack Developer",
  focus: [
    "Web Applications",
    "Business Systems",
    "Corporate Websites",
    "Landing Pages"
  ],
  available: true
};`}
                </code>
              </pre>
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-primary/10 blur-3xl -z-10 rounded-full" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="flex justify-center mt-16 lg:mt-24 animate-bounce"
      >
        <a
          href="#about"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  );
}
