import { useEffect } from 'react'
import { Header } from '@/components/sections/shared/Header'
import { HeroSection } from '@/components/sections/landing/resident/HeroSection'
import { AboutSection } from '@/components/sections/landing/resident/AboutSection'
import { BenefitsResident } from '@/components/sections/landing/resident/BenefitsResident'
import { HowItWorks } from '@/components/sections/landing/resident/HowItWorks'
import { FAQ } from '@/components/sections/landing/resident/FAQ'
import { CTASection } from '@/components/sections/landing/resident/CTASection'
import { Footer } from '@/components/sections/shared/Footer'

interface LandingPageResidentProps {
  onRoleChange?: (role: 'resident' | 'worker') => void
}

export function LandingPageResident({ onRoleChange }: LandingPageResidentProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="w-full bg-[#EEEEEE] text-[#1F1F1F]">
      <Header currentRole="resident" onRoleChange={onRoleChange} />
      <HeroSection onRoleChange={onRoleChange} />
      <AboutSection />
      <BenefitsResident />
      <HowItWorks />
      <FAQ />
      <CTASection />
      <Footer onRoleChange={onRoleChange} />
    </div>
  )
}
