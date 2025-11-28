import { useEffect } from 'react'
import { Footer } from '@/components/sections/shared/Footer'
import { Header } from '@/components/sections/shared/Header'
import { ContactHero } from '@/components/sections/contact/ContactHero'
import { ContactIntro } from '@/components/sections/contact/ContactIntro'
import { ContactForm } from '@/components/sections/contact/ContactForm'
import { ContactInfo } from '@/components/sections/contact/ContactInfo'

interface ContactPageProps {
  onRoleChange?: (role: 'resident' | 'worker') => void
  currentRole?: 'resident' | 'worker'
}

export function ContactPage({ onRoleChange, currentRole = 'resident' }: ContactPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#EEEEEE]">
      <Header currentRole={currentRole} onRoleChange={onRoleChange || (() => {})} />
      <ContactHero />
      <ContactIntro />
      <ContactForm />
      <div className="max-w-2xl mx-auto px-4 pb-12">
        <ContactInfo />
      </div>
      <Footer onRoleChange={onRoleChange} />
    </div>
  )
}
