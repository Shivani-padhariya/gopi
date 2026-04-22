// "use client"

import { motion } from "framer-motion"
import { Calendar, User, ArrowRight, Settings } from "lucide-react"
import Link from "@/components/ui/link"
import Image from "@/components/ui/image"

const blogPosts = [
  {
    id: 1,
    title: "How to Keep Your Hydraulic Press Operating at Peak Performance",
    excerpt: "A hydraulic press is a powerhouse, but because it deals with immense pressure, it requires respect and regular maintenance...",
    image: "/images/blog-1.jpg",
    author: "Gopi Machine Tools",
    date: "April 8, 2026",
    category: "Blog",
  },
  {
    id: 2,
    title: "5 Essential Tasks You Can Master with a Hydraulic Shop Press",
    excerpt: "If you're a DIY mechanic or a metalworking enthusiast, there comes a point where a hammer and a prayer just won't cut it anymore...",
    image: "/images/blog-2.jpg",
    author: "Gopi Machine Tools",
    date: "April 8, 2026",
    category: "Blog",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-sm text-[#c8102e] font-semibold uppercase tracking-wider mb-4">
            <Settings size={16} />
            Latest News
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Latest News & Blog
          </h2>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white shadow-lg overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1 bg-[#c8102e] text-white text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-2">
                    <User size={14} />
                    By {post.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#c8102e] transition-colors">
                  <Link href="#">{post.title}</Link>
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-[#c8102e] font-semibold hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

