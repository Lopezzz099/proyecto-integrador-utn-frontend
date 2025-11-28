import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { blogPosts } from '@/data/blogData'

export function BlogList() {
  const navigate = useNavigate()
  return (
    <section className="py-20 px-4 bg-[#EEEEEE]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div 
                onClick={() => navigate(`/blog/${post.id}`)}
                className="w-full h-48 bg-gray-300 overflow-hidden cursor-pointer"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <div className="mb-3">
                  <span className="inline-block bg-[#DBA668] text-[#1F1F1F] px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 
                  onClick={() => navigate(`/blog/${post.id}`)}
                  className="text-xl font-bold text-[#1F1F1F] mb-3 line-clamp-2 hover:text-[#DBA668] cursor-pointer transition-colors"
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-700 mb-4 line-clamp-2 text-sm">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pb-4 border-b border-gray-200">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                </div>

                {/* Read More Button */}
                <Button
                  onClick={() => navigate(`/blog/${post.id}`)}
                  className="w-full bg-[#1F1F1F] hover:bg-[#DBA668] text-[#EEEEEE] hover:text-[#1F1F1F] font-bold py-2"
                >
                  Leer más
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-16 text-center">
          <Button
            onClick={() => navigate('/contact')}
            className="bg-[#DBA668] hover:bg-[#c89555] text-[#1F1F1F] font-bold px-12 py-3 text-lg"
          >
            ¿Tienes una historia para compartir?
          </Button>
        </div>
      </div>
    </section>
  )
}
