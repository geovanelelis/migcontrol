import { Button } from '../../components/ui/button.tsx'
import { motion } from 'framer-motion'
import { ArrowDown, Clock, ShieldCheck, ArrowRight } from 'lucide-react'
import heroBg from '../../assets/hero-bg.png'
import cardPonto from '../../assets/card-ponto.png'
import cardAcesso from '../../assets/card-acesso.png'
import { differentials } from '../../data/mockData.ts'

import {
  Card,
  CardHeader,
  CardTag,
  CardTitle,
  CardDescription,
  CardFooter,
  CardImage,
} from '../../components/ui/card.tsx'
import CTASection from '../../components/layout/ctaSection.tsx'

const cards = [
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

export const Home = () => {
  return (
    <div className="min-h-screen bg-neutral-0">
      {/* Hero Section */}
      <section className="relative min-h-165 lg:min-h-190 flex items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-primary-4/90 via-primary-4/80 to-primary-3/70" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent" />

        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-28 lg:py-36">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-neutral-0/10 backdrop-blur-sm border border-neutral-0/20 text-xs font-semibold uppercase tracking-widest text-primary-0">
                Parceiro Autorizado Control iD
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="text-4xl md:text-5xl lg uppercase font-bold text-neutral-0 leading-[1.2] tracking-tight"
            >
              A evolução do controle
              <br /> e da gestão na <span className="text-primary-0">sua empresa.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="mt-6 text-lg md:text-xl text-neutral-0/70 max-w-xl mx-auto leading-relaxed font-medium"
            >
              Soluções inteligentes de ponto e acesso integradas à melhor tecnologia do mercado.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-12"
            >
              <Button variant="whiteSoft" size="lg" asChild>
                <a
                  href="#cards"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('cards')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Escolha o Seu Caminho
                  <ArrowDown className="size-4.5 animate-bounce" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section id="cards" className="relative z-20 -mt-20 lg:-mt-26 pb-28">
        <div className="container px-4 lg:px-8 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {cards.map((card, i) => (
              <Card
                key={card.id}
                id={card.id}
                index={i}
                className="group border-0 shadow-md hover:shadow-xl"
              >
                <CardImage src={card.image} alt={card.title} />

                <CardHeader>
                  <CardTag>{card.tag}</CardTag>
                  <CardTitle className="font-extrabold lg:text-3xl uppercase">
                    {card.title}
                  </CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>

                <CardFooter>
                  <Button variant="cta" size="lg" className="w-full" asChild>
                    <a href={card.link}>
                      {card.cta}
                      <ArrowRight className="size-4.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Institucional Section */}
      <section
        className="pb-16 md:pb-28 bg-neutral-0"
        data-testid="institutional-section"
        aria-label="Sobre a Mig Control"
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image side */}
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
                  className="w-full h-70 md:h-85 object-cover rounded-2xl"
                />
              </div>
              {/* Accent card */}
              <div className="absolute -bottom-6 -right-4 md:right-8 bg-neutral-0 rounded-xl shadow-xl p-5 border border-neutral-10">
                <div className="flex items-center gap-4">
                  <img
                    src="https://cdn.cookielaw.org/logos/275398a4-ad09-4041-b5dc-7e8d51543d93/0190746d-a48d-7672-b82b-c0306e3e9c79/4902a84f-59e5-49bb-9596-96ea25d0a35d/logo.png"
                    className="h-8 w-auto"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-semibold text-neutral-90">Parceiro</p>
                    <p className="text-xs text-primary-2 font-medium">Autorizado</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-6"
            >
              <div>
                <span className="text-sm font-semibold tracking-wider uppercase text-primary-2">
                  Sobre nós
                </span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-90 mt-2">
                  A Mig Control
                </h2>
                <h3 className="text-lg md:text-xl font-medium text-neutral-60 mt-1">
                  Muito além do equipamento: Somos seu parceiro estratégico
                </h3>
              </div>
              <p className="text-base text-neutral-60 leading-relaxed">
                Na Mig Control, nossa missão é simplificar a gestão. Atuamos com consultoria ativa
                para entender sua infraestrutura e entregar a solução com o melhor custo-benefício.
                Unimos o hardware líder da Control iD ao suporte técnico de elite da nossa equipe,
                garantindo que sua operação nunca pare.
              </p>
              <div>
                <Button variant="primaryOutline" size="lg" asChild>
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section
        className="py-16 md:py-24 bg-neutral-5"
        data-testid="diferenciais-section"
        aria-label="Nossos diferenciais"
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="text-sm font-semibold tracking-wider uppercase text-primary-2">
              Nossos Diferenciais
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-90 mt-2">
              Por que a Mig Control é a escolha certa?
            </h2>
            <p className="text-base text-neutral-60 mt-3 max-w-2xl mx-auto leading-relaxed">
              Na Mig Control, entendemos que a escolha de um parceiro para soluções de controle de
              ponto e acesso vai além do produto. É sobre confiança, expertise e compromisso.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentials.map((diff, index) => (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group bg-neutral-0 rounded-2xl p-8 border border-transparent hover:border-neutral-10 hover:shadow-lg transition-all duration-300 text-center"
                data-testid={`differential-card-${index}`}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-xl bg-primary-0/50 flex items-center justify-center group-hover:bg-primary-0 transition-colors">
                    <img
                      src={diff.icon}
                      alt={`Ícone de ${diff.title}`}
                      className="w-8 h-8 object-contain"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-neutral-90 mb-3 tracking-tight">
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
