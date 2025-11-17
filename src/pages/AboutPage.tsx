import { useEffect } from 'react'
import { Footer } from '@/components/sections/shared/Footer'
import { Header } from '@/components/sections/shared/Header'
import { AboutHero } from '@/components/sections/about/AboutHero'
import { AboutStory } from '@/components/sections/about/AboutStory'
import { AboutValues } from '@/components/sections/about/AboutValues'
import { AboutCTA } from '@/components/sections/about/AboutCTA'

interface AboutPageProps {
  onNavigate?: (page: 'login' | 'register' | 'landing' | 'about' | 'contact') => void
  onRoleChange?: (role: 'resident' | 'worker') => void
  currentRole?: 'resident' | 'worker'
}

export function AboutPage({ onNavigate, onRoleChange, currentRole = 'resident' }: AboutPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#EEEEEE]">
      <Header currentRole={currentRole} onRoleChange={onRoleChange || (() => {})} onNavigate={onNavigate} />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutCTA onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </div>
  )
}
