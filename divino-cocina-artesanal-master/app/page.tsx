import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import MenuReservations from '@/components/sections/MenuReservations'
import Location from '@/components/sections/Location'
import Gallery from '@/components/sections/Gallery'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuReservations />
        <Gallery />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
