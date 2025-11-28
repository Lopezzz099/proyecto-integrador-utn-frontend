interface BlogDetailHeroProps {
  title: string
  date: string
  author: string
  category: string
}

export function BlogDetailHero({ title, date, author, category }: BlogDetailHeroProps) {
  return (
    <section className="bg-gradient-to-r from-[#DBA668] to-[#1F1F1F] text-[#EEEEEE] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <span className="inline-block bg-[#EEEEEE] text-[#1F1F1F] px-4 py-2 rounded-full text-sm font-bold">
            {category}
          </span>
        </div>
        <h1 className="text-5xl font-bold mb-6">{title}</h1>
        <div className="flex items-center gap-6 text-lg opacity-90">
          <span>Por {author}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
      </div>
    </section>
  )
}
