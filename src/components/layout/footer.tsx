import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Instagram, Linkedin } from 'lucide-react'
import LogoMigControl from '../../assets/logos/logo-completa-mig-control.svg?react'

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-neutral-90 text-neutral-30" data-testid="main-footer">
      <div className="container mx-auto px-6 md:px-8 lg:px-10 max-w-7xl">
        {/* Main footer */}
        <div className="flex flex-col flex-wrap items-start justify-between md:flex-row gap-14 py-16">
          {/* Info */}
          <div className="space-y-5 max-w-95">
            <LogoMigControl
              className="h-14 w-auto hover:text-migcontrol-color transition-colors"
              aria-label="Logo Mig Control"
            />
            <p className="text-sm leading-relaxed text-neutral-40">
              Representante autorizado Control iD. Soluções em controle de acesso, registro
              eletrônico de ponto e automação comercial.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-80 hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
                data-testid="footer-instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-80 hover:bg-primary-3 transition-colors"
                aria-label="LinkedIn"
                data-testid="footer-linkedin"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-neutral-0 font-semibold text-sm uppercase tracking-wider mb-5">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/controle-de-ponto"
                  className="text-sm text-neutral-40 hover:text-neutral-0 transition-colors"
                  data-testid="footer-link-ponto"
                >
                  Controle de Ponto
                </Link>
              </li>
              <li>
                <Link
                  to="/controle-de-acesso"
                  className="text-sm text-neutral-40 hover:text-neutral-0 transition-colors"
                  data-testid="footer-link-acesso"
                >
                  Controle de Acesso
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-sm text-neutral-40 hover:text-neutral-0 transition-colors"
                  data-testid="footer-link-blog"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-neutral-0 font-semibold text-sm uppercase tracking-wider mb-5">
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-1 shrink-0" />
                <span className="text-sm text-neutral-40">Belo Horizonte, MG - Brasil</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-primary-1 shrink-0" />
                <a
                  href="tel:+5531982701760"
                  className="text-sm text-neutral-40 hover:text-neutral-0 transition-colors"
                  data-testid="footer-phone"
                >
                  (31) 98270-1760
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-primary-1 shrink-0" />
                <a
                  href="mailto:contato@migcontrol.com.br"
                  className="text-sm text-neutral-40 hover:text-neutral-0 transition-colors"
                  data-testid="footer-email"
                >
                  contato@migcontrol.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-80 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-50">
            &copy; {new Date().getFullYear()} Mig Control. Todos os direitos reservados.
          </p>
          <p className="text-xs text-neutral-50">
            Representante autorizado <span className="text-primary-1 font-medium">Control iD</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
