import Header from './components/Header'
import Hero from './components/Hero'
import TrustLayer from './components/TrustLayer'
import TemplatesShowcase from './components/TemplatesShowcase'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustLayer />
      <TemplatesShowcase />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  )
}