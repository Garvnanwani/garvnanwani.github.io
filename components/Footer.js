import Link from 'next/link'
import NowPlaying from './NowPlaying'

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 transition hover:text-gray-600"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
)

export default function Footer() {
  return (
    <footer className="flex flex-col items-start justify-center w-full max-w-6xl mx-auto">
      <hr className="w-full mb-8 border-gray-400 border-1 dark:border-gray-800" />
      <NowPlaying />
      <div className="grid w-full max-w-6xl grid-cols-3 gap-4 pb-16 mx-auto text-center">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 transition hover:text-gray-600">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-500 transition hover:text-gray-600">
              About
            </a>
          </Link>
          <Link href="/blog">
            <a className="text-gray-500 transition hover:text-gray-600">Blog</a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/garvnanwani">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/garvnanwani">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://linkedin.com/in/garvnanwani">
            Linkedin
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/uses">
            <a className="text-gray-500 transition hover:text-gray-600">Uses</a>
          </Link>
        </div>
      </div>
    </footer>
  )
}
