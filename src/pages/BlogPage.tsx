import { useEffect } from 'react'
import { Footer } from '@/components/sections/shared/Footer'
import { Header } from '@/components/sections/shared/Header'
import { BlogHero } from '@/components/sections/blog/BlogHero'
import { BlogList } from '@/components/sections/blog/BlogList'

interface BlogPageProps {
  onNavigate?: (page: 'login' | 'register' | 'landing' | 'about' | 'contact' | 'terms' | 'privacy' | 'blog') => void
  onRoleChange?: (role: 'resident' | 'worker') => void
  onBlogSelect?: (blogId: number) => void
  currentRole?: 'resident' | 'worker'
}

export function BlogPage({ onNavigate, onRoleChange, onBlogSelect, currentRole = 'resident' }: BlogPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#EEEEEE]">
      <Header currentRole={currentRole} onRoleChange={onRoleChange || (() => {})} onNavigate={onNavigate} />
      <BlogHero />
      <BlogList onNavigate={onNavigate} onBlogSelect={onBlogSelect} />
      <Footer onNavigate={onNavigate} onRoleChange={onRoleChange} />
    </div>
  )
}
