import { Header } from '@/components/sections/Header'
import { HeroSectionWorker } from '@/components/sections/HeroSectionWorker'
import { AboutSectionWorker } from '@/components/sections/AboutSectionWorker'
import { FeaturesWorker } from '@/components/sections/FeaturesWorker'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { FAQWorker } from '@/components/sections/FAQWorker'
import { CTASectionWorker } from '@/components/sections/CTASectionWorker'
import { Footer } from '@/components/sections/Footer'

interface LandingPageWorkerProps {
  onRoleChange: (role: 'resident' | 'worker') => void
  onNavigate?: (page: 'login' | 'register') => void
}

export function LandingPageWorker({ onRoleChange, onNavigate }: LandingPageWorkerProps) {
  return (
    <div className="w-full bg-[#EEEEEE] text-[#1F1F1F]">
      <Header currentRole="worker" onRoleChange={onRoleChange} onNavigate={onNavigate} />
      <HeroSectionWorker onNavigate={onNavigate} onRoleChange={onRoleChange} />
      <AboutSectionWorker />
      <FeaturesWorker />
      <HowItWorks />
      <FAQWorker />
      <CTASectionWorker />
      <Footer />
    </div>
  )
}
