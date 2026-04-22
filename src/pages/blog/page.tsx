// "use client"

import { motion } from "framer-motion"
import Image from "@/components/ui/image"
import Link from "@/components/ui/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageBanner } from "@/components/page-banner"

import { Calendar, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "How To Keep Your Hydraulic Press Operating At Peak Performance",
    excerpt: "A hydraulic press is a powerhouse, but because it deals with immense pressure, it requires respect and regular maintenance. A neglected press isn't just inefficient—it",
    date: "April 8, 2026",
    image: "/images/blog-1.jpg",
    slug: "how-to-keep-your-hydraulic-press-operating-at-peak-performance"
  },
  {
    id: 2,
    title: "5 Essential Tasks You Can Master With A Hydraulic Shop Press",
    excerpt: "Discover the versatility of hydraulic shop press machines and learn about the essential tasks they can handle efficiently in your workshop.",
    date: "April 8, 2026",
    image: "/images/blog-2.jpg",
    slug: "5-essential-tasks-you-can-master-with-a-hydraulic-shop-press"
  },
  {
    id: 3,
    title: "Understanding Roll Forming Technology",
    excerpt: "Roll forming is a continuous bending operation where a long strip of sheet metal passes through sets of rolls mounted on consecutive stands.",
    date: "April 5, 2026",
    image: "/images/product-2.jpg",
    slug: "understanding-roll-forming-technology"
  },
  {
    id: 4,
    title: "The Future of Industrial Automation",
    excerpt: "Explore how automation is transforming the manufacturing industry and what it means for businesses looking to stay competitive.",
    date: "April 3, 2026",
    image: "/images/product-4.jpg",
    slug: "the-future-of-industrial-automation"
  },
]

const featuredPost = blogPosts[0]
const otherPosts = blogPosts.slice(1)

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <PageBanner title="BLOG" breadcrumb="Blog" />

      {/* Blog Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content - Featured + Posts */}
            <div className="lg:col-span-2 space-y-12">
              {/* Featured Post with Large Images */}
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Main Featured Image */}
                <div className="relative h-80 md:h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Secondary Images */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/images/blog-2.jpg"
                      alt="Blog image"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-yellow-500 rounded-full p-2">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/images/product-3.jpg"
                      alt="Blog image"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-yellow-500 rounded-full p-2">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Post Meta */}
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Calendar size={14} />
                  <span>{featuredPost.date}</span>
                </div>

                {/* Post Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {featuredPost.title}
                </h2>

                {/* Post Excerpt */}
                <p className="text-gray-600 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                {/* Read More Button */}
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#c8102e] text-white font-medium hover:bg-[#a00d24] transition-colors"
                >
                  READ MORE
                  <ArrowRight size={16} />
                </Link>
              </motion.article>

              {/* More Posts */}
              {otherPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-t border-gray-200 pt-8"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-yellow-500 rounded-full p-2">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#c8102e] transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-[#c8102e] font-medium hover:gap-3 transition-all"
                      >
                        Read More
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="sticky top-32 space-y-8"
              >
                {/* Search */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Search</h4>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c8102e]/20 focus:border-[#c8102e]"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#c8102e]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Categories</h4>
                  <ul className="space-y-3">
                    {["Industrial Machinery", "Maintenance Tips", "Technology", "Company News"].map((category) => (
                      <li key={category}>
                        <Link 
                          href="#" 
                          className="flex items-center gap-2 text-gray-600 hover:text-[#c8102e] transition-colors"
                        >
                          <ArrowRight size={14} />
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recent Posts */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Recent Posts</h4>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <div key={post.id} className="flex gap-3">
                        <div className="relative w-20 h-16 rounded overflow-hidden shrink-0">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h5 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-[#c8102e] transition-colors">
                            <Link href={`/blog/${post.slug}`}>
                              {post.title}
                            </Link>
                          </h5>
                          <span className="text-xs text-gray-500">{post.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

     
      <Footer />
    </main>
  )
}

