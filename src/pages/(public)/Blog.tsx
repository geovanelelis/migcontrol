import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react'
import { Card } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'
import { blogPosts } from '../../data/mockData'
import { Button } from '../../components/ui/button'

const categories = ['Todos', ...Array.from(new Set(blogPosts.map((p) => p.category)))]

export const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filtered =
    activeCategory === 'Todos' ? blogPosts : blogPosts.filter((p) => p.category === activeCategory)

  const featuredPost = blogPosts[0]
  const otherPosts = activeCategory === 'Todos' ? filtered.slice(1) : filtered

  return (
    <div data-testid="blog-page">
      {/* Hero */}
      <section className="py-16 md:pb-20 pt-42 bg-slate-50 border-b border-neutral-10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="text-sm font-semibold tracking-wider uppercase text-primary-2">
              Blog Mig Control
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mt-2">
              Novidades e Artigos
            </h1>
            <p className="text-base md:text-lg text-slate-600 mt-4 leading-relaxed">
              Fique por dentro das últimas novidades em controle de acesso, registro de ponto e
              segurança corporativa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {activeCategory === 'Todos' && (
        <section className="py-12 md:py-16 bg-neutral-0 border-b border-neutral-10">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/blog/${featuredPost.slug}`}
                className="group block"
                data-testid="featured-blog-post"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="relative rounded-2xl overflow-hidden h-70 md:h-85">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="primary">Destaque</Badge>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Badge variant="secondary">{featuredPost.category}</Badge>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-tight group-hover:text-primary-2 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-base text-slate-600 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-5 text-sm text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="size-4" />
                        {new Date(featuredPost.date).toLocaleDateString('pt-BR', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="size-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <Button
                      variant="primaryGhost"
                      className="w-fit group-hover:gap-3 transition-all "
                    >
                      Ler artigo completo <ArrowRight className="size-4" />
                    </Button>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filters + Posts Grid */}
      <section className="py-12 md:py-20 bg-neutral-0">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          {/* Category pills */}
          <div className="flex flex-wrap items-center gap-2 mb-10">
            <Tag className="size-4 text-slate-400 mr-1" />
            {categories.map((cat) => (
              <Button
                variant="primary"
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={` ${
                  activeCategory === cat ? '' : 'bg-neutral-10 text-neutral-60 hover:bg-neutral-20'
                }`}
                data-testid={`blog-filter-${cat.toLowerCase()}`}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeCategory === 'Todos' ? otherPosts : filtered).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Link to={`/blog/${post.slug}`} className="group block h-full">
                  <Card role="article" data-testid={`blog-card-${post.slug}`}>
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge variant="primary" size="sm">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6 space-y-3 flex flex-col flex-1">
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {new Date(post.date).toLocaleDateString('pt-BR', {
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-lg font-semibold text-slate-900 leading-snug group-hover:text-primary-2 transition-colors tracking-tight line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      <Button
                        variant="primaryGhost"
                        className="w-fit group-hover:gap-3 transition-all "
                      >
                        Ler artigo <ArrowRight className="size-4" />
                      </Button>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
