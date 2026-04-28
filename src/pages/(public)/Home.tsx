import { Button } from '../../components/ui/button.tsx'
import { motion } from 'framer-motion'
import { Clock, ShieldCheck, ArrowRight } from 'lucide-react'
import heroBg from '../../assets/hero-bg.png'
import cardPonto from '../../assets/card-ponto2.png'
import cardAcesso from '../../assets/card-acesso.png'
import { differentials } from '../../data/mockData.ts'

import CTASection from '../../components/layout/ctaSection.tsx'
import { Badge } from '../../components/ui/badge.tsx'

// ─── Main product cards (below hero) ─────────────────────────────────────────
const mainCards = [
  {
    id: 'ponto',
    icon: Clock,
    tag: 'Para Gestores e RH',
    title: 'Gestão de Ponto & RH',
    description:
      'Segurança jurídica e automação total. Controle jornadas, extras e ausências com tecnologia 100% adequada à Portaria 671.',
    image: cardPonto,
    cta: 'CONHECER SOLUÇÕES DE PONTO',
    link: '/controle-de-ponto',
  },
  {
    id: 'acesso',
    icon: ShieldCheck,
    tag: 'Para Condomínios, Escolas e Indústrias',
    title: 'Segurança & Acesso',
    description:
      'Proteção e fluxo inteligente para o seu patrimônio. Gestão biométrica e facial para condomínios, escolas e áreas restritas.',
    image: cardAcesso,
    cta: 'CONHECER CONTROLE DE ACESSO',
    link: '/controle-de-acesso',
  },
]

// ─── Home Page ────────────────────────────────────────────────────────────────
export const Home = () => {
  return (
    <div className="min-h-screen bg-neutral-0">
      {/* ═══════════════════════════════════════════════════════ HERO */}
      <section className="relative w-full flex flex-col items-center overflow-hidden gap-8 pb-6 pt-34">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-primary-4/95 via-primary-4/88 to-primary-3/82" />

        {/* Radial glow top-right */}
        <div className="absolute -top-40 -right-40 w-150 h-150 rounded-full pointer-events-none bg-[radial-gradient(circle,oklch(0.55_0.22_259.7/0.25)_0%,transparent_70%)]" />

        {/* Bottom fade to white — agora cobre só a área dos cards */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-linear-to-t from-neutral-0 via-neutral-0/40 to-transparent" />

        {/* ── Hero content ── */}
        <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-10 w-full flex items-center justify-center">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: 'easeOut' }}
            className="mb-6"
          >
            <h1 className="text-neutral-0 tracking-tight">
              <span className="font-medium text-xl md:text-2xl lg:text-3xl">
                a evolução do controle e da gestão
              </span>{' '}
              <br />{' '}
              <span className="font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase">
                na{' '}
                <span className="relative inline-block text-primary-1">
                  sua empresa
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.7, delay: 0.85, ease: 'easeOut' }}
                    className="absolute -bottom-1 left-0 right-0 h-0.5 origin-left rounded-full bg-primary-0"
                  />
                </span>
              </span>
            </h1>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════════ CARDS */}
        <div className="container mx-auto px-6 md:px-8 lg:px-10 w-full pb-20 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {mainCards.map((card, i) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="h-full w-full"
                >
                  <a href={card.link} className="block h-full">
                    <div className="relative group z-10 flex flex-col h-full rounded-3xl overflow-hidden bg-linear-to-br from-neutral-10 to-neutral-0 shadow-lg hover:shadow-2xl hover:shadow-primary-4 transition-all duration-400 hover:-translate-y-2 cursor-pointer">
                      {/* Background image */}
                      <div>
                        <div className="h-54 sm:h-84">
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-full object-cover opacity-100 group-hover:scale-105 group-hover:brightness-80 transition-all duration-500"
                          />
                        </div>
                        {/* <div className="absolute inset-0 bg-linear-to-t from-neutral-100/60 via-transparent to-transparent pointer-events-none" /> */}
                      </div>

                      {/* Content */}
                      <div className="relative z-10 flex flex-col gap-4 h-full p-7 lg:p-9">
                        {/* Top: icon + tag */}
                        <Badge className="w-fit" variant="primaryGhost">
                          <Icon className="size-4 md:size-5 " />
                          <span className="text-[11px] font-bold uppercase tracking-widest  line-clamp-2">
                            {card.tag}
                          </span>
                        </Badge>

                        {/* Bottom: text + CTA */}
                        <div className="space-y-4">
                          <h3 className="text-2xl lg:text-3xl font-bold text-primary-4 leading-snug tracking-tight">
                            {card.title}
                          </h3>
                          <p className="text-sm lg:text-base text-primary-4 leading-relaxed line-clamp-3">
                            {card.description}
                          </p>
                          <Button variant="cta" size="md" className="w-full justify-center">
                            {card.cta}
                            <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ INSTITUCIONAL */}
      <section
        className="py-24 md:py-36 bg-neutral-0"
        data-testid="institutional-section"
        aria-label="Sobre a Mig Control"
      >
        <div className="container mx-auto px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1550071593-fd1bdaf1f93c?q=85&w=1200&auto=format&fit=crop"
                  alt="Equipe Mig Control"
                  className="w-full h-80 md:h-96 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary-2/15 to-transparent" />
              </div>
              {/* Accent card */}
              <div className="absolute -bottom-6 -right-4 md:right-8 bg-neutral-0 rounded-xl shadow-xl p-5 border border-neutral-10 hover:-bottom-4 transition-all duration-300 cursor-default">
                <div className="flex items-center gap-4">
                  <img
                    src="https://cdn.cookielaw.org/logos/275398a4-ad09-4041-b5dc-7e8d51543d93/0190746d-a48d-7672-b82b-c0306e3e9c79/4902a84f-59e5-49bb-9596-96ea25d0a35d/logo.png"
                    className="h-8 w-auto"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-semibold text-neutral-90">Parceiro</p>
                    <p className="text-xs font-medium text-primary-2">Autorizado</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="h-80 md:h-96 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="text-sm font-bold tracking-widest uppercase text-primary-2">
                  Sobre nós
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-90 mt-4">
                  A Mig Control
                </h2>
                <h3 className="text-lg md:text-xl font-medium text-neutral-60">
                  Muito além do equipamento: Somos seu parceiro estratégico
                </h3>
                <p className="text-base text-neutral-60 leading-relaxed">
                  Na Mig Control, nossa missão é simplificar a gestão. Atuamos com consultoria ativa
                  para entender sua infraestrutura e entregar a solução com o melhor
                  custo-benefício. Unimos o hardware líder da Control iD ao suporte técnico de elite
                  da nossa equipe, garantindo que sua operação nunca pare.
                </p>
              </div>
              <Button variant="primary" size="lg" className="w-fit" asChild>
                <a
                  href="#footer"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Sobre nós
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════ DIFERENCIAIS */}
      <section
        className="py-16 md:py-24 bg-primary-2/5"
        data-testid="diferenciais-section"
        aria-label="Nossos diferenciais"
      >
        <div className="container mx-auto px-6 md:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-bold tracking-widest uppercase text-primary-2">
              Nossos Diferenciais
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-90 mt-3 leading-snug">
              Por que a Mig Control é a{' '}
              <span className="text-primary-2 border-b-2 border-neutral-100">escolha certa?</span>
            </h2>
            <p className="text-lg text-neutral-60 mt-3 max-w-3xl mx-auto leading-relaxed">
              Na Mig Control, entendemos que a escolha de um parceiro para soluções de controle de
              ponto e acesso vai além do produto. É sobre confiança, expertise e compromisso.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {differentials.map((diff, index) => (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group bg-neutral-0 rounded-3xl p-8 border border-neutral-10/60 hover:shadow-lg hover:shadow-neutral-30 hover:-translate-y-2 transition-all duration-300 text-center"
                data-testid={`differential-card-${index}`}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-primary-2/15 group-hover:bg-primary-2/25">
                    <img
                      src={diff.icon}
                      alt={`Ícone de ${diff.title}`}
                      className="w-8 h-8 object-contain"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-neutral-90 mb-2 tracking-tight">
                  {diff.title}
                </h3>
                <p className="text-sm text-neutral-60 leading-relaxed">{diff.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
