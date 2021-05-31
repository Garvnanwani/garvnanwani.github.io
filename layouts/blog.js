import Container from '@/components/Container'
import ViewCounter from '@/components/ViewCounter'
import { format, parseISO } from 'date-fns'
import Image from 'next/image'

const editUrl = (slug) =>
  `https://github.com/garvnanwani/garvnanwani.github.io/edit/main/data/blog/${slug}.mdx`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://garvnanwani/blog/${slug}`
  )}`

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Container
      title={`${frontMatter.title} – Garv nanwani`}
      description={frontMatter.summary}
      image={`https://garvnanwani.github.io${frontMatter.image}`}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full mx-auto mt-5 text-gray-800 md:mt-15 md:mb-20 md:max-w-5xl">
        <div className="w-10 h-1 mb-5 bg-secondary"></div>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt="Garv nanwani"
              height={24}
              width={24}
              src="/mypic.jpg"
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {frontMatter.by}
              {'Garv nanwani / '}
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-500 min-w-32 md:mt-0">
            {frontMatter.readingTime.text}
            {` • `}
            <ViewCounter slug={frontMatter.slug} />
          </p>
        </div>
        <div className="w-full mt-3 prose dark:prose-dark max-w-none">
          {children}
        </div>
      </article>
    </Container>
  )
}
