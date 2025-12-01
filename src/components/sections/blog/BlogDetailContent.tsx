import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'

interface BlogDetailContentProps {
  content: string
}

export function BlogDetailContent({ content }: BlogDetailContentProps) {
  const navigate = useNavigate()

  return (
    <section className="py-20 px-4 bg-[#EEEEEE]">
      <div className="max-w-4xl mx-auto">
        {}
        <article className="bg-white rounded-lg shadow-md p-8 md:p-12 mb-12">
          <div 
            className="prose prose-lg max-w-none
              prose-headings:text-[#1F1F1F] prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-[#1F1F1F]
              prose-a:text-[#DBA668] prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </article>

        {}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-[#1F1F1F] mb-4">¿Te gustó este artículo?</h3>
          <p className="text-gray-700 mb-6">
            Comparte tu experiencia o envíanos tu propio artículo para el blog.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => navigate('/contact')}
              className="bg-[#DBA668] hover:bg-[#c89555] text-[#1F1F1F] font-bold px-8 py-3 text-lg"
            >
              Enviar mi artículo
            </Button>
            <Button
              onClick={() => navigate('/blog')}
              className="bg-gray-300 hover:bg-gray-400 text-[#1F1F1F] font-bold px-8 py-3 text-lg"
            >
              Ver más artículos
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
