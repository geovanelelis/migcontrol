import { Header } from './components/layout/header'
import { Footer } from './components/layout/footer'
import { Home } from './pages/(public)/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ControleDePonto } from './pages/(public)/ControleDePonto'
import { ControleDeAcesso } from './pages/(public)/ControleDeAcesso'
import { ScrollToTop } from './components/layout/scrollToTop'
import { Blog } from './pages/(public)/Blog'
import { BlogPost } from './pages/(public)/BlogPost'
import { ProductPage } from './pages/(public)/ProductPage'

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/controle-de-ponto" element={<ControleDePonto />} />
          <Route path="/controle-de-acesso" element={<ControleDeAcesso />} />
          <Route path="/blog/*" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/produto/:slug" element={<ProductPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
