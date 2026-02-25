import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Check, Phone, ChevronRight } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { Badge } from '../../components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
import { getProductBySlug, products } from '../../data/mockData'

export const ProductPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? getProductBySlug(slug) : undefined

  if (!product) {
    return <Navigate to="/" replace />
  }

  const relatedProducts = products
    .filter((p) => p.category.some((cat) => product.category.includes(cat)) && p.id !== product.id)
    .slice(0, 3)

  const categoryHref = product.category[0] === 'ponto' ? '/controle-de-ponto' : '/controle-de-acesso'
  const categoryLabel = product.category[0] === 'ponto' ? 'Controle de Ponto' : 'Controle de Acesso'

  return (
    <div data-testid={`product-page-${product.slug}`}>
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-4">
          <nav className="flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-blue-600 transition-colors">
              Início
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link to={categoryHref} className="hover:text-blue-600 transition-colors">
              {categoryLabel}
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-slate-900 font-medium">{product.shortName}</span>
          </nav>
        </div>
      </div>

      {/* Hero Product Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-linear-to-br from-slate-50 to-blue-50/50 rounded-3xl p-10 md:p-16 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-80 md:max-h-95 w-auto object-contain drop-shadow-lg"
                  data-testid="product-image"
                />
              </div>
              {/* Floating badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-medium shadow-sm border-0"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <div>
                <span className="text-sm font-semibold tracking-wider uppercase text-blue-600">
                  {categoryLabel}
                </span>
                <h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mt-2 leading-tight"
                  data-testid="product-title"
                >
                  {product.name}
                </h1>
              </div>

              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                {product.longDescription}
              </p>

              {/* Quick Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.slice(0, 6).map((feature, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <div className="mt-1 p-0.5 rounded-full bg-blue-100">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-sm text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button variant="cta" data-testid="product-cta-whatsapp" asChild>
                  <a
                    href={`https://wa.me/5531982701760?text=Olá! Gostaria de saber mais sobre o ${product.name}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="h-4 w-4" />
                    Solicitar orçamento
                  </a>
                </Button>
                <Button variant="white" data-testid="product-back-btn" asChild>
                  <Link to={categoryHref}>
                    <ArrowLeft className="h-4 w-4" />
                    Ver mais produtos
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section - "Por que escolher" */}
      {product.highlights.length > 0 && (
        <section className="py-16 md:py-24 bg-slate-50" data-testid="product-highlights">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <span className="text-sm font-semibold tracking-wider uppercase text-blue-600">
                Diferenciais
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mt-2">
                Por que escolher o {product.shortName}?
              </h2>
              <p className="text-base text-slate-600 mt-3 max-w-2xl mx-auto">
                Segurança, tecnologia e design em um único dispositivo.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.highlights.map((hl, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group bg-white rounded-2xl p-7 border border-slate-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors">
                    <img
                      src={hl.icon}
                      alt=""
                      className="w-7 h-7 object-contain"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2 tracking-tight">
                    {hl.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{hl.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Specs & Details Section with Tabs */}
      {product.specs.length > 0 && (
        <section className="py-16 md:py-24 bg-white" data-testid="product-specs">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Tabs defaultValue="specs" className="w-full">
                <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-10 bg-slate-100 p-1 rounded-lg h-auto">
                  <TabsTrigger
                    value="specs"
                    className="rounded-md py-2.5 text-sm font-medium data-[state=active]:bg-white data-[state=active]:shadow-sm"
                  >
                    Detalhes Técnicos
                  </TabsTrigger>
                  <TabsTrigger
                    value="features"
                    className="rounded-md py-2.5 text-sm font-medium data-[state=active]:bg-white data-[state=active]:shadow-sm"
                  >
                    Características
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="specs">
                  <div className="max-w-3xl mx-auto">
                    <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
                      <div className="px-6 py-4 bg-blue-600">
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
                          Especificações Técnicas — {product.shortName}
                        </h3>
                      </div>
                      <div className="divide-y divide-slate-100">
                        {product.specs.map((spec, index) => (
                          <div
                            key={index}
                            className={`grid grid-cols-1 sm:grid-cols-3 gap-2 px-6 py-4 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
                          >
                            <div className="font-semibold text-sm text-slate-900">{spec.label}</div>
                            <div className="sm:col-span-2 text-sm text-slate-600">{spec.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="features">
                  <div className="max-w-3xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {product.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100"
                        >
                          <div className="mt-0.5 p-1 rounded-full bg-blue-100 shrink-0">
                            <Check className="h-3.5 w-3.5 text-blue-600" />
                          </div>
                          <span className="text-sm text-slate-700 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <section
        className="py-16 md:py-20 bg-linear-to-br from-blue-600 to-blue-700"
        data-testid="product-bottom-cta"
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Interessado no {product.shortName}?
            </h2>
            <p className="text-base text-blue-100 mt-3 max-w-xl mx-auto">
              Fale com nossos consultores para um orçamento personalizado e descubra como esta
              solução pode transformar sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
              <Button variant="cta" data-testid="product-bottom-cta-whatsapp" asChild>
                <a
                  href={`https://wa.me/5531982701760?text=Olá! Gostaria de receber um orçamento do ${product.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="h-4 w-4" />
                  Solicitar orçamento
                </a>
              </Button>
              <Link to={categoryHref}>
                <Button
                  variant="whiteOutline"
                >
                  Ver mais produtos
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-20 bg-white" aria-label="Produtos relacionados">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-10">
              Produtos relacionados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rp, index) => (
                <motion.div
                  key={rp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={rp.link}
                    className="group block bg-white rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
                    data-testid={`related-product-${rp.slug}`}
                  >
                    <div className="h-48 bg-linear-to-br from-slate-50 to-blue-50/30 flex items-center justify-center p-8">
                      <img
                        src={rp.image}
                        alt={rp.name}
                        className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {rp.tags.slice(0, 2).map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs bg-blue-50 text-blue-700 border-0"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="font-semibold text-slate-900 text-base mb-2">{rp.name}</h3>
                      <p className="text-sm text-slate-500 line-clamp-2 mb-4">{rp.description}</p>
                      <span className="inline-flex items-center gap-1 text-sm text-blue-600 font-semibold group-hover:gap-2 transition-all">
                        Saiba mais <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

