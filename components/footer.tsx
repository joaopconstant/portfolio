"use client";

import { FadeIn } from "@/components/motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FadeIn>
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} João Pedro Constant. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Desenvolvido com <span className="text-primary">Next.js</span> e
            hospedado na <span className="text-primary">Vercel</span>
          </p>
        </div>
      </footer>
    </FadeIn>
  );
}
