import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Tag, Copy, Phone } from 'lucide-react'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { getBlogPostBySlug, blogPosts } from '../../data/mockData'
import { cn } from '../../lib/utils'

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getBlogPostBySlug(slug) : undefined

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const otherPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3)

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
  }

  return (
    <div data-testid={`blog-post-page-${post.slug}`} className="bg-neutral-0">
      {/* Hero Image */}
      <section className="relative h-100 md:h-120 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/50 to-slate-900/20" />
        <div className="relative h-full container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl flex items-end pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl space-y-4"
          >
            <div className="flex items-center gap-3">
              <Badge variant="primary">{post.category}</Badge>
              <span className="text-sm text-slate-300">{post.readTime} de leitura</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-0 tracking-tight leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-3">
                <img
                  src={post.authorAvatar}
                  alt={post.author}
                  className="w-10 h-10 rounded-full bg-neutral-0/10 object-contain p-1"
                />
                <div>
                  <p className="text-sm font-medium text-neutral-0">{post.author}</p>
                  <p className="text-xs text-slate-300">
                    {new Date(post.date).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-8"
            >
              <article
                className={cn(
                  'max-w-none',
                  '[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:border-l-4 [&_h2]:border-blue-600 [&_h2]:pl-4 [&_h2]:tracking-tight [&_h2]:text-slate-900',
                  '[&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-slate-900',
                  '[&_p]:text-slate-600 [&_p]:leading-relaxed [&_p]:text-base [&_p]:mb-4',
                  '[&_li]:text-slate-600 [&_li]:text-base',
                  '[&_ul]:space-y-1 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4',
                  '[&_ol]:space-y-1 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4',
                  '[&_strong]:text-slate-900 [&_strong]:font-semibold',
                  '[&_a]:text-blue-600 [&_a]:no-underline hover:[&_a]:underline',
                  '[&_blockquote]:border-l-4 [&_blockquote]:border-blue-500 [&_blockquote]:bg-blue-50/50 [&_blockquote]:rounded-r-xl [&_blockquote]:py-4 [&_blockquote]:px-6 [&_blockquote]:my-4 [&_blockquote]:text-slate-700 [&_blockquote]:font-medium',
                  '[&_.lead]:text-lg [&_.lead]:text-slate-600 [&_.lead]:leading-relaxed [&_.lead]:font-normal [&_.lead]:mb-8 [&_.lead]:border-b [&_.lead]:border-slate-100 [&_.lead]:pb-8',
                  '[&_code]:bg-slate-100 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono [&_code]:text-red-600',
                  '[&_pre]:bg-slate-900 [&_pre]:text-slate-100 [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:my-4',
                  '[&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-lg [&_img]:my-4',
                )}
                dangerouslySetInnerHTML={
                  {
                    __html: post.contentHtml,
                  } as React.DOMAttributes<HTMLElement>['dangerouslySetInnerHTML']
                }
                data-testid="blog-post-content"
              />

              {/* Tags */}
              <div className="mt-10 pt-8 border-t border-slate-100">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="h-4 w-4 text-slate-400" />
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="white">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Share Bar */}
              <div className="mt-6 flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-sm font-medium text-slate-700">
                  Gostou do artigo? Compartilhe!
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={handleCopyLink}
                    className="p-2 rounded-lg bg-neutral-0 hover:bg-blue-50 border border-slate-200 transition-colors"
                    aria-label="Copiar link"
                    data-testid="copy-link-btn"
                  >
                    <Copy className="h-4 w-4 text-slate-600" />
                  </button>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(post.title + ' - ' + window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-neutral-0 hover:bg-green-50 border border-slate-200 transition-colors"
                    aria-label="Compartilhar no WhatsApp"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-600">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Back link */}
              <div className="mt-8">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-sm text-blue-600 font-semibold hover:gap-3 transition-all"
                  data-testid="blog-back-link"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Voltar ao blog
                </Link>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-4 space-y-8"
            >
              {/* CTA Card */}
              <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl p-7 text-center space-y-4">
                <h3 className="text-lg font-bold text-neutral-0 tracking-tight">
                  Precisa de uma solução?
                </h3>
                <p className="text-sm text-blue-100 leading-relaxed">
                  Fale com nossos consultores e descubra a melhor solução para sua empresa.
                </p>
                <a
                  href="https://wa.me/5531982701760?text=Olá! Vi um artigo no blog e gostaria de saber mais sobre as soluções."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-neutral-0 font-semibold shadow-lg hover:shadow-orange-500/25 transition-all mt-2">
                    <Phone className="h-4 w-4" />
                    Fale conosco
                  </Button>
                </a>
              </div>

              {/* Categories */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                  Categorias
                </h3>
                <div className="space-y-2">
                  {Array.from(new Set(blogPosts.map((p) => p.category))).map((cat) => (
                    <Link
                      key={cat}
                      to="/blog"
                      className="flex items-center justify-between p-2.5 rounded-lg hover:bg-neutral-0 transition-colors text-sm text-slate-600 hover:text-blue-600"
                    >
                      <span>{cat}</span>
                      <span className="text-xs bg-white rounded-full w-6 h-6 flex items-center justify-center text-slate-500 font-medium">
                        {blogPosts.filter((p) => p.category === cat).length}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Related Articles */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                  Leia também
                </h3>
                <div className="space-y-4">
                  {otherPosts.map((op) => (
                    <Link
                      key={op.id}
                      to={`/blog/${op.slug}`}
                      className="group flex gap-4 p-2 rounded-lg hover:bg-white transition-colors"
                      data-testid={`sidebar-blog-${op.slug}`}
                    >
                      <img
                        src={op.image}
                        alt={op.title}
                        className="w-20 h-16 object-cover rounded-lg shrink-0"
                      />
                      <div className="min-w-0">
                        <h4 className="text-sm font-medium text-slate-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                          {op.title}
                        </h4>
                        <span className="text-xs text-slate-500 mt-1 block">{op.readTime}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Bottom Related Posts */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-10">
            Artigos relacionados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherPosts.map((op, i) => (
              <motion.div
                key={op.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/blog/${op.slug}`}
                  className="group block bg-white rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-xl transition-all overflow-hidden"
                  data-testid={`related-blog-${op.slug}`}
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={op.image}
                      alt={op.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <Badge variant="secondary">{op.category}</Badge>
                    <h3 className="text-base font-semibold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                      {op.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span>
                        {new Date(op.date).toLocaleDateString('pt-BR', {
                          day: '2-digit',
                          month: 'short',
                        })}
                      </span>
                      <span>{op.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
