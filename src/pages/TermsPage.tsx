import { useEffect } from 'react'
import { Footer } from '@/components/sections/shared/Footer'
import { Header } from '@/components/sections/shared/Header'
import { TermsHero } from '@/components/sections/landing/resident/TermsHero'
import { TermsContent } from '@/components/sections/landing/resident/TermsContent'

interface TermsPageProps {
  onNavigate?: (page: 'login' | 'register' | 'landing' | 'about' | 'contact' | 'terms' | 'privacy' | 'blog') => void
  onRoleChange?: (role: 'resident' | 'worker') => void
  currentRole?: 'resident' | 'worker'
}

export function TermsPage({ onNavigate, onRoleChange, currentRole = 'resident' }: TermsPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#EEEEEE]">
      <Header currentRole={currentRole} onRoleChange={onRoleChange || (() => {})} onNavigate={onNavigate} />
      <TermsHero />
      <TermsContent onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} onRoleChange={onRoleChange} />
    </div>
  )
}
