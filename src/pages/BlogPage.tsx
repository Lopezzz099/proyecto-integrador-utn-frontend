import { useEffect } from 'react'
import { Footer } from '@/components/sections/shared/Footer'
import { Header } from '@/components/sections/shared/Header'
import { BlogHero } from '@/components/sections/blog/BlogHero'
import { BlogList } from '@/components/sections/blog/BlogList'

interface BlogPageProps {
  onRoleChange?: (role: 'resident' | 'worker') => void
  currentRole?: 'resident' | 'worker'
}

export function BlogPage({ onRoleChange, currentRole = 'resident' }: BlogPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#EEEEEE]">
      <Header currentRole={currentRole} onRoleChange={onRoleChange || (() => {})} />
      <BlogHero />
      <BlogList />
      <Footer onRoleChange={onRoleChange} />
    </div>
  )
}
