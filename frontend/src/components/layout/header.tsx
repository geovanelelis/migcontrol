import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, ChevronDown, Phone, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../../lib/utils'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from '../ui/sheet'
import { getProductsByCategory } from '../../data/mockData'
import { useCallback, useState } from 'react'
import LogoMigControl from '../../assets/logos/logo-completa-mig-control.svg?react'

const pontoProducts = getProductsByCategory('ponto')
const acessoProducts = getProductsByCategory('acesso')

export const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const shouldShowProducts =
    location.pathname === '/controle-de-ponto' || location.pathname === '/controle-de-acesso'

  const currentProductCategory =
    location.pathname === '/controle-de-ponto'
      ? 'ponto'
      : location.pathname === '/controle-de-acesso'
        ? 'acesso'
        : null

  const visibleProducts =
    currentProductCategory === 'ponto'
      ? pontoProducts
      : currentProductCategory === 'acesso'
        ? acessoProducts
        : []

  function scrollToFooter(duration = 1000) {
    const footer = document.getElementById('footer')
    if (!footer) return

    const startY = window.scrollY
    const targetY = footer.offsetTop
    const diff = targetY - startY
    const start = performance.now()

    function step(now: number) {
      const progress = Math.min((now - start) / duration, 1)
      const eased = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress

      window.scrollTo(0, startY + diff * eased)
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }

  const handleContactClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      setTimeout(() => scrollToFooter(1500), 300)
      setMobileOpen(false)
    },
    [location.pathname, navigate],
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-neutral-0/80 border-b border-neutral-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-18 md:h-22">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0" data-testid="header-logo">
            <LogoMigControl className="h-9 md:h-12 w-auto text-primary-2" />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1"
            role="navigation"
            aria-label="Navegação principal"
          >
            {/* Produtos Dropdown */}
            {shouldShowProducts && (
              <div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <Button
                  variant="neutralGhost"
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                  data-testid="nav-produtos-trigger"
                >
                  Produtos
                  <ChevronDown
                    className={cn(
                      'size-4 transition-transform duration-200',
                      isDropdownOpen && 'rotate-180',
                    )}
                  />
                </Button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-1 bg-neutral-0 rounded-xl border border-neutral-20 shadow-lg w-80"
                      role="menu"
                      data-testid="produtos-dropdown"
                    >
                      <div className="p-6">
                        <ul className="space-y-2">
                          {visibleProducts.map((p) => (
                            <li key={p.id}>
                              <Link
                                to={p.link}
                                className="flex items-center gap-3 rounded-lg p-2 text-neutral-90 hover:text-primary-2 hover:bg-neutral-10 transition-colors"
                                onClick={() => setIsDropdownOpen(false)}
                                data-testid={`dropdown-product-${p.slug}`}
                              >
                                <img
                                  src={p.icon}
                                  alt=""
                                  className="size-6 object-contain"
                                  aria-hidden="true"
                                />
                                <span className="text-sm font-medium">{p.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            <Button variant="neutralGhost" size="md" asChild>
              <Link to="/controle-de-ponto" data-testid="nav-ponto-link">
                Controle de Ponto
              </Link>
            </Button>
            <Button variant="neutralGhost" size="md" asChild>
              <Link to="/controle-de-acesso" data-testid="nav-acesso-link">
                Controle de Acesso
              </Link>
            </Button>
            <Button variant="neutralGhost" size="md" asChild>
              <Link to="/blog" data-testid="nav-blog-link">
                Blog
              </Link>
            </Button>
            <Button variant="neutralGhost" size="md" asChild>
              <a href="#footer" onClick={handleContactClick} data-testid="nav-contato-link">
                Contato
              </a>
            </Button>
          </nav>

          {/* Desktop CTA */}
          <Button
            variant="cta"
            size="md"
            asChild
            className="hidden lg:inline-flex"
            data-testid="header-cta-button"
          >
            <a href="https://wa.me/5531982701760" target="_blank" rel="noopener noreferrer">
              <Phone className="h-4 w-4" />
              Fale Conosco
            </a>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="neutralGhost" size="md" data-testid="mobile-menu-button">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between px-6 py-6 border-b border-neutral-20">
                  <LogoMigControl className="h-9 w-auto text-primary-2" />
                  <Button variant="neutralGhost" className="px-2" asChild>
                    <SheetClose>
                      <X className="size-6 text-neutral-60" />
                      <span className="sr-only">Close</span>
                    </SheetClose>
                  </Button>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 overflow-y-auto p-4 space-y-1" aria-label="Menu mobile">
                  {/* Produtos Toggle */}
                  {shouldShowProducts && (
                    <>
                      <button
                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                        className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-neutral-90 hover:text-primary-2 hover:bg-neutral-10 rounded-lg transition-colors"
                        data-testid="mobile-produtos-trigger"
                      >
                        Produtos
                        <ChevronDown
                          className={cn(
                            'h-4 w-4 transition-transform',
                            mobileProductsOpen && 'rotate-180',
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileProductsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 space-y-1">
                              {visibleProducts.map((p) => (
                                <Link
                                  key={p.id}
                                  to={p.link}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center gap-2 px-4 py-2 text-sm text-neutral-70 hover:text-primary-2 hover:bg-neutral-10 rounded-lg transition-colors"
                                  data-testid={`mobile-product-${p.slug}`}
                                >
                                  <img src={p.icon} alt="" className="w-5 h-5 object-contain" />
                                  {p.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}

                  <Link
                    to="/controle-de-ponto"
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-neutral-90 hover:text-primary-2 hover:bg-neutral-10 rounded-lg transition-colors"
                    data-testid="mobile-ponto-link"
                  >
                    Controle de Ponto
                  </Link>
                  <Link
                    to="/controle-de-acesso"
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-neutral-90 hover:text-primary-2 hover:bg-neutral-10 rounded-lg transition-colors"
                    data-testid="mobile-acesso-link"
                  >
                    Controle de Acesso
                  </Link>
                  <Link
                    to="/blog"
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-neutral-90 hover:text-primary-2 hover:bg-neutral-10 rounded-lg transition-colors"
                    data-testid="mobile-blog-link"
                  >
                    Blog
                  </Link>
                  <a
                    href="#footer"
                    onClick={handleContactClick}
                    className="block px-4 py-3 text-sm font-medium text-neutral-90 hover:text-primary-2 hover:bg-neutral-10 rounded-lg transition-colors cursor-pointer"
                    data-testid="mobile-contato-link"
                  >
                    Contato
                  </a>
                </nav>

                {/* Mobile CTA */}
                <div className="p-4 border-t border-neutral-20">
                  <Button variant="cta" size="md" asChild className="w-full">
                    <a href="https://wa.me/5531982701760" target="_blank" rel="noopener noreferrer">
                      <Phone className="h-4 w-4" />
                      Fale Conosco
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
