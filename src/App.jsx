import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import BrandsTicker from './components/BrandsTicker'
import CaseStudies from './components/CaseStudies'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-[#f6f6f6] text-[#2d2f2f] selection:bg-[#63a1ff] selection:text-[#00224a] scroll-smooth">
      <Navbar />
      <main className="pt-[72px] max-w-2xl mx-auto lg:max-w-7xl">
        <Hero />
        <Services />
        <BrandsTicker />
        <CaseStudies />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
