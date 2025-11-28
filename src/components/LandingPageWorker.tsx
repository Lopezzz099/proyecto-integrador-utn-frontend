import { useEffect } from 'react'
import { Header } from '@/components/sections/shared/Header'
import { HeroSectionWorker } from '@/components/sections/landing/worker/HeroSectionWorker'
import { AboutSectionWorker } from '@/components/sections/landing/worker/AboutSectionWorker'
import { FeaturesWorker } from '@/components/sections/landing/worker/FeaturesWorker'
import { HowItWorks } from '@/components/sections/landing/resident/HowItWorks'
import { FAQWorker } from '@/components/sections/landing/worker/FAQWorker'
import { CTASectionWorker } from '@/components/sections/landing/worker/CTASectionWorker'
import { Footer } from '@/components/sections/shared/Footer'

interface LandingPageWorkerProps {
  onRoleChange?: (role: 'resident' | 'worker') => void
  onNavigate?: (page: 'login' | 'register' | 'about' | 'landing' | 'contact' | 'terms' | 'privacy' | 'blog') => void
}

export function LandingPageWorker({ onRoleChange, onNavigate }: LandingPageWorkerProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="w-full bg-[#EEEEEE] text-[#1F1F1F]">
      <Header currentRole="worker" onRoleChange={onRoleChange} onNavigate={onNavigate} />
      <HeroSectionWorker onNavigate={onNavigate} onRoleChange={onRoleChange} />
      <AboutSectionWorker />
      <FeaturesWorker />
      <HowItWorks />
      <FAQWorker />
      <CTASectionWorker onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} onRoleChange={onRoleChange} />
    </div>
  )
}
