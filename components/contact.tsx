"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Linkedin, Github, CheckCircle } from "lucide-react";
import { FadeInUp, ScaleIn, motion } from "@/components/motion";
import { sendEmail } from "@/lib/resend";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // prevenir comportamento padrão antes de ler os dados

    if (submitting) return; // evita envios duplos
    setSubmitting(true);
    setError(null);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // FormData.get pode retornar null, então convertendo para string segura
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const project = String(formData.get("project") ?? "");
    const message = String(formData.get("message") ?? "");

    try {
      await sendEmail(name, email, project, message);
      setSubmitted(true);
      // opcional: limpar form se desejar
      form.reset();
      // Reset do estado de "mensagem enviada" depois de 3s (como tinha antes)
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err: any) {
      console.error("Erro ao enviar email:", err);
      setError("Erro ao enviar. Tente novamente mais tarde.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Text */}
          <FadeInUp className="space-y-8">
            <div>
              <p className="text-primary font-mono text-sm tracking-wider mb-4">
                Contato
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
                Vamos transformar sua ideia em realidade?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Estou disponível para novos projetos e oportunidades. Entre em
                contato e vamos discutir como posso ajudar a impulsionar seu
                negócio ou projeto.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <motion.a
                href="mailto:joaoconstantdev@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span>joaoconstantdev@gmail.com</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/joaopconstant/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <span>LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://github.com/joaopconstant"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Github className="w-5 h-5 text-primary" />
                </div>
                <span>GitHub</span>
              </motion.a>
            </div>
          </FadeInUp>

          {/* Right Column - Form */}
          <ScaleIn delay={0.2}>
            <div className="bg-card border border-border rounded-lg p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-foreground font-semibold text-xl">
                    Mensagem enviada!
                  </h3>
                  <p className="text-muted-foreground">
                    Obrigado pelo contato. Responderei em breve.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm text-foreground font-medium"
                    >
                      Nome
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Seu nome"
                      required
                      className="bg-secondary border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm text-foreground font-medium"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                      className="bg-secondary border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="project"
                      className="text-sm text-foreground font-medium"
                    >
                      Tipo de Projeto
                    </label>
                    <Input
                      id="project"
                      name="project"
                      placeholder="Ex: Sistema de gestão, Landing page..."
                      className="bg-secondary border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm text-foreground font-medium"
                    >
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Descreva seu projeto ou como posso ajudar..."
                      rows={4}
                      required
                      className="bg-secondary border-border resize-none"
                    />
                  </div>

                  {error && <p className="text-sm text-red-500">{error}</p>}

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    {submitting ? "Enviando..." : "Enviar mensagem"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
}
