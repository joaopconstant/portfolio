import { GraduationCap, Briefcase, Code2, Zap } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Sistemas Completos",
    description: "Soluções end-to-end para automatizar processos do dia a dia convencional e empresarial.",
  },
  {
    icon: Zap,
    title: "Frontend Premium",
    description: "Sites institucionais e landing pages com design moderno e foco em conversão.",
  },
  {
    icon: Briefcase,
    title: "Experiência Real",
    description: "Projetos que resolvem problemas reais e geram valor para clientes e usuários.",
  },
  {
    icon: GraduationCap,
    title: "Formação IBMEC",
    description: "Graduado em Full Stack Development pelo IBMEC Rio de Janeiro.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">Sobre mim</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
            Transformando código em soluções que fazem a diferença
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Sou desenvolvedor Full Stack com paixão por criar sistemas que simplificam o cotidiano. Minha abordagem
            combina excelência técnica com visão de negócio, entregando projetos que não apenas funcionam, mas que
            impulsionam resultados.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
