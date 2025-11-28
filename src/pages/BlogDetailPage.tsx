import { useEffect } from 'react'
import { Footer } from '@/components/sections/shared/Footer'
import { Header } from '@/components/sections/shared/Header'
import { BlogDetailHero } from '@/components/sections/blog/BlogDetailHero'
import { BlogDetailContent } from '@/components/sections/blog/BlogDetailContent'
import { getBlogPostById } from '@/data/blogData'

interface BlogDetailPageProps {
  blogId: number
  onNavigate?: (page: 'login' | 'register' | 'landing' | 'about' | 'contact' | 'terms' | 'privacy' | 'blog') => void
  onRoleChange?: (role: 'resident' | 'worker') => void
  currentRole?: 'resident' | 'worker'
}

export function BlogDetailPage({ blogId, onNavigate, onRoleChange, currentRole = 'resident' }: BlogDetailPageProps) {
  const blogPost = getBlogPostById(blogId)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [blogId])

  // Si no se encuentra el artículo, redirigir al blog
  if (!blogPost) {
    useEffect(() => {
      onNavigate?.('blog')
    }, [])
    
    return (
      <div className="min-h-screen bg-[#EEEEEE] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1F1F1F] mb-4">Artículo no encontrado</h1>
          <p className="text-gray-600 mb-8">El artículo que buscas no existe</p>
          <button
            onClick={() => onNavigate?.('blog')}
            className="bg-[#DBA668] hover:bg-[#c89555] text-[#1F1F1F] font-bold px-6 py-3 rounded-lg"
          >
            Volver al Blog
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#EEEEEE]">
      <Header currentRole={currentRole} onRoleChange={onRoleChange || (() => {})} onNavigate={onNavigate} />
      <BlogDetailHero 
        title={blogPost.title}
        category={blogPost.category}
        date={blogPost.date}
        author={blogPost.author}
      />
      <BlogDetailContent 
        content={blogPost.content || '<p>Contenido no disponible</p>'}
        onNavigate={onNavigate}
      />
      <Footer onNavigate={onNavigate} onRoleChange={onRoleChange} />
    </div>
  )
}
