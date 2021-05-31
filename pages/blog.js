import BlogPost from '@/components/BlogPost'
import Container from '@/components/Container'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { useState } from 'react'

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    )

  return (
    <Container
      title="Blog - Garv nanwani"
      description="Thoughts on the software industry, programming, tech, and my personal life."
    >
      <div className="flex flex-col items-start justify-center w-full mx-auto mt-5 text-gray-800 md:mt-15 md:mb-20 md:max-w-5xl">
        <div className="w-10 h-1 mb-5 bg-secondary"></div>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Blog
        </h1>
        <div className="mb-4 text-gray-600 dark:text-gray-400">
          <p className="mb-3">
            {`Here you can find all my blogs that I have written since 2020, mostly about web development, blockchain, crypto and life.
              In total, I've written ${posts.length} articles on this site.`}
          </p>
          <p>Use the search below to filter them by title.</p>
        </div>
        <div className="relative w-full mb-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {!searchValue && (
          <>
            <h3 className="mt-8 mb-4 text-xl font-bold tracking-tight text-black md:text-3xl dark:text-white">
              Most Popular
            </h3>
            <BlogPost
              title="First Blog Post"
              summary="This is my first blog post ever"
              slug="first-blog-post"
            />
          </>
        )}
        <h3 className="mt-8 mb-4 text-xl font-bold tracking-tight text-black md:text-3xl dark:text-white">
          All Posts
        </h3>
        {!filteredBlogPosts.length && (
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            No posts found.
          </p>
        )}
        {filteredBlogPosts.map((frontMatter) => (
          <BlogPost key={frontMatter.title} {...frontMatter} />
        ))}
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}
