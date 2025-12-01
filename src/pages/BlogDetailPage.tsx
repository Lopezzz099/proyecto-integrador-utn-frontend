import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Footer } from '@/components/sections/shared/Footer'
import { Header } from '@/components/sections/shared/Header'
import { BlogDetailHero } from '@/components/sections/blog/BlogDetailHero'
import { BlogDetailContent } from '@/components/sections/blog/BlogDetailContent'
import { getBlogPostById } from '@/data/blogData'

interface BlogDetailPageProps {
  onRoleChange?: (role: 'resident' | 'worker') => void
  currentRole?: 'resident' | 'worker'
}

export function BlogDetailPage({ onRoleChange, currentRole = 'resident' }: BlogDetailPageProps) {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const blogId = id ? parseInt(id) : null
  const blogPost = blogId ? getBlogPostById(blogId) : null

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [blogId])

  
  useEffect(() => {
    if (!blogPost) {
      navigate('/blog')
    }
  }, [blogPost, navigate])

  if (!blogPost) {
    return (
      <div className="min-h-screen bg-[#EEEEEE] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1F1F1F] mb-4">Artículo no encontrado</h1>
          <p className="text-gray-600 mb-8">El artículo que buscas no existe</p>
          <button
            onClick={() => navigate('/blog')}
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
      <Header currentRole={currentRole} onRoleChange={onRoleChange || (() => {})} />
      <BlogDetailHero 
        title={blogPost.title}
        category={blogPost.category}
        date={blogPost.date}
        author={blogPost.author}
      />
      <BlogDetailContent 
        content={blogPost.content || '<p>Contenido no disponible</p>'}
      />
      <Footer onRoleChange={onRoleChange} />
    </div>
  )
}
