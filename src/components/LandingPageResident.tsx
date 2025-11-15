import { Header } from '@/components/sections/Header'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { BenefitsResident } from '@/components/sections/BenefitsResident'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { FAQ } from '@/components/sections/FAQ'
import { CTASection } from '@/components/sections/CTASection'
import { Footer } from '@/components/sections/Footer'

interface LandingPageResidentProps {
  onRoleChange: (role: 'resident' | 'worker') => void
  onNavigate?: (page: 'login' | 'register') => void
}

export function LandingPageResident({ onRoleChange, onNavigate }: LandingPageResidentProps) {
  return (
    <div className="w-full bg-[#EEEEEE] text-[#1F1F1F]">
      <Header currentRole="resident" onRoleChange={onRoleChange} onNavigate={onNavigate} />
      <HeroSection onNavigate={onNavigate} onRoleChange={onRoleChange} />
      <AboutSection />
      <BenefitsResident />
      <HowItWorks />
      <FAQ />
      <CTASection onNavigate={onNavigate} />
      <Footer />
    </div>
  )
}
