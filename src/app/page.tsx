import Hero from '@/components/hero/Hero'
import Certifications from '@/components/certifications/Certifications'
 import Events from '@/components/events/Events'
 import Manufacturing from '@/components/manufacturing/Manufacturing'
import Features from '@/components/features/Features'
import Products from '@/components/products/Products'

export default function HomePage() {
  return (  
    <main className="min-h-screen">
     
      <Hero />
      <Certifications />
      <Events />
      <Manufacturing />
      <Features />
      <Products />
      
    </main>
  )
}
