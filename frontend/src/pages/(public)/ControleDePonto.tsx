import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { heroSlides, getProductsByCategory } from '../../data/mockData'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImage,
  CardTag,
  CardTitle,
} from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'
import CTASection from '../../components/layout/ctaSection'

const heroControleDePonto = heroSlides[0]
const products = getProductsByCategory('ponto')

export const ControleDePonto: React.FC = () => {
  return (
    <div>
      <section
        className="relative overflow-hidden"
        data-testid="hero-section"
        aria-label="Banner principal"
      >
        <div className="overflow-hidden">
          <div className="flex">
            <div className="relative w-full ">
              <div className="relative h-125 md:h-150 lg:h-190">
                {/* Background image */}
                <img
                  src={heroControleDePonto.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-linear-to-r from-neutral-90/85 via-neutral-90/60 to-transparent" />

                {/* Content */}
                <div className="relative h-full container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl flex items-center">
                  <div className="max-w-xl space-y-6">
                    <AnimatePresence mode="wait">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, staggerChildren: 0.1 }}
                        className="space-y-5"
                      >
                        <motion.span
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          className="inline-block text-orange-2 text-sm md:text-base font-semibold tracking-wide uppercase"
                        >
                          {heroControleDePonto.subtitle}
                        </motion.span>
                        <motion.h1
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-0 tracking-tight leading-tight"
                        >
                          {heroControleDePonto.title}
                        </motion.h1>
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-base md:text-lg text-neutral-30 leading-relaxed"
                        >
                          {heroControleDePonto.description}
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <Link to={heroControleDePonto.cta.href}>
                            <Button variant="ctaSoft" size="lg" className="group">
                              {heroControleDePonto.cta.label}
                              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </Link>
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section
        className="py-16 md:py-24 bg-neutral-5"
        data-testid="featured-products-section"
        aria-label="Destaques Recentes"
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold tracking-wider uppercase text-primary-2">
              Destaques Recentes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-90 mt-2">
              Conheça nossos principais produtos
            </h2>
            <p className="text-base text-neutral-60 mt-3 max-w-2xl mx-auto leading-relaxed">
              Oferecemos aos nossos clientes um amplo portfólio de produtos, soluções e serviços
              através de um único fornecedor.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card
                  className="group h-full"
                  role="article"
                  data-testid={`product-card-${product.slug}`}
                >
                  <CardImage
                    src={product.image}
                    alt={product.name}
                    className="max-h-full p-6 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  ></CardImage>
                  <CardHeader>
                    <CardTag className="flex flex-wrap gap-2 mb-2">
                      {product.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" size="sm">
                          {tag}
                        </Badge>
                      ))}
                    </CardTag>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto pt-0">
                    <Link to={product.link} className="w-full">
                      <Button variant="neutral">
                        Saiba mais
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  )
}
