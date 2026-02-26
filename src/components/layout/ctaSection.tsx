import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Shield, Zap, HeadphonesIcon } from 'lucide-react'
import { Button } from '../ui/button'

const SITE_URL = 'https://mig-controlteste.vercel.app'

const trustItems = [
  { icon: Shield, label: 'Representante autorizado Control iD' },
  { icon: Zap, label: 'Implementação ágil e sem complicação' },
  { icon: HeadphonesIcon, label: 'Suporte técnico especializado' },
]

const CTASection: React.FC = () => {
  return (
    <section
      className="pt-16 md:pt-24 bg-linear-to-br from-neutral-90 via-primary-4 to-neutral-90"
      data-testid="cta-section"
      aria-label="Chamada para ação"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="relative overflow-hidden">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center justify-between">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="pb-8 md:pb-12 lg:pb-16 space-y-7 w-full"
            >
              <div>
                <span className="inline-block text-orange-1 text-sm font-semibold tracking-wider uppercase mb-3">
                  Transforme sua empresa
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-neutral-0 tracking-tight leading-tight">
                  Vamos desenhar o seu projeto juntos?
                </h2>
              </div>
              <p className="text-base md:text-lg text-neutral-30 leading-relaxed max-w-lg">
                Fale com um consultor da Mig Control e descubra a tecnologia ideal para o seu
                negócio.
              </p>

              {/* Trust Items */}
              <div className="flex flex-col gap-3">
                {trustItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary-3/20 flex items-center justify-center shrink-0">
                      <item.icon className="h-4 w-4 text-primary-1" />
                    </div>
                    <span className="text-sm text-neutral-30">{item.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Buttons */}
              <Button
                variant="cta"
                size="lg"
                data-testid="cta-whatsapp-btn"
                className="w-full sm:w-auto"
                asChild
              >
                <a
                  href="https://wa.me/5531982701760?text=Olá! Gostaria de receber uma cotação das soluções Mig Control."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="h-4 w-4" />
                  SOLICITAR CONSULTORIA GRATUITA
                </a>
              </Button>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:flex relative h-full items-center justify-end"
            >
              <img
                src={`${SITE_URL}/assets/images/banner-forms.png`}
                alt="Profissional com notebook"
                className="absolute object-cover object-top h-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
