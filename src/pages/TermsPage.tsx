import { useEffect } from 'react'
import { Footer } from '@/components/sections/shared/Footer'
import { Header } from '@/components/sections/shared/Header'
import { TermsHero } from '@/components/sections/landing/resident/TermsHero'
import { TermsContent } from '@/components/sections/landing/resident/TermsContent'

interface TermsPageProps {
  onRoleChange?: (role: 'resident' | 'worker') => void
  currentRole?: 'resident' | 'worker'
}

export function TermsPage({ onRoleChange, currentRole = 'resident' }: TermsPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#EEEEEE]">
      <Header currentRole={currentRole} onRoleChange={onRoleChange || (() => {})} />
      <TermsHero />
      <TermsContent />
      <Footer onRoleChange={onRoleChange} />
    </div>
  )
}
