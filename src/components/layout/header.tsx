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
  const [pontoDropdownOpen, setPontoDropdownOpen] = useState(false)
  const [acessoDropdownOpen, setAcessoDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobilePontoOpen, setMobilePontoOpen] = useState(false)
  const [mobileAcessoOpen, setMobileAcessoOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const isPontoPage = location.pathname === '/controle-de-ponto'
  const isAcessoPage = location.pathname === '/controle-de-acesso'

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

  const CategoryDropdown = ({
    label,
    to,
    products,
    isActive,
    open,
    setOpen,
  }: {
    label: string
    to: string
    products: typeof pontoProducts
    isActive: boolean
    open: boolean
    setOpen: (v: boolean) => void
  }) => (
    <div
      className="relative"
      onMouseEnter={() => isActive && setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Button variant="neutralGhost" size="md" asChild>
        <Link to={to} className="flex items-center gap-1">
          {label}

          {isActive && (
            <ChevronDown
              className={cn('size-4 transition-transform duration-200', open && 'rotate-180')}
            />
          )}
        </Link>
      </Button>

      <AnimatePresence>
        {isActive && open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: -4 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-1 border-t-8 border-t-primary-2 bg-neutral-0 rounded-xl border border-neutral-20 shadow-lg w-80"
          >
            <div className="p-6">
              <ul className="space-y-2">
                {products.map((p) => (
                  <li key={p.id}>
                    <Link
                      to={p.link}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-lg p-2 text-neutral-90 hover:text-primary-2 hover:bg-neutral-10 transition-colors"
                    >
                      <img src={p.icon} alt="" className="size-6 object-contain" />
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
  )

  const MobileCategoryDropdown = ({
    label,
    to,
    products,
    isActive,
    open,
    setOpen,
  }: {
    label: string
    to: string
    products: typeof pontoProducts
    isActive: boolean
    open: boolean
    setOpen: (v: boolean) => void
  }) => (
    <>
      <button
        onClick={() => {
          if (isActive) {
            setOpen(!open)
          }
        }}
        className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-neutral-90 hover:text-primary-2 hover:bg-neutral-10 rounded-lg transition-colors"
      >
        <Link to={to} onClick={() => setMobileOpen(false)} className="flex-1 text-left">
          {label}
        </Link>

        {isActive && (
          <ChevronDown className={cn('h-4 w-4 transition-transform', open && 'rotate-180')} />
        )}
      </button>

      <AnimatePresence>
        {isActive && open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-4 space-y-1">
              {products.map((p) => (
                <Link
                  key={p.id}
                  to={p.link}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-neutral-70 hover:text-primary-2 hover:bg-neutral-10 rounded-lg transition-colors"
                >
                  <img src={p.icon} className="w-5 h-5 object-contain" />
                  {p.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
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
            {/* Dropdown */}
            <CategoryDropdown
              label="Controle de Ponto"
              to="/controle-de-ponto"
              products={pontoProducts}
              isActive={isPontoPage}
              open={pontoDropdownOpen}
              setOpen={setPontoDropdownOpen}
            />

            <CategoryDropdown
              label="Controle de Acesso"
              to="/controle-de-acesso"
              products={acessoProducts}
              isActive={isAcessoPage}
              open={acessoDropdownOpen}
              setOpen={setAcessoDropdownOpen}
            />

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
                  <MobileCategoryDropdown
                    label="Controle de Ponto"
                    to="/controle-de-ponto"
                    products={pontoProducts}
                    isActive={isPontoPage}
                    open={mobilePontoOpen}
                    setOpen={setMobilePontoOpen}
                  />

                  <MobileCategoryDropdown
                    label="Controle de Acesso"
                    to="/controle-de-acesso"
                    products={acessoProducts}
                    isActive={isAcessoPage}
                    open={mobileAcessoOpen}
                    setOpen={setMobileAcessoOpen}
                  />
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
