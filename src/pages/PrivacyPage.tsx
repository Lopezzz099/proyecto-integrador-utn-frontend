import { useEffect } from 'react'
import { Footer } from '@/components/sections/shared/Footer'
import { Header } from '@/components/sections/shared/Header'
import { PrivacyHero } from '@/components/sections/landing/resident/PrivacyHero'
import { PrivacyContent } from '@/components/sections/landing/resident/PrivacyContent'

interface PrivacyPageProps {
  onRoleChange?: (role: 'resident' | 'worker') => void
  currentRole?: 'resident' | 'worker'
}

export function PrivacyPage({ onRoleChange, currentRole = 'resident' }: PrivacyPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#EEEEEE]">
      <Header currentRole={currentRole} onRoleChange={onRoleChange || (() => {})} />
      <PrivacyHero />
      <PrivacyContent />
      <Footer onRoleChange={onRoleChange} />
    </div>
  )
}
