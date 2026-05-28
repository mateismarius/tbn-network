import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Services from '../components/Services'
import Technology from '../components/Technology'
import WhyTBN from '../components/WhyTBN'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Technology />
      <WhyTBN />
      <CTA />
      <Footer />
    </main>
  )
}
